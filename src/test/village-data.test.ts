import { describe, expect, it } from "vitest";
import { validateEnquiry } from "@/lib/enquiry-validation";
import {
  facts,
  futureInitiatives,
  opportunities,
  filterEntries,
  heroSlides,
  programs,
  mentors,
  stories,
  agricultureInitiatives,
  sportsEntries,
  activities,
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
  it("never presents sample opportunities as official recruitment", () => {
    expect(opportunities).toHaveLength(8);
    for (const item of opportunities) {
      expect(item.isDemo).toBe(true);
      expect(item.description.en).toContain("not an official recruitment");
    }
  });
  it("keeps every future initiative proposed or coming soon", () => {
    expect(futureInitiatives).toHaveLength(5);
    for (const item of futureInitiatives) {
      expect(item.status?.en).toMatch(/Proposed|Coming soon|Future initiative/);
    }
  });
  it("provides the requested content minimums", () => {
    expect(heroSlides.length).toBe(5);
    expect(programs.length).toBeGreaterThanOrEqual(6);
    expect(mentors.length).toBe(4);
    expect(stories.length).toBe(5);
    expect(agricultureInitiatives.length).toBe(4);
    expect(sportsEntries.length).toBe(5);
    expect(activities.length).toBe(8);
    expect(events.length).toBe(6);
    expect(announcements.length).toBe(5);
    expect(gallery.length).toBeGreaterThanOrEqual(20);
  });
  it("filters scholarships without returning other categories", () => {
    expect(filterEntries(opportunities, "Scholarships").map((e) => e.id)).toEqual([
      "opportunity-1",
    ]);
    expect(filterEntries(opportunities, "All")).toHaveLength(8);
    expect(filterEntries(opportunities, "Unknown")).toEqual([]);
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
  it("requires an audience selection before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "", interest: "Education", message: "Hello" }).audience).toBe("required");
  });
  it("requires an interest selection before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "Student", interest: "", message: "Hello" }).interest).toBe("required");
  });
  it("requires a message before accepting an enquiry", () => {
    expect(validateEnquiry({ name: "Asha", phone: "12345678", email: "person@example.com", audience: "Student", interest: "Education", message: "  " }).message).toBe("required");
  });
});
