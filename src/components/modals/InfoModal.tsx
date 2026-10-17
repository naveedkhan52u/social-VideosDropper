import React from 'react';
import { X, Smartphone, Globe, Download, ShieldCheck, Check } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl bg-[#11131A] border border-[#232635] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-[#1F2230] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Quick Ingestion Guide
              </h3>
              <p className="text-[11px] text-slate-400">
                1-tap direct saving on iOS, Android & Desktop
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#1A1D27] hover:bg-[#252938] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 text-xs text-slate-300 no-scrollbar">
          <div className="p-3.5 rounded-xl bg-[#151824] border border-[#23293D] space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5 text-sm">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span>iOS & iPhone Safari Users</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Tap the download button. When Safari presents the prompt, choose <span className="text-white font-semibold">Download</span>. The file will be available in your <span className="text-white font-semibold">Files app &gt; Downloads</span> folder, or tap the blue arrow in Safari to save to Photos.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#151824] border border-[#23293D] space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5 text-sm">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Android & Chrome Users</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Files download directly into your device's native <span className="text-white font-semibold">Downloads</span> folder and will immediately register in Google Photos or your default Gallery app.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#151824] border border-[#23293D] space-y-1.5">
            <div className="font-bold text-white flex items-center gap-1.5 text-sm">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>PC / Mac Desktops</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Streams download via standard browser download queue at maximum unthrottled gigabit speeds.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#12241F] border border-[#1b433b] text-emerald-300 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero cookies stored. Pure anonymous transcode pipeline.</span>
          </div>
        </div>

        <div className="p-4 border-t border-[#1F2230] bg-[#0E1017] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#c0c1ff] hover:bg-[#b0b2ff] text-[#1000a9] text-xs font-bold transition-all"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
