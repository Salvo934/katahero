/** Hash links (#servizi …) funzionano solo sulla home; sulle altre pagine portano a `/#…`. */
export function resolveSiteNavHref(pathname: string, href: string): string {
  if (href.startsWith("#")) return pathname === "/" ? href : `/${href}`;
  return href;
}
