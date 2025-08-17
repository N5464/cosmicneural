import React from 'react';
import { 
  Infinity, 
  Link, 
  GitFork, 
  Cloud, 
  MessageSquare, 
  Database, 
  Map,
  Activity,
  Waves,
  Share2,
  BellRing,
  Zap,
  Globe,
  Network
} from 'lucide-react';

const TheGatewayPortal: React.FC = () => {
  const gatewayPanels = [
    {
      id: 'external-dao-integrations',
      title: 'External DAO Integrations',
      icon: Link,
      description: 'Connections to other DAO platforms and protocols',
      color: 'from-fuchsia-500/20 via-magenta-400/15 to-purple-500/20',
      borderColor: 'border-fuchsia-400/30'
    },
    {
      id: 'blockchain-network-bridges',
      title: 'Blockchain Network Bridges',
      icon: GitFork,
      description: 'Multi-chain governance connectivity',
      color: 'from-purple-500/20 via-fuchsia-400/15 to-magenta-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'api-portal-management',
      title: 'API Portal Management',
      icon: Cloud,
      description: 'External service integrations and data flows',
      color: 'from-magenta-500/20 via-purple-400/15 to-fuchsia-500/20',
      borderColor: 'border-magenta-400/30'
    },
    {
      id: 'communication-channels',
      title: 'Communication Channels',
      icon: MessageSquare,
      description: 'Discord, Telegram, and social platform connections',
      color: 'from-fuchsia-500/20 via-purple-400/15 to-magenta-500/20',
      borderColor: 'border-fuchsia-400/30'
    },
    {
      id: 'data-export-import-hub',
      title: 'Data Export/Import Hub',
      icon: Database,
      description: 'Governance data exchange with external systems',
      color: 'from-purple-500/20 via-magenta-400/15 to-fuchsia-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'cosmic-network-mapping',
      title: 'Cosmic Network Mapping',
      icon: Map,
      description: 'Visualization of all external connections and data flows',
      color: 'from-magenta-500/20 via-fuchsia-400/15 to-purple-500/20',
      borderColor: 'border-magenta-400/30'
    }
  ];

  const mysticalGatewayFeatures = [
    {
      icon: Activity,
      title: 'Live Inter-DAO Traffic',
      description: 'Real-time external connection monitoring and data flow tracking'
    },
    {
      icon: Waves,
      title: 'Dimensional Bridge Status',
      description: 'Cross-dimensional portal health and connectivity indicators'
    },
    {
      icon: Share2,
      title: 'Cross-Chain Data Flow',
      description: 'Multi-blockchain governance data synchronization streams'
    },
    {
      icon: BellRing,
      title: 'Cosmic Alignment Alerts',
      description: 'External system notifications and dimensional gateway warnings'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Infinity Icon and The Gateway Portal Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-fuchsia-400/30">
              <Infinity size={32} className="text-fuchsia-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-fuchsia-400/30 mr-2">
                  <Infinity size={32} className="text-fuchsia-400" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Gateway Portal</span>
              <span className="hidden lg:inline">The Gateway Portal</span>
            </h1>
          </div>
          
          {/* Mystical External Connection Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-fuchsia-400/80 text-lg text-right">Mystical External Connection Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Gateway Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-pulse"></div>
              <span className="text-fuchsia-400 font-mono text-sm">STREAM_009 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-fuchsia-400/30"></div>
            <span className="text-fuchsia-400/70 font-mono text-sm">GATEWAY PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Gateway Panels</h2>
            <p className="text-fuchsia-400/70">Mystical external connection and dimensional portal management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gatewayPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.id}
                  className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
                >
                  <div className={`relative p-6 rounded-xl bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border ${panel.borderColor} hover:border-opacity-50 transition-all duration-300 overflow-hidden`}>
                    {/* Background Energy Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${panel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Pulsing Border Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-fuchsia-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Dimensional Portal Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Portal rings */}
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-fuchsia-400" strokeDasharray="3,2" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-magenta-400" strokeDasharray="2,1" />
                        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-purple-400" strokeDasharray="1,1" />
                        
                        {/* Dimensional gateway lines */}
                        <path d="M20,50 Q35,30 50,50 Q65,70 80,50" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-fuchsia-400" />
                        <path d="M50,20 Q30,35 50,50 Q70,65 50,80" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-magenta-400" />
                        
                        {/* Portal energy nodes */}
                        <circle cx="20" cy="50" r="1.5" fill="currentColor" className="text-fuchsia-400 animate-pulse" />
                        <circle cx="80" cy="50" r="1.5" fill="currentColor" className="text-magenta-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <circle cx="50" cy="20" r="1.5" fill="currentColor" className="text-purple-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <circle cx="50" cy="80" r="1.5" fill="currentColor" className="text-fuchsia-400 animate-pulse" style={{ animationDelay: '0.9s' }} />
                        
                        {/* Cosmic connection lines */}
                        <path d="M10,10 Q50,25 90,10" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-purple-400" strokeDasharray="1,2" />
                        <path d="M10,90 Q50,75 90,90" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-magenta-400" strokeDasharray="1,2" />
                        
                        {/* Gateway symbols */}
                        <path d="M45,45 L55,45 L55,55 L45,55 Z" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-fuchsia-400" />
                        <path d="M47,47 L53,47 L53,53 L47,53 Z" fill="currentColor" className="text-magenta-400 animate-pulse" />
                        
                        {/* Dimensional anchors */}
                        <rect x="8" y="8" width="4" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-purple-400" />
                        <rect x="88" y="8" width="4" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-fuchsia-400" />
                        <rect x="8" y="88" width="4" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-magenta-400" />
                        <rect x="88" y="88" width="4" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-purple-400" />
                      </svg>
                    </div>
                    
                    {/* Portal Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" className="text-fuchsia-400" strokeDasharray="2,1" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-magenta-400" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-purple-400" />
                        <path d="M4,12 L8,12 M16,12 L20,12 M12,4 L12,8 M12,16 L12,20" stroke="currentColor" strokeWidth="0.6" className="text-fuchsia-400" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${panel.color} backdrop-blur-sm border border-white/10 shadow-inner`}>
                          <Icon 
                            size={24} 
                            className="text-white/90"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(217, 70, 239, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-fuchsia-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-fuchsia-400/70 text-sm mb-4 group-hover:text-fuchsia-300/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-fuchsia-400/20 to-magenta-400/20 flex items-center justify-center">
                            <Globe size={16} className="text-fuchsia-400/60" />
                          </div>
                          <span className="text-xs text-fuchsia-400/50 font-mono">AWAITING GATEWAY DATA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-fuchsia-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical Gateway Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Gateway Intelligence</h2>
            <p className="text-fuchsia-400/70">Live dimensional portal and connection streams</p>
          </div>
          
          <div className="space-y-4">
            {mysticalGatewayFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-fuchsia-400/20 hover:border-fuchsia-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400/5 via-magenta-400/5 to-fuchsia-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Dimensional Gateway Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`gateway-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-fuchsia-400" strokeDasharray="2,1" />
                            <circle cx="15" cy="15" r="4" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-magenta-400" />
                            <circle cx="15" cy="15" r="1" fill="currentColor" className="text-purple-400" />
                            <path d="M7,15 L11,15 M19,15 L23,15 M15,7 L15,11 M15,19 L15,23" stroke="currentColor" strokeWidth="0.2" className="text-fuchsia-400" />
                            <rect x="2" y="2" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-purple-400" strokeDasharray="1,2" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#gateway-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/20 via-magenta-400/15 to-purple-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-fuchsia-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(217, 70, 239, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-fuchsia-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-fuchsia-400/70 text-sm mb-4 group-hover:text-fuchsia-300/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-fuchsia-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-fuchsia-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-fuchsia-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-fuchsia-400/50 font-mono">MONITORING GATEWAY</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-fuchsia-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-fuchsia-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-fuchsia-400/70 font-mono">
                PANELS: {gatewayPanels.length} | FEEDS: {mysticalGatewayFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-fuchsia-400/60 rounded-full animate-pulse"></div>
                <span className="text-fuchsia-400/70 font-mono">PORTAL ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGatewayPortal;