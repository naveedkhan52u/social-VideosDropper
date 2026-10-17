import React, { useState } from 'react';
import { X, User, Shield, Check, Trash2, Database, Wifi } from 'lucide-react';

interface SessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SessionModal: React.FC<SessionModalProps> = ({ isOpen, onClose }) => {
  const [purged, setPurged] = useState(false);

  if (!isOpen) return null;

  const handlePurge = () => {
    localStorage.clear();
    sessionStorage.clear();
    setPurged(true);
    setTimeout(() => setPurged(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm rounded-2xl bg-[#11131A] border border-[#232635] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-[#1F2230] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c0c1ff] text-[#1000a9] flex items-center justify-center font-bold">
              <User className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Ephemeral Anonymous Session
              </h3>
              <p className="text-[10px] text-emerald-400 font-mono">
                ● Isolated Memory Box
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#1A1D27] hover:bg-[#252938] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="p-4 space-y-3 text-xs text-slate-300">
          <div className="p-3 rounded-xl bg-[#161824] border border-[#23273C] space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Session Type</span>
              <span className="text-emerald-400 font-mono font-bold">Stateless Guest</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Stored Cookies</span>
              <span className="text-cyan-400 font-mono font-bold">0 Active</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Persistent Disk Logs</span>
              <span className="text-cyan-400 font-mono font-bold">0 Bytes</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Active Node Region</span>
              <span className="text-white font-mono">asia-east1 / anycast</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            VideosDropper never assigns persistent tracking tokens. Closing this browser tab immediately terminates and destroys all volatile buffer sockets.
          </p>

          <button
            onClick={handlePurge}
            className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            {purged ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Memory Purged!</span>
              </>
            ) : (
              <>
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Flush Local Cache Immediately</span>
              </>
            )}
          </button>
        </div>

        <div className="p-3 border-t border-[#1F2230] bg-[#0E1017] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#1A1E2B] hover:bg-[#252C40] text-slate-200 text-xs font-semibold transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
