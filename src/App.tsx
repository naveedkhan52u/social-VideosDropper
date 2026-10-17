import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/screens/HomeScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { PrivacyScreen } from './components/screens/PrivacyScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { SupportedSitesModal } from './components/modals/SupportedSitesModal';
import { InfoModal } from './components/modals/InfoModal';
import { SessionModal } from './components/modals/SessionModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home'); // Default to home Downloader
  const [isMobileFrame, setIsMobileFrame] = useState<boolean>(false);
  const [contactInitialReason, setContactInitialReason] = useState<string>('Report Broken Link');

  // Modals state
  const [isStatusOpen, setIsStatusOpen] = useState<boolean>(false);
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [isSessionOpen, setIsSessionOpen] = useState<boolean>(false);

  // Dynamic SEO updating per tab/page
  useEffect(() => {
    const seoData: Record<TabType, { title: string; desc: string }> = {
      home: {
        title: 'VideosDropper – Free Video & Audio Downloader | No Watermark',
        desc: 'Download videos and MP3 audio from Instagram Reels, TikTok, YouTube 4K, and X clips with VideosDropper. 100% free with zero logs.'
      },
      about: {
        title: 'About Us – VideosDropper Fast, Open & Frictionless Media Retrieval',
        desc: 'Learn about VideosDropper mission, core values, zero tracking policy, edge transcoding infrastructure, and live architecture pulse.'
      },
      privacy: {
        title: 'Privacy Policy – VideosDropper Strict No-Log Ephemeral Architecture',
        desc: 'VideosDropper audited trustless privacy policy. Volatile RAM-only processing, TLS 1.3 transit encryption, and client isolation guarantees.'
      },
      contact: {
        title: 'Contact & Bug Reports – VideosDropper Engineering Triage',
        desc: 'Submit broken link extractors, request features, or explore API partnerships with the VideosDropper engineering team.'
      }
    };

    const currentSeo = seoData[activeTab];
    if (currentSeo) {
      document.title = currentSeo.title;
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', currentSeo.desc);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', currentSeo.desc);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', currentSeo.title);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', currentSeo.desc);
    }
  }, [activeTab]);

  const handleOpenContactWithReason = (reason: string) => {
    setContactInitialReason(reason);
    setActiveTab('contact');
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-[#e2e2e8] flex flex-col selection:bg-[#6366F1]/30 selection:text-white">
      {/* Responsive Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInfo={() => setIsInfoOpen(true)}
        onOpenSession={() => setIsSessionOpen(true)}
        onOpenStatus={() => setIsStatusOpen(true)}
        isMobileFrame={isMobileFrame}
        setIsMobileFrame={setIsMobileFrame}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {isMobileFrame ? (
          /* Handheld Phone Simulator Frame (matching the exact mobile screenshots) */
          <div className="py-6 px-4 flex justify-center items-center bg-[#07080B]">
            <div className="w-full max-w-[420px] rounded-[2.5rem] border-[8px] border-[#1C1F2B] bg-[#0A0C10] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative min-h-[840px] flex flex-col">
              {/* Phone Speaker & Camera Notch */}
              <div className="w-28 h-4 bg-[#1C1F2B] rounded-b-xl mx-auto z-30" />
              
              <div className="flex-1 overflow-y-auto no-scrollbar pt-2 pb-20">
                {activeTab === 'home' && (
                  <HomeScreen onOpenStatusModal={() => setIsStatusOpen(true)} />
                )}
                {activeTab === 'about' && (
                  <AboutScreen
                    setActiveTab={setActiveTab}
                    onOpenContactWithReason={handleOpenContactWithReason}
                  />
                )}
                {activeTab === 'privacy' && <PrivacyScreen />}
                {activeTab === 'contact' && (
                  <ContactScreen
                    initialReason={contactInitialReason}
                    onOpenStatusModal={() => setIsStatusOpen(true)}
                  />
                )}
              </div>

              {/* Bottom Nav inside Phone frame */}
              <div className="sticky bottom-0 left-0 right-0 z-30 bg-[#0A0C10]/95 backdrop-blur-md border-t border-[#222738]">
                <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
            </div>
          </div>
        ) : (
          /* Native Responsive Layout (Adapts fluidly across Mobile, Tablet, and PC) */
          <div className="w-full">
            {activeTab === 'home' && (
              <HomeScreen onOpenStatusModal={() => setIsStatusOpen(true)} />
            )}
            {activeTab === 'about' && (
              <AboutScreen
                setActiveTab={setActiveTab}
                onOpenContactWithReason={handleOpenContactWithReason}
              />
            )}
            {activeTab === 'privacy' && <PrivacyScreen />}
            {activeTab === 'contact' && (
              <ContactScreen
                initialReason={contactInitialReason}
                onOpenStatusModal={() => setIsStatusOpen(true)}
              />
            )}
          </div>
        )}
      </main>

      {/* Responsive Footer (Adapts to Mobile, Tablet, and PC) */}
      {!isMobileFrame && (
        <Footer
          setActiveTab={setActiveTab}
          onOpenStatus={() => setIsStatusOpen(true)}
        />
      )}

      {/* Mobile Sticky Bottom Navigation Bar (Visible on mobile/tablet viewports) */}
      {!isMobileFrame && (
        <div className="md:hidden">
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}

      {/* Modals */}
      <SupportedSitesModal
        isOpen={isStatusOpen}
        onClose={() => setIsStatusOpen(false)}
      />
      <InfoModal
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <SessionModal
        isOpen={isSessionOpen}
        onClose={() => setIsSessionOpen(false)}
      />
    </div>
  );
}
