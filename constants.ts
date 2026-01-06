
import { Question } from './types';

export const MARKETING_QUESTIONS: Question[] = [
  {
    id: 'B1',
    text: 'Welke omschrijving sluit het beste aan bij marketing zoals behandeld in het hoofdstuk?',
    options: {
      A: 'Het uitvoeren van promotionele activiteiten',
      B: 'Het ondersteunen van verkoopprocessen',
      C: 'Het organiseren van ruil door waarde te creëren voor klanten',
      D: 'Het communiceren van producten naar de markt'
    },
    correct: 'C',
    explanations: {
      A: 'A: promotie is slechts één marketinginstrument',
      B: 'B: verkoop is onderdeel, niet de kern',
      C: 'C: marketing draait om waardecreatie en ruil (AMA/NIMA)',
      D: 'D: communicatie alleen is te beperkt'
    },
    feedback: 'Marketing draait om waardecreatie en het mogelijk maken van ruil, niet alleen om promotie of verkoop.'
  },
  {
    id: 'B2',
    text: 'Waarom wordt marketing in het hoofdstuk niet beperkt tot commerciële organisaties?',
    options: {
      A: 'Omdat marketing altijd winstgericht is',
      B: 'Omdat ook niet-commerciële ruil mogelijk is',
      C: 'Omdat promotie overal voorkomt',
      D: 'Omdat elke organisatie producten verkoopt'
    },
    correct: 'B',
    explanations: {
      A: 'A: winst is geen vereiste voor marketing',
      B: 'B: ruil kan ook niet-commercieel zijn',
      C: 'C: promotie ≠ marketing',
      D: 'D: niet elke organisatie verkoopt producten'
    },
    feedback: 'Ook zonder geld kan sprake zijn van ruil en dus van marketing.'
  },
  {
    id: 'B3',
    text: 'Welke uitspraak over marketing is onjuist?',
    options: {
      A: 'Marketing houdt rekening met klantbehoeften',
      B: 'Marketing speelt een rol bij prijsbepaling',
      C: 'Marketing begint nadat het product is ontwikkeld',
      D: 'Marketing omvat meerdere processen'
    },
    correct: 'C',
    explanations: {
      A: 'A: klopt, klantbehoeften staan centraal',
      B: 'B: prijsbepaling is marketing',
      C: 'C: marketing start niet pas na productontwikkeling',
      D: 'D: marketing bestaat uit meerdere processen'
    },
    feedback: 'Marketing begint niet pas na productontwikkeling, maar al bij klant- en behoefteanalyse.'
  },
  {
    id: 'B4',
    text: 'Wat maakt marketing fundamenteel anders dan reclame?',
    options: {
      A: 'Marketing is goedkoper',
      B: 'Marketing richt zich alleen op strategie',
      C: 'Marketing omvat meer dan communicatie',
      D: 'Marketing heeft geen invloed op verkoop'
    },
    correct: 'C',
    explanations: {
      A: 'A: kosten zijn geen onderscheid',
      B: 'B: marketing is niet alleen strategisch',
      C: 'C: marketing omvat meer dan communicatie',
      D: 'D: marketing beïnvloedt verkoop juist wel'
    },
    feedback: 'Marketing omvat meerdere instrumenten waarvan reclame er slechts één is.'
  },
  {
    id: 'B5',
    text: 'Het besluit om een nieuw marktsegment te betreden valt onder:',
    options: {
      A: 'Operationele marketing',
      B: 'Tactische marketing',
      C: 'Strategische marketing',
      D: 'Promotioneel beleid'
    },
    correct: 'C',
    explanations: {
      A: 'A: uitvoering ≠ strategie',
      B: 'B: tactisch is uitwerking',
      C: 'C: toetreden tot segment is langetermijnkeuze',
      D: 'D: promotie is operationeel'
    },
    feedback: 'Het betreden van een nieuw segment is een langetermijnkeuze en dus strategisch.'
  },
  {
    id: 'B6',
    text: 'Welke activiteit hoort het beste bij operationele marketing?',
    options: {
      A: 'Vaststellen van positionering',
      B: 'Ontwerpen van de marketingmix',
      C: 'Uitvoeren van een kortingsactie',
      D: 'Analyseren van klantbehoeften'
    },
    correct: 'C',
    explanations: {
      A: 'A: positionering is strategisch',
      B: 'B: marketingmix is tactisch',
      C: 'C: uitvoeren van acties is operationeel',
      D: 'D: analyse is strategisch'
    },
    feedback: 'Het uitvoeren van acties is kenmerkend voor operationele marketing.'
  },
  {
    id: 'B7',
    text: 'Waarom wordt doelgroepkeuze gezien als strategisch?',
    options: {
      A: 'Omdat het communicatief is',
      B: 'Omdat het kortetermijnacties betreft',
      C: 'Omdat het richting geeft aan alle vervolgbeslissingen',
      D: 'Omdat het altijd door marketingafdelingen gebeurt'
    },
    correct: 'C',
    explanations: {
      A: 'A: communicatie is gevolg, niet reden',
      B: 'B: doelgroepkeuze is geen kortetermijnactie',
      C: 'C: doelgroep stuurt alle vervolgbeslissingen',
      D: 'D: organisatievorm is irrelevant'
    },
    feedback: 'De gekozen doelgroep stuurt alle verdere marketingbeslissingen.'
  },
  {
    id: 'B8',
    text: 'Welke combinatie bestaat volledig uit strategische marketingactiviteiten?',
    options: {
      A: 'Reclame – sales promotion – PR',
      B: 'Segmentatie – doelgroepkeuze – positionering',
      C: 'Kortingsactie – distributie – voorraadbeheer',
      D: 'Promotie – prijsactie – communicatie'
    },
    correct: 'B',
    explanations: {
      A: 'A: dit zijn promotie-instrumenten',
      B: 'B: STP hoort bij strategisch niveau',
      C: 'C: dit zijn operationele taken',
      D: 'D: dit zijn uitvoerende communicatieactiviteiten'
    },
    feedback: 'Segmentatie, doelgroepkeuze en positionering vormen samen de strategische STP-fase.'
  },
  {
    id: 'B9',
    text: 'Welke marketingvraag staat centraal bij het vaststellen van een verkoopprijs?',
    options: {
      A: 'Wat heeft de klant nodig?',
      B: 'Hoe komt de klant eraan?',
      C: 'Hoeveel is het de klant waard?',
      D: 'Hoe weet de klant dat wij bestaan?'
    },
    correct: 'C',
    explanations: {
      A: 'A: behoefte ≠ betalingsbereidheid',
      B: 'B: beschikbaarheid ≠ prijs',
      C: 'C: klantwaarde bepaalt prijs',
      D: 'D: bekendheid is promotie'
    },
    feedback: 'Prijsbeslissingen draaien om wat klanten bereid zijn te betalen.'
  },
  {
    id: 'B10',
    text: 'Het verkorten van levertijden heeft vooral betrekking op:',
    options: {
      A: 'Product',
      B: 'Prijs',
      C: 'Plaats',
      D: 'Promotie'
    },
    correct: 'C',
    explanations: {
      A: 'A: product verandert niet',
      B: 'B: prijs verandert niet',
      C: 'C: levertijd en bereikbaarheid horen bij plaats',
      D: 'D: promotie gaat over communicatie'
    },
    feedback: 'Levertijden en beschikbaarheid horen bij distributie (plaats).'
  },
  {
    id: 'B11',
    text: 'Waarom worden de vier C’s soms gebruikt naast de vier P’s?',
    options: {
      A: 'Omdat ze eenvoudiger zijn',
      B: 'Omdat ze beter meetbaar zijn',
      C: 'Omdat ze de klant centraal stellen',
      D: 'Omdat ze goedkoper zijn'
    },
    correct: 'C',
    explanations: {
      A: 'A: eenvoud is geen reden',
      B: 'B: meetbaarheid is geen kernargument',
      C: 'C: vier C’s bekijken marketing vanuit klant',
      D: 'D: kosten zijn irrelevant'
    },
    feedback: 'De vier C’s benaderen marketing expliciet vanuit het klantperspectief.'
  },
  {
    id: 'B12',
    text: 'Welke koppeling is correct?',
    options: {
      A: 'Kosten – promotie',
      B: 'Gemak – plaats',
      C: 'Communicatie – prijs',
      D: 'Klant – product'
    },
    correct: 'B',
    explanations: {
      A: 'A: kosten horen bij prijs',
      B: 'B: gemak is gekoppeld aan plaats/distributie',
      C: 'C: communicatie ≠ prijs',
      D: 'D: klant ≠ product'
    },
    feedback: 'Gemak voor de klant wordt binnen marketing gekoppeld aan plaats/distributie.'
  },
  {
    id: 'B13',
    text: 'Het indelen van consumenten op basis van leefstijl is een vorm van:',
    options: {
      A: 'Doelgroepbepaling',
      B: 'Positionering',
      C: 'Segmentatie',
      D: 'Differentiatie'
    },
    correct: 'C',
    explanations: {
      A: 'A: doelgroepkeuze volgt later',
      B: 'B: positionering is perceptie',
      C: 'C: indelen in groepen = segmentatie',
      D: 'D: differentiatie volgt na STP'
    },
    feedback: 'Het indelen van consumenten in groepen heet segmentatie.'
  },
  {
    id: 'B14',
    text: 'Een bedrijf besluit zich te richten op één gekozen segment. Dit heet:',
    options: {
      A: 'Segmentatie',
      B: 'Doelgroepbepaling',
      C: 'Positionering',
      D: 'Promotie'
    },
    correct: 'B',
    explanations: {
      A: 'A: segmentatie is indelen',
      B: 'B: kiezen van segment = doelgroepbepaling',
      C: 'C: positionering volgt daarna',
      D: 'D: promotie is uitvoering'
    },
    feedback: 'Doelgroepbepaling is het kiezen van één of meer segmenten.'
  },
  {
    id: 'B15',
    text: 'Dat een merk bekendstaat als “betrouwbaar”, is een voorbeeld van:',
    options: {
      A: 'Segmentatie',
      B: 'Doelgroepkeuze',
      C: 'Positionering',
      D: 'Communicatie'
    },
    correct: 'C',
    explanations: {
      A: 'A: segmentatie gaat over groepen',
      B: 'B: doelgroep ≠ beeld',
      C: 'C: beeld in hoofd klant = positionering',
      D: 'D: communicatie is middel'
    },
    feedback: 'Positionering gaat over het beeld dat klanten van een merk hebben.'
  },
  {
    id: 'B16',
    text: 'Waarom is positionering geen producteigenschap?',
    options: {
      A: 'Omdat producten kopieerbaar zijn',
      B: 'Omdat positionering subjectief wordt ervaren',
      C: 'Omdat positionering intern wordt bepaald',
      D: 'Omdat positionering alleen communicatie is'
    },
    correct: 'B',
    explanations: {
      A: 'A: waar, maar niet kernreden',
      B: 'B: positionering is gebaseerd op perceptie',
      C: 'C: positionering is extern',
      D: 'D: positionering ≠ alleen communicatie'
    },
    feedback: 'Positionering is gebaseerd op perceptie en dus subjectief.'
  },
  {
    id: 'B17',
    text: 'Waarom is koopgedrag niet volledig rationeel?',
    options: {
      A: 'Omdat klanten altijd impulsief zijn',
      B: 'Omdat behoeften en verlangens verschillen',
      C: 'Omdat promotie alles bepaalt',
      D: 'Omdat prijs geen rol speelt'
    },
    correct: 'B',
    explanations: {
      A: 'A: te absoluut',
      B: 'B: verschillen in behoeften en verlangens',
      C: 'C: promotie is niet allesbepalend',
      D: 'D: prijs speelt wel degelijk een rol'
    },
    feedback: 'Behoeften en verlangens verschillen per persoon en beïnvloeden koopgedrag.'
  },
  {
    id: 'B18',
    text: 'Hoe wordt Maslow gebruikt in dit hoofdstuk?',
    options: {
      A: 'Als voorspellend model',
      B: 'Als marketingstrategie',
      C: 'Als ordening van behoeften',
      D: 'Als meetinstrument'
    },
    correct: 'C',
    explanations: {
      A: 'A: Maslow voorspelt niet',
      B: 'B: Maslow is geen strategie',
      C: 'C: Maslow ordent typen behoeften',
      D: 'D: Maslow meet geen behoeften'
    },
    feedback: 'Maslow wordt gebruikt om typen behoeften te ordenen, niet om gedrag te voorspellen.'
  },
  {
    id: 'B19',
    text: 'Wat verklaart dat klanten bereid zijn meer te betalen dan strikt noodzakelijk?',
    options: {
      A: 'Hogere productiekosten',
      B: 'Hogere distributiekosten',
      C: 'Ervaren klantwaarde',
      D: 'Intensieve promotie'
    },
    correct: 'C',
    explanations: {
      A: 'A: kosten verklaren geen bereidheid',
      B: 'B: distributiekosten zijn intern',
      C: 'C: ervaren klantwaarde verklaart meerprijs',
      D: 'D: promotie alleen is onvoldoende'
    },
    feedback: 'Klanten betalen meer wanneer zij extra waarde ervaren.'
  },
  {
    id: 'B20',
    text: 'Wanneer is differentiatie onvoldoende effectief?',
    options: {
      A: 'Als het onderscheid relevant is',
      B: 'Als het onderscheid uniek is',
      C: 'Als het onderscheid makkelijk te kopiëren is',
      D: 'Als het onderscheid wordt gecommuniceerd'
    },
    correct: 'C',
    explanations: {
      A: 'A: relevantie is positief',
      B: 'B: uniciteit versterkt differentiatie',
      C: 'C: kopieerbaarheid ondermijnt voordeel',
      D: 'D: communicatie is ondersteunend'
    },
    feedback: 'Differentiatie werkt niet duurzaam als concurrenten het makkelijk kunnen kopiëren.'
  },
  {
    id: 'B21',
    text: 'Wat is de kern van een waardepropositie?',
    options: {
      A: 'De winstgevendheid van het product',
      B: 'De keuze van promotiekanalen',
      C: 'De reden waarom klanten voor deze aanbieder kiezen',
      D: 'De omvang van de markt'
    },
    correct: 'C',
    explanations: {
      A: 'A: winst is organisatiedoel',
      B: 'B: promotie is middel',
      C: 'C: waardepropositie = reden om te kiezen',
      D: 'D: marktomvang is strategisch'
    },
    feedback: 'Een waardepropositie beantwoordt waarom een klant voor deze aanbieder kiest.'
  },
  {
    id: 'B22',
    text: 'Waarom is “goede kwaliteit” zelden een sterke positionering?',
    options: {
      A: 'Omdat kwaliteit subjectief is',
      B: 'Omdat kwaliteit niet belangrijk is',
      C: 'Omdat concurrenten dit ook claimen',
      D: 'Omdat kwaliteit niet te meten is'
    },
    correct: 'C',
    explanations: {
      A: 'A: subjectiviteit ≠ probleem',
      B: 'B: kwaliteit is wel belangrijk',
      C: 'C: concurrenten kunnen dit ook claimen',
      D: 'D: meetbaarheid is irrelevant'
    },
    feedback: 'Een claim is zwak als concurrenten dezelfde claim kunnen maken.'
  },
  {
    id: 'B23',
    text: 'Waarom moet prijs passen bij de gekozen positionering?',
    options: {
      A: 'Omdat klanten prijs belangrijk vinden',
      B: 'Omdat prijs onderdeel is van merkperceptie',
      C: 'Omdat prijs verkoop garandeert',
      D: 'Omdat prijs niet losstaat van promotie'
    },
    correct: 'B',
    explanations: {
      A: 'A: te simplistisch',
      B: 'B: prijs beïnvloedt merkperceptie',
      C: 'C: prijs garandeert geen verkoop',
      D: 'D: prijs staat niet los van promotie'
    },
    feedback: 'Prijs beïnvloedt hoe een merk wordt waargenomen door klanten.'
  },
  {
    id: 'B24',
    text: 'Wat is het gevolg van een inconsistente marketingmix?',
    options: {
      A: 'Hogere interne kosten',
      B: 'Onheldere waarde voor de klant',
      C: 'Meer promotiebereik',
      D: 'Snellere besluitvorming'
    },
    correct: 'B',
    explanations: {
      A: 'A: interne kosten zijn secundair',
      B: 'B: klant krijgt onduidelijk waardevoorstel',
      C: 'C: bereik wordt niet groter',
      D: 'D: besluitvorming wordt niet sneller'
    },
    feedback: 'Inconsistentie maakt de waardepropositie onduidelijk voor de klant.'
  },
  {
    id: 'B25',
    text: 'Welke combinatie is het meest consistent?',
    options: {
      A: 'Lage prijs – exclusieve distributie – luxe imago',
      B: 'Hoge prijs – brede distributie – discountboodschap',
      C: 'Hoge prijs – selectieve distributie – premiumpositionering',
      D: 'Lage prijs – beperkte beschikbaarheid – kwaliteitsclaim'
    },
    correct: 'C',
    explanations: {
      A: 'A: lage prijs botst met exclusiviteit',
      B: 'B: discountboodschap botst met hoge prijs',
      C: 'C: prijs, plaats en positionering zijn consistent',
      D: 'D: premiumclaim botst met lage prijs'
    },
    feedback: 'Prijs, distributie en positionering versterken elkaar in deze combinatie.'
  }
];
