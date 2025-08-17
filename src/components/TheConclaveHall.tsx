import React from 'react';
import { 
  Network, 
  Users, 
  Brain, 
  Activity, 
  Heart, 
  Eye,
  Zap,
  TrendingUp,
  Compass,
  GitBranch
} from 'lucide-react';

const TheConclaveHall: React.FC = () => {
  const communityPanels = [
    {
      id: 'member-directory',
      title: 'Member Directory',
      icon: Users,
      description: 'Mystical member profiles with engagement analytics',
      color: 'from-emerald-500/20 via-teal-400/15 to-cyan-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'behavioral-intelligence',
      title: 'Behavioral Intelligence Matrix',
      icon: Brain,
      description: 'Member psychology and pattern analysis',
      color: 'from-violet-500/20 via-purple-400/15 to-indigo-500/20',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 'influence-network',
      title: 'Influence Network Mapping',
      icon: Network,
      description: 'Community leadership and influence visualization',
      color: 'from-blue-500/20 via-cyan-400/15 to-teal-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'engagement-analytics',
      title: 'Member Engagement Analytics',
      icon: Activity,
      description: 'Participation metrics and trend analysis',
      color: 'from-amber-500/20 via-yellow-400/15 to-orange-500/20',
      borderColor: 'border-amber-400/30'
    },
    {
      id: 'community-health',
      title: 'Community Health Monitor',
      icon: Heart,
      description: 'Social dynamics and relationship tracking',
      color: 'from-rose-500/20 via-pink-400/15 to-fuchsia-500/20',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 'neural-insights',
      title: 'Neural Member Insights',
      icon: Eye,
      description: 'AI-powered member behavior predictions',
      color: 'from-indigo-500/20 via-violet-400/15 to-purple-500/20',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const communityFeedItems = [
    {
      icon: Activity,
      title: 'Community Activity Stream',
      description: 'Real-time member interactions and network events'
    },
    {
      icon: Zap,
      title: 'Behavioral Pattern Alerts',
      description: 'AI-detected community behavior changes and anomalies'
    },
    {
      icon: TrendingUp,
      title: 'Influence Score Calculations',
      description: 'Dynamic member influence and leadership metrics'
    },
    {
      icon: Compass,
      title: 'Community Sentiment Analysis',
      description: 'Collective mood and social harmony indicators'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Network Icon and The Conclave Hall Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-400/30">
              <Network size={32} className="text-emerald-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-400/30 mr-2">
                  <Network size={32} className="text-emerald-400" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Conclave Hall</span>
              <span className="hidden lg:inline">The Conclave Hall</span>
            </h1>
          </div>
          
          {/* Community Neural Networks Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-emerald-400/80 text-lg text-right">Community Neural Networks Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Community Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-mono text-sm">STREAM_003 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-emerald-400/30"></div>
            <span className="text-emerald-400/70 font-mono text-sm">NEURAL NETWORKS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Community Panels</h2>
            <p className="text-emerald-400/70">Mystical member intelligence and behavioral analysis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityPanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Neural Connection Lines */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,20 Q50,10 100,30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-emerald-400" />
                        <path d="M0,60 Q30,40 100,70" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-emerald-400" />
                        <circle cx="20" cy="25" r="1" fill="currentColor" className="text-emerald-400 animate-pulse" />
                        <circle cx="80" cy="65" r="1" fill="currentColor" className="text-emerald-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
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
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(16, 185, 129, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-emerald-400/70 text-sm mb-4 group-hover:text-emerald-300/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                            <GitBranch size={16} className="text-emerald-400/60" />
                          </div>
                          <span className="text-xs text-emerald-400/50 font-mono">AWAITING COMMUNITY DATA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical Community Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Community Intelligence</h2>
            <p className="text-emerald-400/70">Live neural network streams</p>
          </div>
          
          <div className="space-y-4">
            {communityFeedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-teal-400/5 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Neural Network Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`network-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-emerald-400" />
                            <line x1="10" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-emerald-400" />
                            <line x1="10" y1="10" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-emerald-400" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#network-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 via-teal-400/15 to-emerald-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-emerald-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-emerald-400/70 text-sm mb-4 group-hover:text-emerald-300/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-emerald-400/50 font-mono">MONITORING NEURAL NETWORKS</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-emerald-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400/70 font-mono">
                PANELS: {communityPanels.length} | FEEDS: {communityFeedItems.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse"></div>
                <span className="text-emerald-400/70 font-mono">CONCLAVE ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheConclaveHall;