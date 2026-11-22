import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.community': 'Community',
    'nav.contact': 'Contact',
    'nav.artstation': 'ArtStation',

    // Hero
    'hero.badge': '3D ARTIST // HARD SURFACE & VEHICLES',
    'hero.title1': 'MICHAŁ',
    'hero.title2': 'MOLENDA',
    'hero.desc': 'Specialized in complex mechanical forms, vehicle architecture, environment props, and real-time game art pipelines. Combining technical precision with cinematic visual fidelity.',
    'hero.explore': 'Explore Works',
    'hero.aboutMe': 'About Me',
    'hero.contact': 'Contact',
    'hero.stat1.val': 'AAA',
    'hero.stat1.label': 'Hard Surface Spec',
    'hero.stat2.val': 'PBR',
    'hero.stat2.label': 'Real-time Pipeline',
    'hero.stat3.val': 'UE5',
    'hero.stat3.label': 'Game Engine Ready',
    'hero.tag': 'VEHICLE & HARD SURFACE',

    // Portfolio
    'portfolio.badge': 'FEATURED WORKS & CASE STUDIES',
    'portfolio.title': 'PORTFOLIO',
    'portfolio.desc': 'A curated showcase of game assets, hard surface vehicles, environment props, and technical 3D projects.',
    'portfolio.all': 'All Works',
    'portfolio.gameArt': 'Game Art',
    'portfolio.vehicles': 'Vehicles & Machinery',
    'portfolio.props': 'Hard Surface & Props',
    'portfolio.viewDetails': 'View Case Study',
    'portfolio.roles': 'Roles',
    'portfolio.context': 'Context',
    'portfolio.tools': 'Tools',
    'portfolio.responsibilities': 'Key Responsibilities',
    'portfolio.overview': 'Project Overview',
    'portfolio.gallery': 'Production Gallery',
    'portfolio.close': 'Close',

    // About
    'about.badge': 'PROFILE & ARTISTIC PHILOSOPHY',
    'about.title': 'ABOUT ME',
    'about.p1': 'I am a 3D Artist focused on Hard Surface, Vehicle Design, and Real-Time Asset Production for games and interactive experiences.',
    'about.p2': 'My workflow merges high-poly mechanical engineering accuracy with optimized low-poly game-ready topology, clean UV unwrap packaging, and high-fidelity PBR texturing.',
    'about.specTitle': 'CORE SPECIALIZATIONS',
    'about.spec1': 'High & low poly modeling with subdivision & CAD-like bevel discipline',
    'about.spec2': 'PBR texturing pipelines (Substance 3D Painter / Designer) with detailed wear and decals',
    'about.spec3': 'Unreal Engine 5 asset integration, material setups, Nanite & Lumen optimization',
    'about.spec4': 'Modular environment architecture and mechanical prop assembly',

    // Experience
    'exp.badge': 'CAREER & PRODUCTION HISTORY',
    'exp.title': 'EXPERIENCE',
    'exp.desc': 'Commercial agency production, game development internships, and high-fidelity 3D visualization.',

    // Skills
    'skills.badge': 'TECHNICAL PROFICIENCY & WORKFLOWS',
    'skills.title': 'SKILLS & CAPABILITIES',
    'skills.desc': 'A comprehensive overview of competencies across 3D production, automotive/hard surface, real-time game art, and motion design.',

    // Community
    'community.badge': 'INDUSTRY ENGAGEMENT & PERSONAL VENTURES',
    'community.title': 'COMMUNITY & PERSONAL PROJECTS',
    'community.desc': 'Active industry involvement through AAA playtesting programs, conferences, community mods, and dedicated after-hours game development.',

    // Contact
    'contact.badge': 'INITIATE CONTACT',
    'contact.title': "LET'S CREATE SOMETHING GREAT.",
    'contact.desc': 'Open to opportunities, collaborations and interesting projects.',
    'contact.emailLabel': 'Direct Email',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied!',
    'contact.socials': 'Find me on professional platforms:',
    'contact.footer': 'Crafted for high performance & game-ready fidelity.',
  },
  pl: {
    // Nav
    'nav.projects': 'Projekty',
    'nav.about': 'O mnie',
    'nav.experience': 'Doświadczenie',
    'nav.skills': 'Umiejętności',
    'nav.community': 'Działalność',
    'nav.contact': 'Kontakt',
    'nav.artstation': 'ArtStation',

    // Hero
    'hero.badge': '3D ARTIST // HARD SURFACE & POJAZDY',
    'hero.title1': 'MICHAŁ',
    'hero.title2': 'MOLENDA',
    'hero.desc': 'Specjalizacja w zaawansowanych konstrukcjach mechanicznych, pojazdach, rekwizytach środowiskowych oraz optymalizacji pod silniki gier (Real-time). Łączę techniczną precyzję z kinową jakością wizualną.',
    'hero.explore': 'Zobacz Prace',
    'hero.aboutMe': 'O Mnie',
    'hero.contact': 'Kontakt',
    'hero.stat1.val': 'AAA',
    'hero.stat1.label': 'Standard Hard Surface',
    'hero.stat2.val': 'PBR',
    'hero.stat2.label': 'Pipeline Real-time',
    'hero.stat3.val': 'UE5',
    'hero.stat3.label': 'Gotowość pod Unreal Engine',
    'hero.tag': 'POJAZDY I HARD SURFACE',

    // Portfolio
    'portfolio.badge': 'WYBRANE PROJEKTY I CASE STUDIES',
    'portfolio.title': 'PORTFOLIO',
    'portfolio.desc': 'Zbiór assetów do gier, modeli pojazdów, maszyn, rekwizytów otoczenia oraz projektów technicznych 3D.',
    'portfolio.all': 'Wszystkie',
    'portfolio.gameArt': 'Game Art',
    'portfolio.vehicles': 'Pojazdy i Maszyny',
    'portfolio.props': 'Hard Surface i Props',
    'portfolio.viewDetails': 'Zobacz Szczegóły',
    'portfolio.roles': 'Role w projekcie',
    'portfolio.context': 'Kontekst',
    'portfolio.tools': 'Oprogramowanie',
    'portfolio.responsibilities': 'Zakres odpowiedzialności',
    'portfolio.overview': 'Opis projektu',
    'portfolio.gallery': 'Galeria produkcyjna',
    'portfolio.close': 'Zamknij',

    // About
    'about.badge': 'PROFIL I FILOZOFIA TWÓRCZA',
    'about.title': 'O MNIE',
    'about.p1': 'Jestem 3D Artistą skupionym na Hard Surface, projektowaniu pojazdów i produkcji zoptymalizowanych modeli Real-Time dla gier i aplikacji interaktywnych.',
    'about.p2': 'Mój proces łączy inżynieryjną precyzję modeli high-poly ze zoptymalizowaną siatką low-poly pod gry, efektywnym rozłożeniem UV i realistycznym teksturowaniem PBR.',
    'about.specTitle': 'GŁÓWNE SPECJALIZACJE',
    'about.spec1': 'Modelowanie High & Low poly z zachowaniem zasad subdivision i precyzyjnych fazowań',
    'about.spec2': 'Teksturowanie PBR (Substance 3D Painter / Designer) z realistycznymi śladami zużycia i kalkomanii',
    'about.spec3': 'Integracja z Unreal Engine 5, konfiguracja materiałów, optymalizacja Nanite & Lumen',
    'about.spec4': 'Modularne zestawy architektoniczne i konstrukcje mechaniczne',

    // Experience
    'exp.badge': 'ŚCIEŻKA ZAWODOWA I HISTORIA PRODUKCJI',
    'exp.title': 'DOŚWIADCZENIE',
    'exp.desc': 'Komercyjna praca agencyjna, staże gamedevowe oraz wizualizacje 3D wysokiej wierności.',

    // Skills
    'skills.badge': 'KOMPETENCJE TECHNICZNE I WORKFLOW',
    'skills.title': 'UMIEJĘTNOŚCI',
    'skills.desc': 'Kompleksowy przegląd umiejętności w modelowaniu 3D, branży automotive/hard surface, game arcie czasu rzeczywistego i animacji.',

    // Community
    'community.badge': 'ZAANGAŻOWANIE BRANŻOWE I PROJEKTY WŁASNE',
    'community.title': 'SPOŁECZNOŚĆ I PROJEKTY WŁASNE',
    'community.desc': 'Aktywny udział w branży poprzez programy playtestingu gier AAA, konferencje, mody społecznościowe i tworzenie gier po godzinach.',

    // Contact
    'contact.badge': 'SKONTAKTUJ SIĘ',
    'contact.title': 'STWÓRZMY COŚ WYJĄTKOWEGO.',
    'contact.desc': 'Jestem otwarty na oferty pracy, zlecenia oraz ciekawe projekty.',
    'contact.emailLabel': 'Adres e-mail',
    'contact.copy': 'Kopiuj',
    'contact.copied': 'Skopiowano!',
    'contact.socials': 'Profile zawodowe:',
    'contact.footer': 'Zbudowane z myślą o najwyższej wydajności i standardzie Game-Ready.',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('user_lang');
    if (saved === 'pl' || saved === 'en') return saved;
    return navigator.language.startsWith('pl') ? 'pl' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('user_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
