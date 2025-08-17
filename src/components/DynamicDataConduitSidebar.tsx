import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Scale, 
  Network, 
  Eye, 
  Shield, 
  Book, 
  Waves, 
  Key, 
  Infinity,
  ChevronRight
} from 'lucide-react';
import WarriorXIcon from './WarriorXIcon';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavClick: (label: string) => void;
}

interface NavItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  description: string;
  color: string;
  dataFlow: string;
}

const DynamicDataConduitSidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, onNavClick }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [dataStreams, setDataStreams] = useState<number[]>([]);

  const navItems: NavItem[] = [
    { 
      icon: Star, 
      label: 'The Observatory', 
      description: 'Navigate through dimensional data streams',
      color: 'from-slate-300/20 via-blue-200/30 to-cyan-300/25',
      dataFlow: 'STREAM_001'
    },
    { 
      icon: Scale, 
      label: 'The Tribunal Chamber', 
      description: 'Access governance protocols',
      color: 'from-amber-200/25 via-yellow-300/20 to-orange-200/30',
      dataFlow: 'STREAM_002'
    },
    { 
      icon: Network, 
      label: 'The Conclave Hall', 
      description: 'Community neural networks',
      color: 'from-emerald-200/25 via-jade-300/20 to-teal-200/30',
      dataFlow: 'STREAM_003'
    },
    { 
      icon: Eye, 
      label: 'The Oracle\'s Den', 
      description: 'AI consciousness interface',
      color: 'from-violet-200/25 via-purple-300/20 to-indigo-200/30',
      dataFlow: 'STREAM_004'
    },
    { 
      icon: Shield, 
      label: 'The Vault Sanctum', 
      description: 'Secure data repositories',
      color: 'from-rose-200/25 via-pink-300/20 to-fuchsia-200/30',
      dataFlow: 'STREAM_005'
    },
    { 
      icon: Book, 
      label: 'The Archive Chamber', 
      description: 'Historical data matrices',
      color: 'from-orange-200/25 via-amber-300/20 to-yellow-200/30',
      dataFlow: 'STREAM_006'
    },
    { 
      icon: Waves, 
      label: 'The Nexus Stream', 
      description: 'Real-time system monitoring',
      color: 'from-coral-200/25 via-salmon-300/20 to-peach-200/30',
      dataFlow: 'STREAM_007'
    },
    { 
      icon: Key, 
      label: 'Configuration Sanctum', 
      description: 'System parameter controls',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      dataFlow: 'STREAM_008'
    },
    { 
      icon: Infinity,
      label: 'The Gateway Portal',
      description: 'External connection hub',
      color: 'from-fuchsia-500/25 via-magenta-400/20 to-purple-500/25',
      dataFlow: 'STREAM_009'
    },
  ];

  // Generate random data stream animations
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setDataStreams(prev => {
          const newStreams = [...prev];
          if (Math.random() > 0.7) {
            const randomIndex = Math.floor(Math.random() * navItems.length);
            if (!newStreams.includes(randomIndex)) {
              newStreams.push(randomIndex);
            }
          }
          return newStreams.slice(-3); // Keep only last 3 streams
        });
      }, 1500);

      return () => clearInterval(interval);
    } else {
      setDataStreams([]);
    }
  }, [isOpen, navItems.length]);

  const handleNavClick = (index: number) => {
    setActiveItem(index);
    onNavClick(navItems[index].label);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-96 bg-gradient-to-br from-slate-900/20 via-slate-800/15 to-slate-900/25 backdrop-blur-xl border-r border-cyan-400/15 z-50 transform transition-all duration-700 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse"></div>
        
        {/* Data flow lines */}
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent data-conduit-flow"></div>
        
        {/* Header */}
        <div className="relative p-6 border-b border-cyan-400/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-cyan-100 mb-1">Neural Conduit</h2>
              <p className="text-sm text-cyan-400/70">Data Stream Interface</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 transition-all duration-300 group"
            >
              <WarriorXIcon 
                size={28} 
                className="text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.5)] transition-all duration-300" 
              />
            </button>
          </div>
          
          {/* System status indicator */}
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400 font-mono">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="relative p-4 space-y-2 overflow-y-auto flex-1 pb-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === index;
            const hasDataStream = dataStreams.includes(index);
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => handleNavClick(index)}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Data stream indicator */}
                {hasDataStream && (
                  <div className="absolute -left-2 top-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-pulse transform -translate-y-1/2"></div>
                )}
                
                <div className={`relative p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? `bg-gradient-to-r ${item.color} bg-opacity-20 border-cyan-400/50 shadow-lg shadow-cyan-400/20` 
                    : 'bg-slate-800/10 border-slate-700/20 hover:border-cyan-400/25 hover:bg-slate-800/20'
                }`}>
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Animated data particles */}
                  {isActive && (
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  )}
                  
                  <div className="relative flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/10 shadow-inner`}>
                      <Icon 
                        size={24} 
                        className={`transition-all duration-300 ${
                          isActive ? 'text-white/90' : 'text-cyan-200/80 group-hover:text-white/85'
                        }`}
                        style={{
                          filter: isActive 
                            ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4)) drop-shadow(0 0 6px rgba(6, 182, 212, 0.6))' 
                            : 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2)) drop-shadow(0 0 4px rgba(6, 182, 212, 0.3))'
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-cyan-100 group-hover:text-white'
                        }`}>
                          {item.label}
                        </h3>
                        <ChevronRight 
                          size={16} 
                          className={`transition-all duration-300 ${
                            isActive 
                              ? 'text-cyan-300 translate-x-1' 
                              : 'text-cyan-400/50 group-hover:text-cyan-300 group-hover:translate-x-1'
                          }`}
                        />
                      </div>
                      <p className={`text-sm mt-1 transition-colors duration-300 ${
                        isActive ? 'text-cyan-200' : 'text-cyan-400/70 group-hover:text-cyan-300'
                      }`}>
                        {item.description}
                      </p>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-xs font-mono text-cyan-400/60">{item.dataFlow}</span>
                        {hasDataStream && (
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer status */}
        <div className="p-4 bg-gradient-to-t from-slate-900/30 to-transparent border-t border-cyan-400/10 flex-shrink-0">
          <div className="flex items-center justify-between text-xs">
            <span className="text-cyan-400/70 font-mono">
              CONDUITS: {navItems.length} | ACTIVE: {dataStreams.length}
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono">SYNC</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicDataConduitSidebar;