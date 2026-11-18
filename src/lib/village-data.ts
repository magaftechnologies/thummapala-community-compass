import village from "@/assets/village.asset.json";
import education from "@/assets/education.asset.json";
import agriculture from "@/assets/agriculture.asset.json";
import sports from "@/assets/sports.asset.json";
import future from "@/assets/future.asset.json";
export type Language = "en" | "te";
export type Copy = { en: string; te: string };
export const c = (en: string, te: string): Copy => ({ en, te });
export const images = {
  village: village.url,
  education: education.url,
  agriculture: agriculture.url,
  sports: sports.url,
  future: future.url,
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
  isDemo: boolean;
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
export const focusAreas = [
  {
    path: "/education",
    image: "education",
    title: c("Education", "చదువు"),
    line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."),
    cta: c("Explore Education", "చదువు చూడండి"),
  },
  {
    path: "/agrotech",
    image: "agriculture",
    title: c("Agrotech", "వ్యవసాయం"),
    line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."),
    cta: c("Explore Agrotech", "వ్యవసాయం చూడండి"),
  },
  {
    path: "/sports",
    image: "sports",
    title: c("Sports", "క్రీడలు"),
    line: c("Play. Compete. Grow.", "ఆడుదాం. పోటీపడదాం. ఎదుగుదాం."),
    cta: c("Explore Sports", "క్రీడలు చూడండి"),
  },
] as const satisfies readonly { path: SitePath; image: ImageKey; title: Copy; line: Copy; cta: Copy }[];
export const villageStats = [
  { value: 31035, label: c("Population", "జనాభా") },
  { value: 8074, label: c("Households", "కుటుంబాలు") },
  { text: "2011", label: c("Census", "జనగణన") },
];
export const opportunityPreview = [
  c("Jobs", "ఉద్యోగాలు"),
  c("Scholarships", "స్కాలర్‌షిప్‌లు"),
  c("Internships", "ఇంటర్న్‌షిప్‌లు"),
  c("Training", "శిక్షణ"),
];
export type PageKey =
  | "our-village"
  | "education"
  | "agrotech"
  | "sports"
  | "opportunities"
  | "events"
  | "activities"
  | "stories"
  | "gallery"
  | "contact";
export const pageIntros: Record<PageKey, { title: Copy; line: Copy; image: ImageKey }> = {
  "our-village": { title: c("Our Village", "మన ఊరు"), line: c("The people, land and spirit of Thummapala.", "తుమ్మపాల ప్రజలు, నేల, స్ఫూర్తి."), image: "village" },
  education: { title: c("Education", "చదువు"), line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."), image: "education" },
  agrotech: { title: c("Agrotech", "వ్యవసాయం"), line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."), image: "village" },
  sports: { title: c("Sports", "క్రీడలు"), line: c("Play. Compete. Grow.", "ఆడుదాం. పోటీపడదాం. ఎదుగుదాం."), image: "sports" },
  opportunities: { title: c("Opportunities", "అవకాశాలు"), line: c("Jobs, scholarships, internships and training — sample listings.", "ఉద్యోగాలు, స్కాలర్‌షిప్‌లు, ఇంటర్న్‌షిప్‌లు, శిక్షణ — నమూనా వివరాలు."), image: "future" },
  events: { title: c("Thummapala Events", "తుమ్మపాల కార్యక్రమాలు"), line: c("What is coming up in the village.", "మన ఊరిలో రాబోయే కార్యక్రమాలు."), image: "village" },
  activities: { title: c("Village Activities", "గ్రామ కార్యక్రమాలు"), line: c("A glimpse of what is happening around the village.", "మన ఊరిలో జరుగుతున్న వాటి సంగ్రహం."), image: "education" },
  stories: { title: c("Our Success Stories", "మన విజయ గాథలు"), line: c("People from Thummapala who are moving forward.", "ముందుకు సాగుతున్న తుమ్మపాల వాసులు."), image: "education" },
  gallery: { title: c("Gallery", "ఫోటోలు"), line: c("A few moments from Thummapala.", "తుమ్మపాలలో కొన్ని క్షణాలు."), image: "village" },
  contact: { title: c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి"), line: c("Have a question, an idea or want to connect with Thummapala?", "ప్రశ్న, ఆలోచన ఉందా? తుమ్మపాలతో కలవాలనుకుంటున్నారా?"), image: "village" },
};
export const heroSlides = [
  {
    image: "village",
    title: c("Welcome to\nThummapala.", "మన తుమ్మపాలకు\nస్వాగతం."),
    subtitle: c("Our village. Our people. Our future.", "మన ఊరు. మన ప్రజలు. మన భవిష్యత్తు."),
    label: c("A place to belong. A place to grow.", "మన ఊరు. మన ఎదుగుదల."),
    cta: c("Explore Thummapala", "తుమ్మపాలను తెలుసుకోండి"),
    path: "/our-village",
    category: c("Our village", "మన ఊరు"),
  },
  {
    image: "education",
    title: c("Where education\nopens doors.", "చదువుతో\nకొత్త అవకాశాలు."),
    subtitle: c("Learn here. Grow here. Go further.", "చదువు… ఒక పాఠం కాదు, ఒక అవకాశం."),
    label: c("Learning without limits", "హద్దులు లేని చదువు"),
    cta: c("Explore Education", "చదువు గురించి"),
    path: "/education",
    category: c("Education", "చదువు"),
  },
  {
    image: "agriculture",
    title: c("Growing\nsmarter.", "కొత్త ఆలోచనలతో\nవ్యవసాయం."),
    subtitle: c("Rooted in our soil. Open to new ideas.", "మన నేల. మన బలం."),
    label: c("The land that brings us together", "మనల్ని కలిపే నేల"),
    cta: c("Explore Agrotech", "వ్యవసాయం గురించి"),
    path: "/agrotech",
    category: c("Agrotech", "వ్యవసాయం"),
  },
  {
    image: "sports",
    title: c("Young talent.\nLimitless spirit.", "మన మైదానం.\nమన ప్రతిభ."),
    subtitle: c("Where young talent takes the field.", "ఆడుదాం. పోరాడుదాం. గెలుద్దాం."),
    label: c("Strength through sport", "క్రీడలతో బలం"),
    cta: c("Explore Sports", "క్రీడలు చూడండి"),
    path: "/sports",
    category: c("Sports", "క్రీడలు"),
  },
  {
    image: "future",
    title: c("Building tomorrow.\nFrom here.", "మన ఊరి నుంచే\nరేపటి ప్రపంచానికి."),
    subtitle: c("The future starts with opportunity.", "రేపటి ప్రపంచానికి… ఈరోజే సిద్ధం."),
    label: c("A village looking forward", "ముందుకు సాగుతున్న ఊరు"),
    cta: c("Explore Our Vision", "మన భవిష్యత్తు"),
    path: "/education",
    category: c("Our future", "మన భవిష్యత్తు"),
  },
] satisfies {
  image: ImageKey;
  title: Copy;
  subtitle: Copy;
  label: Copy;
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
export const opportunities = [
  [
    c("Graduate apprenticeship pathway", "గ్రాడ్యుయేట్ అప్రెంటిస్‌షిప్"),
    c("Apprenticeships", "అప్రెంటిస్‌షిప్‌లు"),
  ],
  [
    c("Student scholarship guidance", "విద్యార్థి స్కాలర్‌షిప్ సహాయం"),
    c("Scholarships", "స్కాలర్‌షిప్‌లు"),
  ],
  [
    c("Digital skills internship", "డిజిటల్ నైపుణ్యాల ఇంటర్న్‌షిప్"),
    c("Internships", "ఇంటర్న్‌షిప్‌లు"),
  ],
  [
    c("Government exam study circle", "ప్రభుత్వ పరీక్షల స్టడీ సర్కిల్"),
    c("Government Jobs", "ప్రభుత్వ ఉద్యోగాలు"),
  ],
  [
    c("Entry-level career readiness", "ప్రారంభ ఉద్యోగ సన్నద్ధత"),
    c("Private Jobs", "ప్రైవేట్ ఉద్యోగాలు"),
  ],
  [c("Computer fundamentals workshop", "కంప్యూటర్ పరిచయ శిక్షణ"), c("Training", "శిక్షణ")],
  [
    c("Civil services foundation session", "సివిల్ సర్వీసెస్ పునాది"),
    c("Competitive Exams", "పోటీ పరీక్షలు"),
  ],
  [c("Choose your next course", "మీ తదుపరి కోర్సు"), c("Career Guidance", "కెరీర్ గైడెన్స్")],
].map(([title, category], i) =>
  entry(
    `opportunity-${i}`,
    title ?? c("Career pathway", "కెరీర్ మార్గం"),
    c(
      "Sample opportunity for Thummapala youth. This is not an official recruitment notification. Dates, providers and eligibility will be confirmed before any real applications open.",
      "తుమ్మపాల యువత కోసం నమూనా అవకాశం. ఇది అధికారిక ఉద్యోగ ప్రకటన కాదు. నిజమైన దరఖాస్తులకు ముందు వివరాలు నిర్ధారిస్తాం.",
    ),
    category ?? c("Career Guidance", "కెరీర్ గైడెన్స్"),
    "future",
    {
      status: c(
        i === 6 ? "Closed" : i % 3 === 0 ? "Coming soon" : "Open · sample",
        i === 6 ? "ముగిసింది" : i % 3 === 0 ? "త్వరలో" : "నమూనా · ఓపెన్",
      ),
      date: "30 NOV 2026 · SAMPLE",
      eligibility: c(
        i === 0 ? "Graduates · sample eligibility" : "Students & youth · sample eligibility",
        i === 0 ? "గ్రాడ్యుయేట్లు · నమూనా అర్హత" : "విద్యార్థులు, యువత · నమూనా అర్హత",
      ),
      organization: c("Demo community programme", "డెమో కమ్యూనిటీ కార్యక్రమం"),
      location: c("Thummapala / Online", "తుమ్మపాల / ఆన్‌లైన్"),
    },
  ),
);
export const stories = [
  [
    c("A small beginning.\nA bigger horizon.", "చిన్న ఆరంభం.\nపెద్ద ఆశయం."),
    c(
      "“Someone believed in my questions. That changed how I saw my future.”",
      "“నా ప్రశ్నలకు విలువ ఇచ్చారు. నా భవిష్యత్తుపై నమ్మకం పెరిగింది.”",
    ),
    "education",
  ],
  [
    c("Learning to lead,\non and off the field.", "మైదానంలోనూ,\nజీవితంలోనూ ముందుకు."),
    c(
      "“Kho-Kho taught me that we go further when we move together.”",
      "“కలిసి సాగితేనే ముందుకు వెళ్తామని ఖో-ఖో నేర్పింది.”",
    ),
    "sports",
  ],
  [
    c("The first line\nof a new chapter.", "కొత్త అధ్యాయానికి\nతొలి అడుగు."),
    c(
      "“My first computer lesson made the world feel a little closer.”",
      "“మొదటి కంప్యూటర్ పాఠంతో ప్రపంచం దగ్గరైనట్టనిపించింది.”",
    ),
    "future",
  ],
  [
    c("Growing knowledge.\nSharing possibility.", "తెలుసుకుందాం.\nపంచుకుందాం."),
    c(
      "“New ideas mean more when we can share them with our neighbours.”",
      "“కొత్త విషయాలు మనవాళ్లతో పంచుకున్నప్పుడే మరింత విలువ.”",
    ),
    "agriculture",
  ],
  [
    c("Finding direction.\nBuilding confidence.", "సరైన దిశ.\nకొత్త నమ్మకం."),
    c(
      "“A conversation with a mentor helped me take my next step.”",
      "“మెంటర్‌తో మాట్లాడిన తర్వాత నా తదుపరి అడుగు స్పష్టమైంది.”",
    ),
    "education",
  ],
].map(([title, description, image], i) =>
  entry(
    `story-${i}`,
    title as Copy,
    description as Copy,
    c(`Demo Student ${String(i + 1).padStart(2, "0")}`, `డెమో విద్యార్థి ${i + 1}`),
    image as ImageKey,
  ),
);
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
  ),
);
export const sportsEntries = [
  c("Kho-Kho training evenings", "సాయంత్రం ఖో-ఖో శిక్షణ"),
  c("Village youth tournament", "గ్రామ యువత టోర్నమెంట్"),
  c("Girls on the field", "బాలికల క్రీడా సాధన"),
  c("Team selection day", "జట్టు ఎంపిక రోజు"),
  c("Celebrating sporting spirit", "క్రీడాస్ఫూర్తికి వేడుక"),
].map((title, i) =>
  entry(
    `sport-${i}`,
    title,
    c(
      "Sample sports programme for Thummapala. Player names, tournament results and achievements await client confirmation; no real award is claimed.",
      "తుమ్మపాల కోసం నమూనా క్రీడా కార్యక్రమం. క్రీడాకారులు, ఫలితాలు, విజయాలు నిర్ధారించాలి.",
    ),
    c("Kho-Kho · Sports", "ఖో-ఖో · క్రీడలు"),
    "sports",
    { date: `${20 + i} NOV 2026`, status: c("Sample programme", "నమూనా కార్యక్రమం") },
  ),
);
export const events = [
  [
    c("A little guidance.\nA world of possibility.", "కొంచెం మార్గదర్శనం.\nఎన్నో అవకాశాలు."),
    c("Career guidance session", "కెరీర్ గైడెన్స్ సమావేశం"),
    "education",
    "22 NOV",
  ],
  [
    c("The field is calling.", "మైదానం పిలుస్తోంది."),
    c("Kho-Kho practice meet", "ఖో-ఖో సాధన"),
    "sports",
    "24 NOV",
  ],
  [
    c("Good soil. New ideas.", "మన నేల. కొత్త ఆలోచనలు."),
    c("Farmer knowledge exchange", "రైతుల అవగాహన సమావేశం"),
    "agriculture",
    "28 NOV",
  ],
  [
    c("Your digital first step.", "మీ తొలి డిజిటల్ అడుగు."),
    c("Computer skills workshop", "కంప్యూటర్ నైపుణ్యాల శిక్షణ"),
    "future",
    "30 NOV",
  ],
  [
    c("Learning, together.", "కలిసి నేర్చుకుందాం."),
    c("Student reading circle", "విద్యార్థుల పఠన వేదిక"),
    "education",
    "02 DEC",
  ],
  [
    c("A village comes together.", "ఊరంతా ఒక్కటవుదాం."),
    c("Community gathering", "కమ్యూనిటీ సమావేశం"),
    "village",
    "06 DEC",
  ],
].map(([title, category, image, date], i) =>
  entry(
    `event-${i}`,
    title as Copy,
    c(
      "A sample community event bringing Thummapala residents together to learn, connect and grow. The date and venue shown are illustrative, not a confirmed booking.",
      "కలిసి నేర్చుకునేందుకు, ఎదిగేందుకు తుమ్మపాల వాసుల కోసం నమూనా కార్యక్రమం. తేదీ, వేదిక ఇంకా నిర్ధారించలేదు.",
    ),
    category as Copy,
    image as ImageKey,
    {
      date: date as string,
      location: c(
        i === 1 ? "Village sports ground · sample" : "Thummapala community venue · sample",
        i === 1 ? "గ్రామ క్రీడా మైదానం · నమూనా" : "తుమ్మపాల కమ్యూనిటీ వేదిక · నమూనా",
      ),
      status: c("Upcoming · sample", "త్వరలో · నమూనా"),
    },
  ),
);
export const activities = [...events, ...sportsEntries.slice(0, 2)].map((e, i) => ({
  ...e,
  id: `activity-${i}`,
  date: `${18 - i * 2} NOV`,
  status: c("Sample activity", "నమూనా కార్యక్రమం"),
}));
export const announcements = [
  c("Career guidance programme", "కెరీర్ గైడెన్స్ కార్యక్రమం"),
  c("Student training registration", "విద్యార్థుల శిక్షణ నమోదు"),
  c("Kho-Kho selections", "ఖో-ఖో ఎంపికలు"),
  c("Agriculture workshop", "వ్యవసాయ వర్క్‌షాప్"),
  c("New digital course", "కొత్త డిజిటల్ కోర్సు"),
];
export const futureInitiatives = [
  c("Community study centre", "కమ్యూనిటీ స్టడీ సెంటర్"),
  c("Junior college vision", "జూనియర్ కాలేజీ ఆలోచన"),
  c("Advanced digital learning", "అధునాతన డిజిటల్ అభ్యాసం"),
  c("Quantum & emerging technology", "క్వాంటమ్, కొత్త టెక్నాలజీ"),
  c("Career development hub", "కెరీర్ అభివృద్ధి వేదిక"),
].map((title, i) =>
  entry(
    `future-${i}`,
    title,
    c(
      "A future initiative for discussion with the community. Partners, funding, dates and delivery are not yet confirmed.",
      "కమ్యూనిటీతో చర్చించాల్సిన భవిష్యత్తు ఆలోచన. భాగస్వాములు, నిధులు, తేదీలు ఇంకా నిర్ధారించలేదు.",
    ),
    c("Future Thummapala", "రేపటి తుమ్మపాల"),
    "future",
    {
      status: c(
        i === 1 ? "Proposed" : i === 3 ? "Coming soon · vision" : "Future initiative",
        i === 1 ? "ప్రతిపాదితం" : i === 3 ? "భవిష్యత్తు ఆలోచన" : "భవిష్యత్తు కార్యక్రమం",
      ),
    },
  ),
);
const galleryCategories = [
  c("Village", "గ్రామం"),
  c("Education", "చదువు"),
  c("Agriculture", "వ్యవసాయం"),
  c("Sports", "క్రీడలు"),
  c("Technology", "సాంకేతికత"),
  c("Students", "విద్యార్థులు"),
  c("Events", "కార్యక్రమాలు"),
  c("Community", "మనవాళ్లు"),
  c("Development", "అభివృద్ధి"),
];
const galleryKeys: ImageKey[] = [
  "village",
  "education",
  "agriculture",
  "sports",
  "future",
  "education",
  "sports",
  "village",
  "future",
];
export const gallery = Array.from({ length: 24 }, (_, i) =>
  entry(
    `gallery-${i}`,
    c(
      [
        "Our landscape",
        "A day of learning",
        "Rooted in the land",
        "The spirit of Kho-Kho",
        "Learning what comes next",
        "Young minds",
        "Together on the field",
        "A place to belong",
        "Our next chapter",
      ][i % 9] ?? "Our village",
      [
        "మన పరిసరాలు",
        "చదువులో ఒక రోజు",
        "మన నేలతో బంధం",
        "ఖో-ఖో స్ఫూర్తి",
        "కొత్త విషయాల అభ్యాసం",
        "యువ ఆలోచనలు",
        "మైదానంలో కలిసి",
        "మన ఊరు",
        "మన తదుపరి అధ్యాయం",
      ][i % 9] ?? "మన ఊరు",
    ),
    c(
      "Representative generated photograph, not an actual photograph of Thummapala. Client photos will replace these sample gallery compositions.",
      "ప్రాతినిధ్య చిత్రం; ఇది నిజమైన తుమ్మపాల ఫోటో కాదు. ఈ నమూనాలను అసలైన ఫోటోలతో భర్తీ చేస్తాం.",
    ),
    galleryCategories[i % 9] ?? c("Village", "గ్రామం"),
    galleryKeys[i % 9] ?? "village",
  ),
);
export const filterEntries = (entries: Entry[], category: string) =>
  category === "All" ? entries : entries.filter((e) => e.category.en === category);
