import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { focusAreas, innerPaths } from "@/lib/village-data";

const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
const required = ["/our-village", "/education", "/agrotech", "/sports", "/opportunities", "/events", "/activities", "/stories", "/gallery", "/contact"];

describe("Site pages", () => {
  it("lists every required inner page in the navigation", () => {
    expect([...innerPaths].sort()).toEqual([...required].sort());
  });
  it.each(required)("serves a real page at %s", (path) => {
    const leaf = router.matchRoutes(path).at(-1);
    expect(leaf?.routeId).not.toBe(rootRouteId);
    expect(leaf?.routeId).toBe(path);
  });
  it("sends Education, Agrotech and Sports focus cards to their own pages", () => {
    expect(focusAreas.map((f) => [f.title.en, f.path])).toEqual([
      ["Education", "/education"],
      ["Agrotech", "/agrotech"],
      ["Sports", "/sports"],
    ]);
  });
});
