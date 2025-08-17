import React from 'react';
import { 
  Scale, 
  FileText, 
  Vote, 
  BarChart3, 
  Brain,
  Activity,
  Zap,
  TrendingUp,
  Clock,
  Target,
  Compass
} from 'lucide-react';

const TheTribunalChamber: React.FC = () => {
  const governancePanels = [
    {
      id: 'active-proposals',
      title: 'Active Proposals',
      icon: FileText,
      description: 'Live governance proposals with AI analysis',
      color: 'from-amber-500/20 via-yellow-400/15 to-orange-500/20',
      borderColor: 'border-amber-400/30'
    },
    {
      id: 'proposal-wizard',
      title: 'Proposal Creation Wizard',
      icon: Scale,
      description: 'Mystical interface for creating new proposals',
      color: 'from-violet-500/20 via-purple-400/15 to-indigo-500/20',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 'voting-intelligence',
      title: 'Voting Intelligence',
      icon: Vote,
      description: 'Real-time voting patterns and predictions',
      color: 'from-emerald-500/20 via-teal-400/15 to-cyan-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'governance-health',
      title: 'Governance Health Metrics',
      icon: BarChart3,
      description: 'Community participation analytics',
      color: 'from-blue-500/20 via-cyan-400/15 to-teal-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'voting-patterns',
      title: 'Behavioral Voting Patterns',
      icon: Brain,
      description: 'Member voting psychology analysis',
      color: 'from-rose-500/20 via-pink-400/15 to-fuchsia-500/20',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 'success-predictor',
      title: 'Proposal Success Predictor',
      icon: Target,
      description: 'AI-powered outcome forecasting',
      color: 'from-indigo-500/20 via-violet-400/15 to-purple-500/20',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const commandFeedItems = [
    {
      icon: Activity,
      title: 'Governance Activity Stream',
      description: 'Real-time proposal submissions and voting events'
    },
    {
      icon: Compass,
      title: 'Member Influence Mapping',
      description: 'Community leadership and influence visualization'
    },
    {
      icon: Clock,
      title: 'Optimal Timing Recommendations',
      description: 'AI-suggested proposal timing for maximum engagement'
    },
    {
      icon: Zap,
      title: 'Community Readiness Indicators',
      description: 'Real-time governance participation readiness metrics'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Scale Icon and The Tribunal Chamber Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-400/30">
              <Scale size={32} className="text-amber-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden">THE </span>
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-400/30 mr-2 ml-24">
                  <Scale size={32} className="text-amber-400" />
                </div>
                Tribunal Chamber
              </span>
              <span className="inline-flex items-center">
                <span className="hidden lg:inline">The Tribunal Chamber</span>
              </span>
            </h1>
          </div>
          
          {/* Ancient Justice Governance Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-amber-400/80 text-lg text-right">Ancient Justice Governance Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Governance Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-400 font-mono text-sm">STREAM_002 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-amber-400/30"></div>
            <span className="text-amber-400/70 font-mono text-sm">GOVERNANCE PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Governance Panels</h2>
            <p className="text-amber-400/70">Ancient justice and mystical governance monitoring</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {governancePanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${panel.color} backdrop-blur-sm border border-white/10 shadow-inner`}>
                          <Icon 
                            size={24} 
                            className="text-white/90"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-amber-400/70 text-sm mb-4 group-hover:text-amber-300/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 flex items-center justify-center">
                            <TrendingUp size={16} className="text-amber-400/60" />
                          </div>
                          <span className="text-xs text-amber-400/50 font-mono">AWAITING GOVERNANCE DATA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-amber-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Central Command Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Governance Intelligence</h2>
            <p className="text-amber-400/70">Live justice and governance streams</p>
          </div>
          
          <div className="space-y-4">
            {commandFeedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-yellow-400/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 via-yellow-400/15 to-amber-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-amber-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-amber-400/70 text-sm mb-4 group-hover:text-amber-300/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-amber-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-amber-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-amber-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-amber-400/50 font-mono">JUSTICE PROTOCOLS ACTIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-amber-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-400/70 font-mono">
                PANELS: {governancePanels.length} | FEEDS: {commandFeedItems.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400/60 rounded-full animate-pulse"></div>
                <span className="text-amber-400/70 font-mono">TRIBUNAL ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTribunalChamber;