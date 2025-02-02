import { TAVUS_API_KEY } from '@/config';
import { IConversation } from '@/types';

export const createConversation = async (): Promise<IConversation> => {
  try {
    const response = await fetch('https://tavusapi.com/v2/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': TAVUS_API_KEY,
      },
      body: JSON.stringify({
        persona_id: 'p247e2900cbb', 
        replica_id: 'ref226fe7e',
        callback_url: "https://eokhug16bhdqrzm.m.pipedream.net",
        conversation_name: "AI Assistant",
        custom_greeting: "Hi i am gem how can i help you today?",
       
        
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//persona demo :p9a95912
  // properties: { "max_call_duration": 65, }
  //updatedcode
  //latest code
  