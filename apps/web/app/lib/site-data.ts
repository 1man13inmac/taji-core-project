export type LineageRecord = {
  slug: string;
  name: string;
  chineseName?: string;
  origin: string;
  period: string;
  founder: string;
  overview: string;
  hallmarks: string[];
  keyTeachers: string[];
};

export type TeacherRecord = {
  slug: string;
  name: string;
  chineseName?: string;
  birthYear?: number;
  deathYear?: number;
  lineage: string;
  teachers: string[];
  students: string[];
  summary: string;
  specialties: string[];
};

export type TimelineEvent = {
  year: string;
  title: string;
  detail: string;
  related: string[];
};

export const siteName = "Taji Core Project";

export const lineages: LineageRecord[] = [
  {
    slug: "chen",
    name: "Chen Style Taijiquan",
    chineseName: "陈式太极拳",
    origin: "Chenjiagou, Wen County, Henan",
    period: "17th century formulation",
    founder: "Commonly attributed to Chen Wangting",
    overview:
      "Chen style is widely recognized as the oldest major extant family transmission of Taijiquan, preserving both slow and fast methods, silk-reeling mechanics, and explicit fajin training.",
    hallmarks: [
      "Silk reeling (chan si jin) throughout full-body movement",
      "Alternation of slow continuity and explosive release",
      "Integrated empty-hand, weapons, and partner curriculum",
    ],
    keyTeachers: ["Chen Wangting", "Chen Changxing", "Chen Fake", "Chen Xin"],
  },
  {
    slug: "yang",
    name: "Yang Style Taijiquan",
    chineseName: "杨式太极拳",
    origin: "Yongnian / Beijing transmission",
    period: "19th century public spread",
    founder: "Systematized through Yang Luchan lineage",
    overview:
      "Yang style became the most globally disseminated branch, known for open frame training progression, smooth continuity, and broad accessibility while retaining internal mechanics and push-hands depth.",
    hallmarks: [
      "Large frame public form standardizations",
      "Emphasis on relaxation, structure, and continuity",
      "Strong push-hands and applied method tradition",
    ],
    keyTeachers: ["Yang Luchan", "Yang Banhou", "Yang Jianhou", "Yang Chengfu"],
  },
  {
    slug: "wu",
    name: "Wu Style Taijiquan",
    chineseName: "吴式太极拳",
    origin: "Beijing and later Shanghai transmission",
    period: "19th to 20th century formalization",
    founder: "Developed from teachings of Quan You and Wu Jianquan",
    overview:
      "Wu style is known for compact efficient movement, refined sensitivity work, and practical close-range usage developed through military and civilian teaching contexts.",
    hallmarks: [
      "Compact postures with economy of motion",
      "Advanced sticking, listening, and neutralization skills",
      "Detailed partner progression and practical entry mechanics",
    ],
    keyTeachers: ["Quan You", "Wu Jianquan", "Wu Gongyi", "Wu Yinghua"],
  },
  {
    slug: "wu-hao",
    name: "Wu/Hao Style Taijiquan",
    chineseName: "武/郝式太极拳",
    origin: "Yongnian scholarly transmission",
    period: "19th century",
    founder: "Wu Yuxiang with later Hao family refinement",
    overview:
      "Wu/Hao style preserves compact internal method, explicit classical theory integration, and precise body method expression often taught through highly technical pedagogical lines.",
    hallmarks: [
      "Small-frame precision and central equilibrium",
      "Strong textual connection to Taiji classics",
      "Methodical progressive training and correction culture",
    ],
    keyTeachers: ["Wu Yuxiang", "Li Yishe", "Hao Weizhen", "Hao Yueru"],
  },
  {
    slug: "sun",
    name: "Sun Style Taijiquan",
    chineseName: "孙式太极拳",
    origin: "Hebei and Beijing scholarly-martial circles",
    period: "Early 20th century synthesis",
    founder: "Sun Lutang",
    overview:
      "Sun style integrates Taiji with Xingyi and Bagua influences through agile stepping, open-close transitions, and a clear internal training framework documented in Sun family writings.",
    hallmarks: [
      "Follow-step mobility and agile transitions",
      "Integrated internal art principles",
      "Extensive written pedagogical documentation",
    ],
    keyTeachers: ["Sun Lutang", "Sun Cunzhou", "Sun Jianyun", "Li Yulin"],
  },
  {
    slug: "zhaobao",
    name: "Zhaobao Taijiquan",
    chineseName: "赵堡太极拳",
    origin: "Zhaobao Town, Wen County, Henan",
    period: "Pre-modern to modern family transmission",
    founder: "Multiple oral and documented branch narratives",
    overview:
      "Zhaobao is a historically rich branch with multiple transmission claims and detailed internal method traditions, including compact spiraling body method and paired work depth.",
    hallmarks: [
      "Distinct branch narratives and genealogies",
      "Spiral body method with rooted mobility",
      "Partner and applications emphasis",
    ],
    keyTeachers: ["Jiang Fa (attributed in some lineages)", "Du Yuanhua", "Chen Qingzhou", "Zheng Wuqing"],
  },
];

export const teachers: TeacherRecord[] = [
  {
    slug: "chen-wangting",
    name: "Chen Wangting",
    chineseName: "陈王廷",
    birthYear: 1580,
    deathYear: 1660,
    lineage: "Chen Style",
    teachers: ["Military and local boxing traditions"],
    students: ["Chen family descendants"],
    summary:
      "Frequently cited as an early key architect in Chen family boxing evolution, associated with codifying routines, methods, and strategic principles later recognized in Taijiquan lineages.",
    specialties: ["Foundational routine codification", "Military strategy influence"],
  },
  {
    slug: "yang-luchan",
    name: "Yang Luchan",
    chineseName: "杨露禅",
    birthYear: 1799,
    deathYear: 1872,
    lineage: "Yang Style",
    teachers: ["Chen Changxing (traditionally cited)"],
    students: ["Yang Banhou", "Yang Jianhou", "Imperial and banner students"],
    summary:
      "Seminal transmitter who brought Taijiquan from village lineage contexts into major public and institutional circles, catalyzing broad multi-branch expansion.",
    specialties: ["Transmission expansion", "Applied skill reputation"],
  },
  {
    slug: "wu-yuxiang",
    name: "Wu Yuxiang",
    chineseName: "武禹襄",
    birthYear: 1812,
    deathYear: 1880,
    lineage: "Wu/Hao Style",
    teachers: ["Yang Luchan lineage circle", "Li Yiyu family network"],
    students: ["Li Yishe", "Scholarly transmission successors"],
    summary:
      "Scholar-practitioner associated with technical writing, compact internal method transmission, and major influence on the theoretical legacy of Taijiquan classics.",
    specialties: ["Classical theory integration", "Compact frame method"],
  },
  {
    slug: "sun-lutang",
    name: "Sun Lutang",
    chineseName: "孙禄堂",
    birthYear: 1860,
    deathYear: 1933,
    lineage: "Sun Style",
    teachers: ["Xingyi and Bagua masters", "Hao Weizhen"],
    students: ["Sun Cunzhou", "Sun Jianyun", "Numerous public students"],
    summary:
      "Influential martial scholar who synthesized internal principles across major arts and published foundational texts that shaped modern internal arts pedagogy.",
    specialties: ["Cross-system synthesis", "Internal arts publications"],
  },
  {
    slug: "chen-fake",
    name: "Chen Fake",
    chineseName: "陈发科",
    birthYear: 1887,
    deathYear: 1957,
    lineage: "Chen Style",
    teachers: ["Chen family lineage transmission"],
    students: ["Beijing disciples", "Second-generation modern Chen teachers"],
    summary:
      "Major modern-era Chen style figure whose Beijing teaching period had lasting impact on public understanding of traditional Chen body method and application.",
    specialties: ["Practical method demonstration", "Modern Chen transmission"],
  },
  {
    slug: "wu-jianquan",
    name: "Wu Jianquan",
    chineseName: "吴鉴泉",
    birthYear: 1870,
    deathYear: 1942,
    lineage: "Wu Style",
    teachers: ["Quan You"],
    students: ["Wu Gongyi", "Wu Yinghua", "Shanghai school students"],
    summary:
      "Core transmitter of Wu style public teaching systems, helping formalize curriculum and ensure intergenerational continuity in major urban centers.",
    specialties: ["Curriculum formalization", "Urban transmission"],
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "1600s",
    title: "Early Chen family codification period",
    detail:
      "Routines and body-method concepts associated with later Chen Taijiquan narratives are linked to late Ming/early Qing military and village practice contexts.",
    related: ["Chen lineage", "Henan"],
  },
  {
    year: "1800s",
    title: "Transmission beyond Chenjiagou",
    detail:
      "Yang Luchan lineages transmit Taijiquan into broader social circles, creating conditions for major branch differentiation and public spread.",
    related: ["Yang lineage", "Beijing"],
  },
  {
    year: "Mid-late 1800s",
    title: "Scholarly synthesis and classics preservation",
    detail:
      "Wu/Hao associated circles deepen technical writing traditions and interpretive frameworks that influence modern Taiji theory.",
    related: ["Wu/Hao lineage", "Taiji classics"],
  },
  {
    year: "Early 1900s",
    title: "Sun style synthesis period",
    detail:
      "Sun Lutang publishes and teaches a blended internal method perspective, connecting Taiji with broader neijia discourse.",
    related: ["Sun lineage", "Publications"],
  },
  {
    year: "1900s",
    title: "Urbanization and public curriculum standardization",
    detail:
      "Major family branches teach in Beijing, Shanghai, and other cities, producing curriculum variants, training schools, and public-facing forms.",
    related: ["Chen", "Yang", "Wu", "Modern pedagogy"],
  },
  {
    year: "2000s-present",
    title: "Global transmission and digital documentation",
    detail:
      "International schools, media archives, and digital communities accelerate cross-lineage comparison, while source verification remains a central challenge.",
    related: ["Global Taijiquan", "Research"],
  },
];

export const techniques = [
  "Silk reeling and spiral force pathways",
  "Peng, Lü, Ji, An and extended Taiji energies",
  "Single-weighted balance and weight transfer",
  "Push hands progression: fixed, moving, and free",
  "Fajin timing, storage-release cycles, and whole-body integration",
  "Applications: striking, qinna, uprooting, and throws",
  "Weapons curriculum and tactical continuity",
];

export const philosophyTopics = [
  "Song (release), peng structure, and dynamic equilibrium",
  "Yin-yang transformation in movement and timing",
  "Listening energy (ting jin) and adaptive response",
  "Use of intent (yi) over raw force (li)",
  "Cultivation ethics, patience, and intergenerational transmission",
  "Classical maxims interpreted in modern pedagogy",
];

export const sourceGuidelines = [
  "Prioritize primary materials: manuals, direct lineage records, period publications.",
  "Tag oral histories distinctly from textually verifiable records.",
  "Attach quotes, page references, and media timestamps where possible.",
  "Mark disputed claims and preserve competing narratives with transparent confidence levels.",
  "Record last review date and reviewer notes for every major claim.",
];
