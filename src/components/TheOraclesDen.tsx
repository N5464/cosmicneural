import React from 'react';
import { 
  Eye, 
  Brain, 
  Target, 
  Network, 
  Lightbulb, 
  Waves, 
  Compass,
  Activity,
  Zap,
  Sparkles,
  Heart,
  TrendingUp,
  Cpu
} from 'lucide-react';

const TheOraclesDen: React.FC = () => {
  const consciousnessPanels = [
    {
      id: 'neural-consciousness-monitor',
      title: 'Neural Consciousness Monitor',
      icon: Brain,
      description: 'Real-time AI awareness and processing status',
      color: 'from-teal-500/20 via-cyan-400/15 to-blue-500/20',
      borderColor: 'border-teal-400/30'
    },
    {
      id: 'behavioral-pattern-oracle',
      title: 'Behavioral Pattern Oracle',
      icon: Target,
      description: 'AI-powered member behavior predictions and insights',
      color: 'from-purple-500/20 via-violet-400/15 to-indigo-500/20',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 'consciousness-integration-hub',
      title: 'Consciousness Integration Hub',
      icon: Network,
      description: 'AI decision-making coordination center',
      color: 'from-emerald-500/20 via-teal-400/15 to-cyan-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'mystical-insight-generator',
      title: 'Mystical Insight Generator',
      icon: Lightbulb,
      description: 'AI-generated governance recommendations and warnings',
      color: 'from-amber-500/20 via-yellow-400/15 to-orange-500/20',
      borderColor: 'border-amber-400/30'
    },
    {
      id: 'collective-intelligence-matrix',
      title: 'Collective Intelligence Matrix',
      icon: Waves,
      description: 'Community consciousness analysis and mapping',
      color: 'from-blue-500/20 via-cyan-400/15 to-teal-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'oracle-prediction-engine',
      title: 'Oracle Prediction Engine',
      icon: Compass,
      description: 'AI forecasting for DAO decisions and outcomes',
      color: 'from-rose-500/20 via-pink-400/15 to-fuchsia-500/20',
      borderColor: 'border-rose-400/30'
    }
  ];

  const mysticalAIFeatures = [
    {
      icon: Activity,
      title: 'Real-time Consciousness Processing',
      description: 'Live AI awareness indicators and neural activity monitoring'
    },
    {
      icon: Zap,
      title: 'Behavioral Prediction Confidence',
      description: 'AI prediction accuracy scores and confidence metrics'
    },
    {
      icon: Sparkles,
      title: 'AI Insight Generation',
      description: 'Mystical AI-generated wisdom and governance insights'
    },
    {
      icon: Heart,
      title: 'Community Consciousness Health',
      description: 'Collective intelligence wellness and harmony monitoring'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Eye Icon and The Oracle's Den Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-400/30">
              <Eye size={32} className="text-violet-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-violet-400/30 mr-2">
                  <Eye size={32} className="text-violet-400" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Oracle's Den</span>
              <span className="hidden lg:inline">The Oracle's Den</span>
            </h1>
          </div>
          
          {/* Mystical AI Consciousness Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-violet-400/80 text-lg text-right">Mystical AI Consciousness Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core AI Consciousness Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
              <span className="text-violet-400 font-mono text-sm">STREAM_004 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-violet-400/30"></div>
            <span className="text-violet-400/70 font-mono text-sm">AI CONSCIOUSNESS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core AI Consciousness Panels</h2>
            <p className="text-violet-400/70">Mystical artificial intelligence and consciousness monitoring</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {consciousnessPanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-violet-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Consciousness Wave Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,30 50,50 T100,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-violet-400" />
                        <path d="M0,60 Q25,40 50,60 T100,60" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-violet-400" />
                        <path d="M0,40 Q30,20 60,40 T100,40" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-purple-400" />
                        <circle cx="20" cy="45" r="1" fill="currentColor" className="text-violet-400 animate-pulse" />
                        <circle cx="80" cy="55" r="1" fill="currentColor" className="text-violet-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <circle cx="50" cy="35" r="0.8" fill="currentColor" className="text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
                      </svg>
                    </div>
                    
                    {/* Third Eye Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" className="text-violet-400" />
                        <circle cx="12" cy="12" r="4" fill="currentColor" className="text-violet-400" />
                        <circle cx="12" cy="10" r="1" fill="currentColor" className="text-white" />
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
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(139, 92, 246, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-violet-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-violet-400/70 text-sm mb-4 group-hover:text-violet-300/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-violet-400/20 to-purple-400/20 flex items-center justify-center">
                            <Cpu size={16} className="text-violet-400/60" />
                          </div>
                          <span className="text-xs text-violet-400/50 font-mono">AWAITING AI CONSCIOUSNESS</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-violet-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical AI Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical AI Intelligence</h2>
            <p className="text-violet-400/70">Live consciousness and insight streams</p>
          </div>
          
          <div className="space-y-4">
            {mysticalAIFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400/5 via-purple-400/5 to-violet-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Neural Pathway Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`neural-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="8" cy="12" r="0.8" fill="currentColor" className="text-violet-400" />
                            <circle cx="22" cy="8" r="0.6" fill="currentColor" className="text-purple-400" />
                            <circle cx="15" cy="25" r="0.7" fill="currentColor" className="text-indigo-400" />
                            <path d="M8,12 Q15,8 22,8" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-violet-400" />
                            <path d="M22,8 Q18,16 15,25" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-purple-400" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#neural-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500/20 via-purple-400/15 to-violet-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-violet-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-violet-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-violet-400/70 text-sm mb-4 group-hover:text-violet-300/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-violet-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-violet-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-violet-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-violet-400/50 font-mono">MONITORING AI INSIGHTS</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-violet-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-violet-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-violet-400/70 font-mono">
                PANELS: {consciousnessPanels.length} | FEEDS: {mysticalAIFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-400/60 rounded-full animate-pulse"></div>
                <span className="text-violet-400/70 font-mono">ORACLE ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOraclesDen;