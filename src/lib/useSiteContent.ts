import { useEffect, useState } from "react";
import { sanityClient } from "./sanity";

export interface SiteContent {
  hero: {
    sloganLine1: string;
    sloganLine2: string;
    sloganLine3: string;
    description: string;
    ctaButton: string;
    ctaSecondary: string;
    yearsValue: string;
    yearsLabel: string;
  };
  about: {
    title: string;
    mainText: string;
    approachText: string;
    credentialsList: string[];
    ctaText: string;
  };
  whyGabriela: {
    title: string;
    intro: string;
    features: { _key: string; title: string; description: string }[];
  };
  kpis: { _key: string; value: string; label: string; description: string }[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

const QUERY = `*[_type == "siteContent"][0]`;

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent | null>(null);

  useEffect(() => {
    sanityClient.fetch<SiteContent>(QUERY).then(setContent);
  }, []);

  return content;
}
