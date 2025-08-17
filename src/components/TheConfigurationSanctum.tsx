import React from 'react';
import { 
  Key, 
  Brain, 
  Settings, 
  Lock, 
  Link, 
  Vote, 
  Monitor,
  SlidersHorizontal,
  Users,
  Plug,
  ScrollText,
  TrendingUp,
  Cog,
  Shield
} from 'lucide-react';

const TheConfigurationSanctum: React.FC = () => {
  const configurationPanels = [
    {
      id: 'neural-network-parameters',
      title: 'Neural Network Parameters',
      icon: Brain,
      description: 'AI consciousness settings and behavioral tuning',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    },
    {
      id: 'mystical-interface-controls',
      title: 'Mystical Interface Controls',
      icon: Settings,
      description: 'Visual theme and experience customization',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    },
    {
      id: 'system-access-management',
      title: 'System Access Management',
      icon: Lock,
      description: 'User permissions and security configurations',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    },
    {
      id: 'integration-gateway-settings',
      title: 'Integration Gateway Settings',
      icon: Link,
      description: 'External system connections and API management',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    },
    {
      id: 'governance-protocol-configuration',
      title: 'Governance Protocol Configuration',
      icon: Vote,
      description: 'Voting mechanisms and decision parameters',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    },
    {
      id: 'realtime-monitoring-controls',
      title: 'Real-Time Monitoring Controls',
      icon: Monitor,
      description: 'Alert thresholds and notification settings',
      color: 'from-red-950/25 via-red-900/20 to-red-800/25',
      borderColor: 'border-red-700/40'
    }
  ];

  const mysticalConfigurationFeatures = [
    {
      icon: SlidersHorizontal,
      title: 'Parameter Tuning Insights',
      description: 'Advanced configuration analytics and optimization recommendations'
    },
    {
      icon: Users,
      title: 'Access Control Visualizer',
      description: 'User permission mapping and security hierarchy visualization'
    },
    {
      icon: Plug,
      title: 'Integration Status Monitor',
      description: 'External system connection health and API performance tracking'
    },
    {
      icon: ScrollText,
      title: 'Protocol Adjustment Log',
      description: 'Configuration change history and system modification tracking'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Key Icon and The Configuration Sanctum Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-red-700/40">
              <Key size={32} className="text-red-700" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-red-700/40 mr-2">
                  <Key size={32} className="text-red-700" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Configuration Sanctum</span>
              <span className="hidden lg:inline">The Configuration Sanctum</span>
            </h1>
          </div>
          
          {/* Mystical System Configuration Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-red-700/80 text-lg text-right">Mystical System Configuration Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Configuration Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-700 rounded-full animate-pulse"></div>
              <span className="text-red-700 font-mono text-sm">STREAM_008 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-red-700/30"></div>
            <span className="text-red-700/70 font-mono text-sm">CONFIGURATION PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Configuration Panels</h2>
            <p className="text-red-700/70">Mystical system control and configuration management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {configurationPanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-red-700/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Ancient Configuration Pattern Background */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Ancient control symbols */}
                        <circle cx="20" cy="25" r="6" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-red-700" />
                        <circle cx="20" cy="25" r="3" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-800" />
                        <circle cx="20" cy="25" r="1" fill="currentColor" className="text-red-700" />
                        
                        <circle cx="80" cy="75" r="5" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-red-800" />
                        <circle cx="80" cy="75" r="2" fill="currentColor" className="text-red-700" />
                        
                        {/* Configuration grid lines */}
                        <path d="M10,10 L90,10 L90,90 L10,90 Z" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-700" strokeDasharray="3,2" />
                        <path d="M30,10 L30,90 M50,10 L50,90 M70,10 L70,90" stroke="currentColor" strokeWidth="0.2" className="text-red-800" strokeDasharray="2,1" />
                        <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70" stroke="currentColor" strokeWidth="0.2" className="text-red-900" strokeDasharray="2,1" />
                        
                        {/* Ancient control knobs */}
                        <rect x="45" y="15" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-red-700" />
                        <rect x="47" y="17" width="6" height="2" rx="1" fill="currentColor" className="text-red-800" />
                        <line x1="50" y1="15" x2="50" y2="21" stroke="currentColor" strokeWidth="0.3" className="text-red-700" />
                        
                        {/* Configuration switches */}
                        <rect x="15" y="75" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-900" />
                        <circle cx="17" cy="77" r="0.8" fill="currentColor" className="text-red-700" />
                        <circle cx="21" cy="77" r="0.8" fill="currentColor" className="text-red-800" />
                        
                        {/* Ancient runes for configuration */}
                        <path d="M75,20 L80,15 L85,20 L80,25 Z" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-700" />
                        <path d="M78,18 L82,18 M80,16 L80,20" stroke="currentColor" strokeWidth="0.2" className="text-red-800" />
                        
                        <path d="M25,85 Q30,80 35,85" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-900" />
                        <circle cx="30" cy="82" r="0.5" fill="currentColor" className="text-red-700" />
                        
                        {/* Configuration flow lines */}
                        <path d="M20,25 Q40,15 60,25 Q80,35 80,75" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-red-700" strokeDasharray="1,1" />
                        <circle cx="40" cy="20" r="0.5" fill="currentColor" className="text-red-800 animate-pulse" />
                        <circle cx="70" cy="50" r="0.5" fill="currentColor" className="text-red-900 animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </svg>
                    </div>
                    
                    {/* Configuration Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" className="text-red-700" />
                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-red-800" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-red-700" />
                        <path d="M12,4 L12,8 M12,16 L12,20 M4,12 L8,12 M16,12 L20,12" stroke="currentColor" strokeWidth="0.6" className="text-red-900" />
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
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(220, 38, 38, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-red-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-red-700/70 text-sm mb-4 group-hover:text-red-600/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-red-700/20 to-red-600/20 flex items-center justify-center">
                            <Cog size={16} className="text-red-700/60" />
                          </div>
                          <span className="text-xs text-red-700/50 font-mono">AWAITING CONFIGURATION</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-700/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical Configuration Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Configuration Intelligence</h2>
            <p className="text-red-700/70">Live configuration and control streams</p>
          </div>
          
          <div className="space-y-4">
            {mysticalConfigurationFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-red-700/20 hover:border-red-700/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700/5 via-red-700/5 to-red-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Configuration Control Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`config-${index}`} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                            <circle cx="12.5" cy="12.5" r="4" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-red-700" />
                            <circle cx="12.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-red-800" />
                            <circle cx="12.5" cy="12.5" r="0.8" fill="currentColor" className="text-red-700" />
                            <path d="M12.5,2 L12.5,6 M12.5,19 L12.5,23 M2,12.5 L6,12.5 M19,12.5 L23,12.5" stroke="currentColor" strokeWidth="0.2" className="text-red-900" />
                            <rect x="8" y="8" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="0.1" fill="none" className="text-red-700" strokeDasharray="1,1" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#config-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-red-900/20 via-red-800/15 to-red-900/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-red-700"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(220, 38, 38, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-red-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-red-700/70 text-sm mb-4 group-hover:text-red-600/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-red-700/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-red-700/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-red-700/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-red-700/50 font-mono">MONITORING CONFIGURATION</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-700/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-red-700/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-red-700/70 font-mono">
                PANELS: {configurationPanels.length} | FEEDS: {mysticalConfigurationFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-700/60 rounded-full animate-pulse"></div>
                <span className="text-red-700/70 font-mono">SANCTUM CONFIGURED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheConfigurationSanctum;