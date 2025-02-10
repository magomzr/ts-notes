import { RouteKey, RouteValue, goToRouteExplicit, goToRouteImplicit } from ".";

describe("should work with as const", () => {
  it("should work the RouteKey", () => {
    const route: RouteKey = "home";
    expect(route).toBe("home");
  });

  it("should work the RouteValue", () => {
    const route: RouteValue = "/";
    expect(route).toBe("/");
  });

  it("should work the goToRouteExplicit", () => {
    const route = goToRouteExplicit("/");
    expect(route).toBe("/");
  });

  it("should work the goToRouteImplicit", () => {
    const route = goToRouteImplicit("/about");
    expect(route).toBe("/about");
  });
});
