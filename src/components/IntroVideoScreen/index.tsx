import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button"; // Import Button component
import ZaheenLogo from '../../assets/zaheen_logo.png';

const IntroVideoScreen = ({ handleJoin }: { handleJoin: () => void }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    console.log("IntroVideoScreen is rendering!");

    // Ensure the video plays when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay prevented. User interaction may be needed:", error);
      });
    }
  }, []);

  // Function to transition when the video ends
  const handleVideoEnd = () => {
    console.log("Video finished! Moving to next screen...");
    handleJoin(); // Move to next screen
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-black p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        Virtual Intelligent Responsive Avatar
      </h1>

      {/* Video Container */}
      <div className="w-full max-w-2xl bg-black p-2 rounded-lg shadow-lg">
        <video
          ref={videoRef}
          src="/intro_video.mp4"
          className="w-full h-auto rounded-lg"
          onEnded={handleVideoEnd}
          autoPlay
          playsInline
        />
      </div>

      {/* Button */}
      <Button
        onClick={handleJoin}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg text-lg"
      >
        Start Conversation
      </Button>

      {/* Powered By Section */}
      <div className="mt-10 text-center">
        <p className="text-gray-500">Powered by</p>
        <div className="mt-2">
        <img src={ZaheenLogo} alt="Zaheen Systems Logo" className="w-16  mx-auto" />

        </div>
      </div>
    </div>
  );
};

export default IntroVideoScreen;
