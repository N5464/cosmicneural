import React from 'react';
import { 
  Waves, 
  Activity, 
  Monitor, 
  Users, 
  Brain, 
  BellRing, 
  GitBranch,
  TrendingUp,
  AlertTriangle,
  Network,
  Zap,
  Radio,
  Pulse
} from 'lucide-react';

const TheNexusStream: React.FC = () => {
  const realTimeMonitoringPanels = [
    {
      id: 'live-governance-activity-stream',
      title: 'Live Governance Activity Stream',
      icon: Activity,
      description: 'Real-time proposal submissions, votes, and discussions',
      color: 'from-cyan-500/20 via-teal-400/15 to-blue-500/20',
      borderColor: 'border-cyan-400/30'
    },
    {
      id: 'system-health-monitoring',
      title: 'System Health Monitoring',
      icon: Monitor,
      description: 'All 9 stream performance and operational status',
      color: 'from-emerald-500/20 via-teal-400/15 to-cyan-500/20',
      borderColor: 'border-emerald-400/30'
    },
    {
      id: 'community-pulse-tracker',
      title: 'Community Pulse Tracker',
      icon: Users,
      description: 'Real-time member engagement and activity levels',
      color: 'from-blue-500/20 via-cyan-400/15 to-teal-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 'neural-network-status',
      title: 'Neural Network Status',
      icon: Brain,
      description: 'AI consciousness and processing performance indicators',
      color: 'from-violet-500/20 via-purple-400/15 to-indigo-500/20',
      borderColor: 'border-violet-400/30'
    },
    {
      id: 'alert-notification-center',
      title: 'Alert & Notification Center',
      icon: BellRing,
      description: 'Critical system alerts and governance emergencies',
      color: 'from-red-500/20 via-rose-400/15 to-pink-500/20',
      borderColor: 'border-red-400/30'
    },
    {
      id: 'cross-stream-intelligence',
      title: 'Cross-Stream Intelligence',
      icon: GitBranch,
      description: 'Real-time data flow between all 9 chambers',
      color: 'from-cyan-500/20 via-teal-400/15 to-blue-500/20',
      borderColor: 'border-cyan-400/30'
    }
  ];

  const mysticalRealTimeFeatures = [
    {
      icon: Activity,
      title: 'Live Activity Feeds',
      description: 'Real-time mystical data streams with flowing visualizations'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Performance Indicators',
      description: 'Dynamic system health metrics and stream performance'
    },
    {
      icon: AlertTriangle,
      title: 'Alert System Notifications',
      description: 'Consciousness-level critical alerts and system warnings'
    },
    {
      icon: Network,
      title: 'Stream Interconnection Visualizations',
      description: 'Live data flow mapping between all 9 mystical chambers'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Waves Icon and The Nexus Stream Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30">
              <Waves size={32} className="text-cyan-400" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 mr-2">
                  <Waves size={32} className="text-cyan-400" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Nexus Stream</span>
              <span className="hidden lg:inline">The Nexus Stream</span>
            </h1>
          </div>
          
          {/* Real-time System Monitoring Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-cyan-400/80 text-lg text-right">Real-time System Monitoring Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Real-Time Monitoring Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-sm">STREAM_007 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-cyan-400/30"></div>
            <span className="text-cyan-400/70 font-mono text-sm">SYSTEM PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Real-Time Monitoring Panels</h2>
            <p className="text-cyan-400/70">Mystical live system monitoring and stream intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {realTimeMonitoringPanels.map((panel) => {
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
                    
                    {/* Flowing Stream Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Flowing stream lines */}
                        <path d="M0,30 Q25,20 50,30 T100,30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-400" />
                        <path d="M0,50 Q30,40 60,50 T100,50" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-teal-400" />
                        <path d="M0,70 Q20,60 40,70 T100,70" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-blue-400" />
                        
                        {/* Data flow particles */}
                        <circle cx="15" cy="32" r="0.8" fill="currentColor" className="text-cyan-400 animate-pulse" />
                        <circle cx="45" cy="48" r="0.6" fill="currentColor" className="text-teal-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <circle cx="75" cy="72" r="0.7" fill="currentColor" className="text-blue-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <circle cx="85" cy="28" r="0.5" fill="currentColor" className="text-cyan-400 animate-pulse" style={{ animationDelay: '0.9s' }} />
                        
                        {/* Stream connection nodes */}
                        <rect x="10" y="25" width="4" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cyan-400" />
                        <rect x="50" y="45" width="3" height="3" rx="1.5" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-teal-400" />
                        <rect x="80" y="65" width="3.5" height="3.5" rx="1.75" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-blue-400" />
                        
                        {/* Mystical flow indicators */}
                        <path d="M20,15 Q35,10 50,15 Q65,20 80,15" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cyan-400" strokeDasharray="2,1" />
                        <path d="M10,85 Q30,80 50,85 Q70,90 90,85" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-blue-400" strokeDasharray="1,2" />
                      </svg>
                    </div>
                    
                    {/* Stream Flow Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M3,12 Q8,8 12,12 T21,12" stroke="currentColor" strokeWidth="1" className="text-cyan-400" />
                        <path d="M3,8 Q8,4 12,8 T21,8" stroke="currentColor" strokeWidth="0.8" className="text-teal-400" />
                        <path d="M3,16 Q8,12 12,16 T21,16" stroke="currentColor" strokeWidth="0.8" className="text-blue-400" />
                        <circle cx="6" cy="12" r="1" fill="currentColor" className="text-cyan-400" />
                        <circle cx="18" cy="12" r="0.8" fill="currentColor" className="text-blue-400" />
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
                      
                      <p className="text-cyan-400/70 text-sm mb-4 group-hover:text-cyan-300/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                            <Radio size={16} className="text-cyan-400/60" />
                          </div>
                          <span className="text-xs text-cyan-400/50 font-mono">AWAITING LIVE STREAM</span>
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

        {/* Mystical Real-Time Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Real-Time Intelligence</h2>
            <p className="text-cyan-400/70">Live system streams and flow monitoring</p>
          </div>
          
          <div className="space-y-4">
            {mysticalRealTimeFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-teal-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Real-Time Flow Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`realtime-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M5,15 Q15,10 25,15" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-cyan-400" />
                            <path d="M5,20 Q15,15 25,20" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-teal-400" />
                            <circle cx="8" cy="17" r="0.5" fill="currentColor" className="text-cyan-400 animate-pulse" />
                            <circle cx="22" cy="17" r="0.4" fill="currentColor" className="text-teal-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                            <rect x="12" y="12" width="6" height="2" rx="1" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-blue-400" />
                            <line x1="2" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="0.2" className="text-cyan-400" strokeDasharray="1,1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#realtime-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 via-teal-400/15 to-cyan-500/20 backdrop-blur-sm border border-white/10">
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
                          <span className="text-xs text-cyan-400/50 font-mono">MONITORING LIVE STREAMS</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-cyan-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-cyan-400/70 font-mono">
                PANELS: {realTimeMonitoringPanels.length} | FEEDS: {mysticalRealTimeFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
                <span className="text-cyan-400/70 font-mono">NEXUS STREAMING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNexusStream;