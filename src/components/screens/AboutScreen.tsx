import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  EyeOff, 
  Cpu, 
  MonitorCheck, 
  Smartphone, 
  Activity, 
  ShieldAlert, 
  PenTool, 
  ArrowRight,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';
import { TabType } from '../../types';

interface AboutScreenProps {
  setActiveTab: (tab: TabType) => void;
  onOpenContactWithReason?: (reason: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ 
  setActiveTab,
  onOpenContactWithReason 
}) => {
  // Live fluctuating simulated throughput
  const [throughput, setThroughput] = useState<number>(1.84);
  const [nodesParsed, setNodesParsed] = useState<number>(120.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput(prev => {
        const delta = (Math.random() - 0.48) * 0.08;
        return Number(Math.max(1.65, Math.min(2.15, prev + delta)).toFixed(2));
      });
      setNodesParsed(prev => Number((prev + 0.01).toFixed(2)));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl md:max-w-3xl mx-auto px-4 py-5 space-y-8 animate-in fade-in duration-300">
      {/* Header Pill & Title */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18192A] border border-[#313257] text-[#c0c1ff] shadow-sm">
          <Zap className="w-3.5 h-3.5 text-[#8083ff]" />
          <span className="text-[11px] font-bold tracking-wider uppercase">
            OUR MISSION & TECH
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
          Fast, Open & Frictionless{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c1ff] via-[#a5a7fc] to-[#8083ff]">
            Media Retrieval
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          VideosDropper was built to liberate public content from proprietary silos, making video and audio archiving seamless for creators, archivists, and educators across the globe.
        </p>
      </div>

      {/* Featured Server Operations Card (Matching Image 7.png) */}
      <div className="relative rounded-2xl overflow-hidden border border-[#282a38] shadow-2xl bg-[#0d0f15] group">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0A0C14]">
          {/* Cyber Server Room / Command Operations Graphic */}
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="VideosDropper Operations Center"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Glowing futuristic lines & overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/40" />
          
          {/* Simulated HUD elements on monitor */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
            <div className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-cyan-500/30 text-cyan-300 font-mono text-[11px] flex items-center gap-1.5 shadow-lg">
              <Server className="w-3 h-3 text-cyan-400" />
              <span>CLUSTER://GLOBAL_EDGE_STREAM</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-black/60 border border-slate-700/60 text-slate-400 font-mono text-[10px]">
              SECURE PROXY
            </div>
          </div>

          {/* Central graphic overlay simulating the workstation monitor from the screenshot */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-sm rounded-xl p-3 bg-black/75 backdrop-blur-md border border-indigo-500/30 text-center space-y-1.5 shadow-2xl">
              <div className="text-[10px] uppercase font-bold tracking-widest text-indigo-300">
                About Us
              </div>
              <div className="text-sm font-bold text-white tracking-wide flex items-center justify-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                VIDEOSDROPPER CORE ENGINE
              </div>
              <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-mono pt-0.5">
                <span>0 Logs Stored</span>
                <span>•</span>
                <span>Volatile RAM Pipeline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar inside card: Nodes Fully Operational & Engine version */}
        <div className="px-4 py-3 bg-[#11131a] border-t border-[#222533] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
            <span className="font-semibold text-slate-200">
              Nodes Fully Operational
            </span>
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            v3.4.0 Engine
          </div>
        </div>
      </div>

      {/* Philosophy & Core Values Section */}
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
            PHILOSOPHY
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Core Values & Principles
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 gap-3">
          {/* Card 1: Zero Tracking */}
          <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] flex items-start gap-3.5 hover:border-[#6366F1]/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1B1D28] border border-[#2D3042] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
              <EyeOff className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[15px] font-bold text-white tracking-tight">
                No Account, Zero Tracking
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                We never store credentials, history, or cookies. Your queries execute ephemerally in isolated memory spaces and wipe cleanly upon stream termination.
              </p>
            </div>
          </div>

          {/* Card 2: Edge Server Transcoding */}
          <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] flex items-start gap-3.5 hover:border-[#6366F1]/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1B1D28] border border-[#2D3042] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[15px] font-bold text-white tracking-tight">
                Edge Server Transcoding
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                High-speed distributed cloud nodes parse reels, shorts, and video streams at sub-second latency before pushing pure packet streams directly to your client.
              </p>
            </div>
          </div>

          {/* Card 3: Original Quality Fidelity */}
          <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] flex items-start gap-3.5 hover:border-[#6366F1]/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1B1D28] border border-[#2D3042] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
              <MonitorCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[15px] font-bold text-white tracking-tight">
                Original Quality Fidelity
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                Direct stream pass-through supporting uncompressed 1080p, 4K, 320kbps spatial audio, and unaltered metadata extraction with zero downsampling.
              </p>
            </div>
          </div>

          {/* Card 4: Universal Compatibility */}
          <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] flex items-start gap-3.5 hover:border-[#6366F1]/50 transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#1B1D28] border border-[#2D3042] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
              <Smartphone className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="space-y-1">
              <h3 className="text-[15px] font-bold text-white tracking-tight">
                Universal Compatibility
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                Works natively on mobile Safari, Chrome, iOS Files direct-save, Android Downloads folder, and desktop browsers without third-party extensions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* METRICS - Live Architecture Pulse (Matching Image 7.png) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              METRICS
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Live Architecture Pulse
            </h2>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#1B2421] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Activity className="w-4 h-4" />
          </div>
        </div>

        {/* Metrics Box */}
        <div className="rounded-2xl bg-[#13151D] border border-[#232635] p-5 space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-[#232635]">
            <div className="px-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight tnum">
                {nodesParsed.toFixed(0)}M+
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                Parsed / mo
              </div>
            </div>
            <div className="px-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-display tracking-tight tnum">
                99.9%
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                Node Uptime
              </div>
            </div>
            <div className="px-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#4cd7f6] font-display tracking-tight tnum">
                0
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                Logs Stored
              </div>
            </div>
          </div>

          {/* Global Transcoding Throughput Progress Bar */}
          <div className="pt-2 border-t border-[#1E212D] space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-300">Global Transcoding Throughput</span>
              <span className="text-[#10B981] font-mono font-bold tracking-tight">
                {throughput} Gbps
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1B1E29] overflow-hidden p-[1px]">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#8083ff] via-[#4cd7f6] to-[#10B981] transition-all duration-700 ease-out"
                style={{ width: `${Math.min(95, (throughput / 2.5) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Developer & Ethics Statement (Matching Image 7.png) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-white">
          <PenTool className="w-4 h-4 text-cyan-400" />
          <h2 className="text-lg font-bold tracking-tight">
            Developer & Ethics Statement
          </h2>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
          VideosDropper operates solely as a non-commercial computational proxy pipeline. We firmly champion the right to personal, non-commercial fair-use archiving, cultural curation, educational research, and offline access to publicly hosted media.
        </p>

        {/* Disclaimer Callout Box */}
        <div className="p-3.5 rounded-xl bg-[#141722]/90 border border-[#232838] flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
            Users are strictly responsible for abiding by their local copyright statutes and the terms of host content creators. VideosDropper does not index, host, or reproduce non-public or DRM-encrypted materials.
          </p>
        </div>
      </div>

      {/* Have a Feature Idea? Banner (Matching Image 7.png) */}
      <div className="relative rounded-2xl overflow-hidden border border-[#2A2B3D] bg-[#121420] p-5 sm:p-6 shadow-xl">
        {/* Subtle background tech matrix */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8083ff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
              Have a Feature Idea?
              <Sparkles className="w-4 h-4 text-[#c0c1ff]" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Our core protocol is community refined.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenContactWithReason) {
                onOpenContactWithReason('Feature Request');
              } else {
                setActiveTab('contact');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#c0c1ff] hover:bg-[#b0b2ff] text-[#1000a9] text-xs sm:text-sm font-bold shadow-md shadow-[#c0c1ff]/20 transition-all active:scale-95 shrink-0 self-start sm:self-auto"
          >
            Reach Out <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
