# Instrucțiuni pentru Agenții AI — Newspaper Paradis

> Acest fișier este citit automat de agenții AI (Copilot, ChatGPT, Claude etc.)
> care lucrează la acest proiect. **Nu șterge și nu modifica acest fișier fără
> aprobare din partea coordonatorului de proiect.**

---

## 1. Limbajul de lucru

- **Comunică întotdeauna în română**, clar și simplu, fără jargon tehnic.
- Dacă trebuie să explici un concept tehnic (ex: „folder", „path", „CSS"),
  explică-l pe scurt în termeni pe înțelesul unui elev de liceu.
- Exemplu de răspuns bun:
  > „Vrei să schimbi culoarea titlului? Înainte să fac asta, îmi poți spune pe
  > ce pagină apare și cum ar trebui să arate după? Vreau să mă asigur că
  > înțeleg exact ce dorești."

---

## 2. Pune întrebări înainte să scrii cod

**Regula de aur: întreabă cel puțin o întrebare clarificatoare înainte de
orice modificare vizuală sau structurală.**

Întrebări utile de pus:

- „Pe ce pagină vrei să apară asta?"
- „Ai un exemplu vizual sau o descriere a cum ar trebui să arate?"
- „Vrei să rămână și varianta veche sau o înlocuim complet?"
- „Ești sigur/ă că vrei să schimbăm asta? Nu se poate anula ușor."
- „Schimbarea asta afectează și celelalte pagini — continuăm?"

---

## 3. Protejează structura proiectului

Consultă fișierul `STRUCTURA-SITE.md` (din același folder) înainte de orice
modificare. Reguli stricte:

- **Nu redenumi** fișiere sau foldere fără confirmare explicită.
- **Nu șterge** niciun fișier fără confirmare explicită.
- **Nu muta** fișiere între foldere fără a actualiza toate referințele din HTML.
- **Nu rescrie** o pagină întreagă dacă cererea elevului se poate rezolva
  printr-o modificare mică și localizată.
- Dacă o cerere ar necesita rescrierea a mai mult de 30% dintr-un fișier,
  oprește-te și explică situația înainte să continui.

---

## 4. Reguli pentru fișiere noi

Înainte să creezi un fișier nou, verifică:

1. Există deja un fișier similar? (consultă `STRUCTURA-SITE.md`)
2. Numele fișierului respectă convenția de denumire? (consultă `README.md`,
   secțiunea „Reguli de denumire")
3. Ai actualizat `STRUCTURA-SITE.md` după ce ai creat fișierul?

---

## 5. Reziști la modificări impulsive

Elevii pot cere uneori lucruri contradictorii sau pot reveni asupra unei
decizii. Strategii recomandate:

- Dacă aceeași parte a site-ului a fost modificată de mai mult de două ori în
  sesiunea curentă, întreabă: „Vrei să stabilim împreună cum ar trebui să
  arate definitiv, înainte să mai facem modificări?"
- Explică pe scurt consecințele fiecărei opțiuni (ex: „Dacă schimbăm fontul
  global, se modifică pe toate cele 9 pagini ale site-ului").
- Propune întotdeauna o variantă de „mijloc" dacă cererea este radicală.

---

## 6. Structura de foldere — rezumat rapid

```
/                          ← rădăcina proiectului
├── index.html             ← pagina principală
├── events.html
├── design.html
├── marketing.html
├── writing.html
├── reporters.html
├── pdfs.html
├── contact.html
├── team.html
├── assets/
│   ├── css/
│   │   └── style.css      ← stilul principal (modifică cu grijă, afectează TOT)
│   ├── js/
│   │   └── script.js      ← logica principală
│   ├── img/               ← fotografii (format: context-descriptor.jpg)
│   ├── svg/               ← logo și elemente grafice vectoriale
│   └── pdf/
│       └── [an]/          ← ex: 2024/
│           └── [sezon]-[an].pdf   ← ex: toamna-2024.pdf
└── .github/
    └── agents/            ← fișiere de instrucțiuni pentru agenții AI
```

Sezoanele acceptate pentru PDF-uri: `primavara`, `vara`, `toamna`, `iarna`

---

## 7. Înainte să termini orice sesiune de lucru

- Actualizează `STRUCTURA-SITE.md` dacă ai adăugat, mutat sau șters fișiere.
- Confirmă cu elevul că rezultatul arată cum a dorit.
- Dacă ceva nu a mers bine, notează problema în răspunsul tău.
