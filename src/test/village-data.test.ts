import { describe, expect, it } from "vitest";
import { validateEnquiry } from "@/lib/enquiry-validation";
import {
  facts,
  futureInitiatives,
  opportunityCategories,
  pageIntros,
  impactPeople,
  impactVideoUrl,
  getYouTubeVideoId,
  heroSlides,
  programs,
  mentors,
  stories,
  agricultureInitiatives,
  sportsEntries,
  activities,
  libraryPhotos,
  events,
  announcements,
  gallery,
} from "@/lib/village-data";
describe("Village content safeguards", () => {
  it("preserves 2011 census population as historical and verification-required", () => {
    expect(facts[0]?.value).toBe(31035);
    expect(facts[0]?.label.en).toContain("2011");
    expect(facts[0]?.needsVerification).toBe(true);
  });
  it("keeps all opportunity categories clearly marked as future-only", () => {
    expect(opportunityCategories.map(({ id, title, status, comingSoon }) => ({
      id,
      title: title.en,
      status: status.en,
      comingSoon,
    }))).toEqual([
      { id: "jobs", title: "Jobs", status: "COMING SOON", comingSoon: true },
      { id: "scholarships", title: "Scholarships", status: "COMING SOON", comingSoon: true },
      { id: "internships", title: "Internships", status: "COMING SOON", comingSoon: true },
      { id: "training", title: "Training", status: "COMING SOON", comingSoon: true },
    ]);
    expect(opportunityCategories.every((category) => category.description.en.length > 0)).toBe(true);
  });
  it("uses accessible, category-specific visuals on detailed pages", () => {
    expect(pageIntros.education.heroImageUrl).toBe("/images/digital-thummapala-education.png");
    expect(pageIntros.education.heroAlt?.en).toBe("Thummapala school and students");
    expect(pageIntros.education.contentImageUrl).toBe("/images/thummapala-story-school-community.png");
    expect(programs.find((item) => item.id === "academic")?.imageUrl).toBe(
      "/images/thummapala-story-student-support.png",
    );

    expect(pageIntros.agrotech.heroImageUrl).toBe("/images/digital-thummapala-agrotech.png");
    expect(pageIntros.agrotech.contentImageUrl).toBe("/images/digital-thummapala-sugar-factory.png");
    expect(pageIntros.agrotech.contentImageUrl).not.toBe(pageIntros.agrotech.heroImageUrl);
    expect(agricultureInitiatives.every((item) => item.imageUrl?.startsWith("/images/"))).toBe(true);
    expect(new Set(agricultureInitiatives.map((item) => item.imageUrl)).size).toBeGreaterThan(1);

    expect(pageIntros.sports.heroImageUrl).toBe("/images/thummapala-impact-pet-master.png");
    expect(pageIntros.sports.heroAlt?.en).toBe("Thummapala PT Master supporting Kho-Kho sports");
    expect(pageIntros.sports.contentImageUrl).toBe("/images/digital-thummapala-sports.png");
    expect(sportsEntries.every((item) => item.imageUrl?.startsWith("/images/") && item.alt?.en)).toBe(true);

    expect(pageIntros.library.title.en).toBe("Thummapala Library");
    expect(pageIntros.library.line.en).toBe("A space where books, learning and community come together.");
    expect(pageIntros.library.heroImageUrl).toBe("/images/thummapala-library-community-celebration.png");
    expect(pageIntros.library.heroAlt?.en).toContain("Children and community members");
  });
  it("keeps the six supplied success stories factual and accessible", () => {
    expect(stories).toHaveLength(6);
    expect(stories.map((story) => story.title.en)).toEqual([
      "Supporting Education Through Community",
      "Supporting Students on Their Journey",
      "Community Engagement",
      "Kho-Kho — Teamwork in Action",
      "Young Athletes, Stronger Together",
      "A Journey Built on Team Spirit",
    ]);
    expect(stories.every((story) => story.image.startsWith("/images/") && story.alt.en.length > 0)).toBe(true);
  });
  it("keeps impact profiles and the configurable video placeholder ready", () => {
    expect(impactPeople.map((person) => [person.name.en, person.role.en])).toEqual([
      ["Dantuluri V V Gopala Raju Garu", "Site donor · High school, roads and cement roads"],
      ["Peela veeru Naidu", "Physical Education Teacher · P.T. Sir"],
      ["Adari Govindarao", "School Support · Education Support"],
      ["Patakamsetti Balaram", "Chairman"],
      ["Ajay Kamadhenu", "Digital Marketer & Digital Creator"],
    ]);
    expect(impactPeople[0]?.name.te).toBe("దంతులూరి V V గోపాల రాజు గారు");
    expect(impactPeople[0]?.image).toBe("/images/thummapala-impact-dantuluri-vv-gopala-raju.jpeg");
    expect(impactPeople.every((person) => person.alt.en.length > 0 && person.alt.te.length > 0)).toBe(true);
    expect(impactVideoUrl).toContain("YOUR_VIDEO_ID");
    expect(getYouTubeVideoId(impactVideoUrl)).toBeNull();
    expect(getYouTubeVideoId("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
    expect(getYouTubeVideoId("https://youtu.be/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });
  it("keeps every future initiative proposed or coming soon", () => {
    expect(futureInitiatives.map((item) => item.title.en)).toEqual([
      "Community Study Centre",
      "Junior College Vision",
      "Advanced Digital Learning",
      "Quantum & Emerging Technology",
      "Career Development Hub",
      "Thummapala Library",
    ]);
    for (const item of futureInitiatives) {
      expect(item.status?.en).toBe("Coming Soon · Future Vision");
      expect(item.imageUrl).toMatch(/^\/images\/coming-soon-.+\.png$/);
      expect(item.alt?.en).toContain("Coming Soon");
      expect(item.description.en).toMatch(/future vision|future|not an existing|not an operating/i);
    }
  });
  it("includes each collected Thummapala asset once in the gallery", () => {
    const galleryImages = gallery.map((item) => item.imageUrl);
    expect(gallery).toHaveLength(26);
    expect(new Set(galleryImages).size).toBe(gallery.length);
    expect(gallery.every((item) => item.alt?.en && item.description.en.length > 0)).toBe(true);
    expect(gallery.filter((item) => item.status?.en === "Coming Soon · Future Vision")).toHaveLength(6);
    expect(gallery.filter((item) => item.category.en === "Library & Learning")).toHaveLength(6);
    expect(libraryPhotos).toHaveLength(6);
    expect(libraryPhotos.every((photo) => photo.alt.en.length > 0 && galleryImages.includes(photo.image))).toBe(true);
    expect(galleryImages).toEqual([
      "/images/digital-thummapala-village.png",
      "/images/digital-thummapala-agrotech.png",
      "/images/digital-thummapala-education.png",
      "/images/digital-thummapala-sports.png",
      "/images/digital-thummapala-sugar-factory.png",
      "/images/thummapala-story-school-community.png",
      "/images/thummapala-story-student-support.png",
      "/images/thummapala-story-community-outreach.png",
      "/images/thummapala-story-kho-kho-team.png",
      "/images/thummapala-story-girls-kho-kho.png",
      "/images/thummapala-story-sports-journey.png",
      "/images/thummapala-impact-pet-master.png",
      "/images/thummapala-impact-some-ramraju.png",
      "/images/thummapala-impact-ajay.png",
      "/images/coming-soon-community-study-center.png",
      "/images/coming-soon-junior-college.png",
      "/images/coming-soon-digital-learning.png",
      "/images/coming-soon-quantum-emerging-tech.png",
      "/images/coming-soon-career-development-hub.png",
      "/images/coming-soon-thummapala-library.png",
      "/images/thummapala-library-week-panel.png",
      "/images/thummapala-library-telugu-panel.png",
      "/images/thummapala-library-community-celebration.png",
      "/images/thummapala-library-week-celebration.png",
      "/images/thummapala-library-award-ceremony.png",
      "/images/thummapala-library-telugu-week.png",
    ]);
  });
  it("uses existing photos for activities and marks every event concept as unconfirmed", () => {
    expect(activities.map((activity) => activity.title.en)).toEqual([
      "Kho-Kho Teamwork",
      "Young Athletes, Stronger Together",
      "Education & School Activities",
      "Supporting Students",
      "Community Participation",
      "Agriculture & the Land",
      "Thummapala Library · Future Vision",
      "Community Library Week",
      "Library Week Gathering",
      "Readers and Community",
      "Library Week Activities",
      "Community Recognition",
      "Library Week Programme",
    ]);
    expect(
      activities.every(
        (activity) =>
          activity.image.startsWith("/images/") &&
          activity.alt.en.length > 0 &&
          (activity.label.en.startsWith("PHOTO STORY") || activity.label.en.startsWith("FUTURE VISION")),
      ),
    ).toBe(true);
    expect(events.map((event) => event.category.en)).toEqual([
      "Career guidance session",
      "Kho-Kho practice meet",
      "Farmer knowledge exchange",
      "Computer skills workshop",
      "Student reading circle",
      "Community gathering",
    ]);
    expect(events.every((event) => event.status.en === "UPCOMING · COMING SOON")).toBe(true);
    expect(
      events.every(
        (event) =>
          !("date" in event) &&
          event.location.en.includes("details to be confirmed") &&
          event.description.en.toLowerCase().includes("sample"),
      ),
    ).toBe(true);
    expect(events.every((event) => event.image.startsWith("/images/") && event.alt.en.length > 0)).toBe(true);
  });
  it("provides the requested content minimums", () => {
    expect(heroSlides.length).toBe(5);
    expect(programs.length).toBeGreaterThanOrEqual(6);
    expect(mentors.length).toBe(4);
    expect(stories.length).toBe(6);
    expect(agricultureInitiatives.length).toBe(4);
    expect(sportsEntries.length).toBe(5);
    expect(activities.length).toBe(13);
    expect(events.length).toBe(6);
    expect(announcements.length).toBe(5);
    expect(gallery.length).toBe(26);
  });
  it("keeps the hero slides in the requested order with accessible visuals and copy", () => {
    expect(
      heroSlides.map(({ image, title, subtitle, alt, mobilePosition }) => ({
        image,
        title: title.en,
        subtitle: subtitle.en,
        alt: alt.en,
        mobilePosition,
      })),
    ).toEqual([
      {
        image: "/images/digital-thummapala-village.png",
        title: "Thummapala",
        subtitle: "Our village. Our people. Our future.",
        alt: "Aerial view of Thummapala village",
        mobilePosition: undefined,
      },
      {
        image: "/images/digital-thummapala-agrotech.png",
        title: "Agrotech",
        subtitle: "Better ideas for better farming.",
        alt: "Agricultural landscape representing Agrotech and farming",
        mobilePosition: "left",
      },
      {
        image: "/images/digital-thummapala-education.png",
        title: "Education",
        subtitle: "Learning that opens new doors.",
        alt: "Thummapala High School with students",
        mobilePosition: undefined,
      },
      {
        image: "/images/digital-thummapala-sports.png",
        title: "Sports",
        subtitle: "Talent, teamwork and a spirit to move forward.",
        alt: "Students participating in a village sports event",
        mobilePosition: undefined,
      },
      {
        image: "/images/digital-thummapala-sugar-factory.png",
        title: "Thummapala",
        subtitle: "A village connected to agriculture, people and industry.",
        alt: "Sugar factory and sugarcane transport near Thummapala",
        mobilePosition: undefined,
      },
    ]);
  });
  it("requires a full name before accepting an enquiry", () => {
    expect(validateEnquiry({ name: " ", phone: "12345678", email: "person@example.com", audience: "Student", interest: "Education", message: "Hello" }).name).toBe("required");
  });
  it("requires a phone number before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "", email: "person@example.com", audience: "Student", interest: "Education", message: "Hello" }).phone).toBe("required");
  });
  it("accepts phone numbers with 8 to 15 digits", () => {
    expect(validateEnquiry({ name: "Asha", phone: "+91 98765 43210", email: "person@example.com", audience: "Student", interest: "Education", message: "Hello" }).phone).toBeUndefined();
  });
  it("rejects phone numbers outside 8 to 15 digits", () => {
    expect(validateEnquiry({ name: "Asha", phone: "1234567", email: "person@example.com", audience: "Student", interest: "Education", message: "Hello" }).phone).toBe("phone");
  });
  it("requires a valid email address before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "not-an-email", audience: "Student", interest: "Education", message: "Hello" }).email).toBe("email");
  });
  it("allows email to remain blank", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "", audience: "Student", interest: "Education", message: "Hello" }).email).toBeUndefined();
  });
  it("allows the optional audience selection to be blank", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "", interest: "Education", message: "Hello" }).audience).toBeUndefined();
  });
  it("allows the optional interest selection to be blank", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "Student", interest: "", message: "Hello" }).interest).toBeUndefined();
  });
  it("requires a message before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "Student", interest: "Education", message: "  " }).message).toBe("required");
  });
});
