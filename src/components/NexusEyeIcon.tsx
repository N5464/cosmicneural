import React from 'react';

interface NexusEyeIconProps {
  size?: number;
  className?: string;
}

const NexusEyeIcon: React.FC<NexusEyeIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`nexus-eye-icon translate-x-[-3px] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Eye Shape - Ancient Almond Form */}
      <path
        d="M2 12 Q6 6 12 6 Q18 6 22 12 Q18 18 12 18 Q6 18 2 12 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        className="opacity-90 outer-eye-pulse"
      />
      
      {/* Inner Eye Boundary */}
      <path
        d="M4 12 Q7 8 12 8 Q17 8 20 12 Q17 16 12 16 Q7 16 4 12 Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        className="opacity-70 inner-eye-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      
      {/* Iris - Central Mystical Circle */}
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        className="opacity-80 iris-glow"
        fillOpacity="0.15"
      />
      
      {/* Inner Iris Ring */}
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        className="opacity-60 iris-ring-pulse"
        style={{ animationDelay: '0.6s' }}
      />
      
      {/* Pupil - The All-Seeing Core */}
      <circle
        cx="12"
        cy="12"
        r="1.5"
        fill="currentColor"
        className="opacity-95 pupil-core-pulse"
      />
      
      {/* Central Light Reflection */}
      <circle
        cx="11.2"
        cy="11.2"
        r="0.4"
        fill="currentColor"
        className="opacity-70"
      />
      
      {/* Neural Pathway Lines - Top */}
      <path
        d="M12 2 L12 6"
        stroke="currentColor"
        strokeWidth="0.8"
        className="opacity-60 neural-line-flicker"
      />
      <path
        d="M8 3 L10 5"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '0.2s' }}
      />
      <path
        d="M16 3 L14 5"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '0.4s' }}
      />
      
      {/* Neural Pathway Lines - Bottom */}
      <path
        d="M12 18 L12 22"
        stroke="currentColor"
        strokeWidth="0.8"
        className="opacity-60 neural-line-flicker"
        style={{ animationDelay: '0.1s' }}
      />
      <path
        d="M8 21 L10 19"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '0.3s' }}
      />
      <path
        d="M16 21 L14 19"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Neural Pathway Lines - Left */}
      <path
        d="M2 12 L6 12"
        stroke="currentColor"
        strokeWidth="0.8"
        className="opacity-60 neural-line-flicker"
        style={{ animationDelay: '0.7s' }}
      />
      <path
        d="M3 8 L5 10"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '0.9s' }}
      />
      <path
        d="M3 16 L5 14"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '1.1s' }}
      />
      
      {/* Neural Pathway Lines - Right */}
      <path
        d="M18 12 L22 12"
        stroke="currentColor"
        strokeWidth="0.8"
        className="opacity-60 neural-line-flicker"
        style={{ animationDelay: '0.8s' }}
      />
      <path
        d="M21 8 L19 10"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '1.0s' }}
      />
      <path
        d="M21 16 L19 14"
        stroke="currentColor"
        strokeWidth="0.6"
        className="opacity-50 neural-line-flicker"
        style={{ animationDelay: '1.2s' }}
      />
      
      {/* Ancient Runic Marks - Corners */}
      <path
        d="M4 4 L5 5 M5 4 L4 5"
        stroke="currentColor"
        strokeWidth="0.4"
        className="opacity-40 rune-flicker"
      />
      <path
        d="M20 4 L19 5 M19 4 L20 5"
        stroke="currentColor"
        strokeWidth="0.4"
        className="opacity-40 rune-flicker"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M4 20 L5 19 M5 20 L4 19"
        stroke="currentColor"
        strokeWidth="0.4"
        className="opacity-40 rune-flicker"
        style={{ animationDelay: '1.0s' }}
      />
      <path
        d="M20 20 L19 19 M19 20 L20 19"
        stroke="currentColor"
        strokeWidth="0.4"
        className="opacity-40 rune-flicker"
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Mystical Energy Nodes */}
      <circle
        cx="12"
        cy="6"
        r="0.8"
        fill="currentColor"
        className="opacity-50 energy-node-pulse"
      />
      <circle
        cx="18"
        cy="12"
        r="0.8"
        fill="currentColor"
        className="opacity-50 energy-node-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      <circle
        cx="12"
        cy="18"
        r="0.8"
        fill="currentColor"
        className="opacity-50 energy-node-pulse"
        style={{ animationDelay: '0.6s' }}
      />
      <circle
        cx="6"
        cy="12"
        r="0.8"
        fill="currentColor"
        className="opacity-50 energy-node-pulse"
        style={{ animationDelay: '0.9s' }}
      />
      
      {/* Outer Mystical Ring */}
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeDasharray="2,3"
        className="opacity-30 outer-ring-rotate"
        style={{ animationDuration: '30s' }}
      />
      
      {/* Inner Mystical Ring */}
      <circle
        cx="12"
        cy="12"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeDasharray="1,4"
        className="opacity-20 inner-ring-rotate"
        style={{ animationDuration: '25s', animationDirection: 'reverse' }}
      />
    </svg>
  );
};

export default NexusEyeIcon;