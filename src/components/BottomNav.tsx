import React from 'react';
import { ArrowDownToLine, Info, Shield, Mail } from 'lucide-react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home' as TabType, label: 'Home', icon: ArrowDownToLine },
    { id: 'about' as TabType, label: 'About', icon: Info },
    { id: 'privacy' as TabType, label: 'Privacy', icon: Shield },
    { id: 'contact' as TabType, label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0A0C10]/95 backdrop-blur-xl border-t border-[#222738]/90 safe-bottom">
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 select-none ${
                isActive
                  ? 'text-[#c0c1ff]'
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c0c1ff] shadow-[0_0_8px_#c0c1ff]" />
                )}
              </div>
              <span
                className={`text-[11px] mt-1 font-medium tracking-tight ${
                  isActive ? 'font-semibold text-white' : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
