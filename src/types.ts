export interface InterventionDomain {
  id: string;
  title: string;
  iconName: string;
  description: string;
  details: string[];
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StructureOrg {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  impact: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}
