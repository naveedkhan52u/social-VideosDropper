import React from 'react';
import { ArrowDown, ShieldCheck, Zap, Server, ExternalLink, Activity } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onOpenStatus: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenStatus }) => {
  return (
    <footer className="w-full bg-[#08090C] border-t border-[#1C202C] text-slate-400 mt-16 pb-24 md:pb-12 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        {/* Responsive Desktop Grid (Tablet & PC) */}
        <div className="hidden md:grid grid-cols-4 gap-8 pb-10 border-b border-[#1A1F2C]">
          {/* Col 1: Brand & Status */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-950/70 border border-indigo-700/50 flex items-center justify-center text-cyan-400">
                <ArrowDown className="w-4 h-4" />
              </div>
              <span className="font-bold text-white font-display text-base">VideosDropper</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open-source, ephemeral computational proxy pipeline for direct media stream ingestion and zero-trace transcode.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Cluster Operational (18ms)
              </span>
            </div>
          </div>

          {/* Col 2: Supported Networks */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Supported Feeds
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> Instagram Reels & Stories
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> TikTok HD (Watermark Free)
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> YouTube Shorts & 4K 60FPS
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> X (Twitter) Direct Streams
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" /> 320kbps Spatial MP3 Audio
              </li>
            </ul>
          </div>

          {/* Col 3: Ephemeral Architecture */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Privacy Engine
            </div>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-indigo-400" /> Volatile RAM-only processing
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero IP logging or browser canvas
              </li>
              <li className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-cyan-400" /> Stream shredding upon socket close
              </li>
              <li className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-purple-400" /> Distributed edge transcode nodes
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation Links */}
          <div className="space-y-2 text-xs">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Universal Downloader
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Our Mission & Tech (About)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Strict No-Log Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Contact & Bug Reports
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStatus}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  System Gateway Status <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile & Bottom Centered Quick Links (Matching the screenshot footers) */}
        <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium text-slate-300">
            <button
              onClick={() => { setActiveTab('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => { setActiveTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-indigo-400 transition-colors"
            >
              Contact Developer
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-indigo-400 transition-colors"
            >
              Downloader
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-indigo-400 transition-colors"
            >
              About Us
            </button>
          </div>

          <div className="space-y-1">
            <p className="text-[11px] text-slate-400">
              © 2025 VideosDropper Project. Open, ephemeral utility.
            </p>
            <p className="text-[10px] tracking-wider text-slate-400 font-mono uppercase">
              VIDEOSDROPPER STREAM TRANSCODE ARCHITECTURE • NODE LATENCY: 18MS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
