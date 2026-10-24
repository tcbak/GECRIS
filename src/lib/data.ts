/**
 * Typed access to the JSON content files in src/data.
 * Pages import from here so the UI never depends on raw JSON shapes.
 */
import partnersData from '../data/partners.json';
import workPackagesData from '../data/workpackages.json';
import deliverablesData from '../data/deliverables.json';
import resourcesData from '../data/resources.json';
import galleryData from '../data/gallery.json';

export interface Partner {
  id: string;
  name: string;
  shortName?: string;
  country: string;
  region?: string;
  role?: string;
  description: string;
  website?: string;
  logo?: string;
  placeholder?: boolean;
}

export interface WorkPackage {
  number: number;
  title: string;
  lead: string;
  objectives: string[];
  activities: string[];
  outcomes: string[];
  deliverables: string[];
  placeholder?: boolean;
}

export interface Deliverable {
  id: string;
  title: string;
  workPackage: number;
  description: string;
  dueDate: string | null;
  publishedDate: string | null;
  file: string;
  public: boolean;
  placeholder?: boolean;
}

export interface ResourceCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Resource {
  category: string;
  title: string;
  description: string;
  file?: string;
  url?: string;
  date?: string | null;
  placeholder?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  category: string;
  date?: string | null;
  width: number;
  height: number;
}

export const partners: Partner[] = partnersData.partners;

/** Coordinator first, then the order given in the data file. */
export const sortedPartners = [...partners].sort(
  (a, b) => Number(b.role === 'Coordinator') - Number(a.role === 'Coordinator'),
);

export function groupBy<T>(items: T[], key: (item: T) => string): [string, T[]][] {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    map.set(k, [...(map.get(k) ?? []), item]);
  }
  return [...map.entries()];
}

export const workPackages: WorkPackage[] = [...workPackagesData.workPackages].sort((a, b) => a.number - b.number);

/** Only deliverables explicitly marked public are ever exposed. */
export const publicDeliverables: Deliverable[] = (deliverablesData.deliverables as Deliverable[])
  .filter((d) => d.public === true)
  .sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));

export const resourceCategories: ResourceCategory[] = resourcesData.categories;
export const resources: Resource[] = resourcesData.resources;

export const galleryCategories: { id: string; title: string }[] = galleryData.categories;
export const galleryImages: GalleryImage[] = galleryData.images;
