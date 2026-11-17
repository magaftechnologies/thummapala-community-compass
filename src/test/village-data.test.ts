import { describe, expect, it } from "vitest";
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
});
