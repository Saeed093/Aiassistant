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
        persona_id: 'pd5034779b18', 
        replica_id: 'ref226fe7e',
        callback_url: "https://eokhug16bhdqrzm.m.pipedream.net",
        conversation_name: "Angry Visitor Training Conversation",
        custom_greeting: "I can't believe I spent my time and money coming here today, only to feel unwelcome and lost, with no one around to help! This is absolutely unacceptable.",
       
        
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