export type TabType = 'home' | 'about' | 'privacy' | 'contact';

export type PlatformType = 'all' | 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'reddit' | 'facebook' | 'vimeo';

export interface MediaFormat {
  id: string;
  type: 'video' | 'audio';
  resolution: string;
  qualityLabel: string;
  fileSize: string;
  bitrate: string;
  codec: string;
  extension: string;
  isPopular?: boolean;
}

export interface ExtractedMedia {
  id: string;
  url: string;
  title: string;
  author: string;
  authorHandle: string;
  authorAvatar: string;
  platform: PlatformType;
  thumbnail: string;
  duration: string;
  dimensions: string;
  formats: MediaFormat[];
  views?: string;
  likes?: string;
  downloadCount?: number;
}

export interface ContactReason {
  id: string;
  label: string;
  iconName: string;
}

export interface PlatformStatus {
  id: string;
  name: string;
  category: string;
  status: 'operational' | 'degraded' | 'maintenance';
  latency: number;
  maxQuality: string;
  iconColor: string;
}
