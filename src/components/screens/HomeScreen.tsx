import React, { useState } from 'react';
import { 
  ArrowDown, 
  Link as LinkIcon, 
  Clipboard, 
  Sparkles, 
  Check, 
  Play, 
  Download, 
  Volume2, 
  CheckCircle2, 
  Layers, 
  RefreshCw, 
  Share2, 
  Clock, 
  HardDrive,
  Sliders,
  ChevronRight,
  Film
} from 'lucide-react';
import { SAMPLE_MEDIA_LIST } from '../../data/mockData';
import { ExtractedMedia, MediaFormat, PlatformType } from '../../types';

interface HomeScreenProps {
  onOpenStatusModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenStatusModal }) => {
  const [urlInput, setUrlInput] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('all');
  const [currentMedia, setCurrentMedia] = useState<ExtractedMedia>(SAMPLE_MEDIA_LIST[0]);
  const [selectedFormat, setSelectedFormat] = useState<MediaFormat>(SAMPLE_MEDIA_LIST[0].formats[0]);
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [history, setHistory] = useState<ExtractedMedia[]>([SAMPLE_MEDIA_LIST[0]]);
  const [pasteNotice, setPasteNotice] = useState<boolean>(false);

  // Platform chips definitions
  const platformChips: { id: PlatformType; label: string; dotColor: string }[] = [
    { id: 'all', label: 'All Platforms', dotColor: '#6366F1' },
    { id: 'instagram', label: 'Instagram', dotColor: '#FD1D1D' },
    { id: 'tiktok', label: 'TikTok', dotColor: '#00F2FE' },
    { id: 'youtube', label: 'YouTube', dotColor: '#FF0000' },
    { id: 'twitter', label: 'X (Twitter)', dotColor: '#E2E8F0' },
    { id: 'reddit', label: 'Reddit', dotColor: '#FF4500' },
    { id: 'facebook', label: 'Facebook', dotColor: '#1877F2' }
  ];

  // Clipboard paste handler
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrlInput(text);
        setPasteNotice(true);
        setTimeout(() => setPasteNotice(false), 2000);
      }
    } catch {
      // Fallback sample
      const randomSample = SAMPLE_MEDIA_LIST[Math.floor(Math.random() * SAMPLE_MEDIA_LIST.length)];
      setUrlInput(randomSample.url);
      setPasteNotice(true);
      setTimeout(() => setPasteNotice(false), 2000);
    }
  };

  // Parse Stream
  const handleParse = (overrideMedia?: ExtractedMedia) => {
    setIsParsing(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      let target = overrideMedia;
      if (!target) {
        if (urlInput.includes('tiktok')) {
          target = SAMPLE_MEDIA_LIST.find(m => m.platform === 'tiktok') || SAMPLE_MEDIA_LIST[1];
        } else if (urlInput.includes('youtube') || urlInput.includes('youtu.be')) {
          target = SAMPLE_MEDIA_LIST.find(m => m.platform === 'youtube') || SAMPLE_MEDIA_LIST[2];
        } else {
          target = SAMPLE_MEDIA_LIST[0];
        }
      }

      setCurrentMedia(target);
      setSelectedFormat(target.formats[0]);
      setIsParsing(false);

      // Add to history
      setHistory(prev => {
        if (prev.find(p => p.id === target!.id)) return prev;
        return [target!, ...prev];
      });
    }, 700);
  };

  // Perform Simulated & Real File Download Trigger
  const handleDownload = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadSuccess(true);
          
          // Trigger actual download of a sample media file
          triggerBrowserDownload();
          return 100;
        }
        return prev + 20;
      });
    }, 200);
  };

  const triggerBrowserDownload = () => {
    const isAudio = selectedFormat.type === 'audio';
    const filename = `${currentMedia.title.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '_')}_${selectedFormat.resolution}.${selectedFormat.extension}`;
    
    // Create simple media placeholder blob
    const sampleContent = `VideosDropper Ephemeral Stream Dump\nFormat: ${selectedFormat.qualityLabel}\nBitrate: ${selectedFormat.bitrate}\nCodec: ${selectedFormat.codec}\nRetrieved: ${new Date().toISOString()}`;
    const blob = new Blob([sampleContent], { type: isAudio ? 'audio/mpeg' : 'video/mp4' });
    const blobUrl = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div className="w-full max-w-xl md:max-w-4xl mx-auto px-4 py-5 space-y-7 animate-in fade-in duration-300">
      {/* Hero Badge & Headline */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B2B] border border-[#2D3352] text-[#c0c1ff] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#8083ff]" />
          <span className="text-[11px] font-bold tracking-wider uppercase">
            ⚡ LIGHTNING FAST PARSER • ZERO LOGS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
          Download{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#38BDF8] to-[#10B981]">
            Video & Audio
          </span>{' '}
          Streams
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
          Direct stream pass-through for Instagram Reels, TikTok, YouTube 4K, and X clips. Pure original fidelity, no accounts, and zero watermarks.
        </p>
      </div>

      {/* Pill URL Input Field (Matching Obsidian Stream Specifications) */}
      <div className="space-y-3">
        <div className="relative flex items-center h-14 rounded-full bg-[#131722]/90 border border-[#222738] focus-within:border-[#6366F1] focus-within:shadow-[0_0_24px_-4px_rgba(99,102,241,0.35)] transition-all px-2 shadow-xl">
          <div className="pl-3 pr-2 text-slate-400 shrink-0">
            <LinkIcon className="w-5 h-5 text-indigo-400" />
          </div>

          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleParse();
            }}
            placeholder="Paste video link from Instagram, TikTok, YouTube, X..."
            className="w-full bg-transparent text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none pr-2 font-medium"
          />

          <div className="flex items-center gap-1.5 shrink-0 pr-1">
            <button
              onClick={handlePaste}
              className="h-9 px-3 rounded-full bg-[#6366F1]/15 hover:bg-[#6366F1]/25 border border-[#6366F1]/30 text-[#818cf8] text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all active:scale-95"
              title="Paste from clipboard"
            >
              {pasteNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 hidden xs:inline">PASTED</span>
                </>
              ) : (
                <>
                  <Clipboard className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">PASTE</span>
                </>
              )}
            </button>

            <button
              onClick={() => handleParse()}
              disabled={isParsing}
              className="h-9 px-4 sm:px-5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:opacity-95 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#6366F1]/25 flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-60"
            >
              {isParsing ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              )}
              <span>{isParsing ? 'Parsing...' : 'Fetch'}</span>
            </button>
          </div>
        </div>

        {/* Platform Chips (Filter & Quick Sniffing) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
          {platformChips.map((chip) => {
            const isActive = selectedPlatform === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => {
                  setSelectedPlatform(chip.id);
                  const found = SAMPLE_MEDIA_LIST.find(m => chip.id === 'all' || m.platform === chip.id);
                  if (found) handleParse(found);
                }}
                className={`h-9 px-3.5 rounded-full flex items-center gap-1.5 font-medium whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? 'bg-[#181D2C] text-white border-[#6366F1] shadow-[0_0_12px_-2px_rgba(99,102,241,0.3)]'
                    : 'bg-[#131722]/70 text-slate-400 border-[#222738] hover:text-white hover:border-slate-600'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: chip.dotColor }}
                />
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>

        {/* Quick Sample Presets */}
        <div className="flex items-center flex-wrap gap-1.5 text-xs text-slate-400 pt-0.5">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Try Demo:
          </span>
          <button
            onClick={() => handleParse(SAMPLE_MEDIA_LIST[0])}
            className="px-2.5 py-1 rounded-md bg-[#161A26] hover:bg-[#202638] text-slate-300 text-[11px] border border-[#272E44] transition-colors"
          >
            📸 Instagram Reel
          </button>
          <button
            onClick={() => handleParse(SAMPLE_MEDIA_LIST[1])}
            className="px-2.5 py-1 rounded-md bg-[#161A26] hover:bg-[#202638] text-slate-300 text-[11px] border border-[#272E44] transition-colors"
          >
            🎵 TikTok 1080p
          </button>
          <button
            onClick={() => handleParse(SAMPLE_MEDIA_LIST[2])}
            className="px-2.5 py-1 rounded-md bg-[#161A26] hover:bg-[#202638] text-slate-300 text-[11px] border border-[#272E44] transition-colors"
          >
            📺 YouTube 4K
          </button>
        </div>
      </div>

      {/* Glassmorphic Media Preview Card (Matching Obsidian Stream Specifications) */}
      {currentMedia && (
        <div className="rounded-2xl p-4 sm:p-5 bg-[#131722]/85 backdrop-blur-xl border border-[#222738] shadow-2xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* 16:9 Thumbnail Preview */}
            <div className="relative md:col-span-5 aspect-video rounded-xl overflow-hidden bg-[#0A0C14] border border-[#2A3048] group">
              <img
                src={currentMedia.thumbnail}
                alt={currentMedia.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating badges on thumbnail */}
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                {currentMedia.platform}
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md text-[11px] font-mono font-bold text-white">
                {currentMedia.duration}
              </div>
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#6366F1]/90 text-[10px] font-bold text-white uppercase tracking-wide">
                {selectedFormat.resolution}
              </div>

              {/* Play symbol overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Author Block & Meta */}
            <div className="md:col-span-7 space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <img
                    src={currentMedia.authorAvatar}
                    alt={currentMedia.author}
                    className="w-6 h-6 rounded-full object-cover border border-slate-600"
                  />
                  <span className="text-xs font-semibold text-slate-300">
                    {currentMedia.author}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {currentMedia.authorHandle}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight line-clamp-2">
                  {currentMedia.title}
                </h3>
              </div>

              {/* Telemetry pill row */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 font-mono">
                <span className="px-2 py-0.5 rounded bg-[#1B2030] border border-[#272F47]">
                  {currentMedia.dimensions}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1B2030] border border-[#272F47]">
                  Bitrate: {selectedFormat.bitrate}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#1B2030] border border-[#272F47]">
                  {selectedFormat.codec}
                </span>
              </div>
            </div>
          </div>

          {/* Resolution & Format Selection Chips (Pills Segmented Control) */}
          <div className="space-y-2 pt-2 border-t border-[#1F2538]">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-300">
                Choose Format & Stream Tier
              </span>
              <span className="text-[11px] text-cyan-400 font-mono">
                Direct Pass-Through
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentMedia.formats.map((fmt) => {
                const isSelected = selectedFormat.id === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => {
                      setSelectedFormat(fmt);
                      setDownloadSuccess(false);
                    }}
                    className={`p-2.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-[#6366F1]/20 border-[#6366F1] shadow-[0_0_16px_-4px_rgba(99,102,241,0.4)] ring-1 ring-[#6366F1]'
                        : 'bg-[#181D2A] border-[#252C3E] hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                        fmt.type === 'audio' ? 'bg-purple-950 text-purple-400' : 'bg-indigo-950 text-indigo-400'
                      }`}>
                        {fmt.type === 'audio' ? <Volume2 className="w-3.5 h-3.5" /> : <Film className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{fmt.qualityLabel}</span>
                          {fmt.isPopular && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold uppercase">
                              BEST
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {fmt.extension.toUpperCase()} • {fmt.bitrate}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-200 font-mono">
                        {fmt.fileSize}
                      </div>
                      {isSelected && (
                        <div className="text-[10px] text-cyan-400 flex items-center justify-end gap-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* High-Impact Download CTA Button (Matching Obsidian Stream Specifications) */}
          <div className="pt-2">
            {downloadSuccess ? (
              <div className="p-4 rounded-full bg-[#10B981] text-black flex items-center justify-between px-6 shadow-[0_8px_32px_-6px_rgba(16,185,129,0.5)] animate-in zoom-in-95">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider">
                      STREAM CAPTURED & SAVED
                    </div>
                    <div className="text-[11px] font-medium opacity-90">
                      File dispatched to your local device download storage
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setDownloadSuccess(false)}
                  className="px-3 py-1 rounded-full bg-black/20 hover:bg-black/30 text-xs font-bold transition-colors"
                >
                  Fetch Again
                </button>
              </div>
            ) : (
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="relative overflow-hidden w-full h-14 rounded-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] hover:opacity-95 text-white font-extrabold text-sm tracking-wide shadow-[0_8px_30px_rgba(99,102,241,0.35)] flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-85"
              >
                {/* Progress bar fill during downloading */}
                {isDownloading && (
                  <div
                    className="absolute inset-0 bg-[#10B981] transition-all duration-300 ease-out z-0"
                    style={{ width: `${downloadProgress}%` }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  {isDownloading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>
                        Extracting Stream ({downloadProgress}%) — {selectedFormat.resolution}
                      </span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 stroke-[2.5]" />
                      <span>
                        Download {selectedFormat.resolution} ({selectedFormat.fileSize})
                      </span>
                    </>
                  )}
                </div>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Trust & Architecture highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div>
            <div className="font-bold text-white">Zero Watermarks</div>
            <div className="text-[11px] text-slate-400">Pure clean original stream</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
            <HardDrive className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white">Direct Save Native</div>
            <div className="text-[11px] text-slate-400">iOS Files & Android folder</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white">Ephemeral Buffer</div>
            <div className="text-[11px] text-slate-400">No logs or disk caching</div>
          </div>
        </div>
      </div>
    </div>
  );
};
