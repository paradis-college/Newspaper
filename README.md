# Newspaper Paradis — Paradis International College

Site-ul oficial al revistei școlare **Newspaper Paradis**, realizat de elevii
Paradis International College. Tema vizuală: noir alb-negru, stil retro 20s–50s.

---

## Structura proiectului

```
/
├── index.html             ← pagina principală
├── events.html            ← evenimente și noutăți
├── design.html            ← echipa de design
├── marketing.html         ← echipa de marketing
├── writing.html           ← echipa de redactori
├── reporters.html         ← echipa de reporteri
├── pdfs.html              ← arhiva edițiilor PDF
├── contact.html           ← formular de contact
├── team.html              ← prezentarea generală a echipei
│
├── assets/
│   ├── css/
│   │   └── style.css      ← stilul global (afectează toate paginile)
│   ├── js/
│   │   └── script.js      ← logica meniului și a datei
│   ├── img/               ← fotografii (jpg, png, webp)
│   ├── svg/               ← logo și elemente grafice vectoriale
│   └── pdf/
│       └── [an]/          ← ex: 2024/
│           └── [sezon]-[an].pdf
│
└── .github/
    └── agents/            ← instrucțiuni pentru agenții AI
        ├── INSTRUCTIUNI-AGENT.md
        └── STRUCTURA-SITE.md
```

---

## Reguli de denumire (naming conventions)

### Fișiere HTML
- Litere mici, cuvinte separate prin `-` (kebab-case)
- Exemple: `index.html`, `events.html`, `pdfs.html`

### Fișiere CSS și JS
- Litere mici, kebab-case
- Exemple: `style.css`, `script.js`, `pdfs-extras.css`

### Imagini (`assets/img/`)
- Format: `[context]-[descriptor].[ext]`
- Litere mici, fără spații, fără diacritice, kebab-case
- Exemple: `echipa-andrei-popa.jpg`, `eveniment-debate-2026.jpg`, `cover-toamna-2024.webp`

### SVG-uri (`assets/svg/`)
- Format: `logo-[nume].svg` sau `icon-[nume].svg` sau `[element]-[descriptor].svg`
- Exemple: `logo-paradis.svg`, `icon-meniu.svg`, `separator-ornamental.svg`

### PDF-uri (`assets/pdf/`)
- Structura obligatorie: `assets/pdf/[an]/[sezon]-[an].pdf`
- Sezoane acceptate (în română, fără diacritice): `primavara`, `vara`, `toamna`, `iarna`
- Exemple:
  - `assets/pdf/2024/toamna-2024.pdf`
  - `assets/pdf/2016/primavara-2016.pdf`
  - `assets/pdf/2025/iarna-2025.pdf`
- Ani acoperiți: 2016–2026 (≈4 ediții/an × 10 ani = ~40 ediții)

### Reguli generale
- ❌ Niciodată spații în nume de fișiere
- ❌ Niciodată diacritice în nume de fișiere (ă, â, î, ș, ț)
- ❌ Niciodată majuscule în nume de fișiere
- ✅ Întotdeauna kebab-case: `cuvant-cuvant.ext`

---

## Cum adaugi o ediție PDF nouă

1. Copiază fișierul PDF în `assets/pdf/[an]/[sezon]-[an].pdf`
   - Exemplu: `assets/pdf/2026/vara-2026.pdf`
2. Deschide `pdfs.html`
3. Adaugă un bloc `<article>` în secțiunea de ediții
4. Actualizează tabelul din `.github/agents/STRUCTURA-SITE.md`

---

## Cum adaugi o imagine sau un SVG

- **Fotografie** → `assets/img/[context]-[descriptor].jpg`
- **Logo / grafică vectorială** → `assets/svg/logo-paradis.svg`
- Referențiază în HTML cu: `src="assets/img/[nume].jpg"` sau `src="assets/svg/[nume].svg"`

---

## Tehnologii folosite

- HTML5 semantic
- CSS3 (fișier unic global: `assets/css/style.css`)
- JavaScript vanilla (fișier unic: `assets/js/script.js`)
- Fonturi Google: Cinzel + Libre Baskerville
- Fără framework-uri, fără npm, fără build tools — proiect simplu, direct în browser
