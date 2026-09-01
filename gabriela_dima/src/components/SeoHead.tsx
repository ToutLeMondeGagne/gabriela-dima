import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description?: string;
  noindex?: boolean;
}

export function SeoHead({ title, description, noindex }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description ?? "");
    setMeta("property", "og:title", title);
    if (description) setMeta("property", "og:description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
  }, [title, description, noindex]);

  return null;
}

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
