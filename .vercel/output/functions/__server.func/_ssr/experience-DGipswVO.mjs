import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { S as ArrowLeft, _ as BookOpen, a as Sprout, b as ArrowUpRight, c as Monitor, d as Instagram, f as House, g as CalendarDays, h as Compass, i as Trophy, l as Menu, m as Facebook, n as X, o as Play, p as GraduationCap, r as Users, s as Pause, t as Youtube, u as MapPin, v as Award, x as ArrowRight, y as Atom } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-DGipswVO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			hero: "bg-primary-foreground text-foreground rounded-sm hover:bg-primary-foreground/90",
			cinematic: "border border-primary-foreground/40 text-primary-foreground rounded-full hover:bg-primary-foreground/15",
			editorial: "text-foreground bg-transparent rounded-none px-0 hover:text-primary",
			filter: "rounded-full border border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:border-primary",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function validateEnquiry(values) {
	const errors = {};
	for (const field of [
		"name",
		"phone",
		"email",
		"audience",
		"interest",
		"message"
	]) if (!values[field].trim()) errors[field] = "required";
	const digits = values.phone.replace(/\D/g, "");
	if (values.phone.trim() && (!/^\+?[\d\s().-]+$/.test(values.phone.trim()) || digits.length < 8 || digits.length > 15)) errors.phone = "phone";
	if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "email";
	return errors;
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var c = (en, te) => ({
	en,
	te
});
var images = {
	village: "/images/thummapala-village.jpg",
	education: "/images/thummapala-education.jpg",
	agriculture: "/images/thummapala-agriculture.jpg",
	sports: "/images/thummapala-sports.jpg",
	future: "/images/thummapala-future.jpg"
};
var imageMetadata = {
	isRepresentative: true,
	caption: c("Representative visual · Andhra Pradesh", "ప్రాతినిధ్య చిత్రం · ఆంధ్రప్రదేశ్")
};
var entry = (id, title, description, category, image, extras = {}) => ({
	id,
	title,
	description,
	category,
	image,
	isDemo: true,
	...extras
});
var nav = [
	["/", c("Home", "హోమ్")],
	["/our-village", c("Our Village", "మన ఊరు")],
	["/education", c("Education", "చదువు")],
	["/agrotech", c("Agrotech", "వ్యవసాయం")],
	["/sports", c("Sports", "క్రీడలు")],
	["/library", c("Library", "గ్రంథాలయం")],
	["/opportunities", c("Opportunities", "అవకాశాలు")],
	["/events", c("Events", "కార్యక్రమాలు")],
	["/gallery", c("Gallery", "ఫోటోలు")]
];
var moreNav = [
	["/activities", c("Activities", "గ్రామ కార్యక్రమాలు")],
	["/stories", c("Success Stories", "విజయ గాథలు")],
	["/contact", c("Contact", "సంప్రదించండి")]
];
[...nav.slice(1), ...moreNav].map(([path]) => path);
var focusAreas = [
	{
		path: "/education",
		image: "/images/digital-thummapala-education.png",
		alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
		title: c("Education", "చదువు"),
		line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."),
		cta: c("Explore Education", "చదువు చూడండి")
	},
	{
		path: "/agrotech",
		image: "/images/digital-thummapala-agrotech.png",
		alt: c("Agricultural landscape representing Agrotech and farming", "వ్యవసాయం, అగ్రోటెక్‌ను సూచించే పంట పొలం"),
		mobilePosition: "left",
		title: c("Agrotech", "వ్యవసాయం"),
		line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."),
		cta: c("Explore Agrotech", "వ్యవసాయం చూడండి")
	},
	{
		path: "/sports",
		image: "/images/digital-thummapala-sports.png",
		alt: c("Students participating in a village sports event", "గ్రామ క్రీడా కార్యక్రమంలో పాల్గొంటున్న విద్యార్థులు"),
		title: c("Sports", "క్రీడలు"),
		line: c("Building confidence through sport.", "క్రీడలతో ఆత్మవిశ్వాసం పెరుగుతుంది."),
		cta: c("Explore Sports", "క్రీడలు చూడండి")
	},
	{
		path: "/library",
		image: "/images/thummapala-library-community-celebration.png",
		alt: c("Thummapala children and community members gathered with books", "పుస్తకాలతో తుమ్మపాల పిల్లలు, సమాజ సభ్యుల సమావేశం"),
		title: c("Library", "గ్రంథాలయం"),
		line: c("A place to read, learn and grow.", "చదవడానికి, నేర్చుకోవడానికి, ఎదగడానికి ఒక స్థలం."),
		cta: c("Explore Library", "గ్రంథాలయాన్ని చూడండి")
	}
];
var villageStats = [
	{
		value: 31035,
		label: c("Population", "జనాభా")
	},
	{
		value: 8074,
		label: c("Households", "కుటుంబాలు")
	},
	{
		text: "2011",
		label: c("Census", "జనగణన")
	}
];
var opportunityCategories = [
	{
		id: "jobs",
		title: c("Jobs", "ఉద్యోగాలు"),
		preview: c("Local and external job opportunities will be shared here.", "స్థానిక, ఇతర ప్రాంతాల ఉద్యోగ అవకాశాలను ఇక్కడ పంచుకుంటాం."),
		description: c("Discover relevant job opportunities for local talent and beyond.", "స్థానిక ప్రతిభకు, ఇతర ప్రాంతాల్లోనూ సరిపోయే ఉద్యోగ అవకాశాలను తెలుసుకోండి."),
		status: c("COMING SOON", "త్వరలో"),
		comingSoon: true
	},
	{
		id: "scholarships",
		title: c("Scholarships", "స్కాలర్‌షిప్‌లు"),
		preview: c("Scholarship opportunities and useful education support information will be shared here.", "స్కాలర్‌షిప్‌లు, విద్యా సహాయానికి ఉపయోగపడే సమాచారాన్ని ఇక్కడ పంచుకుంటాం."),
		description: c("Find scholarship information and education support opportunities.", "స్కాలర్‌షిప్‌లు, విద్యా సహాయ అవకాశాల సమాచారాన్ని తెలుసుకోండి."),
		status: c("COMING SOON", "త్వరలో"),
		comingSoon: true
	},
	{
		id: "internships",
		title: c("Internships", "ఇంటర్న్‌షిప్‌లు"),
		preview: c("Internship opportunities for students and young professionals will be shared here.", "విద్యార్థులు, యువ నిపుణుల కోసం ఇంటర్న్‌షిప్ అవకాశాలను ఇక్కడ పంచుకుంటాం."),
		description: c("Explore future internship opportunities for students and young professionals.", "విద్యార్థులు, యువ నిపుణుల కోసం రాబోయే ఇంటర్న్‌షిప్ అవకాశాలను తెలుసుకోండి."),
		status: c("COMING SOON", "త్వరలో"),
		comingSoon: true
	},
	{
		id: "training",
		title: c("Training", "శిక్షణ"),
		preview: c("Training programs, skill development and learning opportunities will be shared here.", "శిక్షణ కార్యక్రమాలు, నైపుణ్యాభివృద్ధి, నేర్చుకునే అవకాశాలను ఇక్కడ పంచుకుంటాం."),
		description: c("Access future skill development, career preparation and training opportunities.", "రాబోయే నైపుణ్యాభివృద్ధి, కెరీర్ సన్నద్ధత, శిక్షణ అవకాశాల వివరాలు పొందండి."),
		status: c("COMING SOON", "త్వరలో"),
		comingSoon: true
	}
];
var pageIntros = {
	"our-village": {
		title: c("Our Village", "మన ఊరు"),
		line: c("The people, land and spirit of Thummapala.", "తుమ్మపాల ప్రజలు, నేల, స్ఫూర్తి."),
		image: "village"
	},
	education: {
		title: c("Education", "చదువు"),
		line: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."),
		image: "education",
		heroImageUrl: "/images/digital-thummapala-education.png",
		heroAlt: c("Thummapala school and students", "తుమ్మపాల పాఠశాల మరియు విద్యార్థులు"),
		contentImageUrl: "/images/thummapala-story-school-community.png",
		contentAlt: c("Educators and community members at Thummapala Z.P. High School", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో ఉపాధ్యాయులు, సమాజ సభ్యులు"),
		contentCaption: c("Thummapala school community", "తుమ్మపాల పాఠశాల సమాజం")
	},
	agrotech: {
		title: c("Agrotech", "వ్యవసాయం"),
		line: c("Better ideas for better farming.", "మంచి వ్యవసాయానికి కొత్త ఆలోచనలు."),
		image: "village",
		heroImageUrl: "/images/digital-thummapala-agrotech.png",
		heroAlt: c("Agriculture and farming in Thummapala", "తుమ్మపాలలో వ్యవసాయం, సాగు"),
		contentImageUrl: "/images/digital-thummapala-sugar-factory.png",
		contentAlt: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా"),
		contentCaption: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా")
	},
	sports: {
		title: c("Sports", "క్రీడలు"),
		line: c("Play. Compete. Grow.", "ఆడుదాం. పోటీపడదాం. ఎదుగుదాం."),
		image: "sports",
		heroImageUrl: "/images/thummapala-impact-pet-master.png",
		heroAlt: c("Thummapala PT Master supporting Kho-Kho sports", "ఖో-ఖో క్రీడలకు తోడ్పడుతున్న తుమ్మపాల పీ.ఈ.టి. మాస్టర్"),
		contentImageUrl: "/images/digital-thummapala-sports.png",
		contentAlt: c("Kho-Kho players in action in Thummapala", "తుమ్మపాలలో ఖో-ఖో ఆడుతున్న క్రీడాకారులు"),
		contentCaption: c("Kho-Kho in Thummapala", "తుమ్మపాలలో ఖో-ఖో")
	},
	library: {
		title: c("Thummapala Library", "తుమ్మపాల గ్రంథాలయం"),
		line: c("A space where books, learning and community come together.", "పుస్తకాలు, అభ్యాసం, సమాజం కలిసే స్థలం."),
		image: "village",
		heroImageUrl: "/images/thummapala-library-community-celebration.png",
		heroAlt: c("Children and community members gathered with books at a Thummapala library celebration", "తుమ్మపాల గ్రంథాలయ వేడుకలో పుస్తకాలతో కూడిన పిల్లలు, సమాజ సభ్యులు")
	},
	opportunities: {
		title: c("New Opportunities Are Coming", "కొత్త అవకాశాలు త్వరలో"),
		line: c("Jobs, scholarships, internships and training opportunities will be brought together here as the Digital Thummapala platform grows.", "డిజిటల్ తుమ్మపాల వేదిక అభివృద్ధి చెందుతున్న కొద్దీ ఉద్యోగాలు, స్కాలర్‌షిప్‌లు, ఇంటర్న్‌షిప్‌లు, శిక్షణ అవకాశాల వివరాలు ఇక్కడ అందుబాటులోకి వస్తాయి."),
		image: "future"
	},
	events: {
		title: c("Thummapala Events", "తుమ్మపాల కార్యక్రమాలు"),
		line: c("What is coming up in the village.", "మన ఊరిలో రాబోయే కార్యక్రమాలు."),
		image: "village"
	},
	activities: {
		title: c("Village Activities", "గ్రామ కార్యక్రమాలు"),
		line: c("A glimpse of what is happening around the village.", "మన ఊరిలో జరుగుతున్న వాటి సంగ్రహం."),
		image: "education"
	},
	stories: {
		title: c("Our Success Stories", "మన విజయ గాథలు"),
		line: c("People from Thummapala who are moving forward.", "ముందుకు సాగుతున్న తుమ్మపాల వాసులు."),
		image: "education"
	},
	gallery: {
		title: c("Gallery", "ఫోటోలు"),
		line: c("A few moments from Thummapala.", "తుమ్మపాలలో కొన్ని క్షణాలు."),
		image: "village"
	},
	contact: {
		title: c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి"),
		line: c("Have a question, an idea or want to connect with Thummapala?", "ప్రశ్న, ఆలోచన ఉందా? తుమ్మపాలతో కలవాలనుకుంటున్నారా?"),
		image: "village"
	}
};
var heroSlides = [
	{
		image: "/images/digital-thummapala-village.png",
		alt: c("Aerial view of Thummapala village", "తుమ్మపాల గ్రామ వైమానిక దృశ్యం"),
		title: c("Thummapala", "తుమ్మపాల"),
		subtitle: c("Our village. Our people. Our future.", "మన ఊరు. మన ప్రజలు. మన భవిష్యత్తు."),
		cta: c("Explore Thummapala", "తుమ్మపాలను తెలుసుకోండి"),
		path: "/our-village",
		category: c("Thummapala village", "తుమ్మపాల గ్రామం")
	},
	{
		image: "/images/digital-thummapala-agrotech.png",
		mobilePosition: "left",
		alt: c("Agricultural landscape representing Agrotech and farming", "వ్యవసాయం, అగ్రోటెక్‌ను సూచించే పంట పొలం"),
		title: c("Agrotech", "అగ్రోటెక్"),
		subtitle: c("Better ideas for better farming.", "మెరుగైన వ్యవసాయానికి మెరుగైన ఆలోచనలు."),
		cta: c("Explore Agrotech", "వ్యవసాయం గురించి"),
		path: "/agrotech",
		category: c("Agrotech", "వ్యవసాయం")
	},
	{
		image: "/images/digital-thummapala-education.png",
		alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
		title: c("Education", "విద్య"),
		subtitle: c("Learning that opens new doors.", "కొత్త దారులు తెరిచే అభ్యాసం."),
		cta: c("Explore Education", "చదువు గురించి"),
		path: "/education",
		category: c("Education", "విద్య")
	},
	{
		image: "/images/digital-thummapala-sports.png",
		alt: c("Students participating in a village sports event", "గ్రామ క్రీడా కార్యక్రమంలో పాల్గొంటున్న విద్యార్థులు"),
		title: c("Sports", "క్రీడలు"),
		subtitle: c("Talent, teamwork and a spirit to move forward.", "ప్రతిభ, జట్టు స్ఫూర్తి, ముందుకు సాగాలనే తపన."),
		cta: c("Explore Sports", "క్రీడలు చూడండి"),
		path: "/sports",
		category: c("Sports", "క్రీడలు")
	},
	{
		image: "/images/digital-thummapala-sugar-factory.png",
		alt: c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా"),
		title: c("Thummapala", "తుమ్మపాల"),
		subtitle: c("A village connected to agriculture, people and industry.", "వ్యవసాయం, ప్రజలు, పరిశ్రమలతో అనుసంధానమైన గ్రామం."),
		cta: c("Explore Thummapala", "తుమ్మపాలను తెలుసుకోండి"),
		path: "/our-village",
		category: c("Sugar factory", "చక్కెర కర్మాగారం")
	},
	{
		image: "/images/thummapala-library-community-celebration.png",
		alt: c("Children and community members gathered with books at a Thummapala library celebration", "తుమ్మపాల గ్రంథాలయ వేడుకలో పుస్తకాలతో కూడిన పిల్లలు, సమాజ సభ్యులు"),
		title: c("Thummapala Library", "తుమ్మపాల గ్రంథాలయం"),
		subtitle: c("A place to read, learn and grow.", "చదవడానికి, నేర్చుకోవడానికి, ఎదగడానికి ఒక స్థలం."),
		cta: c("Explore the Library", "గ్రంథాలయాన్ని చూడండి"),
		path: "/library",
		category: c("Library & Learning", "గ్రంథాలయం & అభ్యాసం")
	}
];
var programs = [
	entry("academic", c("Academic support", "చదువుకు తోడు"), c("After-school support in mathematics, science and English, built around the needs of ZPHS Thummapala students.", "తుమ్మపాల విద్యార్థులకు గణితం, సైన్స్, ఇంగ్లీషులో పాఠశాల తర్వాత అదనపు సహాయం."), c("School education", "పాఠశాల చదువు"), "education", {
		imageUrl: "/images/thummapala-story-student-support.png",
		alt: c("Student receiving support in Thummapala", "తుమ్మపాలలో విద్యార్థికి సహాయం అందిస్తున్న దృశ్యం")
	}),
	entry("digital", c("Digital learning", "డిజిటల్ అభ్యాసం"), c("Start with computer basics, explore the internet safely, and build confidence with everyday digital tools.", "కంప్యూటర్ పరిచయం నుంచి రోజువారీ డిజిటల్ పనుల వరకు నేర్చుకుందాం."), c("Technology", "సాంకేతికత"), "future"),
	entry("career", c("Career guidance", "సరైన దిశ"), c("Understand the paths after Class 10 and Intermediate, with practical conversations about courses and careers.", "పదో తరగతి, ఇంటర్ తర్వాత ఏం చదవాలి? ఏ అవకాశాలు ఉన్నాయి? కలిసి తెలుసుకుందాం."), c("Career pathways", "ఉద్యోగ మార్గాలు"), "education"),
	entry("exams", c("Competitive exams", "పోటీ పరీక్షలు"), c("A foundation in reasoning, general awareness and study habits for future competitive examinations.", "రీజనింగ్, జనరల్ నాలెడ్జ్, చదివే అలవాట్లతో పోటీ పరీక్షలకు పునాది."), c("Exam preparation", "పరీక్షల సన్నద్ధత"), "education"),
	entry("scholarships", c("Scholarships & support", "చదువుకు ఆర్థిక తోడు"), c("Help families understand scholarship eligibility, documents and application steps. Funding partners are to be confirmed.", "స్కాలర్‌షిప్ అర్హతలు, పత్రాలు, దరఖాస్తు విధానంపై సహాయం. భాగస్వాముల వివరాలు నిర్ధారించాలి."), c("Student support", "విద్యార్థి సహాయం"), "education"),
	entry("skills", c("Skills for tomorrow", "రేపటి నైపుణ్యాలు"), c("Discover communication, coding and emerging technology through approachable hands-on sessions.", "కమ్యూనికేషన్, కోడింగ్, కొత్త టెక్నాలజీని సులభంగా నేర్చుకునే కార్యక్రమాలు."), c("Future skills", "భవిష్యత్తు నైపుణ్యాలు"), "future")
];
var mentors = [
	c("Retired Civil Services Mentor", "రిటైర్డ్ సివిల్ సర్వీసెస్ మెంటర్"),
	c("Science & Mathematics Educator", "సైన్స్, గణితం ఉపాధ్యాయులు"),
	c("Technology Professional", "టెక్నాలజీ నిపుణులు"),
	c("Career & Scholarship Guide", "కెరీర్, స్కాలర్‌షిప్ మార్గదర్శి")
].map((title, i) => entry(`mentor-${i}`, title, c("Demo Mentor " + String(i + 1).padStart(2, "0") + " · Profile to be confirmed. A proposed space for experienced professionals to guide the next generation.", "డెమో మెంటర్ " + (i + 1) + " · వివరాలు నిర్ధారించాలి. అనుభవజ్ఞుల మార్గదర్శకత్వానికి ప్రతిపాదిత వేదిక."), c("Mentorship", "మార్గదర్శకత్వం"), "education"));
var stories = [
	{
		id: "school-community",
		category: c("Education · School community", "విద్య · పాఠశాల సమాజం"),
		title: c("Supporting Education Through Community", "సమాజంతో విద్యకు తోడ్పాటు"),
		description: c("A moment connected to Z.P. High School, Thummapala, bringing together members of the school and community around education and student development.", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో విద్య, విద్యార్థుల అభివృద్ధి కోసం పాఠశాల, సమాజ సభ్యులు కలిసి నిలిచిన క్షణం."),
		image: "/images/thummapala-story-school-community.png",
		alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం")
	},
	{
		id: "student-support",
		category: c("Education · Student support", "విద్య · విద్యార్థికి తోడ్పాటు"),
		title: c("Supporting Students on Their Journey", "విద్యార్థుల ప్రయాణానికి తోడ్పాటు"),
		description: c("A meaningful moment of student support, highlighting the importance of encouragement, guidance and opportunities in helping young learners move forward.", "యువ విద్యార్థులు ముందుకు సాగేందుకు ప్రోత్సాహం, మార్గదర్శనం, అవకాశాలు ఎంత ముఖ్యమో తెలిపే విద్యార్థి సహాయక క్షణం."),
		image: "/images/thummapala-story-student-support.png",
		alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి")
	},
	{
		id: "community-outreach",
		category: c("Community · Outreach", "సమాజం · అవగాహన"),
		title: c("Community Engagement", "సమాజ భాగస్వామ్యం"),
		description: c("A community outreach moment where people come together to share information and connect with residents around an important public initiative.", "ఒక ప్రజా కార్యక్రమం గురించి సమాచారాన్ని పంచుకుంటూ, నివాసితులతో అనుసంధానమవుతున్న సమాజ సభ్యులు."),
		image: "/images/thummapala-story-community-outreach.png",
		alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం")
	},
	{
		id: "kho-kho-team",
		category: c("Sports · Kho-Kho", "క్రీడలు · ఖో-ఖో"),
		title: c("Kho-Kho — Teamwork in Action", "ఖో-ఖో — జట్టుగా ముందుకు"),
		description: c("A Kho-Kho team standing together on the field, representing the energy, discipline and teamwork that sports can build among young players.", "మైదానంలో కలిసి నిలిచిన ఖో-ఖో జట్టు, క్రీడలు యువ ఆటగాళ్లలో పెంపొందించే ఉత్సాహం, క్రమశిక్షణ, జట్టు స్ఫూర్తిని తెలియజేస్తుంది."),
		image: "/images/thummapala-story-kho-kho-team.png",
		alt: c("Kho-Kho players standing together on the field", "మైదానంలో కలిసి నిలిచిన ఖో-ఖో క్రీడాకారులు")
	},
	{
		id: "girls-kho-kho",
		category: c("Sports · Girls Kho-Kho", "క్రీడలు · బాలికల ఖో-ఖో"),
		title: c("Young Athletes, Stronger Together", "యువ క్రీడాకారిణులు — కలిసే బలం"),
		description: c("A group of young Kho-Kho players coming together with confidence and team spirit, reflecting the growing enthusiasm for sports among the next generation.", "ఆత్మవిశ్వాసం, జట్టు స్ఫూర్తితో కలిసి నిలిచిన యువ ఖో-ఖో క్రీడాకారిణులు, తదుపరి తరంలో క్రీడలపై ఆసక్తిని ప్రతిబింబిస్తున్నారు."),
		image: "/images/thummapala-story-girls-kho-kho.png",
		alt: c("Girls Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన బాలికల ఖో-ఖో జట్టు")
	},
	{
		id: "sports-journey",
		category: c("Sports · Team spirit", "క్రీడలు · జట్టు స్ఫూర్తి"),
		title: c("A Journey Built on Team Spirit", "జట్టు స్ఫూర్తితో సాగిన ప్రయాణం"),
		description: c("A vibrant moment of young athletes coming together beyond the playing field, carrying the spirit of teamwork, participation and pride in their sporting journey.", "మైదానం వెలుపల కూడా కలిసి పాల్గొంటూ, జట్టు స్ఫూర్తి మరియు తమ క్రీడా ప్రయాణంపై గర్వాన్ని పంచుకుంటున్న యువ క్రీడాకారుల సందడి."),
		image: "/images/thummapala-story-sports-journey.png",
		alt: c("Young Kho-Kho players participating in a sports parade", "క్రీడా ఊరేగింపులో పాల్గొంటున్న యువ ఖో-ఖో క్రీడాకారులు")
	}
];
var impactPeople = [
	{
		id: "dantuluri-vv-gopala-raju",
		name: c("Dantuluri V. V. Gopala Raju Garu", "దంతులూరి V. V. గోపాల రాజు గారు"),
		role: c("Site donor · High school; roads and cement roads", "హై స్కూల్ స్థలదాత · రహదారులు, సిమెంట్ రోడ్లు"),
		description: c("Contributed as a site donor for the high school and supported roads and cement roads in Thummapala.", "తుమ్మపాలలో హై స్కూల్‌కు స్థలదాతగా తోడ్పడారు; రహదారులు, సిమెంట్ రోడ్లకు మద్దతు ఇచ్చారు."),
		image: "/images/thummapala-impact-dantuluri-vv-gopala-raju.jpeg",
		alt: c("Portrait of Dantuluri V. V. Gopala Raju Garu", "దంతులూరి V. V. గోపాల రాజు గారు")
	},
	{
		id: "pet-master",
		name: c("Peela veeru Naidu", "పీల వీర్ నాయుడు"),
		role: c("Physical Education Teacher · P.T. Sir", "శారీరక విద్య ఉపాధ్యాయుడు · పి.టి. సార్"),
		description: c("Contributes to physical education and sports training, especially Kho-Kho.", "శారీరక విద్య, క్రీడా శిక్షణకు, ముఖ్యంగా ఖో-ఖోకు తోడ్పడుతున్నారు."),
		image: "/images/thummapala-impact-pet-master.png",
		alt: c("Peela veeru Naidu supporting physical education and Kho-Kho training", "శారీరక విద్య, ఖో-ఖో శిక్షణకు తోడ్పడుతున్న పీల వీర్ నాయుడు")
	},
	{
		id: "adari-govindarao",
		name: c("Adari Govindarao", "అడారి గోవిందరావు"),
		role: c("School Support · Education Support", "పాఠశాల సహాయం · విద్యా సహాయం"),
		description: c("Contributes to school and education support in Thummapala.", "తుమ్మపాలలో పాఠశాల, విద్యా సహాయానికి తోడ్పడుతున్నారు."),
		image: "/images/thummapala-impact-some-ramraju.png",
		alt: c("Adari Govindarao supporting school and education", "పాఠశాల, విద్యకు తోడ్పడుతున్న అడారి గోవిందరావు")
	},
	{
		id: "pethakam-setti-balaraam",
		name: c("Patakamsetti Balaram", "పెతకంశెట్టి బాలరాం"),
		role: c("Chairman", "ఛైర్మన్"),
		description: c("Serves as Chairman in the Thummapala community.", "తుమ్మపాల సమాజంలో ఛైర్మన్‌గా సేవలందిస్తున్నారు."),
		image: "/images/thummapala-impact-pethakam-setti-balaraam.jpeg",
		alt: c("Patakamsetti Balaram", "పెతకంశెట్టి బాలరాం")
	},
	{
		id: "ajay",
		name: c("Ajay Kamadhenu", "అజయ్ కామధేనూ"),
		role: c("Digital Marketer & Digital Creator", "డిజిటల్ మార్కెటర్ & డిజిటల్ సృష్టికర్త"),
		description: c("Contributes to Digital Thummapala through digital transformation and online work.", "డిజిటల్ రూపాంతరం, ఆన్‌లైన్ పనుల ద్వారా డిజిటల్ తుమ్మపాలకు తోడ్పడుతున్నారు."),
		image: "/images/thummapala-impact-ajay.png",
		alt: c("Ajay Kamadhenu, digital creator", "డిజిటల్ సృష్టికర్త అజయ్ కామధేనూ")
	}
];
var impactVideoUrl = "https://www.youtube.com/watch?v=YOUR_VIDEO_ID";
function getYouTubeVideoId(value) {
	try {
		const url = new URL(value);
		const hostname = url.hostname.replace(/^www\./, "");
		let id = null;
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
var agricultureInitiatives = [
	c("Water-wise farming", "నీటిని ఆదా చేసే వ్యవసాయం"),
	c("Soil & crop knowledge", "నేల, పంటలపై అవగాహన"),
	c("Farmer learning circles", "రైతుల అభ్యాస వేదిక"),
	c("Technology in the field", "పొలంలో సాంకేతికత")
].map((title, i) => entry(`agri-${i}`, title, c("A proposed community learning session connecting traditional farming experience with practical new techniques. Schedule and facilitators to be confirmed.", "పారంపర్య వ్యవసాయ అనుభవాన్ని కొత్త పద్ధతులతో కలిపే ప్రతిపాదిత కార్యక్రమం. తేదీలు, శిక్షకులు నిర్ధారించాలి."), c("Agrotech", "వ్యవసాయం"), "agriculture", {
	imageUrl: i % 2 === 0 ? "/images/digital-thummapala-sugar-factory.png" : "/images/digital-thummapala-agrotech.png",
	alt: i % 2 === 0 ? c("Sugar factory and sugarcane transport near Thummapala", "తుమ్మపాల సమీపంలోని చక్కెర కర్మాగారం, చెరకు రవాణా") : c("Agriculture and farming in Thummapala", "తుమ్మపాలలో వ్యవసాయం, సాగు")
}));
var sportsProgrammeImages = [
	{
		imageUrl: "/images/thummapala-story-kho-kho-team.png",
		alt: c("Thummapala Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు")
	},
	{
		imageUrl: "/images/thummapala-story-sports-journey.png",
		alt: c("Kho-Kho players and supporters together at a village sports gathering", "గ్రామ క్రీడా సమావేశంలో కలిసి ఉన్న ఖో-ఖో క్రీడాకారులు, మద్దతుదారులు")
	},
	{
		imageUrl: "/images/thummapala-story-girls-kho-kho.png",
		alt: c("Thummapala girls Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల బాలికల ఖో-ఖో జట్టు")
	},
	{
		imageUrl: "/images/digital-thummapala-sports.png",
		alt: c("Kho-Kho players in action in Thummapala", "తుమ్మపాలలో ఖో-ఖో ఆడుతున్న క్రీడాకారులు")
	},
	{
		imageUrl: "/images/thummapala-story-kho-kho-team.png",
		alt: c("Thummapala Kho-Kho team standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు")
	}
];
var sportsEntries = [
	c("Kho-Kho training evenings", "సాయంత్రం ఖో-ఖో శిక్షణ"),
	c("Village youth tournament", "గ్రామ యువత టోర్నమెంట్"),
	c("Girls on the field", "బాలికల క్రీడా సాధన"),
	c("Team selection day", "జట్టు ఎంపిక రోజు"),
	c("Celebrating sporting spirit", "క్రీడాస్ఫూర్తికి వేడుక")
].map((title, i) => {
	const visual = sportsProgrammeImages[i];
	return entry(`sport-${i}`, title, c("Sample sports programme for Thummapala. Player names, tournament results and achievements await client confirmation; no real award is claimed.", "తుమ్మపాల కోసం నమూనా క్రీడా కార్యక్రమం. క్రీడాకారులు, ఫలితాలు, విజయాలు నిర్ధారించాలి."), c("Kho-Kho · Sports", "ఖో-ఖో · క్రీడలు"), "sports", {
		date: `${20 + i} NOV 2026`,
		status: c("Sample programme", "నమూనా కార్యక్రమం"),
		...visual ? {
			imageUrl: visual.imageUrl,
			alt: visual.alt
		} : {}
	});
});
var libraryPhotos = [
	{
		id: "library-week-panel",
		title: c("Community Library Week", "సమాజ గ్రంథాలయ వారోత్సవం"),
		image: "/images/thummapala-library-week-panel.png",
		alt: c("Community speaker and panel at a Thummapala Library Week gathering", "తుమ్మపాల గ్రంథాలయ వారోత్సవ సమావేశంలో వక్త, ప్యానెల్")
	},
	{
		id: "library-telugu-panel",
		title: c("Library Week Gathering", "గ్రంథాలయ వారోత్సవ సమావేశం"),
		image: "/images/thummapala-library-telugu-panel.png",
		alt: c("Panel and speaker at a Thummapala library celebration", "తుమ్మపాల గ్రంథాలయ వేడుకలో ప్యానెల్, వక్త")
	},
	{
		id: "library-community-celebration",
		title: c("Readers and Community", "పాఠకులు, సమాజం"),
		image: "/images/thummapala-library-community-celebration.png",
		alt: c("Children holding books with community members at a Thummapala library gathering", "తుమ్మపాల గ్రంథాలయ సమావేశంలో పుస్తకాలతో పిల్లలు, సమాజ సభ్యులు")
	},
	{
		id: "library-week-celebration",
		title: c("Library Week Activities", "గ్రంథాలయ వారోత్సవ కార్యక్రమాలు"),
		image: "/images/thummapala-library-week-celebration.png",
		alt: c("Community members at a Thummapala Library Week celebration", "తుమ్మపాల గ్రంథాలయ వారోత్సవంలో సమాజ సభ్యులు")
	},
	{
		id: "library-award-ceremony",
		title: c("Community Recognition", "సమాజ గుర్తింపు"),
		image: "/images/thummapala-library-award-ceremony.png",
		alt: c("Community members gathered for a library recognition ceremony", "గ్రంథాలయ గుర్తింపు కార్యక్రమానికి సమావేశమైన సమాజ సభ్యులు")
	},
	{
		id: "library-telugu-week",
		title: c("Library Week Programme", "గ్రంథాలయ వారోత్సవ కార్యక్రమం"),
		image: "/images/thummapala-library-telugu-week.png",
		alt: c("Speakers and community members at a Telugu Library Week gathering", "తెలుగు గ్రంథాలయ వారోత్సవ సమావేశంలో వక్తలు, సమాజ సభ్యులు")
	}
];
var activities = [
	{
		id: "kho-kho-team",
		title: c("Kho-Kho Teamwork", "ఖో-ఖో జట్టు స్ఫూర్తి"),
		label: c("PHOTO STORY · SPORTS", "ఫోటో కథ · క్రీడలు"),
		image: "/images/thummapala-story-kho-kho-team.png",
		alt: c("Thummapala Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో జట్టు")
	},
	{
		id: "young-athletes",
		title: c("Young Athletes, Stronger Together", "కలిసి ముందుకు సాగే యువ క్రీడాకారులు"),
		label: c("PHOTO STORY · TEAM SPIRIT", "ఫోటో కథ · జట్టు స్ఫూర్తి"),
		image: "/images/thummapala-story-girls-kho-kho.png",
		alt: c("Thummapala girls Kho-Kho team standing together on the field", "మైదానంలో కలిసి నిలిచిన తుమ్మపాల బాలికల ఖో-ఖో జట్టు")
	},
	{
		id: "school-community",
		title: c("Education & School Activities", "విద్య & పాఠశాల కార్యక్రమాలు"),
		label: c("PHOTO STORY · EDUCATION", "ఫోటో కథ · విద్య"),
		image: "/images/thummapala-story-school-community.png",
		alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం")
	},
	{
		id: "student-support",
		title: c("Supporting Students", "విద్యార్థులకు తోడ్పాటు"),
		label: c("PHOTO STORY · STUDENTS", "ఫోటో కథ · విద్యార్థులు"),
		image: "/images/thummapala-story-student-support.png",
		alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి")
	},
	{
		id: "community-participation",
		title: c("Community Participation", "సమాజ భాగస్వామ్యం"),
		label: c("PHOTO STORY · COMMUNITY", "ఫోటో కథ · సమాజం"),
		image: "/images/thummapala-story-community-outreach.png",
		alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం")
	},
	{
		id: "agricultural-landscape",
		title: c("Agriculture & the Land", "వ్యవసాయం & మన నేల"),
		label: c("PHOTO STORY · AGRICULTURE", "ఫోటో కథ · వ్యవసాయం"),
		image: "/images/digital-thummapala-agrotech.png",
		alt: c("Agricultural landscape representing farming near Thummapala", "తుమ్మపాల సమీప వ్యవసాయాన్ని సూచించే పంట భూమి దృశ్యం")
	},
	{
		id: "library-vision",
		title: c("Thummapala Library · Future Vision", "తుమ్మపాల గ్రంథాలయం · భవిష్యత్ దృష్టి"),
		label: c("FUTURE VISION · LEARNING", "భవిష్యత్ దృష్టి · అభ్యాసం"),
		image: "/images/coming-soon-thummapala-library.png",
		alt: c("Concept image for a proposed Thummapala community library, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ గ్రంథాలయ భావన చిత్రం.")
	},
	...libraryPhotos.map((photo) => ({
		id: photo.id,
		title: photo.title,
		label: c("PHOTO STORY · LIBRARY & LEARNING", "ఫోటో కథ · గ్రంథాలయం & అభ్యాసం"),
		image: photo.image,
		alt: photo.alt
	}))
];
var events = [
	{
		id: "career-guidance-session",
		category: c("Career guidance session", "కెరీర్ మార్గదర్శక సమావేశం"),
		title: c("A little guidance.\nA world of possibility.", "కొంచెం మార్గదర్శనం.\nఎన్నో అవకాశాలు."),
		description: c("A sample event idea for sharing career guidance with students. Details will be confirmed before publication.", "విద్యార్థులతో కెరీర్ మార్గదర్శకత్వాన్ని పంచుకునే నమూనా ఈవెంట్ ఆలోచన. ప్రచురణకు ముందు వివరాలు నిర్ధారిస్తాం."),
		image: "/images/thummapala-story-student-support.png",
		alt: c("Student receiving educational support at Thummapala", "తుమ్మపాలలో విద్యా సహాయం పొందుతున్న విద్యార్థి"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	},
	{
		id: "kho-kho-practice-meet",
		category: c("Kho-Kho practice meet", "ఖో-ఖో సాధన సమావేశం"),
		title: c("The field is calling.", "మైదానం పిలుస్తోంది."),
		description: c("A sample idea for a future Kho-Kho practice meet. No date or activity has been confirmed.", "భవిష్యత్తు ఖో-ఖో సాధన సమావేశానికి నమూనా ఆలోచన. తేదీ లేదా కార్యక్రమం ఇంకా నిర్ధారించలేదు."),
		image: "/images/thummapala-story-kho-kho-team.png",
		alt: c("Thummapala Kho-Kho players standing together", "కలిసి నిలిచిన తుమ్మపాల ఖో-ఖో క్రీడాకారులు"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	},
	{
		id: "farmer-knowledge-exchange",
		category: c("Farmer knowledge exchange", "రైతుల జ్ఞాన మార్పిడి"),
		title: c("Good soil. New ideas.", "మన నేల. కొత్త ఆలోచనలు."),
		description: c("A sample idea for sharing farming knowledge and ideas. Any future gathering will be announced once confirmed.", "వ్యవసాయ జ్ఞానం, ఆలోచనలను పంచుకునే నమూనా ఆలోచన. నిర్ధారించిన తర్వాతే భవిష్యత్తు సమావేశ వివరాలు ప్రకటిస్తాం."),
		image: "/images/digital-thummapala-agrotech.png",
		alt: c("Agricultural landscape representing farming near Thummapala", "తుమ్మపాల సమీప వ్యవసాయాన్ని సూచించే పంట భూమి దృశ్యం"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	},
	{
		id: "computer-skills-workshop",
		category: c("Computer skills workshop", "కంప్యూటర్ నైపుణ్యాల వర్క్‌షాప్"),
		title: c("Your digital first step.", "మీ తొలి డిజిటల్ అడుగు."),
		description: c("A sample idea for a future computer skills workshop. The subject, schedule and venue are not yet confirmed.", "భవిష్యత్తు కంప్యూటర్ నైపుణ్యాల వర్క్‌షాప్‌కు నమూనా ఆలోచన. అంశం, షెడ్యూల్, వేదిక ఇంకా నిర్ధారించలేదు."),
		image: "/images/digital-thummapala-education.png",
		alt: c("Thummapala High School with students", "విద్యార్థులతో తుమ్మపాల హై స్కూల్"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	},
	{
		id: "student-reading-circle",
		category: c("Student reading circle", "విద్యార్థుల పఠన వేదిక"),
		title: c("Learning, together.", "కలిసి నేర్చుకుందాం."),
		description: c("A sample idea for a student reading circle. Details will be shared if a future activity is confirmed.", "విద్యార్థుల పఠన వేదికకు నమూనా ఆలోచన. భవిష్యత్తు కార్యక్రమం నిర్ధారించినప్పుడు వివరాలు పంచుకుంటాం."),
		image: "/images/thummapala-story-school-community.png",
		alt: c("Z.P. High School Thummapala community activity", "తుమ్మపాల జెడ్.పి. హై స్కూల్‌లో సమాజ కార్యక్రమం"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	},
	{
		id: "community-gathering",
		category: c("Community gathering", "సమాజ సమావేశం"),
		title: c("A village comes together.", "ఊరంతా ఒక్కటవుదాం."),
		description: c("A sample idea for a future community gathering. No date, venue or organizer has been confirmed.", "భవిష్యత్తు సమాజ సమావేశానికి నమూనా ఆలోచన. తేదీ, వేదిక లేదా నిర్వాహకులు ఇంకా నిర్ధారించలేదు."),
		image: "/images/thummapala-story-community-outreach.png",
		alt: c("Thummapala community outreach activity", "తుమ్మపాలలో సమాజ అవగాహన కార్యక్రమం"),
		location: c("Thummapala · details to be confirmed", "తుమ్మపాల · వివరాలు నిర్ధారించాలి"),
		status: c("UPCOMING · COMING SOON", "రాబోయేది · త్వరలో")
	}
];
var futureVisionStatus = c("Coming Soon · Future Vision", "త్వరలో · భవిష్యత్ దృష్టి");
var futureInitiatives = [
	entry("future-community-study-centre", c("Community Study Centre", "కమ్యూనిటీ స్టడీ సెంటర్"), c("A future vision for a shared learning and study space for students, youth and the community. This is not an existing facility.", "విద్యార్థులు, యువత, సమాజం కోసం ఉమ్మడి అభ్యాస స్థలం అనే భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న సౌకర్యం కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-community-study-center.png",
		alt: c("Concept image for a proposed Thummapala community study centre, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ స్టడీ సెంటర్ భావన చిత్రం."),
		status: futureVisionStatus
	}),
	entry("future-junior-college", c("Junior College Vision", "జూనియర్ కాలేజీ దృష్టి"), c("A future vision for higher-education opportunities within and for the Thummapala community. This is not an existing institution.", "తుమ్మపాల సమాజంలో ఉన్నత విద్యావకాశాల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న విద్యాసంస్థ కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-junior-college.png",
		alt: c("Concept image for a proposed Thummapala junior college, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల జూనియర్ కాలేజీ భావన చిత్రం."),
		status: futureVisionStatus
	}),
	entry("future-advanced-digital-learning", c("Advanced Digital Learning", "అధునాతన డిజిటల్ అభ్యాసం"), c("A future vision for technology-enabled learning and modern educational resources. This is not an operating program.", "సాంకేతికతతో కూడిన అభ్యాసం, ఆధునిక విద్యా వనరుల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం అమలులో ఉన్న కార్యక్రమం కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-digital-learning.png",
		alt: c("Concept image for future digital learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాల భవిష్యత్ డిజిటల్ అభ్యాస భావన చిత్రం."),
		status: futureVisionStatus
	}),
	entry("future-quantum-emerging-technology", c("Quantum & Emerging Technology", "క్వాంటమ్ & అభివృద్ధి చెందుతున్న సాంకేతికత"), c("A future vision for exposure to emerging technologies and advanced learning. This is not an existing program.", "అభివృద్ధి చెందుతున్న సాంకేతికతలు, అధునాతన అభ్యాస పరిచయం కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న కార్యక్రమం కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-quantum-emerging-tech.png",
		alt: c("Concept image for future emerging-technology learning in Thummapala, marked Coming Soon.", "త్వరలో అని గుర్తించిన తుమ్మపాలలో భవిష్యత్ సాంకేతిక అభ్యాస భావన చిత్రం."),
		status: futureVisionStatus
	}),
	entry("future-career-development-hub", c("Career Development Hub", "కెరీర్ అభివృద్ధి కేంద్రం"), c("A future vision for career guidance, skill development, mentorship and preparation opportunities. This is not an operating service.", "కెరీర్ మార్గదర్శకత్వం, నైపుణ్యాభివృద్ధి, మెంటార్‌షిప్, సన్నద్ధత అవకాశాల కోసం భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం అమలులో ఉన్న సేవ కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-career-development-hub.png",
		alt: c("Concept image for a proposed Thummapala career development hub, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కెరీర్ అభివృద్ధి కేంద్ర భావన చిత్రం."),
		status: futureVisionStatus
	}),
	entry("future-thummapala-library", c("Thummapala Library", "తుమ్మపాల గ్రంథాలయం"), c("A future vision for a community library with reading, digital resources, study space, reading activities and competitive-exam preparation. This is not an existing facility.", "పఠనం, డిజిటల్ వనరులు, అధ్యయన స్థలం, పఠన కార్యక్రమాలు, పోటీ పరీక్షల సన్నద్ధతతో కూడిన కమ్యూనిటీ గ్రంథాలయం అనే భవిష్యత్ దృష్టి. ఇది ప్రస్తుతం ఉన్న సౌకర్యం కాదు."), c("Future Thummapala", "రేపటి తుమ్మపాల"), "future", {
		imageUrl: "/images/coming-soon-thummapala-library.png",
		alt: c("Concept image for a proposed Thummapala community library, marked Coming Soon.", "త్వరలో అని గుర్తించిన ప్రతిపాదిత తుమ్మపాల కమ్యూనిటీ గ్రంథాలయ భావన చిత్రం."),
		status: futureVisionStatus
	})
];
var galleryPhoto = (id, title, category, imageUrl, alt, futureVision = false) => entry(`gallery-${id}`, title, futureVision ? c("Future vision concept image. The facility or service shown is not currently claimed to exist.", "భవిష్యత్ దృష్టి భావన చిత్రం. ఇందులో చూపిన సౌకర్యం లేదా సేవ ప్రస్తుతం ఉందని చెప్పడం లేదు.") : c("An image from the Thummapala visual collection.", "తుమ్మపాల చిత్రాల సమాహారంలోని ఒక చిత్రం."), category, "village", {
	imageUrl,
	alt,
	...futureVision ? { status: futureVisionStatus } : {}
});
var gallery = [
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
	...libraryPhotos.map((photo) => galleryPhoto(photo.id, photo.title, c("Library & Learning", "గ్రంథాలయం & అభ్యాసం"), photo.image, photo.alt))
];
var filterEntries = (entries, category) => category === "All" ? entries : entries.filter((e) => e.category.en === category);
var opportunityIcons = {
	jobs: Award,
	scholarships: GraduationCap,
	internships: Monitor,
	training: BookOpen
};
function Brand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		className: "brand",
		to: "/",
		"aria-label": "Digital Thummapala home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { strokeWidth: 1.3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "DIGITAL THUMMAPALA" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "తుమ్మపాల · Growing together" })] })]
	});
}
function LanguageSwitch({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "language-toggle",
		"aria-label": "Language",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "editorial",
				"aria-pressed": lang === "en",
				onClick: () => setLang("en"),
				children: "EN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: "/"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "editorial",
				"aria-pressed": lang === "te",
				onClick: () => setLang("te"),
				children: "తెలుగు"
			})
		]
	});
}
function Navbar({ lang, setLang, t }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 80);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!menu) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, [menu]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `site-nav ${scrolled ? "scrolled" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "desktop-links",
					"aria-label": "Main navigation",
					children: [nav.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						activeOptions: { exact: true },
						activeProps: { className: "active" },
						children: t(label)
					}, to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "nav-more",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: t(c("More", "మరిన్ని")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "nav-more-menu",
							children: moreNav.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to,
								children: t(label)
							}, to))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "nav-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {
							lang,
							setLang
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "editorial",
							className: "nav-explore",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								children: [t(c("Join our journey", "మన ప్రయాణంలో భాగమవ్వండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "icon",
							variant: "editorial",
							className: "menu-toggle",
							"aria-label": t(c("Open menu", "మెనూ తెరవండి")),
							onClick: () => setMenu(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: menu,
		onOpenChange: setMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "mobile-menu",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: t(c("Village navigation", "గ్రామం మెనూ"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: t(c("Explore Thummapala", "తుమ్మపాలను చూడండి"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mobile-menu-top",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {})
				}),
				[...nav, ...moreNav].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					onClick: () => setMenu(false),
					children: t(label)
				}, to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mobile-menu-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitch, {
						lang,
						setLang
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "nav-explore",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							onClick: () => setMenu(false),
							children: t(c("Join our journey", "మన ప్రయాణంలో భాగమవ్వండి"))
						})
					})]
				})
			]
		})
	})] });
}
function Hero({ t, lang }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(media.matches);
		const change = () => setReduced(media.matches);
		media.addEventListener("change", change);
		return () => media.removeEventListener("change", change);
	}, []);
	(0, import_react.useEffect)(() => {
		if (paused || reduced) return;
		const timer = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7500);
		return () => clearInterval(timer);
	}, [
		paused,
		reduced,
		index
	]);
	const slide = heroSlides[index];
	if (!slide) return null;
	const change = (delta) => setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "hero",
		"aria-roledescription": "carousel",
		"aria-label": t(c("Discover Thummapala", "తుమ్మపాలను తెలుసుకోండి")),
		onKeyDown: (e) => {
			if (e.key === "ArrowRight") change(1);
			if (e.key === "ArrowLeft") change(-1);
		},
		children: [
			heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: `hero-photo ${i === index ? "active" : ""}`,
				src: s.image,
				"data-mobile-position": s.mobilePosition,
				alt: i === index ? t(s.alt) : "",
				"aria-hidden": i !== index,
				fetchPriority: i === 0 ? "high" : "auto"
			}, s.image)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-body container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: [
								"0",
								index + 1,
								" — ",
								t(slide.category)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t(slide.title) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-subtitle",
							children: t(slide.subtitle)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-support",
							children: t(c("A village growing through education, opportunity, agriculture, sport and community.", "చదువు, అవకాశాలు, వ్యవసాయం, క్రీడలు, కమ్యూనిటీతో ఎదుగుతున్న మన ఊరు."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "hero",
								className: "hero-cta",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: slide.path,
									children: [t(slide.cta), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "cinematic",
								className: "hero-cta-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: t(c("Join our journey", "మన ప్రయాణంలో చేరండి"))
								})
							})]
						})
					]
				}, `${index}-${lang}`), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-controls",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero-location",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 12 }), t(c("ANAKAPALLI, ANDHRA PRADESH", "అనకాపల్లి, ఆంధ్రప్రదేశ్"))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-pagination",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "slide-number",
								children: [
									"0",
									index + 1,
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "opacity-50",
										children: [" / ", String(heroSlides.length).padStart(2, "0")]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-indicators",
								children: heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									"aria-label": `Slide ${i + 1}: ${t(s.category)}`,
									"aria-current": index === i,
									variant: "cinematic",
									onClick: () => setIndex(i),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
								}, s.image))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cinematic",
								size: "icon",
								className: "hero-control-button",
								"aria-label": t(c("Previous slide", "మునుపటి చిత్రం")),
								onClick: () => change(-1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cinematic",
								size: "icon",
								className: "hero-control-button",
								"aria-label": t(c("Next slide", "తదుపరి చిత్రం")),
								onClick: () => change(1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "cinematic",
								size: "icon",
								className: "hero-control-button",
								"aria-label": paused ? t(c("Play slideshow", "చిత్రాలు కొనసాగించండి")) : t(c("Pause slideshow", "చిత్రాలు ఆపండి")),
								onClick: () => setPaused(!paused),
								children: paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {})
							})
						]
					})]
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "impact-strip",
		"aria-label": t(c("Village figures · 2011 Census", "గ్రామ వివరాలు · 2011 జనగణన")),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide impact-grid",
			children: [villageStats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "impact-stat",
				children: [i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { "aria-hidden": "true" }) : i === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "value" in stat && stat.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { value: stat.value }) : stat.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(stat.label) })] })]
			}, stat.label.en)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "impact-note",
				children: t(c("2011 Census figures · verification pending", "2011 జనగణన వివరాలు · నిర్ధారణ అవసరం"))
			})]
		})
	})] });
}
function SectionHead({ eyebrow, title, t, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			"s",
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: t(eyebrow)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title",
				children: t(title)
			})
		] }), children]
	});
}
function TextLink({ href, children, onClick }) {
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "editorial",
		className: "text-link",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "editorial",
		className: "text-link",
		onClick,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
	});
}
function Counter({ value }) {
	const ref = (0, import_react.useRef)(null);
	const [count, setCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			observer.disconnect();
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				setCount(value);
				return;
			}
			const start = performance.now();
			let frame = 0;
			const animate = (time) => {
				const progress = Math.min((time - start) / 1200, 1);
				setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
				if (progress < 1) frame = requestAnimationFrame(animate);
			};
			frame = requestAnimationFrame(animate);
			return () => cancelAnimationFrame(frame);
		}, { threshold: .2 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		children: count.toLocaleString("en-IN")
	});
}
function Village({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "village",
		className: "section container-wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "intro reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "intro-photo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					src: images.village,
					alt: "Representative rural Andhra landscape with paddy fields and palm trees"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "photo-caption",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(c("A place with roots. And room to grow.", "మన మూలాలు. మన ఎదుగుదల.")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(c("Representative visual", "ప్రాతినిధ్య చిత్రం")) })]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t(c("THIS IS THUMMAPALA", "ఇదే మన తుమ్మపాల"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title",
					children: t(c("Small-town roots.\nBig-hearted dreams.", "మన ఊరి మూలాలు.\nపెద్ద ఆశయాలు."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "telugu-line",
					children: t(c("A village growing, together.", "కలిసి ఎదుగుతున్న మన ఊరు."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-copy",
					children: t(c("Between green fields and the rhythms of everyday life, Thummapala has a story of its own. A story carried by our farmers, our families, and the young minds imagining what comes next.", "పచ్చని పొలాలు, రోజువారీ జీవితంలో మన తుమ్మపాలకు ఒక కథ ఉంది. రైతులు, కుటుంబాలు, రేపటిని ఊహించే పిల్లలు కలిసి రాస్తున్న కథ."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-copy",
					children: t(c("Our next chapter is about opening doors — to a better education, meaningful careers, smarter farming, and a stronger community.", "మన తదుపరి అధ్యాయం — మంచి చదువు, సరైన ఉద్యోగ అవకాశాలు, కొత్త వ్యవసాయ పద్ధతులు, బలమైన కమ్యూనిటీ."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
					href: "#location",
					children: t(c("Get to know our village", "మన ఊరిని తెలుసుకోండి"))
				})
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "data-note",
			children: t(c("Historical research figures · 2011 Census · Client verification pending. These are not current population estimates.", "2011 జనగణన ఆధారిత పరిశోధన వివరాలు · నిర్ధారణ అవసరం. ఇవి ప్రస్తుత జనాభా అంచనాలు కావు."))
		})]
	});
}
function Education({ t, open }) {
	const pageVisual = pageIntros.education;
	const icons = [
		BookOpen,
		Monitor,
		Compass,
		GraduationCap,
		Award,
		Atom
	];
	const steps = [
		c("School education", "పాఠశాల చదువు"),
		c("Additional learning", "అదనపు అభ్యాసం"),
		c("Digital skills", "డిజిటల్ నైపుణ్యాలు"),
		c("Mentorship", "మార్గదర్శకత్వం"),
		c("Competitive exams", "పోటీ పరీక్షలు"),
		c("Advanced technology", "కొత్త టెక్నాలజీ"),
		c("Career opportunities", "ఉద్యోగ అవకాశాలు")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "section education-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "education-lead reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-teal",
							children: t(c("OUR MOST IMPORTANT INVESTMENT", "మన ముఖ్యమైన పెట్టుబడి"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: t(c("Education without\nboundaries.", "హద్దులు లేని\nచదువు."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "telugu-line",
							children: "చదువు మాత్రమే కాదు. దిశ కూడా."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy",
							children: t(c("A student’s location should never limit their future. From ZPHS Thummapala to new skills and bigger ambitions, we envision a path that supports every step.", "విద్యార్థి భవిష్యత్తును ఊరు పరిమితం చేయకూడదు. తుమ్మపాల పాఠశాల నుంచి కొత్త నైపుణ్యాలు, పెద్ద ఆశయాల దాకా ప్రతి అడుగుకూ తోడుగా ఉండాలి."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "data-note",
							children: t(c("Programme concepts below are sample community initiatives.", "క్రింది కార్యక్రమాలు నమూనా కమ్యూనిటీ ఆలోచనలు."))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						loading: "lazy",
						src: pageVisual.contentImageUrl ?? images.education,
						alt: pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "photo-caption",
						children: t(pageVisual.contentCaption ?? imageMetadata.caption)
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "journey",
					"aria-label": t(c("Education journey", "చదువు ప్రయాణం")),
					children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "journey-step reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(step) })]
					}, step.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl",
						children: t(c("A little support. A lasting difference.", "కొంచెం తోడు. జీవితానికి దిశ."))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sample",
						children: t(c("SAMPLE PROGRAMMES", "నమూనా కార్యక్రమాలు"))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "programs",
					children: programs.map((p, i) => {
						const Icon = icons[i] ?? BookOpen;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "program",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "program-icon",
								strokeWidth: 1.4
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(p.title) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(p.description) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
									onClick: () => open(p),
									children: t(c("Explore programme", "కార్యక్రమం చూడండి"))
								})
							] })]
						}, p.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mentor-band",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-teal mb-4",
							children: t(c("EXPERIENCE THAT OPENS DOORS", "అనుభవంతో మార్గదర్శనం"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(c("Learn from experience.", "అనుభవం నుంచి నేర్చుకుందాం.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy mt-4",
							children: t(c("A space for experienced educators, retired professionals and mentors to share what they know.", "అనుభవజ్ఞులు, రిటైర్డ్ నిపుణులు తమ జ్ఞానాన్ని పంచుకునే వేదిక."))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mentor-list",
						children: mentors.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mentor-item",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mentor-avatar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
									size: 19,
									strokeWidth: 1.3
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "editorial",
								className: "h-auto p-0 whitespace-normal text-left",
								onClick: () => open(m),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(m.title) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Demo profile · To be confirmed", "నమూనా ప్రొఫైల్ · నిర్ధారించాలి")) })] })]
						}, m.id))
					})]
				})
			]
		})
	});
}
function useCarousel(count, auto = false, align = "start", containScroll) {
	const [ref, api] = useEmblaCarousel({
		align,
		loop: auto,
		skipSnaps: false,
		duration: 32,
		...containScroll === false ? { containScroll: false } : {}
	});
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [snaps, setSnaps] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		api?.scrollTo(0, true);
	}, [api]);
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const select = () => {
			setIndex(api.selectedScrollSnap());
			setSnaps(api.scrollSnapList());
		};
		select();
		api.on("select", select);
		api.on("reInit", select);
		return () => {
			api.off("select", select);
			api.off("reInit", select);
		};
	}, [api, count]);
	(0, import_react.useEffect)(() => {
		if (!auto || !api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = setInterval(() => api.scrollNext(), 5500);
		return () => clearInterval(timer);
	}, [
		auto,
		api,
		paused
	]);
	return {
		ref,
		api,
		index,
		paused,
		setPaused,
		snaps
	};
}
function CarouselControls({ prev, next, t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "carousel-controls",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "icon",
			"aria-label": t(c("Previous items", "మునుపటి అంశాలు")),
			onClick: prev,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 15 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "icon",
			"aria-label": t(c("Next items", "తదుపరి అంశాలు")),
			onClick: next,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
		})]
	});
}
function Filters({ items, value, setValue, t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "filters",
		"aria-label": t(c("Category filters", "వర్గాల ఎంపిక")),
		children: [c("All", "అన్నీ"), ...items].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "filter",
			"data-active": value === item.en,
			"aria-pressed": value === item.en,
			onClick: () => setValue(item.en),
			children: t(item)
		}, item.en))
	});
}
function Opportunities({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "opportunities",
		className: "section container-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: c("OPPORTUNITY CATEGORIES", "అవకాశాల విభాగాలు"),
				title: c("A place for future pathways.", "భవిష్యత్తు అవకాశాలకు ఒక వేదిక."),
				t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-copy mb-7",
				children: t(c("The Digital Thummapala platform is preparing to bring trusted opportunities together. Listings have not been published yet.", "నమ్మదగిన అవకాశాల వివరాలను ఒకచోట అందించేందుకు డిజిటల్ తుమ్మపాల వేదిక సిద్ధమవుతోంది. ప్రస్తుతం అవకాశాల జాబితాలు ప్రచురించలేదు."))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "opportunity-category-grid",
				children: opportunityCategories.map((item) => {
					const Icon = opportunityIcons[item.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "opportunity-category-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opportunity-category-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { "aria-hidden": "true" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(item.title) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(item.description) })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opportunity-status",
								children: t(item.status)
							})
						]
					}, item.id);
				})
			})
		]
	});
}
function Stories({ t }) {
	const carousel = useCarousel(stories.length, true, "center", false);
	(0, import_react.useEffect)(() => {
		if (!carousel.api) return;
		carousel.api.scrollTo(0, true);
	}, [carousel.api]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "section story-section",
		onMouseEnter: () => carousel.setPaused(true),
		onMouseLeave: () => carousel.setPaused(false),
		onFocusCapture: () => carousel.setPaused(true),
		onBlurCapture: () => carousel.setPaused(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: c("A THUMMAPALA STORY ARCHIVE", "తుమ్మపాల కథల సమాహారం"),
					title: c("Our Success Stories", "మన విజయ గాథలు"),
					t,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
						t,
						prev: () => carousel.api?.scrollPrev(),
						next: () => carousel.api?.scrollNext()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-line story-intro",
					children: t(c("People from Thummapala who are moving forward.", "ముందుకు సాగుతున్న తుమ్మపాల వాసులు."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "carousel-viewport story-viewport",
					ref: carousel.ref,
					"aria-roledescription": "carousel",
					"aria-label": t(c("Success stories", "విజయ గాథలు")),
					tabIndex: 0,
					onKeyDown: (event) => {
						if (event.key === "ArrowLeft") {
							event.preventDefault();
							carousel.api?.scrollPrev();
						} else if (event.key === "ArrowRight") {
							event.preventDefault();
							carousel.api?.scrollNext();
						}
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "carousel-track",
						children: stories.map((story, i) => {
							const active = i === carousel.index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "carousel-slide story-slide",
								"aria-hidden": !active,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `story-card ${story.id === "sports-journey" ? "story-card--portrait" : ""}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											loading: "lazy",
											src: story.image,
											alt: t(story.alt)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "story-card-shade",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "story-card-content",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "story-card-label",
													children: [
														t(story.category),
														" · ",
														String(i + 1).padStart(2, "0")
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "story-card-title",
													children: t(story.title)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "story-card-description",
													children: t(story.description)
												})
											]
										})
									]
								})
							}, story.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "carousel-progress story-progress",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sample",
						children: t(c("Education, community & sport", "విద్య, సమాజం, క్రీడలు"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sample",
							children: [
								"0",
								carousel.index + 1,
								" / 0",
								stories.length
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "progress-track",
							"aria-hidden": "true",
							children: carousel.snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === carousel.index ? "active" : "" }, i))
						})]
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactPeople, { t })] });
}
function ImpactPeople({ t }) {
	const carousel = useCarousel(impactPeople.length, true, "center", false);
	(0, import_react.useEffect)(() => {
		carousel.api?.scrollTo(0, true);
	}, [carousel.api]);
	const videoId = getYouTubeVideoId(impactVideoUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "impact-people",
		className: "section impact-people-section",
		onMouseEnter: () => carousel.setPaused(true),
		onMouseLeave: () => carousel.setPaused(false),
		onFocusCapture: () => carousel.setPaused(true),
		onBlurCapture: () => carousel.setPaused(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: c("THE PEOPLE BEHIND THE JOURNEY", "ఈ ప్రయాణం వెనుక ఉన్న వ్యక్తులు"),
					title: c("People Who Make an Impact", "ప్రభావం చూపుతున్న వ్యక్తులు"),
					t,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
						t,
						prev: () => carousel.api?.scrollPrev(),
						next: () => carousel.api?.scrollNext()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-line impact-people-intro",
					children: t(c("Every journey is shaped by people who contribute their time, knowledge, energy and ideas. Meet some of the people connected to Thummapala's journey.", "తమ సమయం, జ్ఞానం, శక్తి, ఆలోచనలతో ప్రతి ప్రయాణానికి వ్యక్తులు తోడ్పడతారు. తుమ్మపాల ప్రయాణంతో అనుబంధం ఉన్న కొందరిని పరిచయం చేసుకుందాం."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "carousel-viewport impact-people-viewport",
					ref: carousel.ref,
					"aria-roledescription": "carousel",
					"aria-label": t(c("People who make an impact", "ప్రభావం చూపుతున్న వ్యక్తులు")),
					tabIndex: 0,
					onKeyDown: (event) => {
						if (event.key === "ArrowLeft") {
							event.preventDefault();
							carousel.api?.scrollPrev();
						} else if (event.key === "ArrowRight") {
							event.preventDefault();
							carousel.api?.scrollNext();
						}
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "carousel-track",
						children: impactPeople.map((person, i) => {
							const active = i === carousel.index;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "carousel-slide impact-person-slide",
								"aria-hidden": !active,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "impact-person-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `impact-person-photo impact-person-photo--${person.id}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: person.image,
											alt: t(person.alt),
											loading: "lazy"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "impact-person-copy",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "impact-person-index",
												children: [
													String(i + 1).padStart(2, "0"),
													" / ",
													String(impactPeople.length).padStart(2, "0")
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(person.name) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "impact-person-role",
												children: t(person.role)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "impact-person-description",
												children: t(person.description)
											})
										]
									})]
								})
							}, person.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "impact-people-progress",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "progress-track",
						"aria-hidden": "true",
						children: carousel.snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === carousel.index ? "active" : "" }, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "impact-video-showcase",
					children: videoId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: `https://www.youtube-nocookie.com/embed/${videoId}`,
						title: t(c("Our Journey in Action", "మన ప్రయాణం కార్యరూపంలో")),
						loading: "lazy",
						allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
						referrerPolicy: "strict-origin-when-cross-origin",
						allowFullScreen: true
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "impact-video-placeholder",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/thummapala-story-sports-journey.png",
								alt: t(c("Thummapala sports community and Kho-Kho journey", "తుమ్మపాల క్రీడా సమాజం, ఖో-ఖో ప్రయాణం")),
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "impact-video-shade",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "impact-video-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "impact-video-play",
										"aria-hidden": "true",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { fill: "currentColor" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: t(c("VIDEO COMING SOON", "వీడియో త్వరలో"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(c("Our Journey in Action", "మన ప్రయాణం కార్యరూపంలో")) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("A glimpse into the people, activities and moments shaping Thummapala's journey.", "తుమ్మపాల ప్రయాణాన్ని మలుస్తున్న వ్యక్తులు, కార్యక్రమాలు, క్షణాల సమాహారం.")) })
								]
							})
						]
					})
				})
			]
		})
	});
}
function Agrotech({ t, open }) {
	const pageVisual = pageIntros.agrotech;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "agrotech",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "full-photo-story agrotech-story",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide agrotech-story-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "agrotech-story-figure",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						loading: "lazy",
						src: pageVisual.contentImageUrl ?? images.agriculture,
						alt: pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: t(pageVisual.contentCaption ?? imageMetadata.caption) })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "full-photo-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("OUR LAND. OUR LIVELIHOOD.", "మన నేల. మన జీవనాధారం."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "section-title",
							children: t(c("Growing smarter.\nStaying rooted.", "కొత్త ఆలోచనలు.\nమన నేలతో బంధం."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("Our farmers carry generations of knowledge. New ideas, shared experience and practical technology can help that knowledge grow.", "మన రైతుల అనుభవం తరతరాలది. కొత్త ఆలోచనలు, పరస్పర సహకారం, సాంకేతికతతో మరింత ముందుకు సాగుదాం.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "agri-process",
							children: [
								c("Land", "నేల"),
								c("Farmer", "రైతు"),
								c("Knowledge", "జ్ఞానం"),
								c("Future", "భవిష్యత్తు")
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-3",
								children: [t(s), i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 11 })]
							}, s.en))
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-wide initiative-list",
			children: agricultureInitiatives.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "initiative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sample",
						children: [
							"0",
							i + 1,
							" / ",
							t(c("SAMPLE INITIATIVE", "నమూనా కార్యక్రమం"))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(e.title) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(e.description) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						onClick: () => open(e),
						children: t(c("Discover more", "మరింత తెలుసుకోండి"))
					})
				]
			}, e.id))
		})]
	});
}
function Sports({ t, open }) {
	const pageVisual = pageIntros.sports;
	const carousel = useCarousel(sportsEntries.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "sports",
		className: "section sports-section container-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sports-layout reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: t(c("OUR FIELD. OUR SPIRIT.", "మన మైదానం. మన స్ఫూర్తి."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t(c("Play.\nCompete. Rise.", "ఆడుదాం.\nగెలుద్దాం."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "telugu-line text-earth",
						children: "మన మైదానం. మన ప్రతిభ."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-copy",
						children: t(c("Kho-Kho is more than a game. It is quick thinking, trust, teamwork, and the courage to keep moving. A sporting spirit that belongs to Thummapala.", "ఖో-ఖో కేవలం ఆట కాదు. చురుకైన ఆలోచన, నమ్మకం, జట్టుగా పని చేయడం, ముందుకు సాగే ధైర్యం. మన తుమ్మపాల క్రీడాస్ఫూర్తి."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						onClick: () => sportsEntries[0] && open(sportsEntries[0]),
						children: t(c("Discover our sporting spirit", "మన క్రీడాస్ఫూర్తిని చూడండి"))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					src: pageVisual.contentImageUrl ?? images.sports,
					alt: pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "photo-caption",
					children: t(pageVisual.contentCaption ?? imageMetadata.caption)
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl",
					children: t(c("Together, on the field.", "మైదానంలో కలిసి."))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
					t,
					prev: () => carousel.api?.scrollPrev(),
					next: () => carousel.api?.scrollNext()
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: carousel.ref,
				className: "carousel-viewport",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "carousel-track",
					children: sportsEntries.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "carousel-slide sport-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
								className: "text-earth shrink-0",
								size: 22,
								strokeWidth: 1.3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"0",
									i + 1,
									" · ",
									t(c("SAMPLE PROGRAMME", "నమూనా కార్యక్రమం"))
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block mt-2",
									children: t(s.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "data-note",
									children: [
										s.date,
										" · ",
										t(c("No verified results claimed", "విజయాలు ఇంకా నిర్ధారించలేదు"))
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "editorial",
								size: "icon",
								"aria-label": t(s.title),
								onClick: () => open(s),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
							})
						]
					}, s.id))
				})
			})
		]
	});
}
function EventsActivities({ t }) {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const filteredEvents = events.filter((event) => filter === "All" || event.category.en === filter);
	const eventCarousel = useCarousel(filteredEvents.length, true, "center", false);
	(0, import_react.useEffect)(() => {
		if (!eventCarousel.api) return;
		eventCarousel.api.reInit();
		eventCarousel.api.scrollTo(0, true);
	}, [eventCarousel.api, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "events-activities",
		className: "section events-activities-section",
		onMouseEnter: () => eventCarousel.setPaused(true),
		onMouseLeave: () => eventCarousel.setPaused(false),
		onFocusCapture: () => eventCarousel.setPaused(true),
		onBlurCapture: (event) => {
			const nextTarget = event.relatedTarget;
			if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) eventCarousel.setPaused(false);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
					eyebrow: c("GOOD THINGS HAPPEN TOGETHER", "కలిసి చేస్తే మంచి జరుగుతుంది"),
					title: c("Thummapala Events", "తుమ్మపాల కార్యక్రమాలు"),
					t,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
						t,
						prev: () => eventCarousel.api?.scrollPrev(),
						next: () => eventCarousel.api?.scrollNext()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
					items: events.map((event) => event.category),
					value: filter,
					setValue: setFilter,
					t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sample events-activities-demo-note",
					children: t(c("Event ideas shown as placeholders · details will be confirmed before publication", "ఈవెంట్ ఆలోచనలు నమూనా మాత్రమే · ప్రచురణకు ముందు వివరాలు నిర్ధారిస్తాం"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "events",
					className: "events-activities-event-feature",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "carousel-viewport",
						ref: eventCarousel.ref,
						"aria-roledescription": "carousel",
						"aria-label": t(c("Thummapala event ideas", "తుమ్మపాల ఈవెంట్ ఆలోచనలు")),
						tabIndex: 0,
						onKeyDown: (event) => {
							if (event.key === "ArrowLeft") {
								event.preventDefault();
								eventCarousel.api?.scrollPrev();
							} else if (event.key === "ArrowRight") {
								event.preventDefault();
								eventCarousel.api?.scrollNext();
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "carousel-track",
							children: filteredEvents.map((event, i) => {
								const active = i === eventCarousel.index;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "event-card carousel-slide",
									"data-active": active,
									"aria-hidden": !active,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "event-info",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow",
												children: t(event.category)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(event.title) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "event-description",
												children: t(event.description)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "event-context",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
													size: 13,
													"aria-hidden": "true"
												}), t(event.location)]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "event-footer",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "status",
													children: t(event.status)
												})
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "event-image",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: event.image,
											alt: t(event.alt),
											loading: "lazy"
										})
									})]
								}, event.id);
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "carousel-progress",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sample",
							children: t(c("Placeholder event concepts · no confirmed listings", "ఈవెంట్ నమూనాలు · నిర్ధారిత జాబితాలు లేవు"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "progress-track",
							"aria-hidden": "true",
							children: eventCarousel.snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === eventCarousel.index ? "active" : "" }, i))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "activities",
					className: "events-activities-activity-feature",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "events-activities-subhead",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: t(c("LIFE IN THUMMAPALA", "తుమ్మపాలలో జీవితం"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(c("Village Activities", "గ్రామ కార్యకలాపాలు")) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("A glimpse of what is happening around the village.", "మన ఊరిలో జరుగుతున్న వాటి సంగ్రహం.")) })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "activity-tiles",
						children: activities.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "activity-tile",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: activity.image,
								alt: t(activity.alt),
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(activity.label) }), t(activity.title)] })]
						}, activity.id))
					})]
				})
			]
		})
	});
}
function Gallery({ t, onSelect }) {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [all, setAll] = (0, import_react.useState)(false);
	const items = filterEntries(gallery, filter);
	const categories = Array.from(new Map(gallery.map((g) => [g.category.en, g.category])).values());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section container-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: c("A VILLAGE, IN MOMENTS", "ఒక ఊరు. ఎన్నో క్షణాలు."),
				title: c("Gallery", "ఫోటోలు"),
				t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
				items: categories,
				value: filter,
				setValue: (v) => {
					setFilter(v);
					setAll(false);
				},
				t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery-grid",
				children: items.slice(0, all ? items.length : 12).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "editorial",
					className: "gallery-item",
					"aria-label": `${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(g.title)}`,
					onClick: () => onSelect(g, items),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.imageUrl ?? images[g.image],
						loading: "lazy",
						alt: t(g.alt ?? g.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						t(g.title),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "inline size-3" })
					] })]
				}, g.id))
			}),
			items.length > 12 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery-more",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
					onClick: () => setAll(!all),
					children: t(all ? c("Show fewer moments", "కొన్ని ఫోటోలు చూపించండి") : c(`Explore all ${items.length} moments`, `${items.length} ఫోటోలు చూడండి`))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "data-note text-center",
				children: t(c("A growing visual collection of Thummapala and clearly marked future concepts.", "తుమ్మపాల దృశ్యాలు, స్పష్టంగా గుర్తించిన భవిష్యత్ ఆలోచనలతో పెరుగుతున్న చిత్రాల సమాహారం."))
			})
		]
	});
}
function Location({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "location",
		className: "section location-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide location-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: t(c("COME A LITTLE CLOSER", "మన ఊరికి చేరువగా"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-title",
					children: t(c("Find Thummapala.", "తుమ్మపాల ఎక్కడ ఉంది?"))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "section-copy",
					children: t(c("Our story begins here. In the Anakapalli region of Andhra Pradesh.", "మన కథ ఇక్కడే మొదలవుతుంది. ఆంధ్రప్రదేశ్‌లోని అనకాపల్లి ప్రాంతంలో."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "location-address",
					children: [
						t(c("Thummapala · Anakapalli mandal", "తుమ్మపాల · అనకాపల్లి మండలం")),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						t(c("Anakapalli district, Andhra Pradesh, India", "అనకాపల్లి జిల్లా, ఆంధ్రప్రదేశ్, భారతదేశం")),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground text-xs",
							children: ["17.6979° N, 82.9700° E · ", t(c("Approximate", "సుమారు"))]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "data-note",
					children: t(c("PIN 531032 · Directory research, verification pending. Map position is approximate.", "పిన్ 531032 · నిర్ధారణ అవసరం. మ్యాప్ స్థానం సుమారుగా చూపించాం."))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6 rounded-sm text-xs h-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						target: "_blank",
						rel: "noopener noreferrer",
						href: "https://www.google.com/maps/dir/?api=1&destination=17.6979,82.9700",
						children: [t(c("Get directions", "దారి తెలుసుకోండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "location-map",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					loading: "lazy",
					title: "OpenStreetMap of Thummapala region",
					src: "https://www.openstreetmap.org/export/embed.html?bbox=82.935%2C17.675%2C83.005%2C17.72&layer=mapnik&marker=17.6979%2C82.9700"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "map-label",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							size: 14,
							className: "inline mr-2 text-primary"
						}),
						t(c("Thummapala", "తుమ్మపాల")),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Anakapalli, Andhra Pradesh · Approximate location", "అనకాపల్లి, ఆంధ్రప్రదేశ్ · సుమారు స్థానం")) })
					]
				})]
			})]
		})
	});
}
function Enquiry({ t }) {
	const formRef = (0, import_react.useRef)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sending, setSending] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const fields = new FormData(form);
		const nextErrors = validateEnquiry({
			name: String(fields.get("name") ?? "").trim(),
			phone: String(fields.get("phone") ?? "").trim(),
			email: String(fields.get("email") ?? "").trim(),
			audience: String(fields.get("audience") ?? ""),
			interest: String(fields.get("interest") ?? ""),
			message: String(fields.get("message") ?? "").trim()
		});
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;
		setSending(true);
		window.setTimeout(() => {
			setSending(false);
			setSubmitted(true);
		}, 450);
	};
	const reset = () => {
		formRef.current?.reset();
		setErrors({});
		setSubmitted(false);
	};
	const errorText = (issue) => {
		if (issue === "required") return t(c("This field is required.", "ఈ వివరాన్ని తప్పనిసరిగా నమోదు చేయండి."));
		if (issue === "phone") return t(c("Enter a valid phone number (8–15 digits).", "సరైన ఫోన్ నంబర్ నమోదు చేయండి (8–15 అంకెలు)."));
		if (issue === "email") return t(c("Enter a valid email address.", "సరైన ఇమెయిల్ చిరునామా నమోదు చేయండి."));
		return "";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section enquiry-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide enquiry-layout",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "enquiry-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t(c("GET IN TOUCH", "సంప్రదించండి"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t(c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-copy",
						children: t(c("Have a question, want to support a programme, share an opportunity, or connect with the community? We’d love to hear from you.", "ఏదైనా అడగాలనుకుంటున్నారా, కార్యక్రమానికి తోడ్పడాలనుకుంటున్నారా, అవకాశం పంచుకోవాలనుకుంటున్నారా? మన కమ్యూనిటీతో మీ అనుబంధాన్ని ప్రారంభించండి."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "enquiry-mark",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { strokeWidth: 1 })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				className: "enquiry-form",
				ref: formRef,
				onSubmit: submit,
				noValidate: true,
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "enquiry-success",
					role: "status",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "enquiry-success-icon",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("THANK YOU FOR CONNECTING", "మాతో కలిసినందుకు ధన్యవాదాలు"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(c("Your message is ready.", "మీ సందేశం సిద్ధంగా ఉంది.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("This is a front-end preview, so your enquiry has not been sent or saved. A live contact service can be connected after review.", "ఇది వెబ్‌సైట్ నమూనా మాత్రమే. మీ సందేశం పంపబడలేదు లేదా భద్రపరచబడలేదు. సమీక్ష తర్వాత నిజమైన సంప్రదింపు సేవను అనుసంధానించవచ్చు.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "editorial",
							className: "enquiry-reset",
							onClick: reset,
							children: [t(c("Send another message", "మరో సందేశం పంపండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enquiry-form-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["01 — ", t(c("YOUR DETAILS", "మీ వివరాలు"))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(c("All fields required", "అన్ని వివరాలు తప్పనిసరి")) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enquiry-fields",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-name",
										children: t(c("Full name", "పూర్తి పేరు"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "enquiry-name",
										name: "name",
										autoComplete: "name",
										required: true,
										"aria-invalid": Boolean(errors.name),
										"aria-describedby": errors.name ? "enquiry-name-error" : void 0,
										placeholder: t(c("Your name", "మీ పేరు"))
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										id: "enquiry-name-error",
										children: errorText(errors.name)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-phone",
										children: t(c("Phone number", "ఫోన్ నంబర్"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "enquiry-phone",
										name: "phone",
										type: "tel",
										autoComplete: "tel",
										inputMode: "tel",
										required: true,
										"aria-invalid": Boolean(errors.phone),
										"aria-describedby": errors.phone ? "enquiry-phone-error" : void 0,
										placeholder: t(c("+91 00000 00000", "+91 00000 00000"))
									}),
									errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										id: "enquiry-phone-error",
										children: errorText(errors.phone)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field enquiry-field-wide",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-email",
										children: t(c("Email address", "ఇమెయిల్ చిరునామా"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "enquiry-email",
										name: "email",
										type: "email",
										autoComplete: "email",
										required: true,
										"aria-invalid": Boolean(errors.email),
										"aria-describedby": errors.email ? "enquiry-email-error" : void 0,
										placeholder: t(c("you@example.com", "you@example.com"))
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										id: "enquiry-email-error",
										children: errorText(errors.email)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-audience",
										children: t(c("I am a…", "నేను…"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "enquiry-select",
										id: "enquiry-audience",
										name: "audience",
										required: true,
										defaultValue: "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: t(c("Choose one", "ఒకటి ఎంచుకోండి"))
										}), [
											c("Student", "విద్యార్థి"),
											c("Parent", "తల్లిదండ్రులు"),
											c("Farmer", "రైతు"),
											c("Player", "క్రీడాకారుడు"),
											c("Mentor", "మార్గదర్శి"),
											c("Volunteer", "వాలంటీర్"),
											c("Community member", "కమ్యూనిటీ సభ్యుడు"),
											c("Other", "ఇతరులు")
										].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: option.en,
											children: t(option)
										}, option.en))]
									}),
									errors.audience && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										children: errorText(errors.audience)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-interest",
										children: t(c("Interested in…", "ఆసక్తి ఉన్నది…"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "enquiry-select",
										id: "enquiry-interest",
										name: "interest",
										required: true,
										defaultValue: "",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: t(c("Choose a topic", "విషయం ఎంచుకోండి"))
										}), [
											c("Education", "చదువు"),
											c("Career", "ఉద్యోగం"),
											c("Agriculture", "వ్యవసాయం"),
											c("Sports", "క్రీడలు"),
											c("Training", "శిక్షణ"),
											c("Community programmes", "కమ్యూనిటీ కార్యక్రమాలు"),
											c("Other", "ఇతర అంశం")
										].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: option.en,
											children: t(option)
										}, option.en))]
									}),
									errors.interest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										children: errorText(errors.interest)
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enquiry-field enquiry-field-wide",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "enquiry-message",
										children: t(c("Your message", "మీ సందేశం"))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "enquiry-message",
										name: "message",
										required: true,
										rows: 3,
										"aria-invalid": Boolean(errors.message),
										placeholder: t(c("How would you like to be involved?", "మీరు ఎలా భాగస్వాములు కావాలనుకుంటున్నారు?"))
									}),
									errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "enquiry-error",
										children: errorText(errors.message)
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "enquiry-submit-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("Front-end preview · Messages are not transmitted or stored.", "వెబ్‌సైట్ నమూనా · సందేశాలు పంపబడవు లేదా భద్రపరచబడవు.")) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "enquiry-submit",
							disabled: sending,
							children: [sending ? t(c("Preparing…", "సిద్ధం చేస్తున్నాం…")) : t(c("Send enquiry", "సందేశం పంపండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})]
					})
				] })
			})]
		})
	});
}
function Footer({ t, open }) {
	const social = (name) => open({
		id: "social",
		title: c(name, name),
		description: c("Official community accounts have not been provided yet. Verified social links will appear here when confirmed.", "అధికారిక కమ్యూనిటీ ఖాతాలు ఇంకా ఇవ్వలేదు. నిర్ధారించిన లింకులు ఇక్కడ అందిస్తాం."),
		category: c("Community connections", "మన కమ్యూనిటీ"),
		image: "village",
		isDemo: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brand, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "footer-statement",
						children: t(c("Our village. Our people.\nOur future.", "మన ఊరు. మన ప్రజలు.\nమన భవిష్యత్తు."))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "footer-nav",
						"aria-label": "Footer navigation",
						children: [...nav.slice(1), ...moreNav].map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to,
							children: t(label)
						}, to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-location",
						children: [
							t(c("Thummapala, Anakapalli", "తుమ్మపాల, అనకాపల్లి")),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t(c("Andhra Pradesh, India", "ఆంధ్రప్రదేశ్, భారతదేశం")),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "socials",
								children: [
									[Youtube, "YouTube"],
									[Instagram, "Instagram"],
									[Facebook, "Facebook"]
								].map(([Icon, name]) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "editorial",
										"aria-label": name,
										onClick: () => social(name),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 17 })
									}, name);
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["© 2026 Thummapala · ", t(c("Growing together.", "కలిసి ఎదుగుదాం."))] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(c("A community vision · Frontend demo · Sample content & representative visuals", "కమ్యూనిటీ ఆలోచన · నమూనా వెబ్‌సైట్ · ప్రాతినిధ్య చిత్రాలు")) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						children: [t(c("Back to top", "పైకి వెళ్లండి")), " ↑"]
					})
				]
			})]
		})
	});
}
function Detail({ entry, onClose, t, galleryItems, onNavigate }) {
	const [notice, setNotice] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setNotice(false), [entry?.id]);
	const index = entry ? galleryItems.findIndex((e) => e.id === entry.id) : -1;
	const isGallery = index >= 0;
	const step = (0, import_react.useCallback)((delta) => {
		const next = galleryItems[(index + delta + galleryItems.length) % galleryItems.length];
		if (next) onNavigate(next);
	}, [
		galleryItems,
		index,
		onNavigate
	]);
	const touch = (0, import_react.useRef)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: entry !== null,
		onOpenChange: (v) => {
			if (!v) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "detail-dialog",
			onKeyDown: (e) => {
				if (!isGallery) return;
				if (e.key === "ArrowRight") step(1);
				if (e.key === "ArrowLeft") step(-1);
			},
			children: entry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [entry.mediaType === "video" && entry.mediaUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: `detail-photo detail-video ${isGallery ? "lightbox-photo" : ""}`,
				controls: true,
				playsInline: true,
				preload: "metadata",
				poster: entry.imageUrl ?? images[entry.image],
				onTouchStart: (e) => {
					touch.current = e.touches[0]?.clientX ?? 0;
				},
				onTouchEnd: (e) => {
					if (!isGallery) return;
					const delta = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
					if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", { src: entry.mediaUrl })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: `detail-photo ${isGallery ? "lightbox-photo" : ""}`,
				src: entry.imageUrl ?? images[entry.image],
				alt: t(entry.alt ?? entry.title),
				onTouchStart: (e) => {
					touch.current = e.touches[0]?.clientX ?? 0;
				},
				onTouchEnd: (e) => {
					if (!isGallery) return;
					const delta = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
					if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "detail-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-primary",
						children: t(entry.category)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t(entry.title) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t(entry.description) }),
					(entry.date || entry.location || entry.eligibility || entry.status) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail-facts",
						children: [
							entry.date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Date / last date · sample", "తేదీ / చివరి తేదీ · నమూనా")) }), entry.date] }),
							entry.location && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Location", "స్థానం")) }), t(entry.location)] }),
							entry.eligibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Eligibility", "అర్హత")) }), t(entry.eligibility)] }),
							entry.status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Status", "స్థితి")) }), t(entry.status)] }),
							entry.organization && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t(c("Organisation", "సంస్థ")) }), t(entry.organization)] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "data-note",
						children: t(isGallery ? imageMetadata.caption : c("Demo / sample content · Details require client confirmation. Representative photograph.", "డెమో / నమూనా సమాచారం · నిర్ధారణ అవసరం. ప్రాతినిధ్య చిత్రం."))
					}),
					isGallery ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lightbox-controls",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sample",
							children: [
								index + 1,
								" / ",
								galleryItems.length
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
							t,
							prev: () => step(-1),
							next: () => step(1)
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-6 rounded-sm text-xs",
						onClick: () => setNotice(true),
						children: [t(c("Participation information", "పాల్గొనే వివరాలు")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
					}), notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dialog-action-note",
						role: "status",
						children: t(c("This is a frontend demonstration. Registration and applications are not open. Confirmed dates, contact details and participation links will be added after the community review.", "ఇది నమూనా వెబ్‌సైట్. నమోదు, దరఖాస్తులు ఇంకా ప్రారంభం కాలేదు. కమ్యూనిటీ సమీక్ష తర్వాత తేదీలు, సంప్రదింపులు, నమోదు లింకులు అందిస్తాం."))
					})] })
				]
			})] })
		})
	});
}
var languageState = "en";
var languageListeners = /* @__PURE__ */ new Set();
function useLanguage() {
	const lang = (0, import_react.useSyncExternalStore)((listener) => {
		languageListeners.add(listener);
		return () => languageListeners.delete(listener);
	}, () => languageState, () => "en");
	const setLang = (next) => {
		languageState = next;
		languageListeners.forEach((listener) => listener());
	};
	return [lang, setLang];
}
function SitePage({ children }) {
	const [lang, setLang] = useLanguage();
	const [detail, setDetail] = (0, import_react.useState)(null);
	const [galleryItems, setGalleryItems] = (0, import_react.useState)([]);
	const t = (copy) => copy[lang];
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const open = (e) => {
		setGalleryItems([]);
		setDetail(e);
	};
	const showGallery = (e, items) => {
		setGalleryItems(items);
		setDetail(e);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
			t,
			lang,
			setLang
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "page-enter",
			children: children({
				t,
				lang,
				open,
				showGallery
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {
			t,
			open
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
			entry: detail,
			onClose: () => setDetail(null),
			t,
			galleryItems,
			onNavigate: setDetail
		})
	] });
}
function HomeHead({ eyebrow, title, line, t, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "section-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: t(eyebrow)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "section-title",
				children: t(title)
			}),
			line && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-line",
				children: t(line)
			})
		] }), children]
	});
}
function MoreLink({ to, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: "editorial",
		className: "text-link",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
		})
	});
}
function AboutVillage({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "section container-wide",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "split reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "split-media",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					src: images.village,
					alt: "Representative rural Andhra landscape with paddy fields and palm trees"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split-text",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t(c("ROOTED IN COMMUNITY. MOVING TOWARDS THE FUTURE.", "సమాజంలో వేళ్లూనుకుని, భవిష్యత్తు వైపు అడుగులు."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t(c("About Thummapala", "తుమ్మపాల గురించి"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-copy",
						children: t(c("Thummapala is a vibrant village in Anakapalli, Andhra Pradesh, shaped by its people, agricultural roots, education, sports and strong community spirit. With a long-standing connection to the region's agricultural and local industrial landscape, Thummapala continues to grow while looking towards new opportunities for its people and future generations.", "ఆంధ్రప్రదేశ్‌లోని అనకాపల్లి జిల్లాలో ఉన్న తుమ్మపాల, తన ప్రజలు, వ్యవసాయ మూలాలు, విద్య, క్రీడలు, బలమైన సమాజ బంధాలతో సజీవంగా నిలిచే గ్రామం. ఈ ప్రాంతపు వ్యవసాయం, స్థానిక పరిశ్రమలతో దీర్ఘకాల అనుబంధం కలిగిన తుమ్మపాల, తన ప్రజలకు మరియు రాబోయే తరాలకు కొత్త అవకాశాల వైపు ముందుకు సాగుతోంది."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-line",
						children: t(c("Anakapalli Mandal · Anakapalli District · Andhra Pradesh", "అనకాపల్లి మండలం · అనకాపల్లి జిల్లా · ఆంధ్రప్రదేశ్"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
						to: "/our-village",
						children: t(c("Explore Thummapala", "తుమ్మపాల గురించి తెలుసుకోండి"))
					})
				]
			})]
		})
	});
}
function FocusAreas({ t }) {
	const [ref, api] = useEmblaCarousel({
		loop: true,
		align: "center",
		containScroll: false,
		duration: 38
	});
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(0);
	const interactionTimer = (0, import_react.useRef)(void 0);
	const pauseForInteraction = () => {
		setPaused(true);
		if (interactionTimer.current !== void 0) window.clearTimeout(interactionTimer.current);
		interactionTimer.current = window.setTimeout(() => setPaused(false), 6e3);
	};
	(0, import_react.useEffect)(() => {
		if (!api) return;
		const select = () => setSelected(api.selectedScrollSnap() % focusAreas.length);
		select();
		api.on("select", select);
		api.scrollTo(0, true);
		return () => {
			api.off("select", select);
		};
	}, [api]);
	(0, import_react.useEffect)(() => () => {
		if (interactionTimer.current !== void 0) window.clearTimeout(interactionTimer.current);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = setInterval(() => api.scrollNext(), 5200);
		return () => clearInterval(timer);
	}, [api, paused]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "focus",
		className: "section focus-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHead, {
					title: c("Our Focus Areas", "మన ముఖ్య రంగాలు"),
					line: c("Four paths. One shared future.", "నాలుగు మార్గాలు. ఒకే భవిష్యత్తు."),
					t,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
						t,
						prev: () => {
							pauseForInteraction();
							api?.scrollPrev();
						},
						next: () => {
							pauseForInteraction();
							api?.scrollNext();
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "carousel-viewport focus-viewport",
					ref,
					"aria-roledescription": "carousel",
					"aria-label": t(c("Our focus areas", "మన ముఖ్య రంగాలు")),
					tabIndex: 0,
					onKeyDown: (event) => {
						if (event.key === "ArrowLeft") {
							event.preventDefault();
							pauseForInteraction();
							api?.scrollPrev();
						} else if (event.key === "ArrowRight") {
							event.preventDefault();
							pauseForInteraction();
							api?.scrollNext();
						}
					},
					onMouseEnter: () => setPaused(true),
					onMouseLeave: () => setPaused(false),
					onFocusCapture: () => setPaused(true),
					onBlurCapture: () => setPaused(false),
					onPointerDown: pauseForInteraction,
					onPointerUp: pauseForInteraction,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "carousel-track",
						children: focusAreas.map((f, i) => {
							const active = i === selected;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `focus-slide ${active ? "is-active" : ""}`,
								"aria-hidden": !active,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: f.path,
									className: "focus-card",
									tabIndex: active ? 0 : -1,
									onClick: (event) => {
										if (!active) {
											event.preventDefault();
											pauseForInteraction();
											api?.scrollTo(i);
										}
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										loading: "lazy",
										src: f.image,
										alt: t(f.alt),
										"data-mobile-position": f.mobilePosition
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "focus-card-body",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "focus-number",
												children: ["0", i + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: t(f.title) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(f.line) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "focus-cta",
												children: [
													t(f.cta),
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })
												]
											})
										]
									})]
								})
							}, f.path);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "focus-carousel-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sample",
						children: [
							"0",
							selected + 1,
							" / 0",
							focusAreas.length
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "focus-dots",
						children: focusAreas.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "editorial",
							"aria-label": `${t(c("Show", "చూపించు"))} ${t(f.title)}`,
							"aria-current": i === selected,
							onClick: () => {
								pauseForInteraction();
								api?.scrollTo(i);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						}, f.path))
					})]
				})
			]
		})
	});
}
function EducationPreview({ t }) {
	const points = [
		c("School support", "పాఠశాల చదువుకు తోడు"),
		c("Extra learning", "అదనపు అభ్యాసం"),
		c("Career guidance", "కెరీర్ మార్గదర్శనం")
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education-preview",
		className: "section education-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide split split-reverse reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split-text",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: t(c("Education at a glance", "చదువు ఒక చూపులో"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "section-title",
						children: t(c("Education", "చదువు"))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "section-line",
						children: t(c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "point-list",
						children: points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 16,
							"aria-hidden": "true"
						}), t(p)] }, p.en))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
						to: "/education",
						children: t(c("Explore Education", "చదువు చూడండి"))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "split-media",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					src: images.education,
					alt: "Representative students learning in an Andhra school"
				})
			})]
		})
	});
}
function OpportunityPreview({ t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "opportunities-preview",
		className: "section container-wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHead, {
			title: c("Opportunities", "అవకాశాలు"),
			line: c("Opportunity information for Thummapala is being prepared for the future.", "తుమ్మపాల కోసం అవకాశాల సమాచారం సిద్ధమవుతోంది."),
			t,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
				to: "/opportunities",
				children: t(c("View Opportunities", "అవకాశాలు చూడండి"))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "opp-tiles",
			children: opportunityCategories.map((item) => {
				const Icon = opportunityIcons[item.id];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/opportunities",
					className: "opp-tile",
					"aria-label": `${t(item.title)}. ${t(item.preview)} ${t(item.status)}. ${t(c("View opportunities", "అవకాశాలు చూడండి"))}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							"aria-hidden": "true",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "opp-tile-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(item.title) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(item.preview) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
									className: "opportunity-status",
									children: t(item.status)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "opp-tile-arrow",
							size: 16,
							"aria-hidden": "true"
						})
					]
				}, item.id);
			})
		})]
	});
}
function ComingSoon({ t, open }) {
	const carousel = useCarousel(futureInitiatives.length, false, "start");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "coming-soon",
		className: "section future-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHead, {
					title: c("Coming Soon", "త్వరలో"),
					line: c("The future we are building — ideas still being planned with the community.", "మనం నిర్మించే రేపు — కమ్యూనిటీతో ఇంకా ప్రణాళికలో ఉన్న ఆలోచనలు."),
					t,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselControls, {
						t,
						prev: () => carousel.api?.scrollPrev(),
						next: () => carousel.api?.scrollNext()
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "carousel-viewport soon-viewport",
					ref: carousel.ref,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "carousel-track",
						children: futureInitiatives.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "carousel-slide soon-slide",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "editorial",
								className: "soon-card",
								onClick: () => open(f),
								"aria-label": `${t(f.status ?? c("Future initiative", "భవిష్యత్తు కార్యక్రమం"))}: ${t(f.title)}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										loading: "lazy",
										src: f.imageUrl ?? images[f.image],
										alt: t(f.alt ?? f.title)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "soon-shade",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "soon-number",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "soon-status",
										children: f.status && t(f.status)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: t(f.title) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "soon-description",
										children: t(f.description)
									})
								]
							})
						}, f.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "carousel-progress soon-progress",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sample",
						children: t(c("Proposed ideas · not yet available", "ప్రతిపాదిత ఆలోచనలు · ఇంకా అందుబాటులో లేవు"))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "progress-track",
						"aria-hidden": "true",
						children: carousel.snaps.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: i === carousel.index ? "active" : "" }, i))
					})]
				})
			]
		})
	});
}
function GalleryPreview({ t, onSelect }) {
	const items = gallery.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery-preview",
		className: "section container-wide",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeHead, {
				title: c("Gallery", "ఫోటోలు"),
				line: c("A few moments from Thummapala.", "తుమ్మపాలలో కొన్ని క్షణాలు."),
				t,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreLink, {
					to: "/gallery",
					children: t(c("View Gallery", "ఫోటోలు చూడండి"))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery-grid gallery-preview-grid",
				children: items.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "editorial",
					className: "gallery-item reveal",
					"aria-label": `${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(g.title)}`,
					onClick: () => onSelect(g, items),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.imageUrl ?? images[g.image],
						loading: "lazy",
						alt: t(g.alt ?? g.title)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(g.title) })]
				}, g.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "data-note",
				children: t(c("Moments across village life, learning, sports and community.", "గ్రామ జీవితం, అభ్యాసం, క్రీడలు, సమాజానికి సంబంధించిన క్షణాలు."))
			})
		]
	});
}
function VillageExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePage, { children: ({ t, lang, open, showGallery }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
			t,
			lang
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutVillage, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusAreas, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EducationPreview, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunityPreview, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsActivities, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoon, {
			t,
			open
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {
			t,
			onSelect: showGallery
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, { t }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Enquiry, { t })
	] }) });
}
function PageHero({ page, t }) {
	const info = pageIntros[page];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "page-hero",
		"data-page": page,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "page-hero-photo",
				src: info.heroImageUrl ?? images[info.image],
				alt: info.heroAlt ? t(info.heroAlt) : "",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-wide page-hero-body",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "crumbs",
							"aria-label": "Breadcrumb",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: t(c("Home", "హోమ్"))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(page === "opportunities" ? c("Opportunities", "అవకాశాలు") : info.title) })
							]
						}),
						page === "opportunities" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow page-hero-eyebrow",
							children: t(c("OPPORTUNITIES", "అవకాశాలు"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: t(info.title) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(info.line) }),
						page === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hero-cta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#library-about",
								children: [t(c("Explore the Library", "గ్రంథాలయాన్ని చూడండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						})
					]
				})
			})
		]
	});
}
function PageCta({ t, page }) {
	const isLibrary = page === "library";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `page-cta ${isLibrary ? "library-page-cta" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide page-cta-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(isLibrary ? c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి") : c("Want to be part of this?", "ఇందులో భాగమవ్వాలనుకుంటున్నారా?")) }), isLibrary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t(c("Together, we can create more opportunities to read, learn and grow.", "కలిసి చదవడానికి, నేర్చుకోవడానికి, ఎదగడానికి మరిన్ని అవకాశాలు సృష్టిద్దాం.")) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "hero-cta",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					children: [t(isLibrary ? c("Connect with us", "మాతో కలవండి") : c("Be part of the journey", "ప్రయాణంలో భాగమవ్వండి")), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})
			})]
		})
	});
}
function LibraryPage({ t, onSelect }) {
	const photos = gallery.filter((item) => item.category.en === "Library & Learning");
	const aboutPhoto = photos[0];
	const readersPhoto = photos.find((item) => item.id === "gallery-library-community-celebration");
	const activitiesPhotos = photos.slice(1, 3);
	const eventPhotos = photos.slice(3);
	const renderPhoto = (photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "editorial",
		className: "library-photo-button",
		"aria-label": `${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(photo.title)}`,
		onClick: () => onSelect(photo, photos),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: photo.imageUrl ?? images[photo.image],
			alt: t(photo.alt ?? photo.title),
			loading: "lazy"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(photo.title) })]
	}, photo.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "library-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "library-about",
				className: "section container-wide library-about",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "library-about-copy reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("ABOUT THE LIBRARY", "గ్రంథాలయం గురించి"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("A place for shared learning.", "కలిసి నేర్చుకునే స్థలం.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy",
							children: t(c("These photographs capture Library Week, readers and community gatherings in Thummapala. They show people coming together around books, recognition and learning.", "ఈ చిత్రాలు తుమ్మపాలలో గ్రంథాలయ వారోత్సవాలు, పాఠకులు, సమాజ సమావేశాలను చూపిస్తున్నాయి. పుస్తకాలు, గుర్తింపు, అభ్యాసం చుట్టూ ప్రజలు కలిసిన క్షణాలు ఇవి."))
						})
					]
				}), aboutPhoto && renderPhoto(aboutPhoto)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section library-learning-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-wide library-learning-copy",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: t(c("A PLACE FOR LEARNING", "అభ్యాసానికి ఒక స్థలం"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Learning grows through reading.", "చదవడం ద్వారా అభ్యాసం పెరుగుతుంది.")) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-copy",
								children: t(c("Readers, students, children, books and community participation are at the heart of these moments.", "పాఠకులు, విద్యార్థులు, పిల్లలు, పుస్తకాలు, సమాజ భాగస్వామ్యం ఈ క్షణాల కేంద్రంగా ఉన్నాయి."))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "library-learning-list",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(c("Reading", "చదవడం")) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(c("Student learning", "విద్యార్థుల అభ్యాసం")) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: t(c("Community participation", "సమాజ భాగస్వామ్యం")) })
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section container-wide library-photo-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("LIBRARY ACTIVITIES", "గ్రంథాలయ కార్యక్రమాలు"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Moments around books and learning.", "పుస్తకాలు, అభ్యాసానికి సంబంధించిన క్షణాలు.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy",
							children: t(c("Library Week, reading activities and community gatherings are represented in these photographs.", "గ్రంథాలయ వారోత్సవాలు, పఠన కార్యక్రమాలు, సమాజ సమావేశాలు ఈ చిత్రాల్లో కనిపిస్తాయి."))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "library-photo-grid library-activities-grid",
					children: activitiesPhotos.map(renderPhoto)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section library-readers-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-wide library-readers-grid",
					children: [readersPhoto && renderPhoto(readersPhoto), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: t(c("COMMUNITY & READERS", "సమాజం & పాఠకులు"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Reading brings generations together.", "చదువు తరాలను కలుపుతుంది.")) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-copy",
								children: t(c("Children and community members share a moment with books, reflecting the value of learning together.", "పిల్లలు, సమాజ సభ్యులు పుస్తకాలతో కలిసి గడిపిన క్షణం — కలిసి నేర్చుకోవడం విలువను ఇది చూపిస్తుంది."))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section container-wide library-photo-section",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("LIBRARY EVENTS", "గ్రంథాలయ కార్యక్రమాలు"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Community gatherings and recognition.", "సమాజ సమావేశాలు, గుర్తింపు.")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy",
							children: t(c("Photographs from Library Week and related community gatherings, without unverified dates or event details.", "ధృవీకరించని తేదీలు లేదా వివరాలు లేకుండా, గ్రంథాలయ వారోత్సవాలు మరియు సంబంధిత సమాజ సమావేశాల చిత్రాలు."))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "library-photo-grid library-events-grid",
					children: eventPhotos.map(renderPhoto)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section library-gallery-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("LIBRARY GALLERY", "గ్రంథాలయ చిత్రాలు"))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Library & Learning", "గ్రంథాలయం & అభ్యాసం")) })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "library-gallery-grid",
						children: photos.map(renderPhoto)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section container-wide library-future-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "library-future-copy reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: t(c("FUTURE VISION", "భవిష్యత్ దృష్టి"))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: t(c("Growing with Our Community", "మన సమాజంతో కలిసి ఎదుగుతూ")) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-copy",
							children: t(c("Looking ahead, the Library could become a stronger space for reading, student learning, community knowledge and educational activities, with possibilities for digital learning in the future.", "భవిష్యత్తులో చదవడం, విద్యార్థుల అభ్యాసం, సమాజ జ్ఞానం, విద్యా కార్యక్రమాలకు గ్రంథాలయం మరింత బలమైన స్థలంగా మారవచ్చు. డిజిటల్ అభ్యాస అవకాశాలనూ పరిశీలించవచ్చు."))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "sample",
							children: t(c("These are possibilities for the future, not existing services.", "ఇవి భవిష్యత్ అవకాశాలు మాత్రమే; ప్రస్తుతం అందుబాటులో ఉన్న సేవలు కావు."))
						})
					]
				})
			})
		]
	});
}
function PageContent({ page, ctx }) {
	const { t, open, showGallery } = ctx;
	switch (page) {
		case "our-village": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Village, { t }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsActivities, { t }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, { t })
		] });
		case "education": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {
			t,
			open
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoon, {
			t,
			open
		})] });
		case "agrotech": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Agrotech, {
			t,
			open
		});
		case "sports": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sports, {
			t,
			open
		});
		case "library": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryPage, {
			t,
			onSelect: showGallery
		});
		case "opportunities": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Opportunities, { t });
		case "events":
		case "activities": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsActivities, { t });
		case "stories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, { t });
		case "gallery": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
			t,
			onSelect: showGallery
		});
		case "contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Enquiry, { t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, { t })] });
	}
}
function InnerPage({ page }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePage, { children: (ctx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			page,
			t: ctx.t
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageContent, {
			page,
			ctx
		}),
		page !== "contact" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageCta, {
			t: ctx.t,
			page
		})
	] }) });
}
//#endregion
export { VillageExperience as n, InnerPage as t };
