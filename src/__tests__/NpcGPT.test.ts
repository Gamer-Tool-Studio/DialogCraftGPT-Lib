import { CharacterType } from 'src/types';
import NpcGPT, { CreateChatInput } from '../lib/NpcGPT';

// Define a test API key
const apiKey = process.env.API_TEST_KEY as string;

const characterContext: CharacterType = {
  name: 'John Doe',
  age: 30,
  personalityTraits: 'friendly and outgoing',
  backgroundStory: 'A character with an interesting backstory.',
  eventsKnowledge: 'Experienced player',
  interests: '',
  friendliness: 'low',
  maxOutputWords: 100,
  environment: 'RPG Game',
  dialogueStyle: 'casual',
};
// Create an instance of NpcGPT for testing
const api = new NpcGPT({ apiKey });

describe('NpcGPT', () => {
  it('send message without chat history', async () => {
    const userInput = 'Hello, GPT! I\'m just sending a message without chat history';
    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput,
      characterContext,
    };

    const { response, chatHistory } = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response.content).toBe(userInput);
    expect(chatHistory.length).toBe(3);
  });

  it('dont send chat history and character context', async () => {
    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput: 'Hello, GPT! I am not sending chat history and character context',
    };

    const response = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response).toBe('An error occurred: A characterContext object is required');
  });
});
