/**
 * Minimal path routing. Two pages, so a router library would be more weight
 * than logic.
 *
 * On GitHub Pages the app is served from a sub-path (`/margo-advisory/`), and
 * there is no server to rewrite unknown paths — the workflow copies index.html
 * to 404.html so a direct hit on /form still boots the app, which then reads
 * the path and renders the right page.
 */
export const BASE = import.meta.env.BASE_URL; // '/' in dev, '/margo-advisory/' in CI

export type Route = 'home' | 'form';

export function currentRoute(): Route {
  const path = window.location.pathname.slice(BASE.length).replace(/^\/+|\/+$/g, '');
  return path === 'form' ? 'form' : 'home';
}

export const hrefFor = (route: Route) => (route === 'home' ? BASE : `${BASE}form`);

/** Client-side navigation; falls back to a normal link if JS intercepts fail. */
export function navigate(route: Route) {
  window.history.pushState({}, '', hrefFor(route));
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}
