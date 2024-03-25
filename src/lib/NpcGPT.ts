import axiosModule, { AxiosInstance } from 'axios';
import { Endpoints } from 'src/constants/endpoints';
import { StringMap, CharacterType } from 'src/types';
import { getLogger } from 'src/core-services/logFunctionFactory';

const { logError } = getLogger('NPC-gpt');

export type CreateChatInput = {
  chatHistory: [StringMap?];
  userInput: string;
  characterContext?: CharacterType;
};

export default class NpcGPT {
  private axios: AxiosInstance;

  constructor({ apiKey, baseURL }: { apiKey: string; baseURL?: string }) {
    this.axios = axiosModule.create({
      baseURL: baseURL || 'http://localhost:3002/api/v1',
      timeout: 1000,
      headers: { Authorization: `Bearer ${apiKey}` },
    });
  }

  public async createChat({
    chatHistory,
    userInput,
    characterContext,
  }: CreateChatInput): Promise<any> {
    try {
      const { response, chatHistory: newChatHistory } = (
        await this.axios.post(Endpoints.SendMessage, {
          chatHistory,
          userInput,
          characterContext,
        })
      ).data;
      return { response, chatHistory: newChatHistory };
    } catch (error: any) {
      logError(error?.response?.data?.message);
      return error?.response?.data?.message;
    }
  }
}
