import React from 'react';
import { 
  Shield, 
  Coins, 
  Lock, 
  LineChart, 
  AlertTriangle, 
  ShieldCheck, 
  Lightbulb,
  Activity,
  BellRing,
  DollarSign,
  TrendingUp,
  Vault,
  Eye
} from 'lucide-react';

const TheVaultSanctum: React.FC = () => {
  const treasurySecurityPanels = [
    {
      id: 'treasury-intelligence-monitor',
      title: 'Treasury Intelligence Monitor',
      icon: Coins,
      description: 'Real-time fund tracking and flow analysis',
      color: 'from-amber-600/25 via-yellow-500/20 to-gold-400/25',
      borderColor: 'border-amber-500/40'
    },
    {
      id: 'secure-data-repositories',
      title: 'Secure Data Repositories',
      icon: Lock,
      description: 'Encrypted storage and access management',
      color: 'from-slate-600/25 via-zinc-500/20 to-gray-600/25',
      borderColor: 'border-slate-500/40'
    },
    {
      id: 'financial-behavioral-analytics',
      title: 'Financial Behavioral Analytics',
      icon: LineChart,
      description: 'Spending pattern analysis and predictions',
      color: 'from-amber-600/25 via-yellow-500/20 to-gold-400/25',
      borderColor: 'border-amber-500/40'
    },
    {
      id: 'risk-assessment-oracle',
      title: 'Risk Assessment Oracle',
      icon: AlertTriangle,
      description: 'AI-powered security and financial risk analysis',
      color: 'from-red-600/25 via-rose-500/20 to-red-500/25',
      borderColor: 'border-red-500/40'
    },
    {
      id: 'asset-protection-matrix',
      title: 'Asset Protection Matrix',
      icon: ShieldCheck,
      description: 'Multi-layer security status and threat monitoring',
      color: 'from-slate-600/25 via-zinc-500/20 to-gray-600/25',
      borderColor: 'border-slate-500/40'
    },
    {
      id: 'treasury-optimization-engine',
      title: 'Treasury Optimization Engine',
      icon: Lightbulb,
      description: 'AI recommendations for fund allocation and growth',
      color: 'from-amber-600/25 via-yellow-500/20 to-gold-400/25',
      borderColor: 'border-amber-500/40'
    }
  ];

  const mysticalSecurityFeatures = [
    {
      icon: Activity,
      title: 'Real-time Treasury Health',
      description: 'Live treasury status indicators and fund flow monitoring'
    },
    {
      icon: BellRing,
      title: 'Security Breach Detection',
      description: 'AI-powered threat detection and security alert system'
    },
    {
      icon: DollarSign,
      title: 'Financial Flow Visualizations',
      description: 'Dynamic treasury movement and transaction analysis'
    },
    {
      icon: Shield,
      title: 'Asset Protection Status',
      description: 'Multi-layer security monitoring and protection metrics'
    }
  ];

  return (
    <div className="min-h-screen w-full p-6 font-ancient">
      {/* Header */}
      <div className="lg:absolute lg:top-6 lg:left-0 lg:right-0 lg:px-6 lg:py-4 lg:flex lg:justify-between lg:items-center lg:z-10">
        {/* Right-aligned group */}
        <div className="relative mb-8 px-4 flex flex-col items-end lg:items-end lg:mb-0 lg:px-0 lg:ml-auto">
          {/* Shield Icon and The Vault Sanctum Title */}
          <div className="flex items-center mb-2 justify-end lg:justify-end lg:space-x-2">
            <div className="hidden lg:block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-400/30">
              <Shield size={32} className="text-slate-300" />
            </div>
            <h1 className="text-3xl font-bold text-white text-right">
              <span className="lg:hidden inline-flex items-center">
                <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-400/30 mr-2">
                  <Shield size={32} className="text-slate-300" />
                </div>
                <span>THE</span>
              </span>
              <span className="lg:hidden block ml-16">Vault Sanctum</span>
              <span className="hidden lg:inline">The Vault Sanctum</span>
            </h1>
          </div>
          
          {/* Mystical Treasury & Security Command Center */}
          <div className="flex items-center justify-end lg:justify-end lg:space-x-4">
            <p className="text-slate-300/80 text-lg text-right">Mystical Treasury & Security Command Center</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Core Treasury & Security Panels Grid */}
        <div className="lg:col-span-2 lg:pt-40">
          {/* Status Indicator */}
          <div className="flex items-center space-x-3 justify-end lg:justify-start lg:ml-0 lg:mb-10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
              <span className="text-slate-400 font-mono text-sm">STREAM_005 ACTIVE</span>
            </div>
            <div className="w-px h-4 bg-slate-400/30"></div>
            <span className="text-slate-400/70 font-mono text-sm">VAULT PROTOCOLS SYNCHRONIZED</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Core Treasury & Security Panels</h2>
            <p className="text-slate-300/70">Mystical treasury management and security monitoring</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {treasurySecurityPanels.map((panel) => {
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
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-slate-400/10 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Vault Security Pattern Background */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Vault door pattern */}
                        <circle cx="20" cy="30" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-slate-400" />
                        <circle cx="20" cy="30" r="4" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-amber-400" />
                        <circle cx="80" cy="70" r="6" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-slate-400" />
                        <circle cx="80" cy="70" r="2" fill="currentColor" className="text-amber-400" />
                        
                        {/* Security grid lines */}
                        <path d="M10,10 L90,10 L90,90 L10,90 Z" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-slate-500" strokeDasharray="3,2" />
                        <path d="M30,10 L30,90 M50,10 L50,90 M70,10 L70,90" stroke="currentColor" strokeWidth="0.3" className="text-slate-500" strokeDasharray="2,1" />
                        <path d="M10,30 L90,30 M10,50 L90,50 M10,70 L90,70" stroke="currentColor" strokeWidth="0.3" className="text-slate-500" strokeDasharray="2,1" />
                        
                        {/* Lock symbols */}
                        <rect x="45" y="15" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-slate-400" />
                        <rect x="47" y="18" width="6" height="4" fill="currentColor" className="text-amber-400" />
                        
                        {/* Additional vault elements */}
                        <rect x="15" y="75" width="8" height="5" rx="2" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-slate-400" />
                        <circle cx="19" cy="77.5" r="1" fill="currentColor" className="text-amber-400" />
                        <rect x="75" y="20" width="6" height="4" rx="1.5" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-slate-400" />
                        <circle cx="78" cy="22" r="0.8" fill="currentColor" className="text-amber-400" />
                      </svg>
                    </div>
                    
                    {/* Vault Symbol */}
                    <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-amber-400" />
                        <circle cx="12" cy="12" r="1" fill="currentColor" className="text-amber-400" />
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
                              filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3)) drop-shadow(0 0 4px rgba(148, 163, 184, 0.4))'
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white group-hover:text-slate-100 transition-colors duration-300">
                            {panel.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-300/70 text-sm mb-4 group-hover:text-slate-200/80 transition-colors duration-300 min-h-[2.5rem]">
                        {panel.description}
                      </p>
                      
                      {/* Empty Data Container */}
                      <div className="h-24 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-slate-400/20 to-zinc-400/20 flex items-center justify-center">
                            <Vault size={16} className="text-slate-400/60" />
                          </div>
                          <span className="text-xs text-slate-400/50 font-mono">AWAITING TREASURY DATA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Energy Indicators */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-slate-400/60 rounded-full animate-ping"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mystical Security Intelligence Feed */}
        <div className="lg:col-span-1 lg:pt-40">
          <div className="mb-6 lg:mt-[64px]">
            <h2 className="text-xl font-semibold text-white mb-2">Mystical Security Intelligence</h2>
            <p className="text-slate-300/70">Live treasury and security streams</p>
          </div>
          
          <div className="space-y-4">
            {mysticalSecurityFeatures.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer transition-all duration-300 hover:scale-102"
                >
                  <div className="relative p-5 rounded-xl bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-400/5 via-zinc-400/5 to-slate-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Security Grid Background Pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`security-${index}`} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                            <rect x="5" y="8" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-slate-400" />
                            <circle cx="12.5" cy="13" r="2" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-amber-400" />
                            <circle cx="12.5" cy="13" r="0.5" fill="currentColor" className="text-amber-400" />
                            <path d="M2,2 L23,2 L23,23 L2,23 Z" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-slate-500" strokeDasharray="2,1" />
                            {/* Additional mechanical elements */}
                            <rect x="8" y="4" width="9" height="2" rx="1" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-slate-400" />
                            <rect x="10" y="19" width="5" height="2" rx="0.5" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-slate-400" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#security-${index})`} />
                      </svg>
                    </div>
                    
                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-slate-500/20 via-zinc-400/15 to-slate-500/20 backdrop-blur-sm border border-white/10">
                          <Icon 
                            size={20} 
                            className="text-slate-400"
                            style={{
                              filter: 'drop-shadow(0 0 6px rgba(148, 163, 184, 0.4))'
                            }}
                          />
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-slate-100 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-300/70 text-sm mb-4 group-hover:text-slate-200/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Empty Feed Container */}
                      <div className="h-32 rounded-lg bg-slate-800/20 border border-slate-700/30 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex space-x-1 mb-2 justify-center">
                            <div className="w-2 h-2 bg-slate-400/40 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-slate-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-slate-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-slate-400/50 font-mono">MONITORING SECURITY</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Activity Indicator */}
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-slate-400/60 rounded-full animate-pulse"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* System Status Footer */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900/60 to-slate-800/60 border border-slate-400/15">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400/70 font-mono">
                PANELS: {treasurySecurityPanels.length} | FEEDS: {mysticalSecurityFeatures.length}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-slate-400/60 rounded-full animate-pulse"></div>
                <span className="text-slate-400/70 font-mono">VAULT SECURED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheVaultSanctum;