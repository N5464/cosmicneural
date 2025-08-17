import React from 'react';
import { 
  Book, 
  TrendingUp, 
  FileText, 
  Users, 
  Brain, 
  Heart, 
  Eye,
  Clock,
  Zap,
  BookOpen,
  Activity,
  Scroll,
  Archive
} from 'lucide-react';

const TheArchiveChamber: React.FC = () => {
  const historicalAnalysisPanels = [
    {
      id: 'governance-evolution-tracker',
      title: 'Governance Evolution Tracker',
      icon: TrendingUp,
      description: 'Historical governance pattern analysis and trends',
      color: 'from-amber-700/25 via-orange-600/20 to-yellow-700/25',
      borderColor: 'border-amber-600/40'
    },
    {
      id: 'decision-impact-archive',
      title: 'Decision Impact Archive',
      icon: FileText,
      description: 'Past proposal outcomes and their long-term effects',
      color: 'from-orange-700/25 via-amber-600/20 to-yellow-700/25',
      borderColor: 'border-orange-600/40'
    },
    {
      id: 'member-journey-chronicles',
      title: 'Member Journey Chronicles',
      icon: Users,
      description: 'Historical member behavior and engagement evolution',
      color: 'from-yellow-700/25 via-amber-600/20 to-orange-700/25',
      borderColor: 'border-yellow-600/40'
    },
    {
      id: 'pattern-recognition-matrix',
      title: 'Pattern Recognition Matrix',
      icon: Brain,
      description: 'AI analysis of recurring governance cycles and trends',
      color: 'from-amber-700/25 via-yellow-600/20 to-orange-700/25',
      borderColor: 'border-amber-600/40'
    },
    {
      id: 'historical-sentiment-analysis',
      title: 'Historical Sentiment Analysis',
      icon: Heart,
      description: 'Community mood evolution over time',
      color: 'from-orange-700/25 via-yellow-600/20 to-amber-700/25',
      borderColor: 'border-orange-600/40'
    },
    {
      id: 'predictive-historical-modeling',
      title: 'Predictive Historical Modeling',
      icon: Eye,
      description: 'Using past data to forecast future governance patterns',
      color: 'from-yellow-700/25 via-orange-600/20 to-amber-700/25',
      borderColor: 'border-yellow-600/40'
    }
  ];

  const mysticalArchiveFeatures = [
    {
      icon: Clock,
      title: 'Timeline Visualization Engine',
      description: 'Interactive governance evolution timeline with mystical styling'
    },
    {
      icon: Zap,
      title: 'Pattern Recognition Insights',
      description: 'AI-powered analysis of recurring historical governance cycles'
    },
    {
      icon: BookOpen,
      title: 'Archive Search & Exploration',
      description: 'Deep historical data mining and trend discovery tools'
    },
    {
      icon: Activity,
      title: 'Historical Data Flow Analysis',
      description: 'Temporal data patterns and governance evolution tracking'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Book Icon and The Archive Chamber Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-600/40">
              <Book size={32} className="text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-amber-600/40 mr-2">
                  <Book size={32} className="text-amber-600" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Archive Chamber</span>
              <span className="hidden lg:inline">The Archive Chamber</span>
            </h1>
          </div>
          
          {/* Ancient Historical Data Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-amber-600/80 text-lg text-right">Ancient Historical Data Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Historical Analysis Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
              <span className="text-amber-600 font-mono text-sm">STREAM_006 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-amber-600/30"></div>
            <span className="text-amber-600/70 font-mono text-sm">ARCHIVE PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Historical Analysis Panels</h2>
            <p className="text-amber-600/70">Ancient wisdom and mystical historical data analysis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {historicalAnalysisPanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-amber-600/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Ancient Scroll Pattern Background */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Ancient scroll elements */}
                        <rect x="10" y="15" width="80" height="70" rx="5" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-amber-600" strokeDasharray="3,2" />
                        <rect x="15" y="20" width="70" height="60" rx="3" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-orange-600" strokeDasharray="2,1" />
                        
                        {/* Scroll text lines */}
                        <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.4" className="text-amber-600" />
                        <line x1="20" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="0.3" className="text-orange-600" />
                        <line x1="20" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="0.3" className="text-yellow-600" />
                        <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.4" className="text-amber-600" />
                        <line x1="20" y1="55" x2="65" y2="55" stroke="currentColor" strokeWidth="0.3" className="text-orange-600" />
                        <line x1="20" y1="60" x2="75" y2="60" stroke="currentColor" strokeWidth="0.3" className="text-yellow-600" />
                        <line x1="20" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="0.4" className="text-amber-600" />
                        
                        {/* Ancient symbols */}
                        <circle cx="25" cy="25" r="2" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-amber-600" />
                        <path d="M23,25 L27,25 M25,23 L25,27" stroke="currentColor" strokeWidth="0.3" className="text-amber-600" />
                        
                        <circle cx="85" cy="75" r="1.5" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-orange-600" />
                        <circle cx="85" cy="75" r="0.8" fill="currentColor" className="text-orange-600" />
                        
                        {/* Timeline elements */}
                        <path d="M5,45 Q25,35 45,45 T85,45" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-yellow-600" strokeDasharray="1,1" />
                        <circle cx="15" cy="42" r="1" fill="currentColor" className="text-amber-600 animate-pulse" />
                        <circle cx="45" cy="45" r="1" fill="currentColor" className="text-orange-600 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <circle cx="75" cy="42" r="1" fill="currentColor" className="text-yellow-600 animate-pulse" style={{ animationDelay: '1s' }} />
                        
                        {/* Scroll decorative corners */}
                        <path d="M10,15 Q8,13 10,11 Q12,13 10,15" fill="currentColor" className="text-amber-600" />
                        <path d="M90,15 Q92,13 90,11 Q88,13 90,15" fill="currentColor" className="text-amber-600" />
                        <path d="M10,85 Q8,87 10,89 Q12,87 10,85" fill="currentColor" className="text-amber-600" />
                        <path d="M90,85 Q92,87 90,89 Q88,87 90,85" fill="currentColor" className="text-amber-600" />
                      </svg>
                    </div>
                    
                    {/* Ancient Archive Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1" className="text-amber-600" />
                        <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="0.8" className="text-amber-600" />
                        <line x1="8" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="0.6" className="text-orange-600" />
                        <line x1="8" y1="16" x2="15" y2="16" stroke="currentColor" strokeWidth="0.6" className="text-yellow-600" />
                        <circle cx="6" cy="6" r="1" fill="currentColor" className="text-amber-600" />
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
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(217, 119, 6, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-amber-600/70 text-sm mb-4 group-hover:text-amber-500/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-amber-600/20 to-orange-600/20 flex items-center justify-center">
                            <Archive size={16} className="text-amber-600/60" />
                          </div>
                          <span className="text-xs text-amber-600/50 font-mono">AWAITING HISTORICAL DATA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-amber-600/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical Archive Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Archive Intelligence</h2>
            <p className="text-amber-600/70">Live historical analysis and pattern streams</p>
          </div>
          
          <div className="space-y-4">
            {mysticalArchiveFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-orange-600/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Ancient Manuscript Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`manuscript-${index}`} x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                            <rect x="2" y="5" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-amber-600" strokeDasharray="2,1" />
                            <line x1="5" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="0.2" className="text-amber-600" />
                            <line x1="5" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="0.2" className="text-orange-600" />
                            <line x1="5" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="0.2" className="text-yellow-600" />
                            <line x1="5" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="0.2" className="text-amber-600" />
                            <circle cx="4" cy="8" r="0.8" fill="currentColor" className="text-amber-600" />
                            <path d="M26,7 Q28,5 26,3 Q24,5 26,7" fill="currentColor" className="text-orange-600" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#manuscript-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-amber-700/20 via-orange-600/15 to-amber-700/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-amber-600"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(217, 119, 6, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-amber-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-amber-600/70 text-sm mb-4 group-hover:text-amber-500/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-amber-600/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-amber-600/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-amber-600/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-amber-600/50 font-mono">MONITORING ARCHIVE</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-amber-600/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-amber-600/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-600/70 font-mono">
                PANELS: {historicalAnalysisPanels.length} | FEEDS: {mysticalArchiveFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-600/60 rounded-full animate-pulse"></div>
                <span className="text-amber-600/70 font-mono">ARCHIVE ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheArchiveChamber;