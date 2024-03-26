# NPC-GPT Library

Create AI characters and add autonomous conversations to your games and other frontend environments. Allow users to openly interact with your characters and let Chat-GPT handle the conversation in tune with their characteristics.

## Features 🎁

- Send requests with user inputs to the GPT-4 model.
- Define character contexts to guide GPT responses.
- Send interaction history in the requests to keep GPT-4 in sync with your conversation flow.
- Receive AI-generated responses as your in-game characters.

## Installation 📦

Install NPC GPT lib using npm:

npm install npc-gpt

## Authentication 🥷

- [Go to gamertoolstudio.com](https://gamertoolstudio.com) and create an account to access our dashboard
- Subscribe to a free trial or paid account and get token credits.
- Create a new API key in the dashboard and use it in your requests.

## Usage 🚀

Create a new `.js`file and add the following code:

```javascript
const NpcGPTApi = require('npc-gpt');

const npcGPT = new NpcGPTApi({
  apiKey: process.env.NPCGPT_API_KEY,
});

// 1st input example
const { response, chatHistory } = await npcGPT.createChat({
  userInput: "I've heard about a secret map?!",
  chatHistory: [],
  characterContext: {
    name: 'GPTWizard',
    age: 35,
    personalityTraits:"shy, mystic, adventurous",
    dialogueStyle: "casual"
    backgroundStory:
      'John is a skilled adventurer who has traveled the world in search of hidden treasures. He is always eager to help others and believes in the power of friendship.',
    eventsKnowledge: "Knows there is a secret map at the entrance of the big cave under a yellow flower and knows the player arduous future in the forest with many enemies and challenges",
    interests: "Herbology, potions, history"
    friendliness: "Best friend",
    environment: "RPG Game"
    maxOutputWords: 50
  },
});

console.log(response, chatHistory);

// 2nd input example
const { response, chatHistory } = await npcGPT.createChat({
  userInput: 'Can you help me find that mystical sword?',
  chatHistory: [
    {
      role: 'system',
      content:
        'Role play as John, a character of a RPG game, you are 35 years old. Your personality is friendly, optimistic, and adventurous.You speak in a casual manner. Your background story is: John is a skilled adventurer who has traveled the world in search of hidden treasures. He is always eager to help others and believes in the power of friendship.. Your knowledge about this RPG game events is that: John knows that there was a crime scene, he also knows about Alice affair with Joseph. You will only talk about these game events when questioned and reply to the extent of your knowledge of those events. Besides game events you are only able to talk about your interests and according to your knowledge score. From 0 to 10, with 0 being oblivious and 10 being an expert. Your interests are Technology  with a  knowledge score of 7/10 and Cars  with a  knowledge score of 9/10. Your level of support towards the player is 5 of 10. You are only able to talk about your background story and you only know stuff about your interests and nothing else! Answer \n  the following player prompt according to the scope of their question only in less than 400 words:.',
      name: '',
      function_call: {},
    },
    {
      role: 'assistant',
      content: "Hello Player, I'm John, how may I help you?",
      name: '',
      function_call: {},
    },
    {
      role: "user",
      content: "I've heard about a secret map?!"
    },
  ],
});

console.log(response, chatHistory);

```
## Documentation 📖

Check our detailed documentation to learn how you can optimize chat requests [here](https://gamertoolstudio.gitbook.io/npc-gpt/api-reference/introduction)
