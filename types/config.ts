export interface Website {
  name: string;
  description: string;
  url: string;
}

export interface CTA {
  text: string;
  link: string;
}

export interface HeroContent {
  type: 'hero';
  title: string;
  subtitle: string;
  cta: CTA;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesContent {
  type: 'features';
  title: string;
  items: FeatureItem[];
}

export type PageContent = HeroContent | FeaturesContent;

export interface PageConfig {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  content?: PageContent[];
}

export interface Pages {
  home: PageConfig;
  about: PageConfig;
  contact: PageConfig;
}

export interface AppConfig {
  website: Website;
  pages: Pages;
}

