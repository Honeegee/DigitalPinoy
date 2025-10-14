export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: 'technology' | 'emotions' | 'globalization';
  icon?: string;
}

export interface Exhibit {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'social' | 'entertainment' | 'music' | 'sports' | 'faith' | 'global' | 'gaming';
  path: string;
  color: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  thumbnail?: string;
  description?: string;
  year?: number;
}

export interface MemoryEntry {
  id: string;
  content: string;
  author: string;
  year: number;
  approved: boolean;
  image?: string;
}
