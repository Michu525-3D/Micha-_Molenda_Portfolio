# Instrukcja podmiany zdjęć i renderów w portfolio

Wszystkie grafiki projektów znajdują się w folderze `public/projects/`.
Zdjęcie profilowe znajduje się w folderze `public/profile/`.

## 1. Twoje zdjęcie profilowe (Sekcja Hero & About Me)
- Ścieżka: `public/profile/michal-molenda.jpg`
- Możesz wkleić tutaj swoje zdjęcie lub ulubiony render popiersia/postaci. 
- Jeśli plik nie istnieje lub ma inny format (np. `.png`), zmień ścieżkę w `src/components/Hero.tsx` oraz `src/components/About.tsx`.

---

## 2. Projekty (Render główny i galeria każdego projektu)

Każdy projekt ma swój dedykowany folder w `public/projects/`:

### A. BIOGENESIS (`public/projects/biogenesis/`)
- `hero.jpg` - Główny render wyświetlany w siatce projektów oraz na górze modala
- `gallery-1.jpg` - Render detali, wireframe lub ujęcia środowiskowego
- `gallery-2.jpg` - Drugi render w galerii
- `gallery-3.jpg` - Trzeci render w galerii

### B. UN/DO: THE REVOLUTION (`public/projects/undo-revolution/`)
- `hero.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`

### C. STAR WARS ROGUE SQUADRON 2 REMASTERED (`public/projects/star-wars-rogue-squadron/`)
- `hero.jpg` (Render myśliwca / pojazdu)
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`

### D. RUBENS GAMES (`public/projects/rubens-games/`)
- `hero.jpg` (Aqua Dark Purrifiers: Cleaning Chaos)
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`

### E. PRODUCT & MOTION VISUALIZATION - GPD AGENCY (`public/projects/gpd-agency/`)
- `hero.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`

### F. FURNITURE & ARCHVIZ - KT DESIGN (`public/projects/furniture-visualization/`)
- `hero.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`

---

## 3. Co jeśli plik jeszcze nie został dodany?
Strona posiada automatyczny **Smart Sci-Fi Fallback Generator**. Jeśli nie dodasz pliku `hero.jpg` lub `gallery-*.jpg`, strona nie wyświetli błędu ani pustego pola! Zamiast tego wyrenderuje elegancką, mroczną grafikę techniczną z blueprintem siatki i parametrami projektu. Po wklejeniu właściwego pliku JPG/PNG, automatycznie pojawi się Twój render!

## 4. Edycja listy narzędzi (Software) i opisów
Możesz w każdej chwili dopisać lub zmienić oprogramowanie użyte w danym projekcie w pliku:
`src/data/portfolioData.ts` w polu `tools: [...]`.
