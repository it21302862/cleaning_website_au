const SKIP_KEYS = new Set([
  "slug",
  "id",
  "image",
  "icon",
  "footerIcon",
  "locale",
  "region",
  "path",
  "embedQuery",
]);

/** Skip paths, URLs, and filenames */
function isTechnicalString(value: string): boolean {
  return (
    value.startsWith("/") ||
    value.startsWith("http") ||
    /\.(jpg|jpeg|png|webp|svg|gif)(\?|$)/i.test(value)
  );
}

/** Turn compound words like eco-friendly into eco friendly for on-page copy. */
function dehyphenateString(value: string): string {
  return value.replace(/(\p{L}|\d)-(\p{L}|\d)/gu, "$1 $2");
}

export function dehyphenateCopy<T>(value: T, parentKey?: string): T {
  if (typeof value === "string") {
    if (parentKey && SKIP_KEYS.has(parentKey)) {
      return value;
    }
    if (isTechnicalString(value)) {
      return value;
    }
    return dehyphenateString(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => dehyphenateCopy(item)) as T;
  }

  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = dehyphenateCopy(child, key);
    }
    return out as T;
  }

  return value;
}