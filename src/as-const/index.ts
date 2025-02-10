const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteKey = keyof typeof routes; // "home" | "about" | "contact"
export type RouteValue = (typeof routes)[keyof typeof routes]; // "/" | "/about" | "/contact"

export const goToRouteExplicit = (route: "/" | "/about" | "/contact") => {
  return route;
};
export const goToRouteImplicit = (route: RouteValue) => {
  return route;
};
