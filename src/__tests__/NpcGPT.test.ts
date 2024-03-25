// import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
import { CharacterType } from 'src/types';
import NpcGPT, { CreateChatInput } from '../lib/NpcGPT';

// Mock Axios instance for testing
// const mockAxios = new AxiosMockAdapter(axios);

// Define a test API key
const apiKey = process.env.API_TEST_KEY as string;

const characterContext: CharacterType = {
  name: 'John Doe',
  age: 30,
  personalityTraits: 'friendly and outgoing',
  'background story': 'A character with an interesting backstory.',
  'game knowledge': 'Experienced player',
  interests: '',
  friendliness: 'low',
  maxOutputWords: 100,
  environment: 'RPG Game',
  dialogueStyle: 'casual',
};
// Create an instance of NpcGPT for testing
const api = new NpcGPT({ apiKey });

describe('NpcGPT', () => {
  beforeEach(() => {
    // mockAxios.reset(); // Reset Axios mock before each test
    // logError.mockClear(); // Clear the logError mock
  });

  it('send message without chat history', async () => {
    // const mockResponse = { data: 'Response data' };

    // Mock Axios to respond with a successful response
    // mockAxios.onPost('/api/v1/sendMessage').reply(200, mockResponse);
    const userInput = 'Hello, GPT! I\'m just sending a message without chat history';
    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput,
      characterContext,
      maxOutputTokens: 50,
    };

    const { response, chatHistory } = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response.content).toBe(userInput);
    expect(chatHistory.length).toBe(3);
    // expect(mockAxios.history.post[0].data).toEqual(JSON.stringify(chatInput));
  });

  it('dont send chat history and character context', async () => {
    // Mock Axios to simulate an error response
    // mockAxios.onPost('/api/v1/sendMessage').reply(500, 'Internal Server Error');

    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput: 'Hello, GPT! I am not sending chat history and character context',
      // characterContext,
      maxOutputTokens: 50,
    };

    const response = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response).toBe('An error occurred: A characterContext object is required');
  });
});
