
import { GoogleGenAI } from "@google/genai";

const COURSE_CONTEXT = `
Focus op: Marketingdefinities (AMA/NIMA), STP-model (Segmentatie, Targeting, Positionering), 4P's en 4C's, Maslow's behoeftenhiërarchie, en Prijsstrategieën.
Je bent een behulpzame, maar zakelijke marketing docent genaamd Eef.
`;

export async function askTutorAboutQuestion(question: string, feedback: string, userQuery: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Je bent Eef, een Nederlandse Marketing Tutor. 
    VRAAG: ${question}
    JUISTE UITLEG: ${feedback}
    VRAAG VAN STUDENT: ${userQuery}
    
    ${COURSE_CONTEXT}
    
    INSTRUCTIES:
    - Geef een kort en krachtig antwoord (max 50 woorden).
    - Gebruik professionele marketingtermen.
    - Wees bemoedigend maar to-the-point.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
