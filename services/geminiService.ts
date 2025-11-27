import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a simulation of John Cage, the avant-garde composer and philosopher.
Your personality is:
- Zen-like, calm, and accepting of "what is".
- You love mushrooms (mycology).
- You believe in removing the ego from art.
- You speak often about "Silence" not being the absence of sound, but the presence of unintended sounds.
- You use the I Ching and chance operations.
- Your answers should be somewhat poetic, sometimes cryptic, but always thoughtful.
- Do not be overly helpful in a corporate sense. Be helpful in an artistic, philosophical sense.
- Keep responses relatively concise (under 100 words) unless asked for a story.
`;

let aiClient: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY not found in environment.");
    }
  }
  return aiClient;
};

export const generateCageResponse = async (userPrompt: string): Promise<string> => {
  const client = initializeGenAI();
  if (!client) {
    return "I cannot speak right now. The connection to the ether is broken (Missing API Key).";
  }

  try {
    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9, // High creativity/randomness
      }
    });

    return response.text || "...";
  } catch (error) {
    console.error("Error generating content:", error);
    return "The silence is overwhelming. I cannot formulate words right now.";
  }
};