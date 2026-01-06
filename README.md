
# 🎓 MarketingMeester

**MarketingMeester** is een interactieve Multiple-Choice (MC) quiz-applicatie speciaal ontworpen voor marketingstudenten. De tool helpt studenten om kernconcepten uit het vakgebied (zoals het STP-model, de 4P's en NIMA-definities) op een leuke en effectieve manier te beheersen.

![MarketingMeester Preview](https://via.placeholder.com/800x400?text=MarketingMeester+Preview)

## 🌟 Belangrijkste Functies

- **25 Uitdagende Vragen**: Gebaseerd op de lesstof van o.a. het Edubook en NIMA-standaarden.
- **AI Marketing Tutor "Eef"**: Geïntegreerde AI-hulp die via de Google Gemini API direct uitleg geeft bij foutieve antwoorden (geoptimaliseerd voor korte, krachtige antwoorden < 40 woorden).
- **Gokkanscorrectie**: Een eerlijke cijferberekening (1-10) die rekening houdt met de statistische kans op gokken bij 4-keuzevragen.
- **Directe Feedback**: Bij elk antwoord krijgt de student direct een 'Kerninzicht' om de theorie beter te begrijpen.
- **Responsive Design**: Werkt perfect op zowel desktop, tablet als smartphone.

## 🛠️ Technologieën

- **React**: Voor een snelle en soepele gebruikersinterface.
- **Tailwind CSS**: Voor een modern en strak design.
- **Google Gemini API**: De motor achter AI Tutor Eef.
- **FontAwesome**: Voor intuïtieve iconen.
- **ESM Modules**: Modern JavaScript gebruik zonder zware build-steps.

## 🚀 Live Demo

De app is live te bewonderen op: 
`https://[JOUW-GITHUB-GEBRUIKERSNAAM].github.io/[REPOS-NAAM]/`

## 📦 Installatie & Lokaal Gebruik

Wil je dit project lokaal draaien of aanpassen?

1. **Clone de repository**:
   ```bash
   git clone https://github.com/jouw-gebruikersnaam/marketing-meester.git
   ```

2. **Bestanden openen**:
   Omdat dit project gebruikmaakt van moderne ES Modules en Tailwind via CDN, kun je de `index.html` direct openen in een moderne browser (of via een 'Live Server' extensie in VS Code).

3. **API Key**:
   De AI-functies vereisen een Google Gemini API Key. In de GitHub Pages omgeving wordt deze via de omgeving gefaciliteerd. Voor lokaal gebruik moet de `process.env.API_KEY` aanwezig zijn.

## 📈 Cijferberekening

In deze quiz wordt een cijfer berekend op basis van de volgende formule voor gokkanscorrectie:
`Cijfer = 1 + 9 * (Goed - Gokfactor) / (Totaal - Gokfactor)`
*Bij 4 opties is de gokfactor 25% van het totaal aantal vragen.*

## 📄 Licentie

Dit project is gemaakt voor educatieve doeleinden. Vrij te gebruiken en aan te passen voor eigen onderwijsmodules.

---
*Gemaakt met ❤️ voor marketingstudenten door MarketingMeester.*
