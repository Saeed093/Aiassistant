import { useState } from 'react';
import { DailyAudio, useParticipantIds} from '@daily-co/daily-react';
//import { Minimize, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Video } from '../Video';
//import { Button } from '../ui/button';
import ZaheenLogo from '../../assets/zaheen_logo.png';

export const Call = () => {
  const remoteParticipantIds = useParticipantIds({ filter: 'remote' });
  //const localSessionId = useLocalSessionId();
  const [mode] = useState<'full' | 'minimal'>('full');


  
  return <>
    <div className={cn("flex items-center justify-center", {
      'fixed bottom-20 right-20': mode === 'minimal',
    })}>
      <div className='relative'>
        <h1 className='text-4xl font-bold mb-7 mt-10'>GEM</h1>
      <h1 className='text-4xl font-bold mb-12 mt-10'>Virtual Intelligent Responsive Avatar</h1>
        {
          remoteParticipantIds.length > 0 ?
            <Video
              id={remoteParticipantIds[0]}
              className={
                cn({
                  'max-h-[50vh] min-h-[20rem]': mode === 'full',
                  'max-h-[15rem]': mode === 'minimal',
                })
              }
            /> :
            <div className='relative flex items-center justify-center h-[50vh] w-full'>
              <p className='text-2xl text-black text-center'>Session Starting..</p>
            </div>
          
        
        }
          <h1 className='text-sm text-gray-500'>Powered by </h1>
          <img src={ZaheenLogo} alt="Zaheen Systems Logo" className="w-16  mx-auto" />
        
      </div>
    </div>
    <DailyAudio />
  </>
}