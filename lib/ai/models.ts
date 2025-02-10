// import { openai } from "@ai-sdk/openai";
import { groq } from "@ai-sdk/groq";
import {
  customProvider,
  wrapLanguageModel,
  extractReasoningMiddleware,
} from "ai";

export const DEFAULT_CHAT_MODEL: string = "chat-model-small";

export const myProvider = customProvider({
  languageModels: {
    "title-model": groq("llama-3.1-8b-instant"),
    "block-model": groq("mixtral-8x7b-32768"),
    "chat-model-small": groq("gemma2-9b-it"),
    "chat-model-large": groq("llama-3.3-70b-versatile"),
    "chat-model-reasoning": wrapLanguageModel({
      model: groq("deepseek-r1-distill-llama-70b"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    // 'title-model': openai('gpt-4-turbo'),
    // 'block-model': openai('gpt-4o-mini'),
    // 'chat-model-small': openai('gpt-4o-mini'),
    // 'chat-model-large': openai('gpt-4o'),
    // 'chat-model-reasoning': wrapLanguageModel({
    //   model: fireworks('accounts/fireworks/models/deepseek-r1'),
    //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
    // }),
  },
  imageModels: {
    // "small-model": openai.image("dall-e-2"),
    // "large-model": openai.image("dall-e-3"),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: "chat-model-small",
    name: "LEXA Core",
    description: "Basic model for simple tasks",
  },
  {
    id: "chat-model-large",
    name: "LEXA Advanced",
    description: "A more advanced model for complex tasks",
  },
  {
    id: "chat-model-reasoning",
    name: "LEXA Thinker",
    description: "Model that can reason and think better",
  },
];
