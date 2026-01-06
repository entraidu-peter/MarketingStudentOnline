
import { GoogleGenAI } from "@google/genai";

const COURSE_CONTEXT = `
Context informatie uit het cursusmateriaal:
- Marketing definitie (NIMA): Alle activiteiten van ruilsubjecten gericht op het bevorderen, vergemakkelijken en bespoedigen van ruiltransacties.
- Marketing definitie (AMA): Functie binnen organisaties en processen voor het creëren, communiceren en leveren van waarde voor klanten.
- Strategisch proces: Missie, visie, marketing-audit, SWOT, doelstellingen.
- STP Model: Segmentatie, Targeting, Positionering.
- Segmentatiebases: Geografisch, Demografisch, Psychografisch, Gedrag.
- Marketingmix (4P's): Product, Prijs, Plaats, Promotie.
- Klantperspectief (4C's): Customer solution, Cost, Convenience, Communication.
- Maslow: Fysiologisch, Veiligheid, Sociaal, Erkenning, Zelfactualisering.
- Prijsstrategieën: Afroom, Penetratie, Stay-out, Put-out, Differentiatie, Discriminatie, Scheermesjes.
`;

export async function askTutorAboutQuestion(question: string, context: string, userQuery?: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Je bent Eef, een to-the-point Marketing Tutor. Geef een supersnel antwoord.
    
    CURSUSCONTEXT: ${COURSE_CONTEXT}
    VRAAG: ${question}
    FEEDBACK: ${context}
    VRAAG STUDENT: ${userQuery}
    
    Instructies:
    1. MAXIMAAL 40 WOORDEN.
    2. Wees scherp, direct en gebruik termen uit de context.
    3. Start direct met de uitleg.
    4. Antwoord in het Nederlands.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Eef is even koffie halen. Check je boek!";
  }
}
