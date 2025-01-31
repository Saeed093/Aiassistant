import { DailyProvider } from "@daily-co/daily-react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { HairCheckScreen } from "@/components/HairCheckScreen";
import IntroVideoScreen from "@/components/IntroVideoScreen";
import OutroVideoScreen from "@/components/OutroVideoScreen";
import Results from "@/components/Results";
import { CallScreen } from "@/components/CallScreen";
import { createConversation, endConversation } from "@/api";
import { IConversation } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

function App() {
  const { toast } = useToast();
  const [screen, setScreen] = useState<"welcome" | "hairCheck" | "introVideo" | "call" | "outroVideo" | "results">("welcome");
  const [conversation, setConversation] = useState<IConversation | null>(null);
  const [loading, setLoading] = useState(false);
  const [callDuration] = useState<number>(65); // 60 sec timer

  useEffect(() => {
    return () => {
      if (conversation) {
        void endConversation(conversation.conversation_id);
      }
    };
  }, [conversation]);

  // Timer effect for call duration
  useEffect(() => {
    if (screen === "call") {
      const timer = setTimeout(() => {
        handleEnd(); // Auto-end call after 60 sec
      }, callDuration * 1000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [screen, callDuration]);

  const handleStart = async () => {
    try {
      setLoading(true);
      const conversation = await createConversation();
      setConversation(conversation);
      setScreen("hairCheck");
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Check console for details",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEnd = async () => {
    try {
      if (!conversation) return;
      await endConversation(conversation.conversation_id);
    } catch (error) {
      console.error(error);
    } finally {
      setConversation(null);
      setScreen("outroVideo"); // Move to outro screen
    }
  };

  const handleProceedToVideo = () => {
    setScreen("introVideo");
  };

  const handleJoin = () => {
    setScreen("call");
  };

  const handleExit = () => {
    setScreen("results");
  };

  const handleRetry = () => {
    setScreen("welcome");
  };

  return (
    <main>
      <DailyProvider>
        {screen === "welcome" && <WelcomeScreen onStart={handleStart} loading={loading} />}
        {screen === "hairCheck" && <HairCheckScreen handleEnd={handleEnd} handleJoin={handleProceedToVideo} />}
        {screen === "introVideo" && <IntroVideoScreen handleJoin={handleJoin} />}
        {screen === "call" && conversation && <CallScreen conversation={conversation} handleEnd={handleEnd} />}
        {screen === "outroVideo" && <OutroVideoScreen handleExit={handleExit} />}
        {screen === "results" && <Results onRetry={handleRetry} />}
      </DailyProvider>
    </main>
  );
}

export default App;
