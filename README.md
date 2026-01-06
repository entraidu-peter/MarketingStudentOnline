
# 🎓 MarketingMeester

**MarketingMeester** is een interactieve Multiple-Choice (MC) quiz-applicatie speciaal ontworpen voor marketingstudenten.

## 📝 WordPress Integratie Handleiding

Je kunt deze quiz op twee manieren toevoegen aan je WordPress-site:

### Optie 1: Via een Iframe (Makkelijkste & Beste methode)
Dit is de meest betrouwbare methode omdat WordPress de code van de quiz dan niet kan verstoren.

1.  Zorg dat je quiz live staat op **GitHub Pages** (bijv. `https://jouwnaam.github.io/marketing-quiz/`).
2.  Ga in WordPress naar de pagina waar je de quiz wilt plaatsen.
3.  Voeg een **Custom HTML** blok toe.
4.  Plak de volgende code in het blok:
    ```html
    <iframe 
        src="https://jouwnaam.github.io/marketing-quiz/" 
        style="width:100%; height:800px; border:none; border-radius:12px; shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);" 
        title="Marketing Quiz">
    </iframe>
    ```
5.  Pas de `height` aan indien nodig.

### Optie 2: Direct in een Custom HTML blok (Native)
Wil je de quiz direct op de pagina zonder iframe?

1.  Upload alle bestanden uit deze repository naar een map op je server via FTP (bijv. `/wp-content/uploads/quiz/`).
2.  Gebruik een **Custom HTML** blok.
3.  Kopieer de inhoud van `index.html`, maar pas de `src` van de scripts aan naar de volledige URL:
    ```html
    <script type="module" src="https://jouwsite.nl/wp-content/uploads/quiz/index.tsx"></script>
    ```
    *Let op: Sommige WordPress thema's blokkeren `importmap` of `.tsx` bestanden. In dat geval is Optie 1 de enige oplossing.*

---

## 🌟 Belangrijkste Functies
- **25 Uitdagende Vragen** over marketingtheorie.
- **AI Marketing Tutor "Eef"** voor directe uitleg.
- **Gokkanscorrectie** voor een eerlijke becijfering.

## 📈 Cijferberekening
`Cijfer = 1 + 9 * (Goed - Gokfactor) / (Totaal - Gokfactor)`
*(Gokfactor = 25% bij 4 opties)*

---
*Gemaakt voor marketingonderwijs.*
