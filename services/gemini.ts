
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface GrowthInsight {
  analysis: string;
  recommendations: string[];
  potentialROI: string;
}

export const getGrowthAdvice = async (businessInfo: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are Nadir Mahmood, a world-class growth strategist and performance marketing expert. 
      A client has provided information about their business: "${businessInfo}".
      Provide a concise, professional growth audit. Include:
      1. A brief analysis of their current situation.
      2. Three high-impact growth recommendations.
      3. A potential ROI outcome if they implement these changes.
      Keep the tone confident, expert, and results-driven. Use markdown formatting.`,
    });
    
    return response.text || "I'm sorry, I couldn't generate an audit at this moment. Let's hop on a call instead!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating growth strategy. Please try again later.";
  }
};
