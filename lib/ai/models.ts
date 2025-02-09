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
    "chat-model-small": groq("llama-3.3-70b-versatile"),
    "chat-model-large": groq("llama-3.3-70b-versatile"),
    "chat-model-reasoning": wrapLanguageModel({
      model: groq("deepseek-r1-distill-llama-70b"),
      middleware: extractReasoningMiddleware({ tagName: "think" }),
    }),
    "block-model": groq("llama-3.3-70b-specdec"),
    "title-model": groq("llama-3.2-1b-preview"),
    // 'chat-model-small': openai('gpt-4o-mini'),
    // 'chat-model-large': openai('gpt-4o'),
    // 'chat-model-reasoning': wrapLanguageModel({
    //   model: fireworks('accounts/fireworks/models/deepseek-r1'),
    //   middleware: extractReasoningMiddleware({ tagName: 'think' }),
    // }),
    // 'block-model': openai('gpt-4o-mini'),
    // 'title-model': openai('gpt-4-turbo'),
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
    description: "Small and efficient model for fast, lightweight tasks",
  },
  {
    id: "chat-model-large",
    name: "LEXA Advanced",
    description: "More advanced model for complex, multi-step tasks",
  },
  {
    id: "chat-model-reasoning",
    name: "LEXA Thinker",
    description: "A model that thinks and reasons better",
  },
];
