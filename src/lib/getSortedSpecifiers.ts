var collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export function getSortedSpecifiers(specifiers: string[]): string[] {
  return specifiers.sort(collator.compare);
}
