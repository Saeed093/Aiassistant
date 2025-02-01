import { useEffect, useState } from 'react';
import { useDaily } from '@daily-co/daily-react';
import { IConversation } from '@/types';
import { CameraSettings } from '../CameraSettings';
import { Call } from '../Call';
import { toast } from 'react-toastify'; // Import React-Toastify

export const CallScreen = ({ conversation, handleEnd }: { conversation: IConversation, handleEnd: () => void }) => {
  const daily = useDaily();
  const [timeLeft, setTimeLeft] = useState<number>(125); // Start countdown from 60 seconds

  useEffect(() => {
    if (conversation && daily) {
      const { conversation_url } = conversation;
      daily.join({ url: conversation_url });
    }

    // Start countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 10) {
          // Show warning toast at 10 seconds
          toast.warn('⚠️ 10 seconds remaining in the call! Wrap up your discussion.', {
            position: 'top-center',
            className: 'toast-warning',
          });
        }

        if (prev <= 1) {
          clearInterval(timer); // Stop the timer at 0
          handleEnd(); // End the call
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [daily, conversation, handleEnd]);

  const handleLeave = async () => {
    await daily?.leave();
    handleEnd();
  };

  return (
    <div className="relative h-screen">
      {/* Timer positioned in the top-right corner */}
      <div className="fixed top-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold">
        ⏳ Time Left: {timeLeft} sec
      </div>

      <Call />
      <CameraSettings actionLabel="Leave Call" onAction={handleLeave} />
    </div>
  );
};
