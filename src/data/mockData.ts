import { ExtractedMedia, PlatformStatus } from '../types';

export const SAMPLE_MEDIA_LIST: ExtractedMedia[] = [
  {
    id: 'sample-insta-1',
    url: 'https://www.instagram.com/reel/C3x9L0Pq2A9/',
    title: 'Cinematic Tokyo Rain & Neon Architecture [4K Master]',
    author: 'Aesthetic Archivist',
    authorHandle: '@tokyovibe.raw',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    platform: 'instagram',
    thumbnail: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1080&q=80',
    duration: '0:48',
    dimensions: '1080 x 1920',
    views: '4.8M',
    likes: '342K',
    formats: [
      {
        id: 'f-1080p',
        type: 'video',
        resolution: '1080p',
        qualityLabel: '1080p Full HD (60 FPS)',
        fileSize: '32.4 MB',
        bitrate: '14.2 Mbps',
        codec: 'H.264 / AAC',
        extension: 'mp4',
        isPopular: true
      },
      {
        id: 'f-4k',
        type: 'video',
        resolution: '4K',
        qualityLabel: '4K Ultra HD (Direct Master)',
        fileSize: '88.6 MB',
        bitrate: '38.0 Mbps',
        codec: 'HEVC / AAC',
        extension: 'mp4'
      },
      {
        id: 'f-720p',
        type: 'video',
        resolution: '720p',
        qualityLabel: '720p Mobile Compact',
        fileSize: '16.1 MB',
        bitrate: '6.5 Mbps',
        codec: 'H.264',
        extension: 'mp4'
      },
      {
        id: 'f-audio',
        type: 'audio',
        resolution: '320kbps',
        qualityLabel: 'MP3 Spatial Audio (Original Sound)',
        fileSize: '4.8 MB',
        bitrate: '320 kbps',
        codec: 'MPEG Layer 3',
        extension: 'mp3'
      }
    ]
  },
  {
    id: 'sample-tiktok-1',
    url: 'https://www.tiktok.com/@creator/video/734892019284910',
    title: 'Speedrun Cyberpunk Unreal Engine 5 Scene Breakdown',
    author: 'VFX Protocol',
    authorHandle: '@vfx.protocol',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    platform: 'tiktok',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1080&q=80',
    duration: '0:34',
    dimensions: '1080 x 1920',
    views: '8.2M',
    likes: '910K',
    formats: [
      {
        id: 'tt-1080p',
        type: 'video',
        resolution: '1080p',
        qualityLabel: '1080p HD (No Watermark)',
        fileSize: '24.2 MB',
        bitrate: '12.0 Mbps',
        codec: 'H.264',
        extension: 'mp4',
        isPopular: true
      },
      {
        id: 'tt-audio',
        type: 'audio',
        resolution: '320kbps',
        qualityLabel: 'Original TikTok Audio Track',
        fileSize: '3.1 MB',
        bitrate: '320 kbps',
        codec: 'MP3',
        extension: 'mp3'
      }
    ]
  },
  {
    id: 'sample-youtube-1',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Deep Space James Webb High-Res Nebula Journey 60FPS',
    author: 'Astrophysics Daily',
    authorHandle: '@astrophysics.official',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
    platform: 'youtube',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&q=80',
    duration: '2:15',
    dimensions: '3840 x 2160',
    views: '12.5M',
    likes: '1.4M',
    formats: [
      {
        id: 'yt-4k',
        type: 'video',
        resolution: '4K',
        qualityLabel: '4K 2160p (60 FPS HDR)',
        fileSize: '142.0 MB',
        bitrate: '45.0 Mbps',
        codec: 'VP9 / Opus',
        extension: 'mp4',
        isPopular: true
      },
      {
        id: 'yt-1080p',
        type: 'video',
        resolution: '1080p',
        qualityLabel: '1080p Full HD (60 FPS)',
        fileSize: '41.2 MB',
        bitrate: '15.0 Mbps',
        codec: 'H.264',
        extension: 'mp4'
      },
      {
        id: 'yt-audio',
        type: 'audio',
        resolution: '320kbps',
        qualityLabel: 'Opus / MP3 Lossless Audio',
        fileSize: '7.8 MB',
        bitrate: '320 kbps',
        codec: 'MP3',
        extension: 'mp3'
      }
    ]
  }
];

export const SUPPORTED_PLATFORMS: PlatformStatus[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Reels, Posts & Stories',
    status: 'operational',
    latency: 18,
    maxQuality: '4K / 1080p HD',
    iconColor: '#FD1D1D'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'Shorts & Audio Stems',
    status: 'operational',
    latency: 22,
    maxQuality: '1080p (Clean No-Watermark)',
    iconColor: '#00F2FE'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Videos, Shorts & MP3',
    status: 'operational',
    latency: 27,
    maxQuality: '4K Ultra HD (60 FPS)',
    iconColor: '#FF0000'
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    category: 'Feed Clips & Spaces',
    status: 'operational',
    latency: 19,
    maxQuality: '1080p MP4',
    iconColor: '#E2E8F0'
  },
  {
    id: 'reddit',
    name: 'Reddit',
    category: 'Video Threads & Audio',
    status: 'operational',
    latency: 31,
    maxQuality: '1080p Merged Audio',
    iconColor: '#FF4500'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Watch & Reels',
    status: 'operational',
    latency: 29,
    maxQuality: '1080p HD',
    iconColor: '#1877F2'
  },
  {
    id: 'vimeo',
    name: 'Vimeo',
    category: 'Independent Cinema',
    status: 'operational',
    latency: 24,
    maxQuality: '4K Master Stream',
    iconColor: '#1AB7EA'
  }
];
