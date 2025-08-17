import React, { useState } from 'react';
import NeuralNexusBackground from './components/NeuralNexusBackground';
import DynamicDataConduitSidebar from './components/DynamicDataConduitSidebar';
import AncientGlyphMenuIcon from './components/AncientGlyphMenuIcon';
import TheObservatory from './components/TheObservatory';
import TheTribunalChamber from './components/TheTribunalChamber';
import TheConclaveHall from './components/TheConclaveHall';
import TheOraclesDen from './components/TheOraclesDen';
import TheVaultSanctum from './components/TheVaultSanctum';
import TheArchiveChamber from './components/TheArchiveChamber';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const handleNavClick = (label: string) => {
    setActiveContent(label);
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-ancient">
      <NeuralNexusBackground />

      {/* Conditional Content Rendering */}
      {activeContent === 'The Observatory' ? (
        <TheObservatory />
      ) : activeContent === 'The Tribunal Chamber' ? (
        <TheTribunalChamber />
      ) : activeContent === 'The Conclave Hall' ? (
        <TheConclaveHall />
      ) : activeContent === 'The Oracle\'s Den' ? (
        <TheOraclesDen />
      ) : activeContent === 'The Vault Sanctum' ? (
        <TheVaultSanctum />
      ) : activeContent === 'The Archive Chamber' ? (
        <TheArchiveChamber />
      ) : (
        <>
          {/* Default Home State - Empty with just the menu button */}
        </>
      )}

      {/* Sidebar Toggle Button - Always visible */}
      {!activeContent && (
        <button
          className="fixed top-4 left-4 z-50 p-3 rounded-none bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-md"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open navigation"
        >
          <AncientGlyphMenuIcon size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" />
        </button>
      )}

      {/* Back to Home Button - Show when content is active */}
      {activeContent && (
        <button
          className="fixed top-4 left-4 z-50 p-3 rounded-none bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-md"
          onClick={() => setActiveContent(null)}
          aria-label="Back to home"
        >
          <AncientGlyphMenuIcon size={24} className="text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" />
        </button>
      )}

      <DynamicDataConduitSidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        onNavClick={handleNavClick}
      />
    </div>
  );
};

export default App;