// src/lib/ai.js
import { HfInference } from '@huggingface/inference';
const hf = new HfInference("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")


export const generateText = async () => {
  try {
    const response = await hf.textGeneration({
      prompt: "generates a paragraph of text with perfect grammar of 40 words in Spanish",
      max_length: 30, 
    });
    console.log(response)
    return response;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
};
