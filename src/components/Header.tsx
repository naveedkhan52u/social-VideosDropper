import React from 'react';
import { ArrowDown, Info, User, Monitor, Smartphone, Activity } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenInfo: () => void;
  onOpenSession: () => void;
  onOpenStatus: () => void;
  isMobileFrame: boolean;
  setIsMobileFrame: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenInfo,
  onOpenSession,
  onOpenStatus,
  isMobileFrame,
  setIsMobileFrame,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0A0C10]/90 border-b border-[#222738]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Brand Identity */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] flex items-center justify-center text-[#38BDF8] group-hover:border-[#6366F1] group-hover:text-[#818CF8] transition-colors shadow-sm">
            <ArrowDown className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[17px] font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors font-display">
              VideosDropper
            </span>
            <span className="text-[11px] font-medium text-slate-400 tracking-wider">
              Downloader
            </span>
          </div>
        </div>

        {/* Center / Desktop Navigation Bar (Visible on tablet & PC) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#131722]/80 border border-[#222738] p-1 rounded-full shadow-inner">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'home'
                ? 'bg-[#6366F1] text-white shadow-sm shadow-[#6366F1]/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Downloader
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'about'
                ? 'bg-[#6366F1] text-white shadow-sm shadow-[#6366F1]/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#6366F1] text-white shadow-sm shadow-[#6366F1]/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'contact'
                ? 'bg-[#6366F1] text-white shadow-sm shadow-[#6366F1]/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Get in Touch
          </button>
        </nav>

        {/* Center Badge (Matching the screenshots: 100% FREE • NO SIGN UP) */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#052e16]/60 border border-[#10B981]/40 text-[#34D399] shadow-sm select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase whitespace-nowrap">
              100% FREE • NO SIGN UP
            </span>
          </div>

          {/* Quick Node Status indicator for Tablet/PC */}
          <button
            onClick={onOpenStatus}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#131722] border border-[#222738] text-slate-300 hover:border-slate-500 text-xs transition-colors"
            title="View Live Platform Gateways Status"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] font-medium text-slate-400">Nodes 99.9%</span>
          </button>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Frame Toggle for Desktop test view (Responsive PC vs Handheld phone mode) */}
          <button
            onClick={() => setIsMobileFrame(!isMobileFrame)}
            className="hidden sm:flex items-center justify-center p-2 rounded-full text-slate-400 hover:text-white hover:bg-[#1A2030] border border-transparent hover:border-[#222738] transition-all"
            title={isMobileFrame ? "Switch to Full PC Layout" : "Switch to Handheld Phone Frame"}
          >
            {isMobileFrame ? (
              <Monitor className="w-4 h-4 text-cyan-400" />
            ) : (
              <Smartphone className="w-4 h-4 text-slate-300" />
            )}
          </button>

          {/* Info Button matching screenshot */}
          <button
            onClick={onOpenInfo}
            aria-label="Application Information"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1A2030] transition-colors"
          >
            <Info className="w-5 h-5 text-slate-300" />
          </button>

          {/* User Profile Avatar matching screenshot (indigo/purple circle) */}
          <button
            onClick={onOpenSession}
            aria-label="User Ephemeral Sandbox"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c0c1ff] hover:bg-[#a5a7fc] text-[#1000a9] flex items-center justify-center transition-transform active:scale-95 shadow-md shadow-[#c0c1ff]/20"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
