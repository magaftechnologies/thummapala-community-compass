export type Language = "en" | "te";
export type Copy = { en: string; te: string };
export const c = (en: string, te: string): Copy => ({ en, te });
export const images = {
  village: "/images/thummapala-village.jpg",
  education: "/images/thummapala-education.jpg",
  agriculture: "/images/thummapala-agriculture.jpg",
  sports: "/images/thummapala-sports.jpg",
  future: "/images/thummapala-future.jpg",
};
export type ImageKey = keyof typeof images;
export const DATA_VERIFICATION_REQUIRED = true;
export const imageMetadata = {
  isRepresentative: true,
  caption: c("Representative visual · Andhra Pradesh", "ప్రాతినిధ్య చిత్రం · ఆంధ్రప్రదేశ్"),
};
export type Entry = {
  id: string;
  title: Copy;
  description: Copy;
  category: Copy;
  image: ImageKey;
  imageUrl?: string;
  alt?: Copy;
  isDemo: boolean;
  mediaType?: "image" | "video";
  mediaUrl?: string;
  status?: Copy;
  date?: string;
  location?: Copy;
  eligibility?: Copy;
  organization?: Copy;
};
const entry = (
  id: string,
  title: Copy,
  description: Copy,
  category: Copy,
  image: ImageKey,
  extras: Partial<Entry> = {},
): Entry => ({ id, title, description, category, image, isDemo: true, ...extras });
export type SitePath =
  | "/"
  | "/our-village"
  | "/education"
  | "/agrotech"
  | "/sports"
  | "/library"
  | "/opportunities"
  | "/events"
  | "/activities"
  | "/stories"
  | "/gallery"
  | "/contact";
export const nav = [
  ["/", c("Home", "హోమ్")],
  ["/our-village", c("Our Village", "మన ఊరు")],
  ["/education", c("Education", "చదువు")],
  ["/agrotech", c("Agrotech", "వ్యవసాయం")],
  ["/sports", c("Sports", "క్రీడలు")],
  ["/library", c("Library", "గ్రంథాలయం")],
  ["/opportunities", c("Opportunities", "అవకాశాలు")],
  ["/events", c("Events", "కార్యక్రమాలు")],
  ["/gallery", c("Gallery", "ఫోటోలు")],
] as const;
export const moreNav = [
  ["/activities", c("Activities", "గ్రామ కార్యక్రమాలు")],
  ["/stories", c("Success Stories", "విజయ గాథలు")],
  ["/contact", c("Contact", "సంప్రదించండి")],
] as const;
export const innerPaths: SitePath[] = [...nav.slice(1), ...moreNav].map(([path]) => path);
export const focusAreas: readonly {
  path: SitePath;
  image: string;
  alt: Copy;
  mobilePosition?: "left" | "center" | "right";
  title: Copy;
  line: Copy;
  cta: Copy;
}[] = [
  {
    path: "/education",
    image: "/images/digital-thummapala-education.png",
    alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
    title: c("Education", "చదువు"),
    line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."),
    cta: c("Explore Education", "చదువు చూడండి"),
  },
  {
    path: "/agrotech",
    image: "/images/digital-thummapala-agrotech.png",
    alt: c("Agricultural landscape representing Agrotech and farming", "వ్యవసాయం, అగ్రోటెక్‌ను సూచించే పంట పొలం"),
    mobilePosition: "left",
    title: c("Agrotech", "వ్యవసాయం"),
    line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."),
    cta: c("Explore Agrotech", "వ్యవసాయం చూడండి"),
  },
  {
    path: "/sports",
    image: "/images/digital-thummapala-sports.png",
    alt: c("Students participating in a village sports event", "గ్రామ క్రీడా కార్యక్రమంలో పాల్గొంటున్న విద్యార్థులు"),
    title: c("Sports", "క్రీడలు"),
    line: c("Building confidence through sport.", "క్రీడలతో ఆత్మవిశ్వాసం పెరుగుతుంది."),
    cta: c("Explore Sports", "క్రీడలు చూడండి"),
  },
  {
    path: "/library",
    image: "/images/thummapala-library-community-celebration.png",
    alt: c("Thummapala children and community members gathered with books", "పుస్తకాలతో తుమ్మపాల పిల్లలు, సమాజ సభ్యుల సమావేశం"),
    title: c("Library", "గ్రంథాలయం"),
    line: c("A place to read, learn and grow.", "చదవడానికి, నేర్చుకోవడానికి, ఎదగడానికి ఒక స్థలం."),
    cta: c("Explore Library", "గ్రంథాలయాన్ని చూడండి"),
  },
];
export const villageStats = [
  { value: 31035, label: c("Population", "జనాభా") },
  { value: 8074, label: c("Households", "కుటుంబాలు") },
  { text: "2011", label: c("Census", "జనగణన") },
];
export const opportunityCategories = [
  {
    id: "jobs",
    title: c("Jobs", "ఉద్యోగాలు"),
    preview: c("Local and external job opportunities will be shared here.", "స్థానిక, ఇతర ప్రాంతాల ఉద్యోగ అవకాశాలను ఇక్కడ పంచుకుంటాం."),
    description: c("Discover relevant job opportunities for local talent and beyond.", "స్థానిక ప్రతిభకు, ఇతర ప్రాంతాల్లోనూ సరిపోయే ఉద్యోగ అవకాశాలను తెలుసుకోండి."),
    status: c("COMING SOON", "త్వరలో"),
    comingSoon: true,
  },
  {
    id: "scholarships",
    title: c("Scholarships", "స్కాలర్‌షిప్‌లు"),
    preview: c("Scholarship opportunities and useful education support information will be shared here.", "స్కాలర్‌షిప్‌లు, విద్యా సహాయానికి ఉపయోగపడే సమాచారాన్ని ఇక్కడ పంచుకుంటాం."),
    description: c("Find scholarship information and education support opportunities.", "స్కాలర్‌షిప్‌లు, విద్యా సహాయ అవకాశాల సమాచారాన్ని తెలుసుకోండి."),
    status: c("COMING SOON", "త్వరలో"),
    comingSoon: true,
  },
  {
    id: "internships",
    title: c("Internships", "ఇంటర్న్‌షిప్‌లు"),
    preview: c("Internship opportunities for students and young professionals will be shared here.", "విద్యార్థులు, యువ నిపుణుల కోసం ఇంటర్న్‌షిప్ అవకాశాలను ఇక్కడ పంచుకుంటాం."),
    description: c("Explore future internship opportunities for students and young professionals.", "విద్యార్థులు, యువ నిపుణుల కోసం రాబోయే ఇంటర్న్‌షిప్ అవకాశాలను తెలుసుకోండి."),
    status: c("COMING SOON", "త్వరలో"),
    comingSoon: true,
  },
  {
    id: "training",
    title: c("Training", "శిక్షణ"),
    preview: c("Training programs, skill development and learning opportunities will be shared here.", "శిక్షణ కార్యక్రమాలు, నైపుణ్యాభివృద్ధి, నేర్చుకునే అవకాశాలను ఇక్కడ పంచుకుంటాం."),
    description: c("Access future skill development, career preparation and training opportunities.", "రాబోయే నైపుణ్యాభివృద్ధి, కెరీర్ సన్నద్ధత, శిక్షణ అవకాశాల వివరాలు పొందండి."),
    status: c("COMING SOON", "త్వరలో"),
    comingSoon: true,
  },
] as const;
export type PageKey =
  | "our-village"
  | "education"
  | "agrotech"
  | "sports"
  | "library"
  | "opportunities"
  | "events"
  | "activities"
  | "stories"
  | "gallery"
  | "contact";
export const pageIntros: Record<
  PageKey,
  {
    title: Copy;
    line: Copy;
    image: ImageKey;
    heroImageUrl?: string;
    heroAlt?: Copy;
    contentImageUrl?: string;
    contentAlt?: Copy;
    contentCaption?: Copy;
  }
> = {
  "our-village": { title: c("Our Village", "మన ఊరు"), line: c("The people, land and spirit of Thummapala.", "తుమ్మపాల ప్రజలు, నేల, స్ఫూర్తి."), image: "village" },
  education: {
    title: c("Education", "చదువు"),
    line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."),
    image: "education",
    heroImageUrl: "/images/digital-thummapala-education.png",
    heroAlt: c("Thummapala school and students", "తుమ్మపాల పాఠశాల మరియు విద్యార్థులు"),
    contentImageUrl: "/images/thummapala-story-school-community.png",
    contentAlt: c("Educators and community members at Thummapala Z.P. High School", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో ఉపాధ్యాయులు, సమాజ సభ్యులు"),
    contentCaption: c("Thummapala school community", "తుమ్మపాల పాఠశాల సమాజం"),
  },
  agrotech: {
    title: c("Agrotech", "వ్యవసాయం"),
    line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."),
    image: "village",
    heroImageUrl: "/images/digital-thummapala-agrotech.png",
    heroAlt: c("Agriculture and farming in Thummapala", "తుమ్మపాలలో వ్యవసాయం, సాగు"),
    contentImageUrl: "/images/digital-thummapala-sugar-factory.png",
    contentAlt: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా"),
    contentCaption: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా"),
  },
  sports: {
    title: c("Sports", "క్రీడలు"),
    line: c("Play. Compete. Grow.", "ఆడుదాం. పోటీపడదాం. ఎదుగుదాం."),
    image: "sports",
    heroImageUrl: "/images/thummapala-impact-pet-master.png",
    heroAlt: c("Thummapala PT Master supporting Kho-Kho sports", "ఖో-ఖో క్రీడలకు తోడ్పడుతున్న తుమ్మపాల పీ.ఈ.టి. మాస్టర్"),
    contentImageUrl: "/images/digital-thummapala-sports.png",
    contentAlt: c("Kho-Kho players in action in Thummapala", "తుమ్మపాలలో ఖో-ఖో ఆడుతున్న క్రీడాకారులు"),
    contentCaption: c("Kho-Kho in Thummapala", "తుమ్మపాలలో ఖో-ఖో"),
  },
  library: {
    title: c("Thummapala Library", "తుమ్మపాల గ్రంథాలయం"),
    line: c("A space where books, learning and community come together.", "పుస్తకాలు, అభ్యాసం, సమాజం కలిసే స్థలం."),
    image: "village",
    heroImageUrl: "/images/thummapala-library-community-celebration.png",
    heroAlt: c("Children and community members gathered with books at a Thummapala library celebration", "తుమ్మపాల గ్రంథాలయ వేడుకలో పుస్తకాలతో కూడిన పిల్లలు, సమాజ సభ్యులు"),
  },
  opportunities: {
    title: c("New Opportunities Are Coming", "కొత్త అవకాశాలు త్వరలో"),
    line: c(
      "Jobs, scholarships, internships and training opportunities will be brought together here as the Digital Thummapala platform grows.",
      "డిజిటల్ తుమ్మపాల వేదిక అభివృద్ధి చెందుతున్న కొద్దీ ఉద్యోగాలు, స్కాలర్‌షిప్‌లు, ఇంటర్న్‌షిప్‌లు, శిక్షణ అవకాశాల వివరాలు ఇక్కడ అందుబాటులోకి వస్తాయి.",
    ),
    image: "future",
  },
  events: { title: c("Thummapala Events", "తుమ్మపాల కార్యక్రమాలు"), line: c("What is coming up in the village.", "మన ఊరిలో రాబోయే కార్యక్రమాలు."), image: "village" },
  activities: { title: c("Village Activities", "గ్రామ కార్యక్రమాలు"), line: c("A glimpse of what is happening around the village.", "మన ఊరిలో జరుగుతున్న వాటి సంగ్రహం."), image: "education" },
  stories: { title: c("Our Success Stories", "మన విజయ గాథలు"), line: c("People from Thummapala who are moving forward.", "ముందుకు సాగుతున్న తుమ్మపాల వాసులు."), image: "education" },
  gallery: { title: c("Gallery", "ఫోటోలు"), line: c("A few moments from Thummapala.", "తుమ్మపాలలో కొన్ని క్షణాలు."), image: "village" },
  contact: { title: c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి"), line: c("Have a question, an idea or want to connect with Thummapala?", "ప్రశ్న, ఆలోచన ఉందా? తుమ్మపాలతో కలవాలనుకుంటున్నారా?"), image: "village" },
};
export const heroSlides = [
  {
    image: "/images/digital-thummapala-village.png",
    alt: c("Aerial view of Thummapala village", "తుమ్మపాల గ్రామ వైమానిక దృశ్యం"),
    title: c("Thummapala", "తుమ్మపాల"),
    subtitle: c("Our village. Our people. Our future.", "మన ఊరు. మన ప్రజలు. మన భవిష్యత్తు."),
    cta: c("Explore Thummapala", "తుమ్మపాలను తెలుసుకోండి"),
    path: "/our-village",
    category: c("Thummapala village", "తుమ్మపాల గ్రామం"),
  },
  {
    image: "/images/digital-thummapala-agrotech.png",
    mobilePosition: "left",
    alt: c("Agricultural landscape representing Agrotech and farming", "వ్యవసాయం, అగ్రోటెక్‌ను సూచించే పంట పొలం"),
    title: c("Agrotech", "అగ్రోటెక్"),
    subtitle: c("Better ideas for better farming.", "మెరుగైన వ్యవసాయానికి మెరుగైన ఆలోచనలు."),
    cta: c("Explore Agrotech", "వ్యవసాయం గురించి"),
    path: "/agrotech",
    category: c("Agrotech", "వ్యవసాయం"),
  },
  {
    image: "/images/digital-thummapala-education.png",
    alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
    title: c("Education", "విద్య"),
    subtitle: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే అభ్యాసం."),
    cta: c("Explore Education", "చదువు గురించి"),
    path: "/education",
    category: c("Education", "విద్య"),
  },
  {
    image: "/images/digital-thummapala-sports.png",
    alt: c("Students participating in a village sports event", "గ్రామ క్రీడా కార్యక్రమంలో పాల్గొంటున్న విద్యార్థులు"),
    title: c("Sports", "క్రీడలు"),
    subtitle: c("Talent, teamwork and a spirit to move forward.", "ప్రతిభ, జట్టు స్ఫూర్తి, ముందుకు సాగాలనే తపన."),
    cta: c("Explore Sports", "క్రీడలు చూడండి"),
    path: "/sports",
    category: c("Sports", "క్రీడలు"),
  },
  {
    image: "/images/digital-thummapala-sugar-factory.png",
    alt: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా"),
    title: c("Thummapala", "తుమ్మపాల"),
    subtitle: c(
      "A village connected to agriculture, people and industry.",
      "వ్యవసాయం, ప్రజలు, పరిశ్రమలతో అనుసంధానమైన గ్రామం.",
    ),
    cta: c("Explore Thummapala", "తుమ్మపాలను తెలుసుకోండి"),
    path: "/our-village",
    category: c("Sugar factory", "చక్కెర కర్మాగారం"),
  },
] satisfies {
  image: string;
  mobilePosition?: "left" | "center" | "right";
  alt: Copy;
  title: Copy;
  subtitle: Copy;
  cta: Copy;
  path: SitePath;
  category: Copy;
}[];
export const facts = [
  {
    value: 31035,
    label: c("Population · 2011 Census", "జనాభా · 2011 జనగణన"),
    needsVerification: true,
  },
  {
    value: 8074,
    label: c("Households · 2011 Census", "కుటుంబాలు · 2011 జనగణన"),
    needsVerification: true,
  },
  { value: 586190, label: c("Census village code", "జనగణన గ్రామ కోడ్"), needsVerification: true },
];
export const programs = [
  entry(
    "academic",
    c("Academic support", "చదువుకు తోడు"),
    c(
      "After-school support in mathematics, science and English, built around the needs of ZPHS Thummapala students.",
      "తుమ్మపాల విద్యార్థులకు గణితం, సైన్స్, ఇంగ్లీషులో పాఠశాల తర్వాత అదనపు సహాయం.",
    ),
    c("School education", "పాఠశాల చదువు"),
    "education",
    {
      imageUrl: "/images/thummapala-story-student-support.png",
      alt: c("Student receiving support in Thummapala", "తుమ్మపాలలో విద్యార్థికి సహాయం అందిస్తున్న దృశ్యం"),
    },
  ),
  entry(
    "digital",
    c("Digital learning", "డిజిటల్ అభ్యాసం"),
    c(
      "Start with computer basics, explore the internet safely, and build confidence with everyday digital tools.",
      "కంప్యూటర్ పరిచయం నుంచి రోజువారీ డిజిటల్ పనుల వరకు నేర్చుకుందాం.",
    ),
    c("Technology", "సాంకేతికత"),
    "future",
  ),
  entry(
    "career",
    c("Career guidance", "సరైన దిశ"),
    c(
      "Understand the paths after Class 10 and Intermediate, with practical conversations about courses and careers.",
      "పదో తరగతి, ఇంటర్ తర్వాత ఏం చదవాలి? ఏ అవకాశాలు ఉన్నాయి? కలిసి తెలుసుకుందాం.",
    ),
    c("Career pathways", "ఉద్యోగ మార్గాలు"),
    "education",
  ),
  entry(
    "exams",
    c("Competitive exams", "పోటీ పరీక్షలు"),
    c(
      "A foundation in reasoning, general awareness and study habits for future competitive examinations.",
      "రీజనింగ్, జనరల్ నాలెడ్జ్, చదివే అలవాట్లతో పోటీ పరీక్షలకు పునాది.",
    ),
    c("Exam preparation", "పరీక్షల సన్నద్ధత"),
    "education",
  ),
  entry(
    "scholarships",
    c("Scholarships & support", "చదువుకు ఆర్థిక తోడు"),
    c(
      "Help families understand scholarship eligibility, documents and application steps. Funding partners are to be confirmed.",
      "స్కాలర్‌షిప్ అర్హతలు, పత్రాలు, దరఖాస్తు విధానంపై సహాయం. భాగస్వాముల వివరాలు నిర్ధారించాలి.",
    ),
    c("Student support", "విద్యార్థి సహాయం"),
    "education",
  ),
  entry(
    "skills",
    c("Skills for tomorrow", "రేపటి నైపుణ్యాలు"),
    c(
      "Discover communication, coding and emerging technology through approachable hands-on sessions.",
      "కమ్యూనికేషన్, కోడింగ్, కొత్త టెక్నాలజీని సులభంగా నేర్చుకునే కార్యక్రమాలు.",
    ),
    c("Future skills", "భవిష్యత్తు నైపుణ్యాలు"),
    "future",
  ),
];
export const mentors = [
  c("Retired Civil Services Mentor", "రిటైర్డ్ సివిల్ సర్వీసెస్ మెంటర్"),
  c("Science & Mathematics Educator", "సైన్స్, గణితం ఉపాధ్యాయులు"),
  c("Technology Professional", "టెక్నాలజీ నిపుణులు"),
  c("Career & Scholarship Guide", "కెరీర్, స్కాలర్‌షిప్ మార్గదర్శి"),
].map((title, i) =>
  entry(
    `mentor-${i}`,
    title,
    c(
      "Demo Mentor " +
        String(i + 1).padStart(2, "0") +
        " · Profile to be confirmed. A proposed space for experienced professionals to guide the next generation.",
      "డెమో మెంటర్ " +
        (i + 1) +
        " · వివరాలు నిర్ధారించాలి. అనుభవజ్ఞుల మార్గదర్శకత్వానికి ప్రతిపాదిత వేదిక.",
    ),
    c("Mentorship", "మార్గదర్శకత్వం"),
    "education",
  ),
);
export const stories = [
  {
    id: "school-community",
    category: c("Education · School community", "విద్య · పాఠశాల సమాజం"),
    title: c("Supporting Education Through Community", "సమాజంతో విద్యకు తోడ్పాటు"),
    description: c(
      "A moment connected to Z.P. High School, Thummapala, bringing together members of the school and community around education and student development.",
      "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో విద్య, విద్యార్థుల అభివృద్ధి కోసం పాఠశాల, సమాజ సభ్యులు కలిసి నిలిచిన క్షణం.",
    ),
    image: "/images/thummapala-story-school-community.png",
    alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం"),
  },
  {
    id: "student-support",
    category: c("Education · Student support", "విద్య · విద్యార్థికి తోడ్పాటు"),
    title: c("Supporting Students on Their Journey", "విద్యార్థుల ప్రయాణానికి తోడ్పాటు"),
    description: c(
      "A meaningful moment of student support, highlighting the importance of encouragement, guidance and opportunities in helping young learners move forward.",
      "యువ విద్యార్థులు ముందుకు సాగేందుకు ప్రోత్సాహం, మార్గదర్శనం, అవకాశాలు ఎంత ముఖ్యమో తెలిపే విద్యార్థి సహాయక క్షణం.",
    ),
    image: "/images/thummapala-story-student-support.png",
    alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి"),
  },
  {
    id: "community-outreach",
    category: c("Community · Outreach", "సమాజం · అవగాహన"),
    title: c("Community Engagement", "సమాజ భాగస్వామ్యం"),
    description: c(
      "A community outreach moment where people come together to share information and connect with residents around an important public initiative.",
      "ఒక ప్రజా కార్యక్రమం గురించి సమాచారాన్ని పంచుకుంటూ, నివాసితులతో అనుసంధానమవుతున్న సమాజ సభ్యులు.",
    ),
    image: "/images/thummapala-story-community-outreach.png",
    alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం"),
  },
  {
    id: "kho-kho-team",
    category: c("Sports · Kho-Kho", "క్రీడలు · ఖో-ఖో"),
    title: c("Kho-Kho — Teamwork in Action", "ఖో-ఖో — జట్టుగా ముందుకు"),
    description: c(
      "A Kho-Kho team standing together on the field, representing the energy, discipline and teamwork that sports can build among young players.",
      "మైదానంలో కలిసి నిలిచిన ఖో-ఖో జట్టు, క్రీడలు యువ ఆటగాళ్లలో పెంపొందించే ఉత్సాహం, క్రమశిక్షణ, జట్టు స్ఫూర్తిని తెలియజేస్తుంది.",
    ),
    image: "/images/thummapala-story-kho-kho-team.png",
    alt: c("Kho-Kho players standing together on the field", "మైదానంలో కలిసి నిలిచిన ఖో-ఖో క్రీడాకారులు"),
  },
  {
    id: "girls-kho-kho",
    category: c("Sports · Girls Kho-Kho", "క్రీడలు · బాలికల ఖో-ఖో"),
    title: c("Young Athletes, Stronger Together", "యువ క్రీడాకారిణులు — కలిసే బలం"),
    description: c(
      "A group of young Kho-Kho players coming together with confidence and team spirit, reflecting the growing enthusiasm for sports among the next generation.",
      "ఆత్మవిశ్వాసం, జట్టు స్ఫూర్తితో కలిసి నిలిచిన యువ ఖో-ఖో క్రీడాకారిణులు, తదుపరి తరంలో క్రీడలపై ఆసక్తిని ప్రతిబింబిస్తున్నారు.",
    ),
    image: "/images/thummapala-story-girls-kho-kho.png",
    alt: c("Girls Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన బాలికల ఖో-ఖో జట్టు"),
  },
  {
    id: "sports-journey",
    category: c("Sports · Team spirit", "క్రీడలు · జట్టు స్ఫూర్తి"),
    title: c("A Journey Built on Team Spirit", "జట్టు స్ఫూర్తితో సాగిన ప్రయాణం"),
    description: c(
      "A vibrant moment of young athletes coming together beyond the playing field, carrying the spirit of teamwork, participation and pride in their sporting journey.",
      "మైదానం వెలుపల కూడా కలిసి పాల్గొంటూ, జట్టు స్ఫూర్తి మరియు తమ క్రీడా ప్రయాణంపై గర్వాన్ని పంచుకుంటున్న యువ క్రీడాకారుల సందడి.",
    ),
    image: "/images/thummapala-story-sports-journey.png",
    alt: c("Young Kho-Kho players participating in a sports parade", "క్రీడా ఊరేగింపులో పాల్గొంటున్న యువ ఖో-ఖో క్రీడాకారులు"),
  },
] as const;
export const impactPeople = [
  {
    id: "dantuluri-vv-gopala-raju",
    name: c("Dantuluri V V Gopala Raju Garu", "దంతులూరి V V గోపాల రాజు గారు"),
    role: c("Site donor · High school, roads and cement roads", "హై స్కూల్ స్థలదాత · రహదారులు, సిమెంట్ రోడ్లు"),
    description: c(
      "Contributed as a site donor for the high school and supported roads and cement roads in Thummapala.",
      "తుమ్మపాలలో హై స్కూల్‌కు స్థలదాతగా తోడ్పడారు; రహదారులు, సిమెంట్ రోడ్లకు మద్దతు ఇచ్చారు.",
    ),
    image: "/images/thummapala-impact-dantuluri-vv-gopala-raju.jpeg",
    alt: c("Portrait of Dantuluri V. V. Gopala Raju Garu", "దంతులూరి V. V. గోపాల రాజు గారు"),
  },
  {
    id: "pet-master",
    name: c("Peela veeru Naidu", "పీల వీర్ నాయుడు"),
    role: c("Physical Education Teacher · P.T. Sir", "శారీరక విద్య ఉపాధ్యాయుడు · పి.టి. సార్"),
    description: c(
      "Contributes to physical education and sports training, especially Kho-Kho.",
      "శారీరక విద్య, క్రీడా శిక్షణకు, ముఖ్యంగా ఖో-ఖోకు తోడ్పడుతున్నారు.",
    ),
    image: "/images/thummapala-impact-pet-master.png",
    alt: c("Peela veeru Naidu supporting physical education and Kho-Kho training", "శారీరక విద్య, ఖో-ఖో శిక్షణకు తోడ్పడుతున్న పీల వీర్ నాయుడు"),
  },
  {
    id: "adari-govindarao",
    name: c("Adari Govindarao", "అడారి గోవిందరావు"),
    role: c("School Support · Education Support", "పాఠశాల సహాయం · విద్యా సహాయం"),
    description: c(
      "Contributes to school and education support in Thummapala.",
      "తుమ్మపాలలో పాఠశాల, విద్యా సహాయానికి తోడ్పడుతున్నారు.",
    ),
    image: "/images/thummapala-impact-some-ramraju.png",
    alt: c("Adari Govindarao supporting school and education", "పాఠశాల, విద్యకు తోడ్పడుతున్న అడారి గోవిందరావు"),
  },
   {
    id: "pethakam-setti-balaraam",
    name: c("Patakamsetti Balaram", "పెతకంశెట్టి బాలరాం"),
    role: c("Chairman", "ఛైర్మన్"),
    description: c(
      "Serves as Chairman in the Thummapala community.",
      "తుమ్మపాల సమాజంలో ఛైర్మన్‌గా సేవలందిస్తున్నారు.",
    ),
    image: "/images/thummapala-impact-pethakam-setti-balaraam.jpeg",
    alt: c("Patakamsetti Balaram", "పెతకంశెట్టి బాలరాం"),
  },
  {
    id: "ajay",
    name: c("Ajay Kamadhenu", "అజయ్ కామధేనూ"),
    role: c("Digital Marketer & Digital Creator", "డిజిటల్ మార్కెటర్ & డిజిటల్ సృష్టికర్త"),
    description: c(
      "Contributes to Digital Thummapala through digital transformation and online work.",
      "డిజిటల్ రూపాంతరం, ఆన్‌లైన్ పనుల ద్వారా డిజిటల్ తుమ్మపాలకు తోడ్పడుతున్నారు.",
    ),
    image: "/images/thummapala-impact-ajay.png",
    alt: c("Ajay Kamadhenu, digital creator", "డిజిటల్ సృష్టికర్త అజయ్ కామధేనూ"),
  }
 
] as const;
export const impactVideoUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
export function getYouTubeVideoId(value: string) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.replace(/^www\./, "");
    let id: string | null = null;
    if (hostname === "youtu.be") id = url.pathname.slice(1).split("/")[0] ?? null;
    else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (/^\/(embed|shorts)\/[^/]+/.test(url.pathname)) id = url.pathname.split("/")[2] ?? null;
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
export const agricultureInitiatives = [
  c("Water-wise farming", "నీటిని ఆదా చేసే వ్యవసాయం"),
  c("Soil & crop knowledge", "నేల, పంటలపై అవగాహన"),
  c("Farmer learning circles", "రైతుల అభ్యాస వేదిక"),
  c("Technology in the field", "పొలంలో సాంకేతికత"),
].map((title, i) =>
  entry(
    `agri-${i}`,
    title,
    c(
      "A proposed community learning session connecting traditional farming experience with practical new techniques. Schedule and facilitators to be confirmed.",
      "పారంపర్య వ్యవసాయ అనుభవాన్ని కొత్త పద్ధతులతో కలిపే ప్రతిపాదిత కార్యక్రమం. తేదీలు, శిక్షకులు నిర్ధారించాలి.",
    ),
    c("Agrotech", "వ్యవసాయం"),
    "agriculture",
    {
      imageUrl: i % 2 === 0
        ? "/images/digital-thummapala-sugar-factory.png"
        : "/images/digital-thummapala-agrotech.png",
      alt: i % 2 === 0
        ? c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా")
        : c("Agriculture and farming in Thummapala", "తుమ్మపాలలో వ్యవసాయం, సాగు"),
    },
  ),
);
const sportsProgrammeImages = [
  {
    imageUrl: "/images/thummapala-story-kho-kho-team.png",
    alt: c("Thummapala Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు"),
  },
  {
    imageUrl: "/images/thummapala-story-sports-journey.png",
    alt: c("Kho-Kho players and supporters together at a village sports gathering", "గ్రామ క్రీడా సమావేశంలో కలిసి ఉన్న ఖో-ఖో క్రీడాకారులు, మద్దతుదారులు"),
  },
  {
    imageUrl: "/images/thummapala-story-girls-kho-kho.png",
    alt: c("Thummapala girls Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల బాలికల ఖో-ఖో జట్టు"),
  },
  {
    imageUrl: "/images/digital-thummapala-sports.png",
    alt: c("Kho-Kho players in action in Thummapala", "తుమ్మపాలలో ఖో-ఖో ఆడుతున్న క్రీడాకారులు"),
  },
  {
    imageUrl: "/images/thummapala-story-kho-kho-team.png",
    alt: c("Thummapala Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు"),
  },
] as const;
export const sportsEntries = [
  c("Kho-Kho training evenings", "సాయంత్రం ఖో-ఖో శిక్షణ"),
  c("Village youth tournament", "గ్రామ యువత టోర్నమెంట్"),
  c("Girls on the field", "బాలికల క్రీడా సాధన"),
  c("Team selection day", "జట్టు ఎంపిక రోజు"),
  c("Celebrating sporting spirit", "క్రీడాస్ఫూర్తికి వేడుక"),
].map((title, i) => {
  const visual = sportsProgrammeImages[i];
  return entry(
    `sport-${i}`,
    title,
    c(
      "Sample sports programme for Thummapala. Player names, tournament results and achievements await client confirmation; no real award is claimed.",
      "తుమ్మపాల కోసం నమూనా క్రీడా కార్యక్రమం. క్రీడాకారులు, ఫలితాలు, విజయాలు నిర్ధారించాలి.",
    ),
    c("Kho-Kho · Sports", "ఖో-ఖో · క్రీడలు"),
    "sports",
    {
      date: `${20 + i} NOV 2026`,
      status: c("Sample programme", "నమూనా కార్యక్రమం"),
      ...(visual ? { imageUrl: visual.imageUrl, alt: visual.alt } : {}),
    },
  );
});
export const libraryPhotos = [
  {
    id: "library-week-panel",
    title: c("Community Library Week", "సమాజ గ్రంథాలయ వారోత్సవం"),
    image: "/images/thummapala-library-week-panel.png",
    alt: c("Community speaker and panel at a Thummapala Library Week gathering", "తుమ్మపాల గ్రంథాలయ వారోత్సవ సమావేశంలో వక్త, ప్యానెల్"),
  },
  {
    id: "library-telugu-panel",
    title: c("Library Week Gathering", "గ్రంథాలయ వారోత్సవ సమావేశం"),
    image: "/images/thummapala-library-telugu-panel.png",
    alt: c("Panel and speaker at a Thummapala library celebration", "తుమ్మపాల గ్రంథాలయ వేడుకలో ప్యానెల్, వక్త"),
  },
  {
    id: "library-community-celebration",
    title: c("Readers and Community", "పాఠకులు, సమాజం"),
    image: "/images/thummapala-library-community-celebration.png",
    alt: c("Children holding books with community members at a Thummapala library gathering", "తుమ్మపాల గ్రంథాలయ సమావేశంలో పుస్తకాలతో పిల్లలు, సమాజ సభ్యులు"),
  },
  {
    id: "library-week-celebration",
    title: c("Library Week Activities", "గ్రంథాలయ వారోత్సవ కార్యక్రమాలు"),
    image: "/images/thummapala-library-week-celebration.png",
    alt: c("Community members at a Thummapala Library Week celebration", "తుమ్మపాల గ్రంథాలయ వారోత్సవంలో సమాజ సభ్యులు"),
  },
  {
    id: "library-award-ceremony",
    title: c("Community Recognition", "సమాజ గుర్తింపు"),
    image: "/images/thummapala-library-award-ceremony.png",
    alt: c("Community members gathered for a library recognition ceremony", "గ్రంథాలయ గుర్తింపు కార్యక్రమానికి సమావేశమైన సమాజ సభ్యులు"),
  },
  {
    id: "library-telugu-week",
    title: c("Library Week Programme", "గ్రంథాలయ వారోత్సవ కార్యక్రమం"),
    image: "/images/thummapala-library-telugu-week.png",
    alt: c("Speakers and community members at a Telugu Library Week gathering", "తెలుగు గ్రంథాలయ వారోత్సవ సమావేశంలో వక్తలు, సమాజ సభ్యులు"),
  },
] as const;
export const activities = [
  {
    id: "kho-kho-team",
    title: c("Kho-Kho Teamwork", "ఖో-ఖో జట్టు స్ఫూర్తి"),
    label: c("PHOTO STORY · SPORTS", "ఫోటో కథ · క్రీడలు"),
    image: "/images/thummapala-story-kho-kho-team.png",
    alt: c("Thummapala Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు"),
  },
  {
    id: "young-athletes",
    title: c("Young Athletes, Stronger Together", "కలిసి ముందుకు సాగే యువ క్రీడాకారులు"),
    label: c("PHOTO STORY · TEAM SPIRIT", "ఫోటో కథ · జట్టు స్ఫూర్తి"),
    image: "/images/thummapala-story-girls-kho-kho.png",
    alt: c("Thummapala girls Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన తుమ్మపాల బాలికల ఖో-ఖో జట్టు"),
  },
  {
    id: "school-community",
    title: c("Education & School Activities", "విద్య & పాఠశాల కార్యక్రమాలు"),
    label: c("PHOTO STORY · EDUCATION", "ఫోటో కథ · విద్య"),
    image: "/images/thummapala-story-school-community.png",
    alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం"),
  },
  {
    id: "student-support",
    title: c("Supporting Students", "విద్యార్థులకు తోడ్పాటు"),
    label: c("PHOTO STORY · STUDENTS", "ఫోటో కథ · విద్యార్థులు"),
    image: "/images/thummapala-story-student-support.png",
    alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి"),
  },
  {
    id: "community-participation",
    title: c("Community Participation", "సమాజ భాగస్వామ్యం"),
    label: c("PHOTO STORY · COMMUNITY", "ఫోటో కథ · సమాజం"),
    image: "/images/thummapala-story-community-outreach.png",
    alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం"),
  },
  {
    id: "agricultural-landscape",
    title: c("Agriculture & the Land", "వ్యవసాయం & మన నేల"),
    label: c("PHOTO STORY · AGRICULTURE", "ఫోటో కథ · వ్యవసాయం"),
    image: "/images/digital-thummapala-agrotech.png",
    alt: c("Agricultural landscape representing farming near Thummapala", "తుమ్మపాల సమీప వ్యవసాయాన్ని సూచించే పంట భూమి దృశ్యం"),
  },
  {
    id: "library-vision",
    title: c("Thummapala Library · Future Vision", "తుమ్మపాల గ్రంథాలయం · భవిష్యత్ దృష్టి"),
    label: c("FUTURE VISION · LEARNING", "భవిష్యత్ దృష్టి · అభ్యాసం"),
    image: "/images/coming-soon-thummapala-library.png",
    alt: c("Concept image for a proposed Thummapala community library, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ గ్రంథాలయ భావన చిత్రం."),
  },
  ...libraryPhotos.map((photo) => ({
    id: photo.id,
    title: photo.title,
    label: c("PHOTO STORY · LIBRARY & LEARNING", "ఫోటో కథ · గ్రంథాలయం & అభ్యాసం"),
    image: photo.image,
    alt: photo.alt,
  })),
] as const;
export const events = [
  {
    id: "career-guidance-session",
    category: c("Career guidance session", "కెరీర్ మార్గదర్శక సమావేశం"),
    title: c("A little guidance.\nA world of possibility.", "కొంచెం మార్గదర్శనం.\nఎన్నో అవకాశాలు."),
    description: c(
      "A sample event idea for sharing career guidance with students. Details will be confirmed before publication.",
      "విద్యార్థులతో కెరీర్ మార్గదర్శకత్వాన్ని పంచుకునే నమూనా ఈవెంట్ ఆలోచన. ప్రచురణకు ముందు వివరాలు నిర్ధారిస్తాం.",
    ),
    image: "/images/thummapala-story-student-support.png",
    alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
  {
    id: "kho-kho-practice-meet",
    category: c("Kho-Kho practice meet", "ఖో-ఖో సాధన సమావేశం"),
    title: c("The field is calling.", "మైదానం పిలుస్తోంది."),
    description: c(
      "A sample idea for a future Kho-Kho practice meet. No date or activity has been confirmed.",
      "భవిష్యత్తు ఖో-ఖో సాధన సమావేశానికి నమూనా ఆలోచన. తేదీ లేదా కార్యక్రమం ఇంకా నిర్ధారించలేదు.",
    ),
    image: "/images/thummapala-story-kho-kho-team.png",
    alt: c("Thummapala Kho-Kho players standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో క్రీడాకారులు"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
  {
    id: "farmer-knowledge-exchange",
    category: c("Farmer knowledge exchange", "రైతుల జ్ఞాన మార్పిడి"),
    title: c("Good soil. New ideas.", "మన నేల. కొత్త ఆలోచనలు."),
    description: c(
      "A sample idea for sharing farming knowledge and ideas. Any future gathering will be announced once confirmed.",
      "వ్యవసాయ జ్ఞానం, ఆలోచనలను పంచుకునే నమూనా ఆలోచన. నిర్ధారించిన తర్వాతే భవిష్యత్తు సమావేశ వివరాలు ప్రకటిస్తాం.",
    ),
    image: "/images/digital-thummapala-agrotech.png",
    alt: c("Agricultural landscape representing farming near Thummapala", "తుమ్మపాల సమీప వ్యవసాయాన్ని సూచించే పంట భూమి దృశ్యం"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
  {
    id: "computer-skills-workshop",
    category: c("Computer skills workshop", "కంప్యూటర్ నైపుణ్యాల వర్క్‌షాప్"),
    title: c("Your digital first step.", "మీ తొలి డిజిటల్ అడుగు."),
    description: c(
      "A sample idea for a future computer skills workshop. The subject, schedule and venue are not yet confirmed.",
      "భవిష్యత్తు కంప్యూటర్ నైపుణ్యాల వర్క్‌షాప్‌కు నమూనా ఆలోచన. అంశం, షెడ్యూల్, వేదిక ఇంకా నిర్ధారించలేదు.",
    ),
    image: "/images/digital-thummapala-education.png",
    alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
  {
    id: "student-reading-circle",
    category: c("Student reading circle", "విద్యార్థుల పఠన వేదిక"),
    title: c("Learning, together.", "కలిసి నేర్చుకుందాం."),
    description: c(
      "A sample idea for a student reading circle. Details will be shared if a future activity is confirmed.",
      "విద్యార్థుల పఠన వేదికకు నమూనా ఆలోచన. భవిష్యత్తు కార్యక్రమం నిర్ధారించినప్పుడు వివరాలు పంచుకుంటాం.",
    ),
    image: "/images/thummapala-story-school-community.png",
    alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
  {
    id: "community-gathering",
    category: c("Community gathering", "సమాజ సమావేశం"),
    title: c("A village comes together.", "ఊరంతా ఒక్కటవుదాం."),
    description: c(
      "A sample idea for a future community gathering. No date, venue or organizer has been confirmed.",
      "భవిష్యత్తు సమాజ సమావేశానికి నమూనా ఆలోచన. తేదీ, వేదిక లేదా నిర్వాహకులు ఇంకా నిర్ధారించలేదు.",
    ),
    image: "/images/thummapala-story-community-outreach.png",
    alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం"),
    location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
    status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో"),
  },
] as const;
export const announcements = [
  c("Career guidance programme", "కెరీర్ గైడెన్స్ కార్యక్రమం"),
  c("Student training registration", "విద్యార్థుల శిక్షణ నమోదు"),
  c("Kho-Kho selections", "ఖో-ఖో ఎంపికలు"),
  c("Agriculture workshop", "వ్యవసాయ వర్క్‌షాప్"),
  c("New digital course", "కొత్త డిజిటల్ కోర్సు"),
];
const futureVisionStatus = c("Coming Soon · Future Vision", "త్వరలో · భవిష్యత్ దృష్టి");
export const futureInitiatives = [
  entry(
    "future-community-study-centre",
    c("Community Study Centre", "కమ్యూనిటీ స్టడీ సెంటర్"),
    c(
      "A future vision for a shared learning and study space for students, youth and the community. This is not an existing facility.",
      "విద్యార్థులు, యువత, సమాజం కోసం ఉమ్మడి అభ్యాస స్థలం అనే భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న సౌకర్యం కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-community-study-center.png",
      alt: c("Concept image for a proposed Thummapala community study centre, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ స్టడీ సెంటర్ భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
  entry(
    "future-junior-college",
    c("Junior College Vision", "జూనియర్ కాలేజీ దృష్టి"),
    c(
      "A future vision for higher-education opportunities within and for the Thummapala community. This is not an existing institution.",
      "తుమ్మపాల సమాజంలో ఉన్నత విద్యావకాశాల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న విద్యాసంస్థ కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-junior-college.png",
      alt: c("Concept image for a proposed Thummapala junior college, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల జూనియర్ కాలేజీ భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
  entry(
    "future-advanced-digital-learning",
    c("Advanced Digital Learning", "అధునాతన డిజిటల్ అభ్యాసం"),
    c(
      "A future vision for technology-enabled learning and modern educational resources. This is not an operating program.",
      "సాంకేతికతతో కూడిన అభ్యాసం, ఆధునిక విద్యా వనరుల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం అమలులో ఉన్న కార్యక్రమం కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-digital-learning.png",
      alt: c("Concept image for future digital learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాల భవిష్యత్ డిజిటల్ అభ్యాస భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
  entry(
    "future-quantum-emerging-technology",
    c("Quantum & Emerging Technology", "క్వాంటమ్ & అభివృద్ధి చెందుతున్న సాంకేతికత"),
    c(
      "A future vision for exposure to emerging technologies and advanced learning. This is not an existing program.",
      "అభివృద్ధి చెందుతున్న సాంకేతికతలు, అధునాతన అభ్యాస పరిచయం కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న కార్యక్రమం కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-quantum-emerging-tech.png",
      alt: c("Concept image for future emerging-technology learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాలలో భవిష్యత్ సాంకేతిక అభ్యాస భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
  entry(
    "future-career-development-hub",
    c("Career Development Hub", "కెరీర్ అభివృద్ధి కేంద్రం"),
    c(
      "A future vision for career guidance, skill development, mentorship and preparation opportunities. This is not an operating service.",
      "కెరీర్ మార్గదర్శకత్వం, నైపుణ్యాభివృద్ధి, మెంటార్‌షిప్, సన్నద్ధత అవకాశాల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం అమలులో ఉన్న సేవ కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-career-development-hub.png",
      alt: c("Concept image for a proposed Thummapala career development hub, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కెరీర్ అభివృద్ధి కేంద్ర భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
  entry(
    "future-thummapala-library",
    c("Thummapala Library", "తుమ్మపాల గ్రంథాలయం"),
    c(
      "A future vision for a community library with reading, digital resources, study space, reading activities and competitive-exam preparation. This is not an existing facility.",
      "పఠనం, డిజిటల్ వనరులు, అధ్యయన స్థలం, పఠన కార్యక్రమాలు, పోటీ పరీక్షల సన్నద్ధతతో కూడిన కమ్యూనిటీ గ్రంథాలయం అనే భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న సౌకర్యం కాదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      imageUrl: "/images/coming-soon-thummapala-library.png",
      alt: c("Concept image for a proposed Thummapala community library, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ గ్రంథాలయ భావన చిత్రం."),
      status: futureVisionStatus,
    },
  ),
];
const galleryPhoto = (
  id: string,
  title: Copy,
  category: Copy,
  imageUrl: string,
  alt: Copy,
  futureVision = false,
) =>
  entry(
    `gallery-${id}`,
    title,
    futureVision
      ? c(
          "Future vision concept image. The facility or service shown is not currently claimed to exist.",
          "భవిష్యత్ దృష్టి భావన చిత్రం. ఇందులో చూపిన సౌకర్యం లేదా సేవ ప్రస్తుతం ఉందని చెప్పడం లేదు.",
        )
      : c(
          "An image from the Thummapala visual collection.",
          "తుమ్మపాల చిత్రాల సమాహారంలోని ఒక చిత్రం.",
        ),
    category,
    "village",
    {
      imageUrl,
      alt,
      ...(futureVision ? { status: futureVisionStatus } : {}),
    },
  );
export const gallery = [
  galleryPhoto("village", c("Thummapala Village", "తుమ్మపాల గ్రామం"), c("Village", "గ్రామం"), "/images/digital-thummapala-village.png", c("Aerial view of Thummapala village", "తుమ్మపాల గ్రామ వైమానిక దృశ్యం")),
  galleryPhoto("agrotech", c("Agriculture & Agrotech", "వ్యవసాయం & అగ్రోటెక్"), c("Agriculture", "వ్యవసాయం"), "/images/digital-thummapala-agrotech.png", c("Agricultural landscape representing farming near Thummapala", "తుమ్మపాల సమీప వ్యవసాయాన్ని సూచించే పంట భూమి దృశ్యం")),
  galleryPhoto("school", c("Thummapala High School", "తుమ్మపాల హై స్కూల్"), c("Education", "చదువు"), "/images/digital-thummapala-education.png", c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్")),
  galleryPhoto("sports", c("Sports in Thummapala", "తుమ్మపాలలో క్రీడలు"), c("Sports", "క్రీడలు"), "/images/digital-thummapala-sports.png", c("Students participating in a village sports event", "గ్రామ క్రీడా కార్యక్రమంలో పాల్గొంటున్న విద్యార్థులు")),
  galleryPhoto("sugar-factory", c("Sugar Factory", "చక్కెర కర్మాగారం"), c("Local Industry", "స్థానిక పరిశ్రమ"), "/images/digital-thummapala-sugar-factory.png", c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలో చక్కెర కర్మాగారం, చెరకు రవాణా")),
  galleryPhoto("school-community", c("School Community", "పాఠశాల సమాజం"), c("Education", "చదువు"), "/images/thummapala-story-school-community.png", c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం")),
  galleryPhoto("student-support", c("Student Support", "విద్యార్థికి తోడ్పాటు"), c("Students", "విద్యార్థులు"), "/images/thummapala-story-student-support.png", c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి")),
  galleryPhoto("community-outreach", c("Community Outreach", "సమాజ అవగాహన"), c("Community", "మనవాళ్లు"), "/images/thummapala-story-community-outreach.png", c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం")),
  galleryPhoto("kho-kho-team", c("Kho-Kho Team", "ఖో-ఖో జట్టు"), c("Sports", "క్రీడలు"), "/images/thummapala-story-kho-kho-team.png", c("Thummapala Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు")),
  galleryPhoto("girls-kho-kho", c("Girls Kho-Kho Team", "బాలికల ఖో-ఖో జట్టు"), c("Sports", "క్రీడలు"), "/images/thummapala-story-girls-kho-kho.png", c("Thummapala girls Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల బాలికల ఖో-ఖో జట్టు")),
  galleryPhoto("sports-journey", c("Kho-Kho Sporting Journey", "ఖో-ఖో క్రీడా ప్రయాణం"), c("Sports", "క్రీడలు"), "/images/thummapala-story-sports-journey.png", c("Thummapala Kho-Kho players participating together", "కలిసి పాల్గొంటున్న తుమ్మపాల ఖో-ఖో క్రీడాకారులు")),
  galleryPhoto("pet-master", c("Physical Education Mentor", "శారీరక విద్య మెంటార్"), c("People", "వ్యక్తులు"), "/images/thummapala-impact-pet-master.png", c("PET Master supporting Kho-Kho training", "ఖో-ఖో శిక్షణకు మార్గనిర్దేశం చేస్తున్న PET మాస్టర్")),
  galleryPhoto("some-ramraju", c("Some Ramraju", "సోమే రామరాజు"), c("People", "వ్యక్తులు"), "/images/thummapala-impact-some-ramraju.png", c("Portrait of Some Ramraju", "సోమే రామరాజు చిత్రపటం")),
  galleryPhoto("ajay", c("Ajay, Digital Creator", "డిజిటల్ క్రియేటర్ అజయ్"), c("People", "వ్యక్తులు"), "/images/thummapala-impact-ajay.png", c("Portrait of Ajay, digital creator", "డిజిటల్ క్రియేటర్ అజయ్ చిత్రపటం")),
  galleryPhoto("community-study-centre", c("Community Study Centre · Future Vision", "కమ్యూనిటీ స్టడీ సెంటర్ · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-community-study-center.png", c("Concept image for a proposed Thummapala community study centre, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ స్టడీ సెంటర్ భావన చిత్రం."), true),
  galleryPhoto("junior-college", c("Junior College · Future Vision", "జూనియర్ కాలేజీ · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-junior-college.png", c("Concept image for a proposed Thummapala junior college, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల జూనియర్ కాలేజీ భావన చిత్రం."), true),
  galleryPhoto("digital-learning", c("Advanced Digital Learning · Future Vision", "అధునాతన డిజిటల్ అభ్యాసం · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-digital-learning.png", c("Concept image for future digital learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాల భవిష్యత్ డిజిటల్ అభ్యాస భావన చిత్రం."), true),
  galleryPhoto("quantum-technology", c("Quantum & Emerging Technology · Future Vision", "క్వాంటమ్ & అభివృద్ధి చెందుతున్న సాంకేతికత · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-quantum-emerging-tech.png", c("Concept image for future emerging-technology learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాలలో భవిష్యత్ సాంకేతిక అభ్యాస భావన చిత్రం."), true),
  galleryPhoto("career-hub", c("Career Development Hub · Future Vision", "కెరీర్ అభివృద్ధి కేంద్రం · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-career-development-hub.png", c("Concept image for a proposed Thummapala career development hub, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కెరీర్ అభివృద్ధి కేంద్ర భావన చిత్రం."), true),
  galleryPhoto("library", c("Thummapala Library · Future Vision", "తుమ్మపాల గ్రంథాలయం · భవిష్యత్ దృష్టి"), c("Future Vision", "భవిష్యత్ దృష్టి"), "/images/coming-soon-thummapala-library.png", c("Concept image for a proposed Thummapala community library, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ గ్రంథాలయ భావన చిత్రం."), true),
  ...libraryPhotos.map((photo) =>
    galleryPhoto(
      photo.id,
      photo.title,
      c("Library & Learning", "గ్రంథాలయం & అభ్యాసం"),
      photo.image,
      photo.alt,
    ),
  ),
];
export const filterEntries = (entries: Entry[], category: string) =>
  category === "All" ? entries : entries.filter((e) => e.category.en === category);
