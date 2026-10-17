import React, { useState, useEffect } from 'react';
import { 
  Bug, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  Send, 
  ChevronRight, 
  ExternalLink, 
  AtSign, 
  Link as LinkIcon, 
  Clipboard, 
  Lightbulb, 
  CheckCircle2, 
  Share2,
  Check
} from 'lucide-react';

interface ContactScreenProps {
  initialReason?: string;
  onOpenStatusModal: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ 
  initialReason, 
  onOpenStatusModal 
}) => {
  const [selectedReason, setSelectedReason] = useState<string>('Report Broken Link');
  const [email, setEmail] = useState<string>('');
  const [mediaUrl, setMediaUrl] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [pasteSuccess, setPasteSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialReason) {
      setSelectedReason(initialReason);
    }
  }, [initialReason]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setMediaUrl(text);
        setPasteSuccess(true);
        setTimeout(() => setPasteSuccess(false), 2000);
      }
    } catch {
      // Fallback paste sample
      setMediaUrl('https://instagram.com/reel/sample-extract-id');
      setPasteSuccess(true);
      setTimeout(() => setPasteSuccess(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setErrorMsg('Please enter your email and message before sending.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1200);
  };

  const reasons = [
    { id: 'Report Broken Link', label: 'Report Broken Link', icon: Bug },
    { id: 'Feature Request', label: 'Feature Request', icon: Sparkles },
    { id: 'API & Partnerships', label: 'API & Partnerships', icon: Layers },
    { id: 'General Feedback', label: 'General Feedback', icon: MessageSquare }
  ];

  return (
    <div className="w-full max-w-xl md:max-w-3xl mx-auto px-4 py-5 space-y-6 animate-in fade-in duration-300">
      {/* Header Pill & Title (Matching Image 3.png) */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12241F] border border-[#1b433b] text-[#4edea3] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase">
            WE ARE HERE TO HELP
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
          Get in Touch
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          Have feedback, found a broken link extractor, or need API / platform partnership? Send our engineering team a message.
        </p>
      </div>

      {/* 3 Quick Action Contact Cards (Matching Image 3.png) */}
      <div className="space-y-2.5">
        {/* Support & Bug Reports */}
        <div 
          onClick={() => {
            setSelectedReason('Report Broken Link');
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center justify-between gap-3 hover:border-[#6366F1]/50 cursor-pointer transition-all group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#1B1D28] border border-[#282C3F] flex items-center justify-center text-slate-300 group-hover:text-indigo-400 shrink-0">
              <Bug className="w-5 h-5 text-indigo-300" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-tight">
                  Support & Bug Reports
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#12241F] border border-[#1b433b] text-[#4edea3] text-[10px] font-bold">
                  &lt; 4h
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                support@videosdropper.com
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* API & Partnerships */}
        <div 
          onClick={() => {
            setSelectedReason('API & Partnerships');
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center justify-between gap-3 hover:border-[#06B6D4]/50 cursor-pointer transition-all group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#152328] border border-[#1c333a] flex items-center justify-center text-cyan-400 shrink-0">
              <Layers className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white tracking-tight">
                API & Partnerships
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                api@videosdropper.com
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

        {/* Social & Community */}
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="p-3.5 rounded-xl bg-[#13151D] border border-[#232635] flex items-center justify-between gap-3 hover:border-emerald-500/50 cursor-pointer transition-all group"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#182622] border border-[#203a32] flex items-center justify-center text-emerald-400 shrink-0">
              <Share2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white tracking-tight">
                Social & Community
              </div>
              <div className="text-xs text-slate-400 mt-0.5 truncate">
                @VideosDropperDev on X / GitHub
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
        </a>
      </div>

      {/* Send Message Card (Matching Image 3.png) */}
      <div id="contact-form" className="rounded-2xl bg-[#13151D] border border-[#232635] p-5 sm:p-6 space-y-5 shadow-xl">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-300" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              Send Message
            </h2>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold px-2 py-0.5 rounded bg-[#1B1D28] border border-[#282C3F]">
            FAST ROUTE
          </div>
        </div>

        {isSent ? (
          <div className="p-6 rounded-xl bg-[#12241F] border border-[#1b433b] text-center space-y-3 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Message Transmitted Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              Our engineering triage team has received your inquiry for <span className="font-semibold text-emerald-400 font-mono">[{selectedReason}]</span>. We respond within 4 hours.
            </p>
            <button
              onClick={() => {
                setIsSent(false);
                setMessage('');
                setMediaUrl('');
              }}
              className="mt-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Reason for Contact Pills (Matching Image 3.png) */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                Reason for Contact
              </label>
              <div className="flex flex-wrap gap-2">
                {reasons.map((r) => {
                  const Icon = r.icon;
                  const isSelected = selectedReason === r.id;
                  return (
                    <button
                      type="button"
                      key={r.id}
                      onClick={() => setSelectedReason(r.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/30 ring-1 ring-white/20'
                          : 'bg-[#1B1D28] border border-[#282C3F] text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{r.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Your Email <span className="text-indigo-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <AtSign className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1D27] border border-[#282C3F] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                  required
                />
              </div>
            </div>

            {/* Media URL (Optional) with PASTE button inside */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-300">
                  Media URL
                </label>
                <span className="text-[11px] text-slate-500 font-mono">
                  Optional
                </span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <LinkIcon className="w-4 h-4" />
                </div>
                <input
                  type="url"
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                  placeholder="e.g. https://instagram.com/reel/..."
                  className="w-full pl-10 pr-24 py-3 rounded-xl bg-[#1A1D27] border border-[#282C3F] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute inset-y-1.5 right-1.5 px-3 rounded-lg bg-[#252838] hover:bg-[#32364B] text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1 border border-[#3A3F55] transition-all active:scale-95"
                >
                  {pasteSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">PASTED</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3.5 h-3.5 text-indigo-400" />
                      <span>PASTE</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Message <span className="text-indigo-400">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe the issue, include video details, or propose your idea..."
                rows={4}
                className="w-full p-3.5 rounded-xl bg-[#1A1D27] border border-[#282C3F] text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#6366F1] focus:ring-1 focus:ring-[#6366F1] transition-all resize-none"
                required
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>
            )}

            {/* Large Pill Send Message Button (Matching Image 3.png) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-full bg-[#c0c1ff] hover:bg-[#a9abfc] text-[#1000a9] text-sm font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#c0c1ff]/20 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-indigo-900 border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-current stroke-[1.5]" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Quick Tip Callout (Matching Image 3.png) */}
      <div className="p-4 rounded-xl bg-[#121B24] border border-[#1b3140] flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#162734] border border-[#1e4259] flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
          <Lightbulb className="w-4 h-4 text-cyan-400" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Quick Tip
          </h4>
          <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
            Before messaging about slow downloads, please check our{' '}
            <button
              type="button"
              onClick={onOpenStatusModal}
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 font-medium inline transition-colors"
            >
              Supported Sites Status
            </button>{' '}
            for platform-specific rate limits and active maintenance periods.
          </p>
        </div>
      </div>
    </div>
  );
};
