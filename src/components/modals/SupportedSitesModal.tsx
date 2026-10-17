import React from 'react';
import { X, Activity, CheckCircle, Clock, Zap, ShieldCheck } from 'lucide-react';
import { SUPPORTED_PLATFORMS } from '../../data/mockData';

interface SupportedSitesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportedSitesModal: React.FC<SupportedSitesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-2xl bg-[#11131A] border border-[#232635] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#1F2230] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Supported Sites & Network Status
              </h3>
              <p className="text-[11px] text-slate-400">
                Live gateway pulse across edge transcoding nodes
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

        {/* Status List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 no-scrollbar">
          <div className="p-3 rounded-xl bg-[#161F1E] border border-emerald-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All 7 Ingestion Gateways Operational
            </div>
            <span className="font-mono text-slate-400">Avg Latency: 21ms</span>
          </div>

          <div className="space-y-2">
            {SUPPORTED_PLATFORMS.map((site) => (
              <div
                key={site.id}
                className="p-3 rounded-xl bg-[#151722] border border-[#222536] flex items-center justify-between text-xs hover:border-[#6366F1]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: site.iconColor }}
                  />
                  <div>
                    <div className="font-bold text-white text-sm">
                      {site.name}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {site.category}
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-0.5">
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                      Operational
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {site.maxQuality} • {site.latency}ms
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] text-[11px] text-slate-400 leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              All transcode requests execute stateless proxies with automated IP rotation to prevent platform rate limiting and protect client anonymity.
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#1F2230] bg-[#0E1017] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#6366F1] hover:bg-[#5254E0] text-white text-xs font-bold transition-all shadow-md"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
