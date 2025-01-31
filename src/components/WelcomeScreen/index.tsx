import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import ZaheenLogo from '../../assets/zaheen_logo.png';
import Avatar from '../../assets/Avatar.gif'





export const WelcomeScreen = ({ onStart, loading }: { onStart: () => void, loading: boolean }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 p-10 text-center'>
      {showPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md'>
            {/* Centered Heading */}
            <h2 className='text-2xl font-bold mb-4 text-center'>Welcome!</h2>

            {/* Left-aligned Instructions */}
            <div className='text-left'>
              <p className='mb-2 font-semibold'>Before you start:</p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Put on headphones.</li>
                <li>Stay in front of the camera so VIRA can see you.</li>
                <li>
                  Understand the context: A guest at Pixel has arrived and was neither greeted by the staff nor escorted to his designated meeting room. You will act as a member of the staff. Your objective is to try and diffuse the
                  situation within 60secs.
                </li>
                <li>Your video and audio data will be processed so you can get tailored feedback on your response.</li>
              </ul>
            </div>

            {/* Centered Button */}
            <div className='mt-6 text-center'>
              <Button onClick={() => setShowPopup(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Text and Start Button */}
      
      <h2 className='text-4xl font-bold'>Virtual Intelligent Responsive Avatar</h2>
      <img src={Avatar} alt='Welcome GIF' className='my-10 mx-auto' />
      <Button onClick={onStart}>{loading ? 'Loading...' : 'Start Conversation'}</Button>
      <h1 className='text-sm text-gray-500'>Powered by </h1>
      <img src={ZaheenLogo} alt="Zaheen Systems Logo" className="w-16  mx-auto" />

    </div>
  );
};
