import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Menu,
  X,
  Sprout,
  BookOpen,
  Monitor,
  Compass,
  GraduationCap,
  Award,
  Users,
  Trophy,
  CalendarDays,
  Home,
  Atom,
  Youtube,
  Instagram,
  Facebook,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { validateEnquiry, type EnquiryField, type EnquiryIssue, type EnquiryValues } from "@/lib/enquiry-validation";
import { getWhatsAppUrl, web3FormsAccessKey } from "@/lib/contact-config";
import { getSiteUrl } from "@/lib/seo";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  images,
  imageMetadata,
  c,
  nav,
  moreNav,
  focusAreas,
  villageStats,
  opportunityCategories,
  pageIntros,
  type PageKey,
  heroSlides,
  facts,
  programs,
  mentors,
  stories,
  agricultureInitiatives,
  sportsEntries,
  events,
  activities,
  announcements,
  futureInitiatives,
  libraryPhotos,
  gallery,
  filterEntries,
  impactPeople,
  impactVideoUrl,
  getYouTubeVideoId,
  type Copy,
  type Entry,
  type Language,
} from "@/lib/village-data";

type Translate = (copy: Copy) => string;
type Open = (entry: Entry) => void;
const opportunityIcons = {
  jobs: Award,
  scholarships: GraduationCap,
  internships: Monitor,
  training: BookOpen,
};
function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Digital Thummapala home">
      <img
        className="brand-logo"
        src="/images/thummapala-gram-samakhya-logo.png"
        alt="Thummapala Gram Samakhya logo"
      />
      <span>
        <strong>DIGITAL THUMMAPALA</strong>
        <small>తుమ్మపాల · Growing together</small>
      </span>
    </Link>
  );
}
function LanguageSwitch({ lang, setLang }: { lang: Language; setLang: (lang: Language) => void }) {
  return (
    <div className="language-toggle" aria-label="Language">
      <Button variant="editorial" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
        EN
      </Button>
      <span aria-hidden="true">/</span>
      <Button variant="editorial" aria-pressed={lang === "te"} onClick={() => setLang("te")}>
        తెలుగు
      </Button>
    </div>
  );
}
function Navbar({
  lang,
  setLang,
  t,
}: {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translate;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!menu) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menu]);
  return (
    <>
      <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Brand />
          <nav className="desktop-links" aria-label="Main navigation">
            {nav.map(([to, label]) => (
              <Link to={to} key={to} activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
                {t(label)}
              </Link>
            ))}
            <details className="nav-more">
              <summary>{t(c("More", "మరిన్ని"))}</summary>
              <div className="nav-more-menu">
                {moreNav.map(([to, label]) => (
                  <Link to={to} key={to}>
                    {t(label)}
                  </Link>
                ))}
              </div>
            </details>
          </nav>
          <div className="nav-actions">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <Button asChild variant="editorial" className="nav-explore">
              <Link to="/contact">
                {t(c("Join our journey", "మన ప్రయాణంలో భాగమవ్వండి"))}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="editorial"
              className="menu-toggle"
              aria-label={t(c("Open menu", "మెనూ తెరవండి"))}
              aria-haspopup="dialog"
              aria-expanded={menu}
              aria-controls="mobile-navigation"
              onClick={() => setMenu(true)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>
      <Dialog open={menu} onOpenChange={setMenu}>
        <DialogContent className="mobile-menu" id="mobile-navigation">
          <DialogTitle className="sr-only">{t(c("Village navigation", "గ్రామం మెనూ"))}</DialogTitle>
          <DialogDescription className="sr-only">
            {t(c("Explore Thummapala", "తుమ్మపాలను చూడండి"))}
          </DialogDescription>
          <div className="mobile-menu-top">
            <Brand />
          </div>
          {[...nav, ...moreNav].map(([to, label]) => (
            <Link key={to} to={to} onClick={() => setMenu(false)}>
              {t(label)}
            </Link>
          ))}
          <div className="mobile-menu-bottom">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <Button asChild className="nav-explore">
              <Link to="/contact" onClick={() => setMenu(false)}>
                {t(c("Join our journey", "మన ప్రయాణంలో భాగమవ్వండి"))}
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
function Hero({ t, lang }: { t: Translate; lang: Language }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const change = () => setReduced(media.matches);
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7500);
    return () => clearInterval(timer);
  }, [paused, reduced, index]);
  const slide = heroSlides[index];
  if (!slide) return null;
  const change = (delta: number) =>
    setIndex((i) => (i + delta + heroSlides.length) % heroSlides.length);
  return (
    <>
    <section
      id="home"
      className="hero"
      aria-roledescription="carousel"
      aria-label={t(c("Discover Thummapala", "తుమ్మపాలను తెలుసుకోండి"))}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") change(1);
        if (e.key === "ArrowLeft") change(-1);
      }}
    >
      {heroSlides.map((s, i) => (
        <img
          key={s.image}
          className={`hero-photo ${i === index ? "active" : ""}`}
          src={s.image}
          data-mobile-position={s.mobilePosition}
          alt={i === index ? t(s.alt) : ""}
          aria-hidden={i !== index}
          fetchPriority={i === 0 ? "high" : "auto"}
        />
      ))}
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-body container-wide">
        <div className="hero-content" key={`${index}-${lang}`}>
          <p className="eyebrow">0{index + 1} — {t(slide.category)}</p>
          <h1>{t(slide.title)}</h1>
          <p className="hero-subtitle">
            {t(slide.subtitle)}
          </p>
          <p className="hero-support">
            {t(
              c(
                "A village growing through education, opportunity, agriculture, sport and community.",
                "చదువు, అవకాశాలు, వ్యవసాయం, క్రీడలు, కమ్యూనిటీతో ఎదుగుతున్న మన ఊరు.",
              ),
            )}
          </p>
          <div className="hero-actions">
            <Button asChild variant="hero" className="hero-cta">
              <Link to={slide.path}>
                {t(slide.cta)}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="cinematic" className="hero-cta-secondary">
              <Link to="/contact">{t(c("Join our journey", "మన ప్రయాణంలో చేరండి"))}</Link>
            </Button>
          </div>
        </div>
        <div className="hero-controls">
        <span className="hero-location">
          <MapPin size={12} />
          {t(c("ANAKAPALLI, ANDHRA PRADESH", "అనకాపల్లి, ఆంధ్రప్రదేశ్"))}
        </span>
        <div className="hero-pagination">
          <span className="slide-number">
            0{index + 1}
            <span className="opacity-50"> / {String(heroSlides.length).padStart(2, "0")}</span>
          </span>
          <div className="hero-indicators">
            {heroSlides.map((s, i) => (
              <Button
                key={s.image}
                aria-label={`Slide ${i + 1}: ${t(s.category)}`}
                aria-current={index === i}
                variant="cinematic"
                onClick={() => setIndex(i)}
              >
                <span />
              </Button>
            ))}
          </div>
          <Button
            variant="cinematic"
            size="icon"
            className="hero-control-button"
            aria-label={t(c("Previous slide", "మునుపటి చిత్రం"))}
            onClick={() => change(-1)}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="cinematic"
            size="icon"
            className="hero-control-button"
            aria-label={t(c("Next slide", "తదుపరి చిత్రం"))}
            onClick={() => change(1)}
          >
            <ArrowRight />
          </Button>
          <Button
            variant="cinematic"
            size="icon"
            className="hero-control-button"
            aria-label={
              paused
                ? t(c("Play slideshow", "చిత్రాలు కొనసాగించండి"))
                : t(c("Pause slideshow", "చిత్రాలు ఆపండి"))
            }
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play /> : <Pause />}
          </Button>
        </div>
      </div>
      </div>
    </section>
    <div className="impact-strip" aria-label={t(c("Village figures · 2011 Census", "గ్రామ వివరాలు · 2011 జనగణన"))}>
      <div className="container-wide impact-grid">
        {villageStats.map((stat, i) => (
          <div className="impact-stat" key={stat.label.en}>
            {i === 0 ? <Users aria-hidden="true" /> : i === 1 ? <Home aria-hidden="true" /> : <CalendarDays aria-hidden="true" />}
            <div>
              <strong>{"value" in stat && stat.value ? <Counter value={stat.value} /> : stat.text}</strong>
              <span>{t(stat.label)}</span>
            </div>
          </div>
        ))}
        <p className="impact-note">{t(c("2011 Census figures · verification pending", "2011 జనగణన వివరాలు · నిర్ధారణ అవసరం"))}</p>
      </div>
    </div>
    </>
  );
}
function SectionHead({
  eyebrow,
  title,
  t,
  children,
}: {
  eyebrow?: Copy;
  title: Copy;
  t: Translate;
  children?: ReactNode;
}) {
  return (
    <div className="section-head">
      <div>
      s
        {eyebrow && <p className="eyebrow">{t(eyebrow)}</p>}
        <h2 className="section-title">{t(title)}</h2>
      </div>
      {children}
    </div>
  );
}
function TextLink({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return href ? (
    <Button asChild variant="editorial" className="text-link">
      <a href={href}>
        {children}
        <ArrowUpRight size={15} />
      </a>
    </Button>
  ) : (
    <Button variant="editorial" className="text-link" onClick={onClick}>
      {children}
      <ArrowUpRight size={15} />
    </Button>
  );
}
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCount(value);
          return;
        }
        const start = performance.now();
        let frame = 0;
        const animate = (time: number) => {
          const progress = Math.min((time - start) / 1200, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count.toLocaleString("en-IN")}</span>;
}
function Village({ t }: { t: Translate }) {
  return (
    <section id="village" className="section container-wide">
      <div className="intro reveal">
        <div>
          <div className="intro-photo">
            <img
              loading="lazy"
              src={images.village}
              alt="Representative rural Andhra landscape with paddy fields and palm trees"
            />
          </div>
          <p className="photo-caption">
            <span>{t(c("A place with roots. And room to grow.", "మన మూలాలు. మన ఎదుగుదల."))}</span>
            <span>{t(c("Representative visual", "ప్రాతినిధ్య చిత్రం"))}</span>
          </p>
        </div>
        <div>
          <p className="eyebrow">{t(c("THIS IS THUMMAPALA", "ఇదే మన తుమ్మపాల"))}</p>
          <h2 className="section-title">
            {t(c("Small-town roots.\nBig-hearted dreams.", "మన ఊరి మూలాలు.\nపెద్ద ఆశయాలు."))}
          </h2>
          <p className="telugu-line">
            {t(c("A village growing, together.", "కలిసి ఎదుగుతున్న మన ఊరు."))}
          </p>
          <p className="section-copy">
            {t(
              c(
                "Between green fields and the rhythms of everyday life, Thummapala has a story of its own. A story carried by our farmers, our families, and the young minds imagining what comes next.",
                "పచ్చని పొలాలు, రోజువారీ జీవితంలో మన తుమ్మపాలకు ఒక కథ ఉంది. రైతులు, కుటుంబాలు, రేపటిని ఊహించే పిల్లలు కలిసి రాస్తున్న కథ.",
              ),
            )}
          </p>
          <p className="section-copy">
            {t(
              c(
                "Our next chapter is about opening doors — to a better education, meaningful careers, smarter farming, and a stronger community.",
                "మన తదుపరి అధ్యాయం — మంచి చదువు, సరైన ఉద్యోగ అవకాశాలు, కొత్త వ్యవసాయ పద్ధతులు, బలమైన కమ్యూనిటీ.",
              ),
            )}
          </p>
          <TextLink href="#location">
            {t(c("Get to know our village", "మన ఊరిని తెలుసుకోండి"))}
          </TextLink>
        </div>
      </div>
      <p className="data-note">
        {t(
          c(
            "Historical research figures · 2011 Census · Client verification pending. These are not current population estimates.",
            "2011 జనగణన ఆధారిత పరిశోధన వివరాలు · నిర్ధారణ అవసరం. ఇవి ప్రస్తుత జనాభా అంచనాలు కావు.",
          ),
        )}
      </p>
    </section>
  );
}
function Pillars({ t }: { t: Translate }) {
  const data = [
    {
      image: "agriculture" as const,
      id: "agrotech",
      label: c("01 / AGROTECH", "01 / వ్యవసాయం"),
      title: c("Growing smarter.", "కొత్త వ్యవసాయం."),
      desc: c(
        "Our land. Our knowledge.\nNew possibilities for our farmers.",
        "మన నేల. మన అనుభవం.\nరైతులకు కొత్త అవకాశాలు.",
      ),
    },
    {
      image: "education" as const,
      id: "education",
      label: c("02 / EDUCATION", "02 / చదువు"),
      title: c("Learning without limits.", "హద్దులు లేని చదువు."),
      desc: c(
        "Because where you come from\nshould never limit where you go.",
        "మన ఊరు ఎక్కడైనా\nఅవకాశాలు ఆగకూడదు.",
      ),
    },
    {
      image: "sports" as const,
      id: "sports",
      label: c("03 / SPORTS", "03 / క్రీడలు"),
      title: c("Strength through sport.", "క్రీడలతో బలం."),
      desc: c(
        "Building confidence, character,\nand a team that moves together.",
        "నమ్మకం, వ్యక్తిత్వం,\nకలిసి సాగే జట్టు.",
      ),
    },
  ];
  return (
    <section className="section container-wide pt-0">
      <SectionHead
        eyebrow={c("ROOTED IN TODAY. READY FOR TOMORROW.", "ఈరోజు మూలాలు. రేపటి ఆశయాలు.")}
        title={c("Three paths. One shared future.", "మూడు మార్గాలు. ఒకే భవిష్యత్తు.")}
        t={t}
      />
      <div className="pillars">
        {data.map((p) => (
          <a className="pillar" href={`#${p.id}`} key={p.id}>
            <img
              loading="lazy"
              src={images[p.image]}
              alt={t(p.title) + " · Representative visual"}
            />
            <div className="pillar-content">
              <p className="eyebrow">{t(p.label)}</p>
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <ArrowUpRight className="pillar-arrow" size={22} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
function Education({ t, open }: { t: Translate; open: Open }) {
  const pageVisual = pageIntros.education;
  const icons = [BookOpen, Monitor, Compass, GraduationCap, Award, Atom];
  const steps = [
    c("School education", "పాఠశాల చదువు"),
    c("Additional learning", "అదనపు అభ్యాసం"),
    c("Digital skills", "డిజిటల్ నైపుణ్యాలు"),
    c("Mentorship", "మార్గదర్శకత్వం"),
    c("Competitive exams", "పోటీ పరీక్షలు"),
    c("Advanced technology", "కొత్త టెక్నాలజీ"),
    c("Career opportunities", "ఉద్యోగ అవకాశాలు"),
  ];
  return (
    <section id="education" className="section education-section">
      <div className="container-wide">
        <div className="education-lead reveal">
          <div>
            <p className="eyebrow text-teal">
              {t(c("OUR MOST IMPORTANT INVESTMENT", "మన ముఖ్యమైన పెట్టుబడి"))}
            </p>
            <h2 className="section-title">
              {t(c("Education without\nboundaries.", "హద్దులు లేని\nచదువు."))}
            </h2>
            <p className="telugu-line">చదువు మాత్రమే కాదు. దిశ కూడా.</p>
            <p className="section-copy">
              {t(
                c(
                  "A student’s location should never limit their future. From ZPHS Thummapala to new skills and bigger ambitions, we envision a path that supports every step.",
                  "విద్యార్థి భవిష్యత్తును ఊరు పరిమితం చేయకూడదు. తుమ్మపాల పాఠశాల నుంచి కొత్త నైపుణ్యాలు, పెద్ద ఆశయాల దాకా ప్రతి అడుగుకూ తోడుగా ఉండాలి.",
                ),
              )}
            </p>
            <p className="data-note">
              {t(
                c(
                  "Programme concepts below are sample community initiatives.",
                  "క్రింది కార్యక్రమాలు నమూనా కమ్యూనిటీ ఆలోచనలు.",
                ),
              )}
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src={pageVisual.contentImageUrl ?? images.education}
              alt={pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""}
            />
            <p className="photo-caption">{t(pageVisual.contentCaption ?? imageMetadata.caption)}</p>
          </div>
        </div>
        <div className="journey" aria-label={t(c("Education journey", "చదువు ప్రయాణం"))}>
          {steps.map((step, i) => (
            <div className="journey-step reveal" key={step.en}>
              <span>0{i + 1}</span>
              <p>{t(step)}</p>
            </div>
          ))}
        </div>
        <div className="section-head">
          <h3 className="font-display text-3xl">
            {t(c("A little support. A lasting difference.", "కొంచెం తోడు. జీవితానికి దిశ."))}
          </h3>
          <span className="sample">{t(c("SAMPLE PROGRAMMES", "నమూనా కార్యక్రమాలు"))}</span>
        </div>
        <div className="programs">
          {programs.map((p, i) => {
            const Icon = icons[i] ?? BookOpen;
            return (
              <article className="program" key={p.id}>
                <Icon className="program-icon" strokeWidth={1.4} />
                <div>
                  <h3>{t(p.title)}</h3>
                  <p>{t(p.description)}</p>
                  <TextLink onClick={() => open(p)}>
                    {t(c("Explore programme", "కార్యక్రమం చూడండి"))}
                  </TextLink>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mentor-band">
          <div>
            <p className="eyebrow text-teal mb-4">
              {t(c("EXPERIENCE THAT OPENS DOORS", "అనుభవంతో మార్గదర్శనం"))}
            </p>
            <h3>{t(c("Learn from experience.", "అనుభవం నుంచి నేర్చుకుందాం."))}</h3>
            <p className="section-copy mt-4">
              {t(
                c(
                  "A space for experienced educators, retired professionals and mentors to share what they know.",
                  "అనుభవజ్ఞులు, రిటైర్డ్ నిపుణులు తమ జ్ఞానాన్ని పంచుకునే వేదిక.",
                ),
              )}
            </p>
          </div>
          <div className="mentor-list">
            {mentors.map((m) => (
              <div className="mentor-item" key={m.id}>
                <span className="mentor-avatar">
                  <Users size={19} strokeWidth={1.3} />
                </span>
                <div>
                  <Button
                    variant="editorial"
                    className="h-auto p-0 whitespace-normal text-left"
                    onClick={() => open(m)}
                  >
                    <strong>{t(m.title)}</strong>
                  </Button>
                  <small>
                    {t(c("Demo profile · To be confirmed", "నమూనా ప్రొఫైల్ · నిర్ధారించాలి"))}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function useCarousel(count: number, auto = false, align: "start" | "center" = "start", containScroll?: false) {
  const [ref, api] = useEmblaCarousel({
    align,
    loop: auto,
    skipSnaps: false,
    duration: 32,
    ...(containScroll === false ? { containScroll: false } : {}),
  });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [snaps, setSnaps] = useState<number[]>([]);
  useEffect(() => {
    api?.scrollTo(0, true);
  }, [api]);
  useEffect(() => {
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
  useEffect(() => {
    if (!auto || !api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = setInterval(() => api.scrollNext(), 5500);
    return () => clearInterval(timer);
  }, [auto, api, paused]);
  return { ref, api, index, paused, setPaused, snaps };
}
function CarouselControls({ prev, next, t }: { prev: () => void; next: () => void; t: Translate }) {
  return (
    <div className="carousel-controls">
      <Button
        variant="outline"
        size="icon"
        aria-label={t(c("Previous items", "మునుపటి అంశాలు"))}
        onClick={prev}
      >
        <ArrowLeft size={15} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label={t(c("Next items", "తదుపరి అంశాలు"))}
        onClick={next}
      >
        <ArrowRight size={15} />
      </Button>
    </div>
  );
}
function Filters({
  items,
  value,
  setValue,
  t,
}: {
  items: Copy[];
  value: string;
  setValue: (v: string) => void;
  t: Translate;
}) {
  return (
    <div className="filters" aria-label={t(c("Category filters", "వర్గాల ఎంపిక"))}>
      {[c("All", "అన్నీ"), ...items].map((item) => (
        <Button
          key={item.en}
          variant="filter"
          data-active={value === item.en}
          aria-pressed={value === item.en}
          onClick={() => setValue(item.en)}
        >
          {t(item)}
        </Button>
      ))}
    </div>
  );
}
function Opportunities({ t }: { t: Translate }) {
  return (
    <section id="opportunities" className="section container-wide">
      <SectionHead
        eyebrow={c("OPPORTUNITY CATEGORIES", "అవకాశాల విభాగాలు")}
        title={c("A place for future pathways.", "భవిష్యత్తు అవకాశాలకు ఒక వేదిక.")}
        t={t}
      />
      <p className="section-copy mb-7">
        {t(
          c(
            "The Digital Thummapala platform is preparing to bring trusted opportunities together. Listings have not been published yet.",
            "నమ్మదగిన అవకాశాల వివరాలను ఒకచోట అందించేందుకు డిజిటల్ తుమ్మపాల వేదిక సిద్ధమవుతోంది. ప్రస్తుతం అవకాశాల జాబితాలు ప్రచురించలేదు.",
          ),
        )}
      </p>
      <div className="opportunity-category-grid">
        {opportunityCategories.map((item) => {
          const Icon = opportunityIcons[item.id];
          return (
            <article className="opportunity-category-card" key={item.id}>
              <span className="opportunity-category-icon"><Icon aria-hidden="true" /></span>
              <div>
                <h3>{t(item.title)}</h3>
                <p>{t(item.description)}</p>
              </div>
              <span className="opportunity-status">{t(item.status)}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
function Stories({ t }: { t: Translate }) {
  const carousel = useCarousel(stories.length, true, "center", false);
  useEffect(() => {
    if (!carousel.api) return;
    carousel.api.scrollTo(0, true);
  }, [carousel.api]);
  return (
    <>
    <section
      id="stories"
      className="section story-section"
      onMouseEnter={() => carousel.setPaused(true)}
      onMouseLeave={() => carousel.setPaused(false)}
      onFocusCapture={() => carousel.setPaused(true)}
      onBlurCapture={() => carousel.setPaused(false)}
    >
      <div className="container-wide">
        <SectionHead
          eyebrow={c("A THUMMAPALA STORY ARCHIVE", "తుమ్మపాల కథల సమాహారం")}
          title={c("Our Success Stories", "మన విజయ గాథలు")}
          t={t}
        >
          <CarouselControls
            t={t}
            prev={() => carousel.api?.scrollPrev()}
            next={() => carousel.api?.scrollNext()}
          />
        </SectionHead>
        <p className="section-line story-intro">
          {t(c("People from Thummapala who are moving forward.", "ముందుకు సాగుతున్న తుమ్మపాల వాసులు."))}
        </p>
        <div
          className="carousel-viewport story-viewport"
          ref={carousel.ref}
          aria-roledescription="carousel"
          aria-label={t(c("Success stories", "విజయ గాథలు"))}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              carousel.api?.scrollPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              carousel.api?.scrollNext();
            }
          }}
        >
          <div className="carousel-track">
            {stories.map((story, i) => {
              const active = i === carousel.index;
              return (
                <article className="carousel-slide story-slide" key={story.id} aria-hidden={!active}>
                  <div className={`story-card ${story.id === "sports-journey" ? "story-card--portrait" : ""}`}>
                    <img loading="lazy" src={story.image} alt={t(story.alt)} />
                    <span className="story-card-shade" aria-hidden="true" />
                    <div className="story-card-content">
                      <p className="story-card-label">
                        {t(story.category)} · {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="story-card-title">{t(story.title)}</h3>
                      <p className="story-card-description">{t(story.description)}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="carousel-progress story-progress">
          <span className="sample">{t(c("Education, community & sport", "విద్య, సమాజం, క్రీడలు"))}</span>
          <div className="flex items-center gap-4">
            <span className="sample">0{carousel.index + 1} / 0{stories.length}</span>
            <div className="progress-track" aria-hidden="true">
              {carousel.snaps.map((_, i) => (
                <span key={i} className={i === carousel.index ? "active" : ""} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <ImpactPeople t={t} />
    </>
  );
}
function ImpactPeople({ t }: { t: Translate }) {
  const carousel = useCarousel(impactPeople.length, true, "center", false);
  useEffect(() => {
    carousel.api?.scrollTo(0, true);
  }, [carousel.api]);
  const videoId = getYouTubeVideoId(impactVideoUrl);
  return (
    <section
      id="impact-people"
      className="section impact-people-section"
      onMouseEnter={() => carousel.setPaused(true)}
      onMouseLeave={() => carousel.setPaused(false)}
      onFocusCapture={() => carousel.setPaused(true)}
      onBlurCapture={() => carousel.setPaused(false)}
    >
      <div className="container-wide">
        <SectionHead
          eyebrow={c("THE PEOPLE BEHIND THE JOURNEY", "ఈ ప్రయాణం వెనుక ఉన్న వ్యక్తులు")}
          title={c("People Who Make an Impact", "ప్రభావం చూపుతున్న వ్యక్తులు")}
          t={t}
        >
          <CarouselControls
            t={t}
            prev={() => carousel.api?.scrollPrev()}
            next={() => carousel.api?.scrollNext()}
          />
        </SectionHead>
        <p className="section-line impact-people-intro">
          {t(c(
            "Every journey is shaped by people who contribute their time, knowledge, energy and ideas. Meet some of the people connected to Thummapala's journey.",
            "తమ సమయం, జ్ఞానం, శక్తి, ఆలోచనలతో ప్రతి ప్రయాణానికి వ్యక్తులు తోడ్పడతారు. తుమ్మపాల ప్రయాణంతో అనుబంధం ఉన్న కొందరిని పరిచయం చేసుకుందాం.",
          ))}
        </p>
        <div
          className="carousel-viewport impact-people-viewport"
          ref={carousel.ref}
          aria-roledescription="carousel"
          aria-label={t(c("People who make an impact", "ప్రభావం చూపుతున్న వ్యక్తులు"))}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              carousel.api?.scrollPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              carousel.api?.scrollNext();
            }
          }}
        >
          <div className="carousel-track">
            {impactPeople.map((person, i) => {
              const active = i === carousel.index;
              return (
                <article
                  className="carousel-slide impact-person-slide"
                  key={person.id}
                  aria-hidden={!active}
                >
                  <div className="impact-person-card">
                    <div className={`impact-person-photo impact-person-photo--${person.id}`}>
                      <img src={person.image} alt={t(person.alt)} loading="lazy" />
                    </div>
                    <div className="impact-person-copy">
                      <span className="impact-person-index">{String(i + 1).padStart(2, "0")} / {String(impactPeople.length).padStart(2, "0")}</span>
                      <h3>{t(person.name)}</h3>
                      <p className="impact-person-role">{t(person.role)}</p>
                      <p className="impact-person-description">{t(person.description)}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="impact-people-progress">
          <div className="progress-track" aria-hidden="true">
            {carousel.snaps.map((_, i) => (
              <span key={i} className={i === carousel.index ? "active" : ""} />
            ))}
          </div>
        </div>
        <div className="impact-video-showcase">
          {videoId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={t(c("Our Journey in Action", "మన ప్రయాణం కార్యరూపంలో"))}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="impact-video-placeholder">
              <img src="/images/thummapala-story-sports-journey.png" alt={t(c("Thummapala sports community and Kho-Kho journey", "తుమ్మపాల క్రీడా సమాజం, ఖో-ఖో ప్రయాణం"))} loading="lazy" />
              <span className="impact-video-shade" aria-hidden="true" />
              <div className="impact-video-content">
                <span className="impact-video-play" aria-hidden="true"><Play fill="currentColor" /></span>
                <p className="eyebrow">{t(c("VIDEO COMING SOON", "వీడియో త్వరలో"))}</p>
                <h3>{t(c("Our Journey in Action", "మన ప్రయాణం కార్యరూపంలో"))}</h3>
                <p>{t(c(
                  "A glimpse into the people, activities and moments shaping Thummapala's journey.",
                  "తుమ్మపాల ప్రయాణాన్ని మలుస్తున్న వ్యక్తులు, కార్యక్రమాలు, క్షణాల సమాహారం.",
                ))}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function Agrotech({ t, open }: { t: Translate; open: Open }) {
  const pageVisual = pageIntros.agrotech;
  return (
    <section id="agrotech">
      <div className="full-photo-story agrotech-story">
        <div className="container-wide agrotech-story-inner">
          <figure className="agrotech-story-figure">
            <img
              loading="lazy"
              src={pageVisual.contentImageUrl ?? images.agriculture}
              alt={pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""}
            />
            <figcaption>{t(pageVisual.contentCaption ?? imageMetadata.caption)}</figcaption>
          </figure>
          <div className="full-photo-content">
            <p className="eyebrow">{t(c("OUR LAND. OUR LIVELIHOOD.", "మన నేల. మన జీవనాధారం."))}</p>
            <h2 className="section-title">
              {t(c("Growing smarter.\nStaying rooted.", "కొత్త ఆలోచనలు.\nమన నేలతో బంధం."))}
            </h2>
            <p>
              {t(
                c(
                  "Our farmers carry generations of knowledge. New ideas, shared experience and practical technology can help that knowledge grow.",
                  "మన రైతుల అనుభవం తరతరాలది. కొత్త ఆలోచనలు, పరస్పర సహకారం, సాంకేతికతతో మరింత ముందుకు సాగుదాం.",
                ),
              )}
            </p>
            <div className="agri-process">
              {[
                c("Land", "నేల"),
                c("Farmer", "రైతు"),
                c("Knowledge", "జ్ఞానం"),
                c("Future", "భవిష్యత్తు"),
              ].map((s, i) => (
                <span key={s.en} className="flex items-center gap-3">
                  {t(s)}
                  {i < 3 && <ArrowRight size={11} />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-wide initiative-list">
        {agricultureInitiatives.map((e, i) => (
          <article className="initiative" key={e.id}>
            <span className="sample">
              0{i + 1} / {t(c("SAMPLE INITIATIVE", "నమూనా కార్యక్రమం"))}
            </span>
            <h3>{t(e.title)}</h3>
            <p>{t(e.description)}</p>
            <TextLink onClick={() => open(e)}>
              {t(c("Discover more", "మరింత తెలుసుకోండి"))}
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}
function Sports({ t, open }: { t: Translate; open: Open }) {
  const pageVisual = pageIntros.sports;
  const carousel = useCarousel(sportsEntries.length);
  return (
    <section id="sports" className="section sports-section container-wide">
      <div className="sports-layout reveal">
        <div>
          <p className="eyebrow mb-6">
            {t(c("OUR FIELD. OUR SPIRIT.", "మన మైదానం. మన స్ఫూర్తి."))}
          </p>
          <h2 className="section-title">{t(c("Play.\nCompete. Rise.", "ఆడుదాం.\nగెలుద్దాం."))}</h2>
          <p className="telugu-line text-earth">మన మైదానం. మన ప్రతిభ.</p>
          <p className="section-copy">
            {t(
              c(
                "Kho-Kho is more than a game. It is quick thinking, trust, teamwork, and the courage to keep moving. A sporting spirit that belongs to Thummapala.",
                "ఖో-ఖో కేవలం ఆట కాదు. చురుకైన ఆలోచన, నమ్మకం, జట్టుగా పని చేయడం, ముందుకు సాగే ధైర్యం. మన తుమ్మపాల క్రీడాస్ఫూర్తి.",
              ),
            )}
          </p>
          <TextLink onClick={() => sportsEntries[0] && open(sportsEntries[0])}>
            {t(c("Discover our sporting spirit", "మన క్రీడాస్ఫూర్తిని చూడండి"))}
          </TextLink>
        </div>
        <div>
          <img
            loading="lazy"
            src={pageVisual.contentImageUrl ?? images.sports}
            alt={pageVisual.contentAlt ? t(pageVisual.contentAlt) : ""}
          />
          <p className="photo-caption">{t(pageVisual.contentCaption ?? imageMetadata.caption)}</p>
        </div>
      </div>
      <div className="section-head">
        <h3 className="font-display text-3xl">
          {t(c("Together, on the field.", "మైదానంలో కలిసి."))}
        </h3>
        <CarouselControls
          t={t}
          prev={() => carousel.api?.scrollPrev()}
          next={() => carousel.api?.scrollNext()}
        />
      </div>
      <div ref={carousel.ref} className="carousel-viewport">
        <div className="carousel-track">
          {sportsEntries.map((s, i) => (
            <article className="carousel-slide sport-item" key={s.id}>
              <Trophy className="text-earth shrink-0" size={22} strokeWidth={1.3} />
              <div>
                <span>
                  0{i + 1} · {t(c("SAMPLE PROGRAMME", "నమూనా కార్యక్రమం"))}
                </span>
                <strong className="block mt-2">{t(s.title)}</strong>
                <p className="data-note">
                  {s.date} · {t(c("No verified results claimed", "విజయాలు ఇంకా నిర్ధారించలేదు"))}
                </p>
              </div>
              <Button
                variant="editorial"
                size="icon"
                aria-label={t(s.title)}
                onClick={() => open(s)}
              >
                <ArrowUpRight />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function EventsActivities({ t }: { t: Translate }) {
  const [filter, setFilter] = useState("All");
  const filteredEvents = events.filter((event) => filter === "All" || event.category.en === filter);
  const eventCarousel = useCarousel(filteredEvents.length, true, "center", false);
  useEffect(() => {
    if (!eventCarousel.api) return;
    eventCarousel.api.reInit();
    eventCarousel.api.scrollTo(0, true);
  }, [eventCarousel.api, filter]);
  return (
    <section
      id="events-activities"
      className="section events-activities-section"
      onMouseEnter={() => eventCarousel.setPaused(true)}
      onMouseLeave={() => eventCarousel.setPaused(false)}
      onFocusCapture={() => eventCarousel.setPaused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          eventCarousel.setPaused(false);
        }
      }}
    >
      <div className="container-wide">
        <SectionHead
          eyebrow={c("GOOD THINGS HAPPEN TOGETHER", "కలిసి చేస్తే మంచి జరుగుతుంది")}
          title={c("Thummapala Events", "తుమ్మపాల కార్యక్రమాలు")}
          t={t}
        >
          <CarouselControls
            t={t}
            prev={() => eventCarousel.api?.scrollPrev()}
            next={() => eventCarousel.api?.scrollNext()}
          />
        </SectionHead>
        <Filters
          items={events.map((event) => event.category)}
          value={filter}
          setValue={setFilter}
          t={t}
        />
        <p className="sample events-activities-demo-note">
          {t(c("Event ideas shown as placeholders · details will be confirmed before publication", "ఈవెంట్ ఆలోచనలు నమూనా మాత్రమే · ప్రచురణకు ముందు వివరాలు నిర్ధారిస్తాం"))}
        </p>
        <div id="events" className="events-activities-event-feature">
          <div
            className="carousel-viewport"
            ref={eventCarousel.ref}
            aria-roledescription="carousel"
            aria-label={t(c("Thummapala event ideas", "తుమ్మపాల ఈవెంట్ ఆలోచనలు"))}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                eventCarousel.api?.scrollPrev();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                eventCarousel.api?.scrollNext();
              }
            }}
          >
            <div className="carousel-track">
              {filteredEvents.map((event, i) => {
                const active = i === eventCarousel.index;
                return (
                  <article
                    className="event-card carousel-slide"
                    key={event.id}
                    data-active={active}
                    aria-hidden={!active}
                  >
                    <div className="event-info">
                      <span className="eyebrow">{t(event.category)}</span>
                      <h3>{t(event.title)}</h3>
                      <p className="event-description">{t(event.description)}</p>
                      <p className="event-context">
                        <MapPin size={13} aria-hidden="true" />
                        {t(event.location)}
                      </p>
                      <div className="event-footer">
                        <span className="status">{t(event.status)}</span>
                      </div>
                    </div>
                    <div className="event-image">
                      <img src={event.image} alt={t(event.alt)} loading="lazy" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="carousel-progress">
            <span className="sample">
              {t(c("Placeholder event concepts · no confirmed listings", "ఈవెంట్ నమూనాలు · నిర్ధారిత జాబితాలు లేవు"))}
            </span>
            <div className="progress-track" aria-hidden="true">
              {eventCarousel.snaps.map((_, i) => (
                <span key={i} className={i === eventCarousel.index ? "active" : ""} />
              ))}
            </div>
          </div>
        </div>

        <div id="activities" className="events-activities-activity-feature">
          <div className="events-activities-subhead">
            <div>
              <p className="eyebrow">{t(c("LIFE IN THUMMAPALA", "తుమ్మపాలలో జీవితం"))}</p>
              <h3>{t(c("Village Activities", "గ్రామ కార్యకలాపాలు"))}</h3>
              <p>{t(c("A glimpse of what is happening around the village.", "మన ఊరిలో జరుగుతున్న వాటి సంగ్రహం."))}</p>
            </div>
          </div>
          <div className="activity-tiles">
            {activities.map((activity) => (
              <article className="activity-tile" key={activity.id}>
                <img src={activity.image} alt={t(activity.alt)} loading="lazy" />
                <span>
                  <small>{t(activity.label)}</small>
                  {t(activity.title)}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Future({ t, open }: { t: Translate; open: Open }) {
  return (
    <section id="future" className="section future-section">
      <div className="container-wide">
        <div className="future-layout">
          <div>
            <p className="eyebrow text-teal">
              {t(c("ROOTED HERE. LOOKING AHEAD.", "మన ఊరి నుంచి ముందుకు."))}
            </p>
            <h2 className="section-title">
              {t(c("The future\nwe are building.", "మనం నిర్మించే\nరేపటి తుమ్మపాల."))}
            </h2>
            <p className="telugu-line">రేపటి తుమ్మపాల… ఈరోజే నిర్మిద్దాం.</p>
            <p className="section-copy mt-5">
              {t(
                c(
                  "Big ideas begin with a shared belief. These are the possibilities we hope to explore — with our community, for our community.",
                  "పెద్ద ఆలోచనలకు ఉమ్మడి నమ్మకం పునాది. మనవాళ్లతో కలిసి, మనవాళ్ల కోసం ఈ అవకాశాల్ని పరిశీలిద్దాం.",
                ),
              )}
            </p>
            <p className="data-note">
              {t(
                c(
                  "All initiatives are proposed or future concepts. None are presented as completed facilities.",
                  "ఇవన్నీ ప్రతిపాదిత లేదా భవిష్యత్తు ఆలోచనలు. పూర్తయిన సదుపాయాలు కావు.",
                ),
              )}
            </p>
          </div>
          <div>
            {futureInitiatives.map((f, i) => (
              <article className="future-item" key={f.id}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{t(f.title)}</h3>
                  <small>{f.status && t(f.status)}</small>
                </div>
                <Button
                  size="icon"
                  variant="editorial"
                  aria-label={t(f.title)}
                  onClick={() => open(f)}
                >
                  <ArrowUpRight />
                </Button>
              </article>
            ))}
          </div>
        </div>
        <div className="quantum">
          <div className="quantum-photo">
            <img
              loading="lazy"
              src={images.future}
              alt="Representative students exploring digital learning"
            />
            <span className="quantum-mark">
              <Atom size={31} strokeWidth={1} />
            </span>
          </div>
          <div>
            <p className="eyebrow text-teal">
              {t(c("TOMORROW’S KNOWLEDGE, TODAY’S CURIOSITY", "రేపటి జ్ఞానం. ఈరోజు ఆసక్తి."))}
            </p>
            <h3>{t(c("Learning what comes next.", "రేపటి విషయాలు నేర్చుకుందాం."))}</h3>
            <p className="section-copy">
              {t(
                c(
                  "From a first computer lesson to an introduction to quantum computing. A future where curiosity has a place to grow, right here in Thummapala.",
                  "కంప్యూటర్ తొలి పాఠం నుంచి క్వాంటమ్ కంప్యూటింగ్ పరిచయం వరకు. ఆసక్తి పెరిగే భవిష్యత్తు మన తుమ్మపాలలోనే.",
                ),
              )}
            </p>
            <div className="tech-tags">
              <span>Quantum computing</span>
              <span>AI</span>
              <span>{t(c("Future skills", "కొత్త నైపుణ్యాలు"))}</span>
            </div>
            <TextLink onClick={() => futureInitiatives[3] && open(futureInitiatives[3])}>
              {t(c("Explore the vision", "ఆలోచన తెలుసుకోండి"))}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
function Gallery({
  t,
  onSelect,
}: {
  t: Translate;
  onSelect: (entry: Entry, items: Entry[]) => void;
}) {
  const [filter, setFilter] = useState("All");
  const [all, setAll] = useState(false);
  const items = filterEntries(gallery, filter);
  const categories = Array.from(new Map(gallery.map((g) => [g.category.en, g.category])).values());
  return (
    <section id="gallery" className="section container-wide">
      <SectionHead
        eyebrow={c("A VILLAGE, IN MOMENTS", "ఒక ఊరు. ఎన్నో క్షణాలు.")}
        title={c("Gallery", "ఫోటోలు")}
        t={t}
      />
      <Filters
        items={categories}
        value={filter}
        setValue={(v) => {
          setFilter(v);
          setAll(false);
        }}
        t={t}
      />
      <div className="gallery-grid">
        {items.slice(0, all ? items.length : 12).map((g) => (
          <Button
            variant="editorial"
            className="gallery-item"
            key={g.id}
            aria-label={`${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(g.title)}`}
            onClick={() => onSelect(g, items)}
          >
            <img
              src={g.imageUrl ?? images[g.image]}
              loading="lazy"
              alt={t(g.alt ?? g.title)}
            />
            <span>
              {t(g.title)} <ArrowUpRight className="inline size-3" />
            </span>
          </Button>
        ))}
      </div>
      {items.length > 12 && (
        <div className="gallery-more">
          <TextLink onClick={() => setAll(!all)}>
            {t(
              all
                ? c("Show fewer moments", "కొన్ని ఫోటోలు చూపించండి")
                : c(`Explore all ${items.length} moments`, `${items.length} ఫోటోలు చూడండి`),
            )}
          </TextLink>
        </div>
      )}
      <p className="data-note text-center">
        {t(
          c(
            "A growing visual collection of Thummapala and clearly marked future concepts.",
            "తుమ్మపాల దృశ్యాలు, స్పష్టంగా గుర్తించిన భవిష్యత్ ఆలోచనలతో పెరుగుతున్న చిత్రాల సమాహారం.",
          ),
        )}
      </p>
    </section>
  );
}
function Location({ t }: { t: Translate }) {
  return (
    <section id="location" className="section location-section">
      <div className="container-wide location-layout">
        <div>
          <p className="eyebrow">{t(c("COME A LITTLE CLOSER", "మన ఊరికి చేరువగా"))}</p>
          <h2 className="section-title">{t(c("Find Thummapala.", "తుమ్మపాల ఎక్కడ ఉంది?"))}</h2>
          <p className="section-copy">
            {t(
              c(
                "Our story begins here. In the Anakapalli region of Andhra Pradesh.",
                "మన కథ ఇక్కడే మొదలవుతుంది. ఆంధ్రప్రదేశ్‌లోని అనకాపల్లి ప్రాంతంలో.",
              ),
            )}
          </p>
          <p className="location-address">
            {t(c("Thummapala · Anakapalli mandal", "తుమ్మపాల · అనకాపల్లి మండలం"))}
            <br />
            {t(
              c(
                "Anakapalli district, Andhra Pradesh, India",
                "అనకాపల్లి జిల్లా, ఆంధ్రప్రదేశ్, భారతదేశం",
              ),
            )}
            <br />
            <span className="text-muted-foreground text-xs">
              17.6979° N, 82.9700° E · {t(c("Approximate", "సుమారు"))}
            </span>
          </p>
          <p className="data-note">
            {t(
              c(
                "PIN 531032 · Directory research, verification pending. Map position is approximate.",
                "పిన్ 531032 · నిర్ధారణ అవసరం. మ్యాప్ స్థానం సుమారుగా చూపించాం.",
              ),
            )}
          </p>
          <Button asChild className="mt-6 rounded-sm text-xs h-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/dir/?api=1&destination=17.6979,82.9700"
            >
              {t(c("Get directions", "దారి తెలుసుకోండి"))}
              <ArrowUpRight />
            </a>
          </Button>
        </div>
        <div className="location-map">
          <iframe
            loading="lazy"
            title="OpenStreetMap of Thummapala region"
            src="https://www.openstreetmap.org/export/embed.html?bbox=82.935%2C17.675%2C83.005%2C17.72&layer=mapnik&marker=17.6979%2C82.9700"
          />
          <div className="map-label">
            <MapPin size={14} className="inline mr-2 text-primary" />
            {t(c("Thummapala", "తుమ్మపాల"))}
            <small>
              {t(
                c(
                  "Anakapalli, Andhra Pradesh · Approximate location",
                  "అనకాపల్లి, ఆంధ్రప్రదేశ్ · సుమారు స్థానం",
                ),
              )}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
function Enquiry({ t }: { t: Translate }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<Record<EnquiryField, EnquiryIssue>>>({});
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const phone = String(fields.get("phone") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const audience = String(fields.get("audience") ?? "");
    const interest = String(fields.get("interest") ?? "");
    const message = String(fields.get("message") ?? "").trim();
    const values: EnquiryValues = { name, phone, email, audience, interest, message };
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    setSubmissionError("");
    if (Object.keys(nextErrors).length > 0) return;
    setSending(true);
    try {
      if (!web3FormsAccessKey) {
        throw new Error("VITE_WEB3FORMS_ACCESS_KEY is not configured");
      }
      const payload = {
        access_key: web3FormsAccessKey,
        subject: "New Enquiry — Digital Thummapala",
        from_name: name,
        name,
        phone,
        email,
        enquiry_type: interest,
        audience,
        message,
        botcheck: String(fields.get("botcheck") ?? ""),
      };
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;
      if (!response.ok || !result?.success) {
        console.error("Web3Forms submission failed", { status: response.status, result });
        throw new Error("Web3Forms submission failed");
      }
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Digital Thummapala enquiry submission error", error);
      setSubmissionError(t(c(
        "Something went wrong. Please try again or contact us on WhatsApp.",
        "ఏదో సమస్య ఉంది. మళ్లీ ప్రయత్నించండి లేదా WhatsApp ద్వారా సంప్రదించండి.",
      )));
    } finally {
      setSending(false);
    }
  };
  const reset = () => {
    formRef.current?.reset();
    setErrors({});
    setSubmissionError("");
    setSubmitted(false);
  };
  const errorText = (issue: EnquiryIssue | undefined) => {
    if (issue === "required") return t(c("This field is required.", "ఈ వివరాన్ని తప్పనిసరిగా నమోదు చేయండి."));
    if (issue === "phone") return t(c("Enter a valid phone number (8–15 digits).", "సరైన ఫోన్ నంబర్ నమోదు చేయండి (8–15 అంకెలు)."));
    if (issue === "email") return t(c("Enter a valid email address.", "సరైన ఇమెయిల్ చిరునామా నమోదు చేయండి."));
    return "";
  };
  const whatsappUrl = getWhatsAppUrl(t(c(
    "Hello Digital Thummapala, I would like to make an enquiry.",
    "నమస్కారం Digital Thummapala, నేను ఒక ప్రశ్న అడగాలనుకుంటున్నాను.",
  )));
  return (
    <section id="contact" className="section enquiry-section">
      <div className="container-wide enquiry-layout">
        <div className="enquiry-intro">
          <p className="eyebrow">{t(c("GET IN TOUCH", "సంప్రదించండి"))}</p>
          <h2 className="section-title">{t(c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి"))}</h2>
          <p className="section-copy">{t(c("Have a question, want to support a programme, share an opportunity, or connect with the community? We’d love to hear from you.", "ఏదైనా అడగాలనుకుంటున్నారా, కార్యక్రమానికి తోడ్పడాలనుకుంటున్నారా, అవకాశం పంచుకోవాలనుకుంటున్నారా? మన కమ్యూనిటీతో మీ అనుబంధాన్ని ప్రారంభించండి."))}</p>
          <span className="enquiry-mark" aria-hidden="true"><Sprout strokeWidth={1} /></span>
        </div>
        <form className="enquiry-form" ref={formRef} onSubmit={submit} noValidate>
          <input className="enquiry-honeypot" type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {submitted ? (
            <div className="enquiry-success" role="status" aria-live="polite">
              <span className="enquiry-success-icon"><ArrowUpRight /></span>
              <p className="eyebrow">{t(c("THANK YOU FOR CONNECTING", "మాతో కలిసినందుకు ధన్యవాదాలు"))}</p>
              <h3>{t(c("Your enquiry has been sent successfully.", "మీ సందేశం విజయవంతంగా పంపబడింది."))}</h3>
              <p>{t(c("Thank you! We appreciate you contacting Digital Thummapala.", "ధన్యవాదాలు! Digital Thummapalaను సంప్రదించినందుకు మేము అభినందిస్తున్నాం."))}</p>
              <Button type="button" variant="editorial" className="enquiry-reset" onClick={reset}>{t(c("Send another message", "మరో సందేశం పంపండి"))}<ArrowRight /></Button>
            </div>
          ) : (
            <>
              <div className="enquiry-form-heading">
                <span>01 — {t(c("YOUR DETAILS", "మీ వివరాలు"))}</span>
                <span>{t(c("Name, phone and message required", "పేరు, ఫోన్, సందేశం తప్పనిసరి"))}</span>
              </div>
              <div className="enquiry-fields">
                <div className="enquiry-field">
                  <Label htmlFor="enquiry-name">{t(c("Full name", "పూర్తి పేరు"))}</Label>
                  <Input id="enquiry-name" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "enquiry-name-error" : undefined} placeholder={t(c("Your name", "మీ పేరు"))} />
                  {errors.name && <span className="enquiry-error" id="enquiry-name-error">{errorText(errors.name)}</span>}
                </div>
                <div className="enquiry-field">
                  <Label htmlFor="enquiry-phone">{t(c("Phone number", "ఫోన్ నంబర్"))}</Label>
                  <Input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "enquiry-phone-error" : undefined} placeholder={t(c("+91 00000 00000", "+91 00000 00000"))} />
                  {errors.phone && <span className="enquiry-error" id="enquiry-phone-error">{errorText(errors.phone)}</span>}
                </div>
                <div className="enquiry-field enquiry-field-wide">
                  <Label htmlFor="enquiry-email">{t(c("Email address (optional)", "ఇమెయిల్ చిరునామా (ఐచ్ఛికం)"))}</Label>
                  <Input id="enquiry-email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "enquiry-email-error" : undefined} placeholder={t(c("you@example.com", "you@example.com"))} />
                  {errors.email && <span className="enquiry-error" id="enquiry-email-error">{errorText(errors.email)}</span>}
                </div>
                <div className="enquiry-field">
                  <Label htmlFor="enquiry-audience">{t(c("I am a…", "నేను…"))}</Label>
                  <select className="enquiry-select" id="enquiry-audience" name="audience" defaultValue="" aria-invalid={Boolean(errors.audience)} aria-describedby={errors.audience ? "enquiry-audience-error" : undefined}>
                    <option value="" disabled>{t(c("Choose one", "ఒకటి ఎంచుకోండి"))}</option>
                    {[c("Student", "విద్యార్థి"), c("Parent", "తల్లిదండ్రులు"), c("Farmer", "రైతు"), c("Player", "క్రీడాకారుడు"), c("Mentor", "మార్గదర్శి"), c("Volunteer", "వాలంటీర్"), c("Community member", "కమ్యూనిటీ సభ్యుడు"), c("Other", "ఇతరులు")].map((option) => <option value={option.en} key={option.en}>{t(option)}</option>)}
                  </select>
                  {errors.audience && <span className="enquiry-error" id="enquiry-audience-error">{errorText(errors.audience)}</span>}
                </div>
                <div className="enquiry-field">
                  <Label htmlFor="enquiry-interest">{t(c("Interested in…", "ఆసక్తి ఉన్నది…"))}</Label>
                  <select className="enquiry-select" id="enquiry-interest" name="interest" defaultValue="" aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? "enquiry-interest-error" : undefined}>
                    <option value="" disabled>{t(c("Choose a topic", "విషయం ఎంచుకోండి"))}</option>
                    {[c("Education", "చదువు"), c("Career", "ఉద్యోగం"), c("Agriculture", "వ్యవసాయం"), c("Sports", "క్రీడలు"), c("Training", "శిక్షణ"), c("Community programmes", "కమ్యూనిటీ కార్యక్రమాలు"), c("Other", "ఇతర అంశం")].map((option) => <option value={option.en} key={option.en}>{t(option)}</option>)}
                  </select>
                  {errors.interest && <span className="enquiry-error" id="enquiry-interest-error">{errorText(errors.interest)}</span>}
                </div>
                <div className="enquiry-field enquiry-field-wide">
                  <Label htmlFor="enquiry-message">{t(c("Your message", "మీ సందేశం"))}</Label>
                  <Textarea id="enquiry-message" name="message" required rows={3} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "enquiry-message-error" : undefined} placeholder={t(c("How would you like to be involved?", "మీరు ఎలా భాగస్వాములు కావాలనుకుంటున్నారు?"))} />
                  {errors.message && <span className="enquiry-error" id="enquiry-message-error">{errorText(errors.message)}</span>}
                </div>
              </div>
              <div className="enquiry-submit-row">
                <div className="enquiry-actions">
                  <p>{t(c("Your details are used only to respond to this enquiry.", "ఈ సందేశానికి స్పందించడానికి మాత్రమే మీ వివరాలు ఉపయోగిస్తాం."))}</p>
                  {whatsappUrl && (
                    <a className="enquiry-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={t(c("Chat with Digital Thummapala on WhatsApp", "WhatsAppలో Digital Thummapalaతో మాటామంతీ"))}>
                      <span>{t(c("Chat on WhatsApp", "WhatsAppలో మాట్లాడండి"))}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <Button type="submit" className="enquiry-submit" disabled={sending} aria-busy={sending}>{sending ? t(c("Sending…", "పంపిస్తున్నాం…")) : t(c("Send enquiry", "సందేశం పంపండి"))}<ArrowUpRight /></Button>
              </div>
              {submissionError && <p className="enquiry-api-error" role="alert">{submissionError}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  );
}
function Footer({ t, open }: { t: Translate; open: Open }) {
  const social = (name: string) =>
    open({
      id: "social",
      title: c(name, name),
      description: c(
        "Official community accounts have not been provided yet. Verified social links will appear here when confirmed.",
        "అధికారిక కమ్యూనిటీ ఖాతాలు ఇంకా ఇవ్వలేదు. నిర్ధారించిన లింకులు ఇక్కడ అందిస్తాం.",
      ),
      category: c("Community connections", "మన కమ్యూనిటీ"),
      image: "village",
      isDemo: true,
    });
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="footer-statement">
              {t(c("Our village. Our people.\nOur future.", "మన ఊరు. మన ప్రజలు.\nమన భవిష్యత్తు."))}
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {[...nav.slice(1), ...moreNav].map(([to, label]) => (
              <Link key={to} to={to}>
                {t(label)}
              </Link>
            ))}
          </nav>
          <div className="footer-location">
            {t(c("Thummapala, Anakapalli", "తుమ్మపాల, అనకాపల్లి"))}
            <br />
            {t(c("Andhra Pradesh, India", "ఆంధ్రప్రదేశ్, భారతదేశం"))}
            <div className="socials">
              {[
                [Youtube, "YouTube"],
                [Instagram, "Instagram"],
                [Facebook, "Facebook"],
              ].map(([Icon, name]) => {
                const SocialIcon = Icon as typeof Youtube;
                return (
                  <Button
                    key={name as string}
                    size="icon"
                    variant="editorial"
                    aria-label={name as string}
                    onClick={() => social(name as string)}
                  >
                    <SocialIcon size={17} />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Thummapala · {t(c("Growing together.", "కలిసి ఎదుగుదాం."))}</span>
          <span>
            {t(
              c(
                "A community vision · Frontend demo · Sample content & representative visuals",
                "కమ్యూనిటీ ఆలోచన · నమూనా వెబ్‌సైట్ · ప్రాతినిధ్య చిత్రాలు",
              ),
            )}
          </span>
          <a href="#home">{t(c("Back to top", "పైకి వెళ్లండి"))} ↑</a>
        </div>
      </div>
    </footer>
  );
}
function Detail({
  entry,
  onClose,
  t,
  galleryItems,
  onNavigate,
}: {
  entry: Entry | null;
  onClose: () => void;
  t: Translate;
  galleryItems: Entry[];
  onNavigate: (entry: Entry) => void;
}) {
  const [notice, setNotice] = useState(false);
  useEffect(() => setNotice(false), [entry?.id]);
  const index = entry ? galleryItems.findIndex((e) => e.id === entry.id) : -1;
  const isGallery = index >= 0;
  const step = useCallback(
    (delta: number) => {
      const next = galleryItems[(index + delta + galleryItems.length) % galleryItems.length];
      if (next) onNavigate(next);
    },
    [galleryItems, index, onNavigate],
  );
  const touch = useRef(0);
  return (
    <Dialog
      open={entry !== null}
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
    >
      <DialogContent
        className="detail-dialog"
        onKeyDown={(e) => {
          if (!isGallery) return;
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {entry && (
          <>
            {entry.mediaType === "video" && entry.mediaUrl ? (
              <video
                className={`detail-photo detail-video ${isGallery ? "lightbox-photo" : ""}`}
                controls
                playsInline
                preload="metadata"
                poster={entry.imageUrl ?? images[entry.image]}
                onTouchStart={(e) => {
                  touch.current = e.touches[0]?.clientX ?? 0;
                }}
                onTouchEnd={(e) => {
                  if (!isGallery) return;
                  const delta = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
                  if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
                }}
              >
                <source src={entry.mediaUrl} />
              </video>
            ) : (
              <img
                className={`detail-photo ${isGallery ? "lightbox-photo" : ""}`}
                src={entry.imageUrl ?? images[entry.image]}
                alt={t(entry.alt ?? entry.title)}
                onTouchStart={(e) => {
                  touch.current = e.touches[0]?.clientX ?? 0;
                }}
                onTouchEnd={(e) => {
                  if (!isGallery) return;
                  const delta = (e.changedTouches[0]?.clientX ?? touch.current) - touch.current;
                  if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
                }}
              />
            )}
            <div className="detail-body">
              <span className="eyebrow text-primary">{t(entry.category)}</span>
              <DialogTitle>{t(entry.title)}</DialogTitle>
              <DialogDescription>{t(entry.description)}</DialogDescription>
              {(entry.date || entry.location || entry.eligibility || entry.status) && (
                <div className="detail-facts">
                  {entry.date && (
                    <div>
                      <small>
                        {t(c("Date / last date · sample", "తేదీ / చివరి తేదీ · నమూనా"))}
                      </small>
                      {entry.date}
                    </div>
                  )}
                  {entry.location && (
                    <div>
                      <small>{t(c("Location", "స్థానం"))}</small>
                      {t(entry.location)}
                    </div>
                  )}
                  {entry.eligibility && (
                    <div>
                      <small>{t(c("Eligibility", "అర్హత"))}</small>
                      {t(entry.eligibility)}
                    </div>
                  )}
                  {entry.status && (
                    <div>
                      <small>{t(c("Status", "స్థితి"))}</small>
                      {t(entry.status)}
                    </div>
                  )}
                  {entry.organization && (
                    <div>
                      <small>{t(c("Organisation", "సంస్థ"))}</small>
                      {t(entry.organization)}
                    </div>
                  )}
                </div>
              )}
              <p className="data-note">
                {t(
                  isGallery
                    ? imageMetadata.caption
                    : c(
                        "Demo / sample content · Details require client confirmation. Representative photograph.",
                        "డెమో / నమూనా సమాచారం · నిర్ధారణ అవసరం. ప్రాతినిధ్య చిత్రం.",
                      ),
                )}
              </p>
              {isGallery ? (
                <div className="lightbox-controls">
                  <span className="sample">
                    {index + 1} / {galleryItems.length}
                  </span>
                  <CarouselControls t={t} prev={() => step(-1)} next={() => step(1)} />
                </div>
              ) : (
                <>
                  <Button className="mt-6 rounded-sm text-xs" onClick={() => setNotice(true)}>
                    {t(c("Participation information", "పాల్గొనే వివరాలు"))}
                    <ArrowUpRight />
                  </Button>
                  {notice && (
                    <div className="dialog-action-note" role="status">
                      {t(
                        c(
                          "This is a frontend demonstration. Registration and applications are not open. Confirmed dates, contact details and participation links will be added after the community review.",
                          "ఇది నమూనా వెబ్‌సైట్. నమోదు, దరఖాస్తులు ఇంకా ప్రారంభం కాలేదు. కమ్యూనిటీ సమీక్ష తర్వాత తేదీలు, సంప్రదింపులు, నమోదు లింకులు అందిస్తాం.",
                        ),
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
let languageState: Language = "en";
const languageListeners = new Set<() => void>();
function useLanguage() {
  const lang = useSyncExternalStore(
    (listener) => {
      languageListeners.add(listener);
      return () => languageListeners.delete(listener);
    },
    () => languageState,
    () => "en" as Language,
  );
  const setLang = (next: Language) => {
    languageState = next;
    languageListeners.forEach((listener) => listener());
  };
  return [lang, setLang] as const;
}
type PageContext = {
  t: Translate;
  lang: Language;
  open: Open;
  showGallery: (entry: Entry, items: Entry[]) => void;
};
function SitePage({ children }: { children: (ctx: PageContext) => ReactNode }) {
  const [lang, setLang] = useLanguage();
  const [detail, setDetail] = useState<Entry | null>(null);
  const [galleryItems, setGalleryItems] = useState<Entry[]>([]);
  const t: Translate = (copy) => copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const open: Open = (e) => {
    setGalleryItems([]);
    setDetail(e);
  };
  const showGallery = (e: Entry, items: Entry[]) => {
    setGalleryItems(items);
    setDetail(e);
  };
  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main className="page-enter">{children({ t, lang, open, showGallery })}</main>
      <Footer t={t} open={open} />
      <Detail entry={detail} onClose={() => setDetail(null)} t={t} galleryItems={galleryItems} onNavigate={setDetail} />
    </>
  );
}
function HomeHead({ eyebrow, title, line, t, children }: { eyebrow?: Copy; title: Copy; line?: Copy; t: Translate; children?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <p className="eyebrow">{t(eyebrow)}</p>}
        <h2 className="section-title">{t(title)}</h2>
        {line && <p className="section-line">{t(line)}</p>}
      </div>
      {children}
    </div>
  );
}
function MoreLink({ to, children }: { to: "/our-village" | "/education" | "/opportunities" | "/events" | "/activities" | "/gallery" | "/stories" | "/contact"; children: ReactNode }) {
  return (
    <Button asChild variant="editorial" className="text-link">
      <Link to={to}>
        {children}
        <ArrowRight size={15} />
      </Link>
    </Button>
  );
}
function AboutVillage({ t }: { t: Translate }) {
  return (
    <section id="about" className="section container-wide">
      <div className="split reveal">
        <div className="split-media">
          <img loading="lazy" src={images.village} alt="Representative rural Andhra landscape with paddy fields and palm trees" />
        </div>
        <div className="split-text">
          <p className="eyebrow">
            {t(c("ROOTED IN COMMUNITY. MOVING TOWARDS THE FUTURE.", "సమాజంలో వేళ్లూనుకుని, భవిష్యత్తు వైపు అడుగులు."))}
          </p>
          <h2 className="section-title">{t(c("About Thummapala", "తుమ్మపాల గురించి"))}</h2>
          <p className="section-copy">
            {t(
              c(
                "Thummapala is a vibrant village in Anakapalli, Andhra Pradesh, shaped by its people, agricultural roots, education, sports and strong community spirit. With a long-standing connection to the region's agricultural and local industrial landscape, Thummapala continues to grow while looking towards new opportunities for its people and future generations.",
                "ఆంధ్రప్రదేశ్‌లోని అనకాపల్లి జిల్లాలో ఉన్న తుమ్మపాల, తన ప్రజలు, వ్యవసాయ మూలాలు, విద్య, క్రీడలు, బలమైన సమాజ బంధాలతో సజీవంగా నిలిచే గ్రామం. ఈ ప్రాంతపు వ్యవసాయం, స్థానిక పరిశ్రమలతో దీర్ఘకాల అనుబంధం కలిగిన తుమ్మపాల, తన ప్రజలకు మరియు రాబోయే తరాలకు కొత్త అవకాశాల వైపు ముందుకు సాగుతోంది.",
              ),
            )}
          </p>
          <p className="section-line">
            {t(c("Anakapalli Mandal · Anakapalli District · Andhra Pradesh", "అనకాపల్లి మండలం · అనకాపల్లి జిల్లా · ఆంధ్రప్రదేశ్"))}
          </p>
          <MoreLink to="/our-village">{t(c("Explore Thummapala", "తుమ్మపాల గురించి తెలుసుకోండి"))}</MoreLink>
        </div>
      </div>
    </section>
  );
}
function FocusAreas({ t }: { t: Translate }) {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "center", containScroll: false, duration: 38 });
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState(0);
  const interactionTimer = useRef<number | undefined>(undefined);
  const pauseForInteraction = () => {
    setPaused(true);
    if (interactionTimer.current !== undefined) window.clearTimeout(interactionTimer.current);
    interactionTimer.current = window.setTimeout(() => setPaused(false), 6000);
  };
  useEffect(() => {
    if (!api) return;
    const select = () => setSelected(api.selectedScrollSnap() % focusAreas.length);
    select();
    api.on("select", select);
    api.scrollTo(0, true);
    return () => {
      api.off("select", select);
    };
  }, [api]);
  useEffect(() => () => {
    if (interactionTimer.current !== undefined) window.clearTimeout(interactionTimer.current);
  }, []);
  useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => api.scrollNext(), 5200);
    return () => clearInterval(timer);
  }, [api, paused]);
  return (
    <section id="focus" className="section focus-section">
      <div className="container-wide">
        <HomeHead title={c("Our Focus Areas", "మన ముఖ్య రంగాలు")} line={c("Four paths. One shared future.", "నాలుగు మార్గాలు. ఒకే భవిష్యత్తు.")} t={t}>
          <CarouselControls t={t} prev={() => { pauseForInteraction(); api?.scrollPrev(); }} next={() => { pauseForInteraction(); api?.scrollNext(); }} />
        </HomeHead>
        <div
          className="carousel-viewport focus-viewport"
          ref={ref}
          aria-roledescription="carousel"
          aria-label={t(c("Our focus areas", "మన ముఖ్య రంగాలు"))}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              pauseForInteraction();
              api?.scrollPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              pauseForInteraction();
              api?.scrollNext();
            }
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onPointerDown={pauseForInteraction}
          onPointerUp={pauseForInteraction}
        >
          <div className="carousel-track">
            {focusAreas.map((f, i) => {
              const active = i === selected;
              return (
              <div className={`focus-slide ${active ? "is-active" : ""}`} key={f.path} aria-hidden={!active}>
                <Link
                  to={f.path}
                  className="focus-card"
                  tabIndex={active ? 0 : -1}
                  onClick={(event) => {
                    if (!active) {
                      event.preventDefault();
                      pauseForInteraction();
                      api?.scrollTo(i);
                    }
                  }}
                >
                  <img
                    loading="lazy"
                    src={f.image}
                    alt={t(f.alt)}
                    data-mobile-position={f.mobilePosition}
                  />
                  <div className="focus-card-body">
                    <span className="focus-number">0{i + 1}</span>
                    <h3>{t(f.title)}</h3>
                    <p>{t(f.line)}</p>
                    <span className="focus-cta">
                      {t(f.cta)} <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              </div>
              );
            })}
          </div>
        </div>
        <div className="focus-carousel-footer">
          <span className="sample">0{selected + 1} / 0{focusAreas.length}</span>
          <div className="focus-dots">
          {focusAreas.map((f, i) => (
            <Button key={f.path} type="button" variant="editorial" aria-label={`${t(c("Show", "చూపించు"))} ${t(f.title)}`} aria-current={i === selected} onClick={() => { pauseForInteraction(); api?.scrollTo(i); }}>
              <span />
            </Button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function EducationPreview({ t }: { t: Translate }) {
  const points = [c("School support", "పాఠశాల చదువుకు తోడు"), c("Extra learning", "అదనపు అభ్యాసం"), c("Career guidance", "కెరీర్ మార్గదర్శనం")];
  return (
    <section id="education-preview" className="section education-section">
      <div className="container-wide split split-reverse reveal">
        <div className="split-text">
          <p className="eyebrow">{t(c("Education at a glance", "చదువు ఒక చూపులో"))}</p>
          <h2 className="section-title">{t(c("Education", "చదువు"))}</h2>
          <p className="section-line">{t(c("Learning that opens new doors.", "కొత్త దారులు తెరిచే చదువు."))}</p>
          <ul className="point-list">
            {points.map((p) => (
              <li key={p.en}>
                <BookOpen size={16} aria-hidden="true" />
                {t(p)}
              </li>
            ))}
          </ul>
          <MoreLink to="/education">{t(c("Explore Education", "చదువు చూడండి"))}</MoreLink>
        </div>
        <div className="split-media">
          <img loading="lazy" src={images.education} alt="Representative students learning in an Andhra school" />
        </div>
      </div>
    </section>
  );
}
function OpportunityPreview({ t }: { t: Translate }) {
  return (
    <section id="opportunities-preview" className="section container-wide">
      <HomeHead
        title={c("Opportunities", "అవకాశాలు")}
        line={c("Opportunity information for Thummapala is being prepared for the future.", "తుమ్మపాల కోసం అవకాశాల సమాచారం సిద్ధమవుతోంది.")}
        t={t}
      >
        <MoreLink to="/opportunities">{t(c("View Opportunities", "అవకాశాలు చూడండి"))}</MoreLink>
      </HomeHead>
      <div className="opp-tiles">
        {opportunityCategories.map((item) => {
          const Icon = opportunityIcons[item.id];
          return (
            <Link
              to="/opportunities"
              className="opp-tile"
              key={item.id}
              aria-label={`${t(item.title)}. ${t(item.preview)} ${t(item.status)}. ${t(c("View opportunities", "అవకాశాలు చూడండి"))}`}
            >
              <Icon aria-hidden="true" strokeWidth={1.5} />
              <span className="opp-tile-copy">
                <strong>{t(item.title)}</strong>
                <span>{t(item.preview)}</span>
                <small className="opportunity-status">{t(item.status)}</small>
              </span>
              <ArrowUpRight className="opp-tile-arrow" size={16} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
function ComingSoon({ t, open }: { t: Translate; open: Open }) {
  const carousel = useCarousel(futureInitiatives.length, false, "start");
  return (
    <section id="coming-soon" className="section future-section">
      <div className="container-wide">
        <HomeHead title={c("Coming Soon", "త్వరలో")} line={c("The future we are building — ideas still being planned with the community.", "మనం నిర్మించే రేపు — కమ్యూనిటీతో ఇంకా ప్రణాళికలో ఉన్న ఆలోచనలు.")} t={t}>
          <CarouselControls t={t} prev={() => carousel.api?.scrollPrev()} next={() => carousel.api?.scrollNext()} />
        </HomeHead>
        <div className="carousel-viewport soon-viewport" ref={carousel.ref}>
          <div className="carousel-track">
            {futureInitiatives.map((f, i) => (
              <div className="carousel-slide soon-slide" key={f.id}>
                <Button type="button" variant="editorial" className="soon-card" onClick={() => open(f)} aria-label={`${t(f.status ?? c("Future initiative", "భవిష్యత్తు కార్యక్రమం"))}: ${t(f.title)}`}>
                  <img loading="lazy" src={f.imageUrl ?? images[f.image]} alt={t(f.alt ?? f.title)} />
                  <span className="soon-shade" aria-hidden="true" />
                  <span className="soon-number">0{i + 1}</span>
                  <span className="soon-status">{f.status && t(f.status)}</span>
                  <strong>{t(f.title)}</strong>
                  <span className="soon-description">{t(f.description)}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-progress soon-progress">
          <span className="sample">{t(c("Proposed ideas · not yet available", "ప్రతిపాదిత ఆలోచనలు · ఇంకా అందుబాటులో లేవు"))}</span>
          <div className="progress-track" aria-hidden="true">
            {carousel.snaps.map((_, i) => <span key={i} className={i === carousel.index ? "active" : ""} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
function GalleryPreview({ t, onSelect }: { t: Translate; onSelect: (entry: Entry, items: Entry[]) => void }) {
  const items = gallery.slice(0, 6);
  return (
    <section id="gallery-preview" className="section container-wide">
      <HomeHead title={c("Gallery", "ఫోటోలు")} line={c("A few moments from Thummapala.", "తుమ్మపాలలో కొన్ని క్షణాలు.")} t={t}>
        <MoreLink to="/gallery">{t(c("View Gallery", "ఫోటోలు చూడండి"))}</MoreLink>
      </HomeHead>
      <div className="gallery-grid gallery-preview-grid">
        {items.map((g) => (
          <Button variant="editorial" className="gallery-item reveal" key={g.id} aria-label={`${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(g.title)}`} onClick={() => onSelect(g, items)}>
            <img src={g.imageUrl ?? images[g.image]} loading="lazy" alt={t(g.alt ?? g.title)} />
            <span>{t(g.title)}</span>
          </Button>
        ))}
      </div>
      <p className="data-note">{t(c("Moments across village life, learning, sports and community.", "గ్రామ జీవితం, అభ్యాసం, క్రీడలు, సమాజానికి సంబంధించిన క్షణాలు."))}</p>
    </section>
  );
}
export function VillageExperience() {
  return (
    <SitePage>
      {({ t, lang, open, showGallery }) => (
        <>
          <Hero t={t} lang={lang} />
          <AboutVillage t={t} />
          <FocusAreas t={t} />
          <EducationPreview t={t} />
          <OpportunityPreview t={t} />
          <Stories t={t} />
          <EventsActivities t={t} />
          <ComingSoon t={t} open={open} />
          <GalleryPreview t={t} onSelect={showGallery} />
          <Location t={t} />
          <Enquiry t={t} />
        </>
      )}
    </SitePage>
  );
}
function PageHero({ page, t }: { page: PageKey; t: Translate }) {
  const info = pageIntros[page];
  const siteUrl = getSiteUrl();
  const pagePath = page === "contact" ? "/contact" : `/${page}`;
  const absolute = (path: string) => siteUrl ? `${siteUrl}${path}` : path;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t(c("Home", "హోమ్")), item: absolute("/") },
      { "@type": "ListItem", position: 2, name: t(info.title), item: absolute(pagePath) },
    ],
  };
  return (
    <section id="home" className="page-hero" data-page={page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <img
        className="page-hero-photo"
        src={info.heroImageUrl ?? images[info.image]}
        alt={info.heroAlt ? t(info.heroAlt) : ""}
        fetchPriority="high"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container-wide page-hero-body">
        <div className="page-hero-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">{t(c("Home", "హోమ్"))}</Link>
            <span aria-hidden="true">/</span>
            <span>{t(page === "opportunities" ? c("Opportunities", "అవకాశాలు") : info.title)}</span>
          </nav>
            {page === "opportunities" && (
              <p className="eyebrow page-hero-eyebrow">{t(c("OPPORTUNITIES", "అవకాశాలు"))}</p>
            )}
          <h1>{t(info.title)}</h1>
          <p>{t(info.line)}</p>
          {page === "library" && (
            <Button asChild className="hero-cta">
              <a href="#library-about">
                {t(c("Explore the Library", "గ్రంథాలయాన్ని చూడండి"))}
                <ArrowRight />
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
function PageCta({ t, page }: { t: Translate; page: PageKey }) {
  const isLibrary = page === "library";
  return (
    <section className={`page-cta ${isLibrary ? "library-page-cta" : ""}`}>
      <div className="container-wide page-cta-inner">
        <div>
          <h2>{t(isLibrary ? c("Be Part of the Journey", "ప్రయాణంలో భాగమవ్వండి") : c("Want to be part of this?", "ఇందులో భాగమవ్వాలనుకుంటున్నారా?"))}</h2>
          {isLibrary && <p>{t(c("Together, we can create more opportunities to read, learn and grow.", "కలిసి చదవడానికి, నేర్చుకోవడానికి, ఎదగడానికి మరిన్ని అవకాశాలు సృష్టిద్దాం."))}</p>}
        </div>
        <Button asChild className="hero-cta">
          <Link to="/contact">
            {t(isLibrary ? c("Connect with us", "మాతో కలవండి") : c("Be part of the journey", "ప్రయాణంలో భాగమవ్వండి"))}
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
function LibraryPage({ t, onSelect }: { t: Translate; onSelect: (entry: Entry, items: Entry[]) => void }) {
  const photos = gallery.filter((item) => item.category.en === "Library & Learning");
  const aboutPhoto = photos[0];
  const readersPhoto = photos.find((item) => item.id === "gallery-library-community-celebration");
  const activitiesPhotos = photos.slice(1, 3);
  const eventPhotos = photos.slice(3);
  const renderPhoto = (photo: Entry) => (
    <Button
      variant="editorial"
      className="library-photo-button"
      key={photo.id}
      aria-label={`${t(c("Open photograph", "ఫోటో తెరవండి"))}: ${t(photo.title)}`}
      onClick={() => onSelect(photo, photos)}
    >
      <img src={photo.imageUrl ?? images[photo.image]} alt={t(photo.alt ?? photo.title)} loading="lazy" />
      <span>{t(photo.title)}</span>
    </Button>
  );
  return (
    <div className="library-page">
      <section id="library-about" className="section container-wide library-about">
        <div className="library-about-copy reveal">
          <p className="eyebrow">{t(c("ABOUT THE LIBRARY", "గ్రంథాలయం గురించి"))}</p>
          <h2>{t(c("A place for shared learning.", "కలిసి నేర్చుకునే స్థలం."))}</h2>
          <p className="section-copy">
            {t(c(
              "These photographs capture Library Week, readers and community gatherings in Thummapala. They show people coming together around books, recognition and learning.",
              "ఈ చిత్రాలు తుమ్మపాలలో గ్రంథాలయ వారోత్సవాలు, పాఠకులు, సమాజ సమావేశాలను చూపిస్తున్నాయి. పుస్తకాలు, గుర్తింపు, అభ్యాసం చుట్టూ ప్రజలు కలిసిన క్షణాలు ఇవి.",
            ))}
          </p>
        </div>
        {aboutPhoto && renderPhoto(aboutPhoto)}
      </section>

      <section className="section library-learning-section">
        <div className="container-wide library-learning-copy">
          <div className="reveal">
            <p className="eyebrow">{t(c("A PLACE FOR LEARNING", "అభ్యాసానికి ఒక స్థలం"))}</p>
            <h2>{t(c("Learning grows through reading.", "చదవడం ద్వారా అభ్యాసం పెరుగుతుంది."))}</h2>
            <p className="section-copy">
              {t(c(
                "Readers, students, children, books and community participation are at the heart of these moments.",
                "పాఠకులు, విద్యార్థులు, పిల్లలు, పుస్తకాలు, సమాజ భాగస్వామ్యం ఈ క్షణాల కేంద్రంగా ఉన్నాయి.",
              ))}
            </p>
            <ul className="library-learning-list">
              <li>{t(c("Reading", "చదవడం"))}</li>
              <li>{t(c("Student learning", "విద్యార్థుల అభ్యాసం"))}</li>
              <li>{t(c("Community participation", "సమాజ భాగస్వామ్యం"))}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container-wide library-photo-section">
        <div className="section-head reveal">
          <p className="eyebrow">{t(c("LIBRARY ACTIVITIES", "గ్రంథాలయ కార్యక్రమాలు"))}</p>
          <h2>{t(c("Moments around books and learning.", "పుస్తకాలు, అభ్యాసానికి సంబంధించిన క్షణాలు."))}</h2>
          <p className="section-copy">{t(c("Library Week, reading activities and community gatherings are represented in these photographs.", "గ్రంథాలయ వారోత్సవాలు, పఠన కార్యక్రమాలు, సమాజ సమావేశాలు ఈ చిత్రాల్లో కనిపిస్తాయి."))}</p>
        </div>
        <div className="library-photo-grid library-activities-grid">{activitiesPhotos.map(renderPhoto)}</div>
      </section>

      <section className="section library-readers-section">
        <div className="container-wide library-readers-grid">
          {readersPhoto && renderPhoto(readersPhoto)}
          <div className="reveal">
            <p className="eyebrow">{t(c("COMMUNITY & READERS", "సమాజం & పాఠకులు"))}</p>
            <h2>{t(c("Reading brings generations together.", "చదువు తరాలను కలుపుతుంది."))}</h2>
            <p className="section-copy">{t(c("Children and community members share a moment with books, reflecting the value of learning together.", "పిల్లలు, సమాజ సభ్యులు పుస్తకాలతో కలిసి గడిపిన క్షణం — కలిసి నేర్చుకోవడం విలువను ఇది చూపిస్తుంది."))}</p>
          </div>
        </div>
      </section>

      <section className="section container-wide library-photo-section">
        <div className="section-head reveal">
          <p className="eyebrow">{t(c("LIBRARY EVENTS", "గ్రంథాలయ కార్యక్రమాలు"))}</p>
          <h2>{t(c("Community gatherings and recognition.", "సమాజ సమావేశాలు, గుర్తింపు."))}</h2>
          <p className="section-copy">{t(c("Photographs from Library Week and related community gatherings, without unverified dates or event details.", "ధృవీకరించని తేదీలు లేదా వివరాలు లేకుండా, గ్రంథాలయ వారోత్సవాలు మరియు సంబంధిత సమాజ సమావేశాల చిత్రాలు."))}</p>
        </div>
        <div className="library-photo-grid library-events-grid">{eventPhotos.map(renderPhoto)}</div>
      </section>

      <section className="section library-gallery-section">
        <div className="container-wide">
          <div className="section-head reveal">
            <p className="eyebrow">{t(c("LIBRARY GALLERY", "గ్రంథాలయ చిత్రాలు"))}</p>
            <h2>{t(c("Library & Learning", "గ్రంథాలయం & అభ్యాసం"))}</h2>
          </div>
          <div className="library-gallery-grid">{photos.map(renderPhoto)}</div>
        </div>
      </section>

      <section className="section container-wide library-future-section">
        <div className="library-future-copy reveal">
          <p className="eyebrow">{t(c("FUTURE VISION", "భవిష్యత్ దృష్టి"))}</p>
          <h2>{t(c("Growing with Our Community", "మన సమాజంతో కలిసి ఎదుగుతూ"))}</h2>
          <p className="section-copy">{t(c("Looking ahead, the Library could become a stronger space for reading, student learning, community knowledge and educational activities, with possibilities for digital learning in the future.", "భవిష్యత్తులో చదవడం, విద్యార్థుల అభ్యాసం, సమాజ జ్ఞానం, విద్యా కార్యక్రమాలకు గ్రంథాలయం మరింత బలమైన స్థలంగా మారవచ్చు. డిజిటల్ అభ్యాస అవకాశాలనూ పరిశీలించవచ్చు."))}</p>
          <p className="sample">{t(c("These are possibilities for the future, not existing services.", "ఇవి భవిష్యత్ అవకాశాలు మాత్రమే; ప్రస్తుతం అందుబాటులో ఉన్న సేవలు కావు."))}</p>
        </div>
      </section>
    </div>
  );
}
function PageContent({ page, ctx }: { page: PageKey; ctx: PageContext }) {
  const { t, open, showGallery } = ctx;
  switch (page) {
    case "our-village":
      return (
        <>
          <Village t={t} />
          <EventsActivities t={t} />
          <Location t={t} />
        </>
      );
    case "education":
      return (
        <>
          <Education t={t} open={open} />
          <ComingSoon t={t} open={open} />
        </>
      );
    case "agrotech":
      return <Agrotech t={t} open={open} />;
    case "sports":
      return <Sports t={t} open={open} />;
    case "library":
      return <LibraryPage t={t} onSelect={showGallery} />;
    case "opportunities":
      return <Opportunities t={t} />;
    case "events":
    case "activities":
      return <EventsActivities t={t} />;
    case "stories":
      return <Stories t={t} />;
    case "gallery":
      return <Gallery t={t} onSelect={showGallery} />;
    case "contact":
      return (
        <>
          <Enquiry t={t} />
          <Location t={t} />
        </>
      );
  }
}
export function InnerPage({ page }: { page: PageKey }) {
  return (
    <SitePage>
      {(ctx) => (
        <>
          <PageHero page={page} t={ctx.t} />
          <PageContent page={page} ctx={ctx} />
          {page !== "contact" && <PageCta t={ctx.t} page={page} />}
        </>
      )}
    </SitePage>
  );
}
