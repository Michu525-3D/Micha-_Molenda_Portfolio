export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge?: string;
  roles: string[];
  clientOrContext: string;
  year?: string;
  summary: string;
  description: string[];
  responsibilities: string[];
  tools: string[];
  images: {
    hero: string;
    gallery: {
      url: string;
      caption: string;
    }[];
  };
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  status?: string;
  points: string[];
  subproject?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CommunityProject {
  title: string;
  subtitle: string;
  badge: string;
  points: string[];
}

export interface PortfolioDataset {
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  communityProjects: CommunityProject[];
}

export const PORTFOLIO_DATA_EN: PortfolioDataset = {
  projects: [
    {
      id: 'biogenesis',
      title: 'BIOGENESIS',
      subtitle: 'Sci-Fi / Biological Game Project',
      category: 'Game Development / Leadership',
      badge: 'After Hours / Independent',
      roles: ['Lead Artist', 'Lead 3D Animator', 'Lead Level Designer'],
      clientOrContext: 'Independent Game Project (After hours)',
      summary: 'A dark, atmospheric sci-fi game project focused on hard surface mechanical design blended with organic biological structures.',
      description: [
        'Comprehensive artistic direction and asset production for Biogenesis, an ambitious independent game project developed after hours.',
        'Supervised visual consistency from concept art translation to final level assembly in-engine, establishing high production benchmarks for lighting, environmental assets, and animation dynamics.'
      ],
      responsibilities: [
        'Art direction and visual style cohesion',
        'Lead 3D animation pipelines for biological & mechanical assets',
        'Lead level design and spatial composition for gameplay clarity',
        'Asset optimization and LOD setups for real-time performance'
      ],
      tools: ['Unreal Engine', 'Blender / Maya', 'Substance 3D Painter', 'ZBrush'],
      images: {
        hero: '/projects/biogenesis/hero.jpg',
        gallery: [
          { url: '/projects/biogenesis/gallery-1.jpg', caption: 'Hard surface structural elements & level mood' },
          { url: '/projects/biogenesis/gallery-2.jpg', caption: 'Biological environment layout & lighting passes' },
          { url: '/projects/biogenesis/gallery-3.jpg', caption: 'Mechanical prop wireframe & texturing' }
        ]
      },
      featured: true
    },
    {
      id: 'undo-revolution',
      title: 'UN/DO: THE REVOLUTION',
      subtitle: 'Cybernetic Action / Narrative Game Experience',
      category: 'Game Development',
      badge: 'University Project',
      roles: ['Game Artist', 'Environment & Props Production'],
      clientOrContext: 'University Project',
      summary: 'Action-driven game production exploring futuristic industrial environments, high-poly hard surface mechanisms, and gritty dystopian ambiance.',
      description: [
        'Created as a dedicated game development university project. Focused on the creation of high-impact visual assets and environment storytelling.',
        'Emphasis on modular kits, sci-fi mechanical machinery, and atmospheric level dressing that compliments fast-paced action.'
      ],
      responsibilities: [
        'Hard surface prop and machinery modeling',
        'PBR texturing workflow with realistic wear, dirt, and decals',
        'Environment dressing and modular architectural elements',
        'Real-time material configuration and collision creation'
      ],
      tools: ['Unreal Engine', '3D Modeling Suite', 'Substance 3D Painter'],
      images: {
        hero: '/projects/undo-revolution/hero.jpg',
        gallery: [
          { url: '/projects/undo-revolution/gallery-1.jpg', caption: 'Industrial complex modular set' },
          { url: '/projects/undo-revolution/gallery-2.jpg', caption: 'Sci-fi machinery breakdown & UV packing' },
          { url: '/projects/undo-revolution/gallery-3.jpg', caption: 'Real-time scene render inside game engine' }
        ]
      },
      featured: true
    },
    {
      id: 'star-wars-rogue-squadron',
      title: 'STAR WARS ROGUE SQUADRON 2 REMASTERED',
      subtitle: 'Next-Gen Vehicle Art & Interactive Prototype',
      category: 'Game Art / Vehicle Art / Personal Project',
      badge: 'Personal Prototype',
      roles: ['Vehicle Artist', 'Technical Artist', 'Prototype Creator'],
      clientOrContext: 'Personal Project / Game Prototype',
      summary: 'A tribute remaster prototype bringing classic Star Wars starfighters to modern AAA cinematic and real-time standards.',
      description: [
        'Personal game prototype honoring Star Wars Rogue Squadron 2. Designed to showcase cutting-edge vehicle art, authentic paneling, cockpit fidelity, and aerodynamic hard surface craftsmanship.',
        'Developed with extreme attention to Lucasfilm canon aesthetic, panel gap precision, mechanical landing gears, weathering, and thruster exhaust kinematics.'
      ],
      responsibilities: [
        'Full vehicle modeling: fuselage, cockpit interior, mechanical sub-systems',
        'High-poly to low-poly baking and micro-detail panel normals',
        'Authentic Star Wars weathering: blast scoring, paint chips, hydraulic oil leakage',
        'Playable prototype integration and flight camera dynamics'
      ],
      tools: ['Hard Surface Modeling Tool', 'Substance 3D Painter', 'Unreal Engine', 'Marmoset Toolbag'],
      images: {
        hero: '/projects/star-wars-rogue-squadron/hero.jpg',
        gallery: [
          { url: '/projects/star-wars-rogue-squadron/gallery-1.jpg', caption: 'Full starfighter beauty render with cinematic lighting' },
          { url: '/projects/star-wars-rogue-squadron/gallery-2.jpg', caption: 'Detailed cockpit and thruster mechanical assemblies' },
          { url: '/projects/star-wars-rogue-squadron/gallery-3.jpg', caption: 'Wireframe and PBR texture map decomposition' }
        ]
      },
      featured: true
    },
    {
      id: 'rubens-games',
      title: 'RUBENS GAMES',
      subtitle: 'Aqua Dark Purrifiers: Cleaning Chaos',
      category: 'Game Art / Environment / Props / Creatures',
      badge: 'Studio Internship',
      roles: ['3D Artist — Internship'],
      clientOrContext: 'Rubens Games (15.07.2025 – 15.11.2025)',
      summary: 'Environment props, stylized creature sculpting, and level design for "Aqua Dark Purrifiers: Cleaning Chaos".',
      description: [
        'Served as a 3D Artist Intern at Rubens Games, directly delivering game-ready assets for the production title "Aqua Dark Purrifiers: Cleaning Chaos".',
        'Balanced technical constraints of the game engine with visual fidelity, executing tasks ranging from organic creature sculpting to hard-surface environmental assets and interactive props.'
      ],
      responsibilities: [
        'Environmental prop modeling and game-ready asset optimization',
        'Creature sculpting with distinctive silhouette and anatomical details',
        'High-to-low poly baking, unwrapping, and stylized/realistic texturing',
        'Level design passes and engine asset implementation'
      ],
      tools: ['ZBrush', 'Blender / Maya', 'Substance 3D', 'Game Engine'],
      images: {
        hero: '/projects/rubens-games/hero.jpg',
        gallery: [
          { url: '/projects/rubens-games/gallery-1.jpg', caption: 'Key creature sculpt & high-res topology' },
          { url: '/projects/rubens-games/gallery-2.jpg', caption: 'Environment prop pack and in-game look' },
          { url: '/projects/rubens-games/gallery-3.jpg', caption: 'Level composition and asset placement' }
        ]
      },
      featured: false
    },
    {
      id: 'gpd-agency',
      title: 'PRODUCT & MOTION VISUALIZATION',
      subtitle: 'High-End Commercial & Digital Experiences',
      category: '3D Visualization / Motion Design',
      badge: 'Agency Work',
      roles: ['Junior Motion Designer'],
      clientOrContext: 'GPD Agency (19.01 – Present)',
      summary: 'Commercial 3D product visualizations, motion design, 3D scanning, motion capture, and cutting-edge AI advertising pipelines.',
      description: [
        'Producing premium 3D commercial visuals and kinetic motion graphics for major advertising campaigns at GPD Agency.',
        'Leveraging 3D photogrammetry/scanning, optical motion capture cleanup and retargeting, combined with studio lighting setups for photorealistic product renders.'
      ],
      responsibilities: [
        'Photorealistic product modeling, shading, and cinematic rendering',
        'Motion capture data processing and character/camera retargeting',
        '3D mesh clean-up and retopology from raw optical 3D scans',
        'Motion design animations and AI-augmented advertising pipelines'
      ],
      tools: ['Cinema 4D / Blender', 'After Effects', 'Substance 3D', 'Photogrammetry / MoCap Software'],
      images: {
        hero: '/projects/gpd-agency/hero.jpg',
        gallery: [
          { url: '/projects/gpd-agency/gallery-1.jpg', caption: 'Photorealistic commercial product render' },
          { url: '/projects/gpd-agency/gallery-2.jpg', caption: 'Motion capture rig & kinetic sequence' },
          { url: '/projects/gpd-agency/gallery-3.jpg', caption: '3D scan retopology and procedural shading' }
        ]
      },
      featured: false
    },
    {
      id: 'furniture-visualization',
      title: 'FURNITURE & ARCHVIZ',
      subtitle: 'Precision Interior Arrangements & Materiality',
      category: '3D Visualization',
      badge: 'Commercial Client',
      roles: ['3D Artist'],
      clientOrContext: 'KT Design Sp. z o.o. (17.08.2024 – 17.02.2026)',
      summary: 'Accurate architectural and furniture visualizations showcasing fabric folds, joinery, and photorealistic interior lighting.',
      description: [
        'Responsible for crafting catalog-ready and architectural interior 3D visualizations for KT Design Sp. z o.o.',
        'Focused on exacting real-world tolerances, complex upholstery fabric simulation, wood grain texturing, and raytraced studio interior lighting.'
      ],
      responsibilities: [
        '3D modeling of modular and bespoke designer furniture',
        'Interior scene composition, styling, and color harmony',
        'Realistic fabric/leather shaders and accurate physical materials',
        'High-resolution multi-angle batch rendering for marketing'
      ],
      tools: ['3D Studio / Blender', 'V-Ray / Corona / Cycles', 'Photoshop'],
      images: {
        hero: '/projects/furniture-visualization/hero.jpg',
        gallery: [
          { url: '/projects/furniture-visualization/gallery-1.jpg', caption: 'Contemporary living space arrangement render' },
          { url: '/projects/furniture-visualization/gallery-2.jpg', caption: 'Detailed joinery and fabric texture close-up' },
          { url: '/projects/furniture-visualization/gallery-3.jpg', caption: 'Studio white-box lighting and material passes' }
        ]
      },
      featured: false
    }
  ],
  experiences: [
    {
      company: 'GPD AGENCY',
      role: 'Junior Motion Designer',
      period: '19.01 – Present',
      status: 'Current Role',
      points: [
        'Product visualizations',
        'Motion capture',
        '3D scans',
        'Motion design',
        'AI advertisements'
      ]
    },
    {
      company: 'RUBENS GAMES',
      role: '3D Artist – Internship',
      period: '15.07.2025 – 15.11.2025',
      subproject: 'Aqua Dark Purrifiers: Cleaning Chaos',
      points: [
        'Environmental props',
        'Creature sculpting',
        'Modeling and texturing',
        'Level Design'
      ]
    },
    {
      company: 'KT DESIGN SP. Z O.O.',
      role: '3D Artist',
      period: '17.08.2024 – 17.02.2026',
      points: [
        '3D visualizations of furniture',
        'Interior arrangements'
      ]
    }
  ],
  skillCategories: [
    {
      title: '3D ART',
      iconName: 'Box',
      skills: [
        'Hard Surface Modeling',
        'Vehicle Modeling',
        '3D Modeling',
        '3D Sculpting',
        'Texturing',
        'Props',
        'Environment Art'
      ]
    },
    {
      title: 'VISUALIZATION',
      iconName: 'Layers',
      skills: [
        'Product Visualization',
        'Furniture Visualization',
        '3D Scanning'
      ]
    },
    {
      title: 'MOTION & OTHER',
      iconName: 'Cpu',
      skills: [
        'Motion Design',
        'Motion Capture',
        'AI-based Advertising'
      ]
    },
    {
      title: 'GAME DEVELOPMENT',
      iconName: 'Gamepad2',
      skills: [
        'Level Design',
        'Game Art',
        'Game Prototyping',
        'Gameplay Testing'
      ]
    }
  ],
  communityProjects: [
    {
      title: 'PGA Poznań – Game Industry Conference',
      subtitle: 'Industry Networking & Knowledge Exchange',
      badge: 'Conference',
      points: [
        'Exploring gaming industry trends',
        'Talking with AAA and indie developers',
        'Discovering trends in next-gen game design'
      ]
    },
    {
      title: 'EA Playtesting Program & Community Forums',
      subtitle: 'F1, Battlefield, Apex Legends & Player Support',
      badge: 'Playtesting & Community',
      points: [
        'Participating in confidential game playtesting (F1, Battlefield, Apex Legends)',
        'Providing detailed feedback on gameplay mechanics & balance',
        'Testing new features, updates and pre-release game builds',
        'Active participation in EA forums and supporting players in technical troubleshooting'
      ]
    },
    {
      title: 'Star Wars Battlefront II – Kyber Mod',
      subtitle: 'Community Mod Testing & Feedback',
      badge: 'Modding & QA',
      points: [
        'Participating in dedicated game playtesting sessions',
        'Providing feedback on gameplay mechanics and netcode stability',
        'Testing new features, server builds and custom game balance'
      ]
    },
    {
      title: 'STARFLIGHT',
      subtitle: 'Vehicle Art in Star Wars Universe',
      badge: 'Fan Project',
      points: [
        'Fan project set in the Star Wars universe',
        'Detailed Vehicle Art & spacecraft modeling',
        'High-poly paneling and material definition'
      ]
    },
    {
      title: 'BIOGENESIS & UN/DO: THE REVOLUTION',
      subtitle: 'Game Art & Productions (Independent & University)',
      badge: 'Game Production',
      points: [
        'Deep game development involvement across university and personal projects',
        'Art direction, character/creature animation & level design passes',
        'Pushing real-time limits in engine environments'
      ]
    }
  ]
};

export const PORTFOLIO_DATA_PL: PortfolioDataset = {
  projects: [
    {
      id: 'biogenesis',
      title: 'BIOGENESIS',
      subtitle: 'Mroczny projekt gry Sci-Fi / Biopunk',
      category: 'Tworzenie Gier / Leadership',
      badge: 'Projekt Niezależny / Po godzinach',
      roles: ['Lead Artist', 'Główny Animator 3D', 'Główny Level Designer'],
      clientOrContext: 'Niezależny projekt gry (po godzinach)',
      summary: 'Mroczny, klimatyczny projekt gry sci-fi skupiony na precyzyjnych konstrukcjach mechanicznych hard-surface połączonych ze strukturami organicznymi.',
      description: [
        'Kompleksowy kierunek artystyczny i produkcja assetów 3D do projektu Biogenesis – ambitnej gry niezależnej tworzonej po godzinach.',
        'Nadzór nad spójnością wizualną: od interpretacji konceptów graficznych po finalną kompozycję poziomów w silniku gry, ustalając wysokie standardy oświetlenia, otoczenia i dynamiki animacji.'
      ],
      responsibilities: [
        'Kierunek artystyczny i zachowanie spójności stylu wizualnego',
        'Projektowanie i wdrożenie pipeline animacji 3D dla assetów mechanicznych i biologicznych',
        'Level design i kompozycja przestrzenna pod kątem czytelności rozgrywki',
        'Optymalizacja siatek 3D i konfiguracja poziomów detali (LOD) pod kątem wydajności real-time'
      ],
      tools: ['Unreal Engine', 'Blender / Maya', 'Substance 3D Painter', 'ZBrush'],
      images: {
        hero: '/projects/biogenesis/hero.jpg',
        gallery: [
          { url: '/projects/biogenesis/gallery-1.jpg', caption: 'Elementy konstrukcyjne hard-surface i klimat poziomu' },
          { url: '/projects/biogenesis/gallery-2.jpg', caption: 'Układ środowiska biologicznego i przebiegi oświetlenia' },
          { url: '/projects/biogenesis/gallery-3.jpg', caption: 'Siatka wireframe i teksturowanie rekwizytu mechanicznego' }
        ]
      },
      featured: true
    },
    {
      id: 'undo-revolution',
      title: 'UN/DO: THE REVOLUTION',
      subtitle: 'Cyberpunkowa Gra Akcji z Warstwą Fabularną',
      category: 'Tworzenie Gier',
      badge: 'Projekt Uczelniany',
      roles: ['Game Artist', 'Produkcja Środowiska i Rekwizytów'],
      clientOrContext: 'Projekt Uczelniany',
      summary: 'Dynamiczna produkcja gry osadzona w futurystycznych kompleksach przemysłowych, z naciskiem na maszyny hard-surface i dystopijny klimat.',
      description: [
        'Projekt zrealizowany w ramach studiów gamedevowych. Skupiony na tworzeniu wyrazistych assetów wizualnych i opowiadaniu historii poprzez otoczenie (environmental storytelling).',
        'Nacisk na modułowe zestawy elementów architektonicznych, zaawansowane maszyny sci-fi i immersyjne wypełnienie poziomów pasujące do dynamicznej akcji.'
      ],
      responsibilities: [
        'Modelowanie maszyn i rekwizytów hard-surface',
        'Teksturowanie PBR z uwzględnieniem realistycznego zużycia, zabrudzeń i oznaczeń technicznych',
        'Dressing poziomów i modularne elementy architektury',
        'Konfiguracja materiałów w silniku gry i generowanie precyzyjnych kolizji'
      ],
      tools: ['Unreal Engine', 'Pakiet do Modelowania 3D', 'Substance 3D Painter'],
      images: {
        hero: '/projects/undo-revolution/hero.jpg',
        gallery: [
          { url: '/projects/undo-revolution/gallery-1.jpg', caption: 'Modularny zestaw kompleksu przemysłowego' },
          { url: '/projects/undo-revolution/gallery-2.jpg', caption: 'Rozłożenie maszyn sci-fi i optymalizacja UV' },
          { url: '/projects/undo-revolution/gallery-3.jpg', caption: 'Render sceny w czasie rzeczywistym w silniku gry' }
        ]
      },
      featured: true
    },
    {
      id: 'star-wars-rogue-squadron',
      title: 'STAR WARS ROGUE SQUADRON 2 REMASTERED',
      subtitle: 'Next-Gen Pojazdy i Interaktywny Prototyp',
      category: 'Game Art / Sztuka Pojazdów / Projekt Własny',
      badge: 'Własny Prototyp',
      roles: ['Vehicle Artist', 'Technical Artist', 'Twórca Prototypu'],
      clientOrContext: 'Projekt Osobisty / Grywalny Prototyp',
      summary: 'Hołd dla klasycznego Rogue Squadron 2 – przeniesienie myśliwców z uniwersum Gwiezdnych Wojen do nowoczesnych standardów kinowych i real-time.',
      description: [
        'Autorski prototyp gry składający hołd Star Wars Rogue Squadron 2. Zaprojektowany, by zaprezentować najwyższej klasy kunszt modelowania pojazdów: wierne poszycie kadłuba, kokpit i aerodynamikę hard surface.',
        'Stworzony ze szczególną dbałością o kanoniczną estetykę Lucasfilm: precyzję szczelin paneli, mechanizmy podwozia, ślady eksploatacji bojowej oraz kinematykę napędów strumieniowych.'
      ],
      responsibilities: [
        'Kompletny model myśliwca: kadłub, wnętrze kokpitu, mechaniczne układy pomocnicze',
        'Baking high-poly do low-poly i generowanie mikrodetali powierzchni (normal mapy paneli)',
        'Autentyczny weathering: ślady po trafieniach blasterów, odpryski lakieru, zacieki hydrauliki',
        'Integracja grywalnego prototypu i dynamika kamery lotu w silniku'
      ],
      tools: ['Narzędzia Hard Surface', 'Substance 3D Painter', 'Unreal Engine', 'Marmoset Toolbag'],
      images: {
        hero: '/projects/star-wars-rogue-squadron/hero.jpg',
        gallery: [
          { url: '/projects/star-wars-rogue-squadron/gallery-1.jpg', caption: 'Render piękności myśliwca w oświetleniu filmowym' },
          { url: '/projects/star-wars-rogue-squadron/gallery-2.jpg', caption: 'Detale mechaniczne kokpitu i zespołu silników' },
          { url: '/projects/star-wars-rogue-squadron/gallery-3.jpg', caption: 'Siatka wireframe i dekompozycja map tekstur PBR' }
        ]
      },
      featured: true
    },
    {
      id: 'rubens-games',
      title: 'RUBENS GAMES',
      subtitle: 'Aqua Dark Purrifiers: Cleaning Chaos',
      category: 'Game Art / Środowisko / Props / Postacie',
      badge: 'Staż w Studiu',
      roles: ['3D Artist — Stażysta'],
      clientOrContext: 'Rubens Games (15.07.2025 – 15.11.2025)',
      summary: 'Rekwizyty środowiskowe, rzeźbienie stylizowanych stworzeń i projektowanie poziomów do gry "Aqua Dark Purrifiers: Cleaning Chaos".',
      description: [
        'Praca na stanowisku 3D Artysty w studiu Rubens Games przy tworzeniu komercyjnego tytułu "Aqua Dark Purrifiers: Cleaning Chaos".',
        'Łączenie ograniczeń technicznych silnika gry z estetyką wizualną – od organicznego rzeźbienia postaci po rekwizyty hard-surface i interaktywne elementy otoczenia.'
      ],
      responsibilities: [
        'Modelowanie elementów otoczenia i optymalizacja siatek pod kątem gier',
        'Rzeźbienie kreatur o charakterystycznej sylwetce i szczegółowej anatomii',
        'Proces high-to-low poly baking, rozkładanie UV i teksturowanie stylizowane/realistyczne',
        'Współtworzenie układu poziomów (level design) i wdrażanie assetów do silnika'
      ],
      tools: ['ZBrush', 'Blender / Maya', 'Substance 3D', 'Silnik Gry'],
      images: {
        hero: '/projects/rubens-games/hero.jpg',
        gallery: [
          { url: '/projects/rubens-games/gallery-1.jpg', caption: 'Główny rzeźb stworzenia i siatka o wysokiej gęstości' },
          { url: '/projects/rubens-games/gallery-2.jpg', caption: 'Zestaw rekwizytów otoczenia w grze' },
          { url: '/projects/rubens-games/gallery-3.jpg', caption: 'Kompozycja poziomu i rozmieszczenie elementów' }
        ]
      },
      featured: false
    },
    {
      id: 'gpd-agency',
      title: 'WIZUALIZACJA PRODUKTOWA I MOTION DESIGN',
      subtitle: 'Komercyjne Kampanie Reklamowe i Doświadczenia Wizualne',
      category: 'Wizualizacja 3D / Motion Design',
      badge: 'Praca Agencyjna',
      roles: ['Junior Motion Designer'],
      clientOrContext: 'Agencja GPD (19.01 – Obecnie)',
      summary: 'Komercyjne wizualizacje produktowe 3D, animacja motion design, skanowanie 3D, technologia motion capture oraz nowoczesne pipeline reklamowe oparte o AI.',
      description: [
        'Produkcja wysokiej jakości materiałów 3D i kinowych animacji motion graphics na potrzeby ogólnokrajowych kampanii reklamowych w agencji GPD.',
        'Wykorzystywanie fotogrametrii/skanowania 3D, oczyszczania i dopasowywania danych z optycznego Motion Capture oraz studyjnego oświetlenia do fotorealistycznych renderów.'
      ],
      responsibilities: [
        'Fotorealistyczne modelowanie produktów, cieniowanie materiałów i rendering studyjny',
        'Przetwarzanie danych Motion Capture i retargeting animacji postaci i kamer',
        'Retopologia i oczyszczanie surowych skanów optycznych 3D',
        'Animacje motion design i pipeline generatywnego AI w kreacji reklamowej'
      ],
      tools: ['Cinema 4D / Blender', 'After Effects', 'Substance 3D', 'Oprogramowanie Photogrammetry / MoCap'],
      images: {
        hero: '/projects/gpd-agency/hero.jpg',
        gallery: [
          { url: '/projects/gpd-agency/gallery-1.jpg', caption: 'Fotorealistyczny render produktu komercyjnego' },
          { url: '/projects/gpd-agency/gallery-2.jpg', caption: 'Szkielet Motion Capture i sekwencja kinetyczna' },
          { url: '/projects/gpd-agency/gallery-3.jpg', caption: 'Retopologia skanu 3D i cieniowanie proceduralne' }
        ]
      },
      featured: false
    },
    {
      id: 'furniture-visualization',
      title: 'MEBLE I ARCHVIZ',
      subtitle: 'Precyzyjne Aranżacje Wnętrz i Realizm Materiałów',
      category: 'Wizualizacja 3D',
      badge: 'Klient Komercyjny',
      roles: ['3D Artist'],
      clientOrContext: 'KT Design Sp. z o.o. (17.08.2024 – 17.02.2026)',
      summary: 'Wierne wizualizacje architektoniczne i meblowe oddające strukturę tkanin, łączenia stolarskie i fotorealistyczne oświetlenie wnętrz.',
      description: [
        'Odpowiedzialność za tworzenie gotowych do katalogów wizualizacji wnętrzarskich i produktowych dla KT Design Sp. z o.o.',
        'Skupienie na dokładnym odwzorowaniu rzeczywistych wymiarów, symulacji marszczeń tapicerki, usłojenia drewna oraz studyjnym oświetleniu ray-tracing.'
      ],
      responsibilities: [
        'Modelowanie 3D designerskich mebli modułowych i na zamówienie',
        'Kompozycja scen wnętrz, stylizacja i harmonia barwna',
        'Realistyczne shadery tkanin, skóry i fizycznie poprawne materiały PBR',
        'Wysokorozdzielcze renderowanie wielokątowe na potrzeby materiałów marketingowych'
      ],
      tools: ['3D Studio / Blender', 'V-Ray / Corona / Cycles', 'Photoshop'],
      images: {
        hero: '/projects/furniture-visualization/hero.jpg',
        gallery: [
          { url: '/projects/furniture-visualization/gallery-1.jpg', caption: 'Współczesna aranżacja strefy dziennej' },
          { url: '/projects/furniture-visualization/gallery-2.jpg', caption: 'Zbliżenie na detale stolarskie i fakturę tkanin' },
          { url: '/projects/furniture-visualization/gallery-3.jpg', caption: 'Studyjne oświetlenie i testy materiałowe clay' }
        ]
      },
      featured: false
    }
  ],
  experiences: [
    {
      company: 'AGENCJA GPD',
      role: 'Junior Motion Designer',
      period: '19.01 – Obecnie',
      status: 'Aktualne stanowisko',
      points: [
        'Wizualizacje produktowe 3D',
        'Praca z danymi Motion Capture',
        'Skanowanie i czyszczenie siatek 3D',
        'Animacja i Motion Design',
        'Wykorzystanie AI w reklamie'
      ]
    },
    {
      company: 'RUBENS GAMES',
      role: '3D Artist – Stażysta',
      period: '15.07.2025 – 15.11.2025',
      subproject: 'Aqua Dark Purrifiers: Cleaning Chaos',
      points: [
        'Rekwizyty środowiskowe',
        'Rzeźbienie stylizowanych kreatur',
        'Modelowanie i teksturowanie',
        'Projektowanie poziomów (Level Design)'
      ]
    },
    {
      company: 'KT DESIGN SP. Z O.O.',
      role: '3D Artist',
      period: '17.08.2024 – 17.02.2026',
      points: [
        'Wizualizacje mebli w 3D',
        'Aranżacje przestrzenne wnętrz'
      ]
    }
  ],
  skillCategories: [
    {
      title: 'GRAFIKA 3D',
      iconName: 'Box',
      skills: [
        'Modelowanie Hard Surface',
        'Modelowanie Pojazdów',
        'Modelowanie 3D Ogólne',
        'Rzeźbienie 3D (Sculpting)',
        'Teksturowanie PBR',
        'Propsy i Rekwizyty',
        'Grafika Środowiskowa (Environment)'
      ]
    },
    {
      title: 'WIZUALIZACJA',
      iconName: 'Layers',
      skills: [
        'Wizualizacja Produktowa',
        'Wizualizacja Mebli',
        'Skanowanie 3D'
      ]
    },
    {
      title: 'MOTION & NOWE TECHNOLOGIE',
      iconName: 'Cpu',
      skills: [
        'Motion Design',
        'Motion Capture',
        'Reklama oparta o AI'
      ]
    },
    {
      title: 'GAMEDEV / TWORZENIE GIER',
      iconName: 'Gamepad2',
      skills: [
        'Level Design',
        'Game Art',
        'Prototypowanie Gier',
        'Playtesting i Analiza Rozgrywki'
      ]
    }
  ],
  communityProjects: [
    {
      title: 'PGA Poznań – Targi Branży Gier',
      subtitle: 'Networking branżowy i wymiana doświadczeń',
      badge: 'Konferencja',
      points: [
        'Poznawanie najnowszych trendów w branży gier',
        'Rozmowy i networking z twórcami ze studiów AAA oraz indie',
        'Odkrywanie nowoczesnych rozwiązań w projektowaniu gier nowej generacji'
      ]
    },
    {
      title: 'Program Playtestingu EA & Fora Społeczności',
      subtitle: 'F1, Battlefield, Apex Legends oraz wsparcie graczy',
      badge: 'Playtesting i Społeczność',
      points: [
        'Udział w poufnych testach gier (m.in. F1, Battlefield, Apex Legends)',
        'Dostarczanie szczegółowego feedbacku dotyczącego mechanik i balansu rozgrywki',
        'Testowanie nowych funkcjonalności i wczesnych wersji gier przed premierą',
        'Aktywny udział na oficjalnych forach EA i pomoc społeczności w rozwiązywaniu problemów technicznych'
      ]
    },
    {
      title: 'Star Wars Battlefront II – Kyber Mod',
      subtitle: 'Testy modyfikacji społecznościowej i QA',
      badge: 'Modding & QA',
      points: [
        'Udział w dedykowanych sesjach playtestingu wieloosobowego',
        'Zgłaszanie uwag odnośnie stabilności kodu sieciowego i mechanik walki',
        'Testowanie nowych mechanik, wersji serwerowych i autorskiego balansu rozgrywki'
      ]
    },
    {
      title: 'STARFLIGHT',
      subtitle: 'Sztuka Pojazdów w Uniwersum Star Wars',
      badge: 'Projekt Fanowski',
      points: [
        'Autorski projekt fanowski osadzony w świecie Gwiezdnych Wojen',
        'Precyzyjne modelowanie statków kosmicznych i pojazdów',
        'Zaawansowane poszycie kadłuba i definicja materiałowa PBR'
      ]
    },
    {
      title: 'BIOGENESIS & UN/DO: THE REVOLUTION',
      subtitle: 'Produkcja gier (projekty własne i uczelniane)',
      badge: 'Produkcja Gry',
      points: [
        'Zaangażowanie w pełny cykl produkcyjny w projektach uczelnianych i niezależnych',
        'Kierunek artystyczny, animacje postaci/kreatur oraz projektowanie poziomów',
        'Eksploracja możliwości silników gier w czasie rzeczywistym'
      ]
    }
  ]
};

// Default export for backwards compatibility
export const PROJECTS = PORTFOLIO_DATA_EN.projects;
export const EXPERIENCES = PORTFOLIO_DATA_EN.experiences;
export const SKILL_CATEGORIES = PORTFOLIO_DATA_EN.skillCategories;
export const COMMUNITY_PROJECTS = PORTFOLIO_DATA_EN.communityProjects;
