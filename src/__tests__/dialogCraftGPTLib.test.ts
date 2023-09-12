// import axios from 'axios';
// import AxiosMockAdapter from 'axios-mock-adapter';
import { CharacterType } from 'src/types';
import DialogCraftGPTApi, { CreateChatInput } from '../lib/dialogCraftGPTLib';

// Mock Axios instance for testing
// const mockAxios = new AxiosMockAdapter(axios);

// Define a test API key
const apiKey = 'your-api-key';

const characterContext: CharacterType = {
  name: 'John Doe',
  age: 30,
  personality: {
    traits: ['friendly', 'outgoing'],
    dialogueStyle: 'casual',
  },
  'background story': 'A character with an interesting backstory.',
  'game knowledge': 'Experienced player',
  interests: {
    sports: 5,
    movies: 4,
    music: 3,
  },
  supportiveness: 7,
};
// Create an instance of DialogCraftGPTApi for testing
const api = new DialogCraftGPTApi({ apiKey });

describe('DialogCraftGPTApi', () => {
  beforeEach(() => {
    // mockAxios.reset(); // Reset Axios mock before each test
    // logError.mockClear(); // Clear the logError mock
  });

  it('send message without chat history', async () => {
    // const mockResponse = { data: 'Response data' };

    // Mock Axios to respond with a successful response
    // mockAxios.onPost('/api/v1/sendMessage').reply(200, mockResponse);
    const userInput = 'Hello, GPT!';
    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput,
      characterContext,
      maxOutputTokens: 50,
    };

    const { response, chatHistory } = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response.content).toBe(userInput);
    expect(chatHistory.length).toBe(2);
    // expect(mockAxios.history.post[0].data).toEqual(JSON.stringify(chatInput));
  });

  it('dont send chat history and character context', async () => {
    // Mock Axios to simulate an error response
    // mockAxios.onPost('/api/v1/sendMessage').reply(500, 'Internal Server Error');

    const chatInput: CreateChatInput = {
      chatHistory: [],
      userInput: 'Hello, GPT!',
      // characterContext,
      maxOutputTokens: 50,
    };

    const response = await api.createChat(chatInput);

    // Ensure Axios was called with the correct parameters
    expect(response).toBe('A characterContext object is required');
  });
});
