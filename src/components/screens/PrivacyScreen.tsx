import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Trash2, 
  Server, 
  UserX, 
  HardDriveDownload, 
  ChevronDown, 
  Shield, 
  MessageSquare, 
  Clock, 
  Copy, 
  Check,
  CheckCircle2
} from 'lucide-react';

export const PrivacyScreen: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0); // First accordion open by default

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('privacy@videosdropper.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const accordionData = [
    {
      num: '01',
      title: 'Information We Do NOT Collect',
      content: `VideosDropper has zero accounts, registration forms, or tracking databases. We do NOT collect:
• IP addresses (never logged to persistent storage; socket connections are terminated after chunk transfer)
• Browser user-agents, device fingerprints, or screen resolutions
• Search queries, video URLs history, or platform activity logs
• Geo-location telemetry or ISP routing records`
    },
    {
      num: '02',
      title: 'Ephemeral Processing Protocol',
      content: `All media packet proxies operate in strict Linux ramfs (volatile RAM). Video chunk buffers are allocated dynamically for the duration of the stream. The moment your client finishes downloading or disconnects, the memory address space is immediately zeroed out via kernel-level garbage collection.`
    },
    {
      num: '03',
      title: 'Third-Party Platforms',
      content: `VideosDropper acts purely as a stateless client gateway to public media sources (e.g., Instagram, TikTok, YouTube). When parsing video streams, requests emulate modern standards-compliant HTTP range queries. We do not transmit cookies or session IDs to host servers.`
    },
    {
      num: '04',
      title: 'Data Security & Encryption',
      content: `All data in transit is encrypted using TLS 1.3 with modern AEAD ciphers (ChaCha20-Poly1305 / AES-256-GCM). Man-in-the-middle inspection is prevented via HTTP Strict Transport Security (HSTS). Direct stream endpoints cannot be intercepted by intermediate routers.`
    },
    {
      num: '05',
      title: 'Cookies & Local Storage',
      content: `VideosDropper sets zero tracking cookies, advertising identifiers, or analytic pixels. We do not use third-party marketing beacons (e.g. Google Analytics or Meta Pixel). Local storage is utilized solely for your optional client-side UI preference (such as dark mode or default quality choice) stored exclusively on your own browser.`
    }
  ];

  return (
    <div className="w-full max-w-xl md:max-w-3xl mx-auto px-4 py-5 space-y-8 animate-in fade-in duration-300">
      {/* Header Pill & Title (Matching Image 5.png) */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142323] border border-[#1b433b] text-[#4edea3] shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
          <span className="text-[11px] font-bold tracking-wider uppercase">
            UPDATED OCT 2025 • STRICT NO-LOG POLICY
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
          Privacy Policy
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          Your privacy is our baseline. VideosDropper is engineered with a trustless architecture so we cannot track, profile, or sell your personal activity.
        </p>
      </div>

      {/* 3 Highlight Chips (Matching Image 5.png) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {/* Chip 1 */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#13151D] border border-[#232635] flex flex-col items-center text-center space-y-1">
          <div className="w-8 h-8 rounded-lg bg-[#1B2230] text-cyan-400 flex items-center justify-center">
            <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xs sm:text-sm font-bold text-white pt-1">
            RAM-Only
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">
            Ephemeral cache
          </div>
        </div>

        {/* Chip 2 */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#13151D] border border-[#232635] flex flex-col items-center text-center space-y-1">
          <div className="w-8 h-8 rounded-lg bg-[#1B2421] text-emerald-400 flex items-center justify-center">
            <Lock className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xs sm:text-sm font-bold text-white pt-1">
            TLS 1.3
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">
            Encrypted transit
          </div>
        </div>

        {/* Chip 3 */}
        <div className="p-3 sm:p-4 rounded-xl bg-[#13151D] border border-[#232635] flex flex-col items-center text-center space-y-1">
          <div className="w-8 h-8 rounded-lg bg-[#251B20] text-rose-400 flex items-center justify-center">
            <Trash2 className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-xs sm:text-sm font-bold text-white pt-1">
            Zero Logs
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-400">
            Instant flush
          </div>
        </div>
      </div>

      {/* Foundational Principles (Matching Image 5.png) */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            FOUNDATIONAL PRINCIPLES
          </div>
          <div className="px-2.5 py-0.5 rounded-full bg-[#12241F] border border-[#1b433b] text-[#4edea3] text-[10px] font-bold tracking-wider uppercase">
            Audited Workflow
          </div>
        </div>

        {/* Principle 1: Zero Server Logs */}
        <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] space-y-2 hover:border-[#6366F1]/40 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1A1E2B] border border-[#262C3E] flex items-center justify-center text-indigo-400">
                <Server className="w-4 h-4 text-indigo-300" />
              </div>
              <h3 className="text-[15px] font-bold text-white tracking-tight">
                Zero Server Logs
              </h3>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
          </div>
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal pl-12">
            Target URLs and incoming network requests are piped exclusively inside volatile memory (RAM). When your media download completes or terminates, buffer allocations are completely shredded.
          </p>
        </div>

        {/* Principle 2: No Personal Identification */}
        <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] space-y-2 hover:border-[#6366F1]/40 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#152328] border border-[#1d333b] flex items-center justify-center text-cyan-400">
              <UserX className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-[15px] font-bold text-white tracking-tight">
              No Personal Identification
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal pl-12">
            No tracking cookies, no browser canvas fingerprinting, and zero commercial telemetric SDKs. We do not correlate multiple media fetches to a singular user profile.
          </p>
        </div>

        {/* Principle 3: No Persistent Storage */}
        <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] space-y-2 hover:border-[#6366F1]/40 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#1B2421] border border-[#21382f] flex items-center justify-center text-emerald-400">
              <HardDriveDownload className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-[15px] font-bold text-white tracking-tight">
              No Persistent Storage
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal pl-12">
            VideosDropper is an on-demand tunnel, not a cloud archive. Video clips and sound files are streamed chunk-by-chunk straight to your device sandbox. We never host downloaded files.
          </p>
        </div>
      </div>

      {/* Detailed Framework & Legal Architecture (Matching Image 5.png) */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          DETAILED FRAMEWORK & LEGAL ARCHITECTURE
        </div>

        <div className="space-y-2">
          {accordionData.map((item, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div 
                key={item.num}
                className="rounded-xl border border-[#232635] bg-[#13151D] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#1B1D28] border border-[#2A2E3F] text-indigo-300 text-[11px] font-mono font-bold flex items-center justify-center">
                      {item.num}
                    </span>
                    <span className="text-[14px] font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-[13px] text-slate-300 leading-relaxed border-t border-[#1C1F2B] whitespace-pre-line bg-[#0E1017]/60">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Client Isolation Guarantee (Matching Image 5.png) */}
      <div className="p-4 rounded-xl bg-[#131E1B] border border-[#1d3d34] flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-[#162C25] border border-[#22483d] flex items-center justify-center text-[#4edea3] shrink-0">
          <Shield className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            Client Isolation Guarantee
          </h4>
          <p className="text-xs text-slate-300 mt-0.5">
            Every fetch runs in an isolated sandbox with zero cross-tenant contamination.
          </p>
        </div>
      </div>

      {/* Privacy Oversight (Matching Image 5.png) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-indigo-300" />
          <h2 className="text-lg font-bold text-white tracking-tight">
            Privacy Oversight
          </h2>
        </div>

        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
          Have specific security questions, audit requests, or need verification regarding ephemeral data handling? Our dedicated team responds within 24 hours.
        </p>

        {/* Direct Inbox Box with working COPY */}
        <div className="p-4 rounded-xl bg-[#13151D] border border-[#232635] flex items-center justify-between gap-3">
          <div className="space-y-0.5 min-w-0">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              DIRECT INBOX
            </div>
            <div className="font-mono text-sm sm:text-[15px] font-bold text-white truncate">
              privacy@videosdropper.com
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shrink-0 ${
              copied
                ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                : 'bg-[#6366F1] hover:bg-[#5254e0] text-white shadow-md shadow-[#6366F1]/30 active:scale-95'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>

        {/* Latency Note */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Standard review latency: &lt; 24 business hours</span>
        </div>
      </div>
    </div>
  );
};
