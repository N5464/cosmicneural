import React from 'react';
import { 
  Brain, 
  Users, 
  Coins, 
  Vote, 
  Heart, 
  Activity,
  Zap,
  TrendingUp,
 Eye,
} from 'lucide-react';

const TheObservatory: React.FC = () => {
  const intelligencePanels = [
    {
      id: 'dao-consciousness',
      title: 'DAO Consciousness Level',
      icon: Brain,
      description: 'Neural health percentage with activity indicator',
      color: 'from-violet-500/20 via-purple-400/15 to-indigo-500/20',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 'active-operatives',
      title: 'Active Operatives',
      icon: Users,
      description: 'Member count with engagement trends',
      color: 'from-emerald-500/20 via-teal-400/15 to-cyan-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'treasury-nexus',
      title: 'Treasury Nexus',
      icon: Coins,
      description: 'Fund balance with flow visualization',
      color: 'from-amber-500/20 via-yellow-400/15 to-orange-500/20',
      borderColor: 'border-amber-400/30'
    },
    {
      id: 'governance-pulse',
      title: 'Governance Pulse',
      icon: Vote,
      description: 'Recent proposal activity monitoring',
      color: 'from-blue-500/20 via-cyan-400/15 to-teal-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'sentiment-matrix',
      title: 'Community Sentiment Matrix',
      icon: Heart,
      description: 'AI-analyzed mood with color coding',
      color: 'from-rose-500/20 via-pink-400/15 to-fuchsia-500/20',
      borderColor: 'border-rose-400/30'
    },
    {
      id: 'neural-predictions',
      title: 'Neural Predictions',
      icon: Eye,
      description: 'Upcoming behavioral forecasts',
      color: 'from-indigo-500/20 via-violet-400/15 to-purple-500/20',
      borderColor: 'border-indigo-400/30'
    }
  ];

  const commandFeedItems = [
    {
      icon: Activity,
      title: 'Live Activity Stream',
      description: 'Real-time network events and interactions'
    },
    {
      icon: Zap,
      title: 'AI Insights & Alerts',
      description: 'Recent consciousness analysis and predictions'
    },
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Eye Icon and The Observatory Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30">
              <Eye size={32} className="text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden">THE </span>
              <span className="inline-flex items-center">
                <span className="lg:hidden mr-2">
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30">
                    <Eye size={32} className="text-cyan-400" />
                  </div>
                </span>
                <span className="hidden lg:inline">The Observatory</span>
                <span className="lg:hidden">Observatory</span>
              </span>
            </h1>
          </div>
          
          {/* Dimensional Data Streams Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-cyan-400/80 text-lg text-right">Dimensional Data Streams Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Intelligence Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator - Moved from header */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">STREAM_001 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-cyan-400/30"></div>
            <span className="text-cyan-400/70 font-mono text-sm">NEURAL INTERFACE SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Key Intelligence Panels</h2>
            <p className="text-cyan-400/70">Mystical governance network monitoring</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {intelligencePanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${panel.color} backdrop-blur-sm border border-white/10 shadow-inner`}>
                          <Icon 
                            size={24} 
                            className="text-white/90"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(6, 182, 212, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-cyan-400/70 text-sm mb-4 group-hover:text-cyan-300/80 transition-colors duration-300">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 flex items-center justify-center">
                            <TrendingUp size={16} className="text-cyan-400/60" />
                          </div>
                          <span className="text-xs text-cyan-400/50 font-mono">AWAITING DATA STREAM</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Central Command Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Central Command Feed</h2>
            <p className="text-cyan-400/70">Live intelligence streams</p>
          </div>
          
          <div className="space-y-4">
            {commandFeedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-400/15 to-cyan-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-cyan-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(6, 182, 212, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-cyan-400/70 text-sm mb-4 group-hover:text-cyan-300/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-cyan-400/50 font-mono">MONITORING ACTIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-cyan-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-cyan-400/70 font-mono">
                PANELS: {intelligencePanels.length} | FEEDS: {commandFeedItems.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse"></div>
                <span className="text-green-400/70 font-mono">OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheObservatory;