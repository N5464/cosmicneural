import React from 'react';

interface AncientGlyphMenuIconProps {
  size?: number;
  className?: string;
}

const AncientGlyphMenuIcon: React.FC<AncientGlyphMenuIconProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`ancient-glyph-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central Mystical Shard */}
      <path
        d="M12 8 L15 10.5 L14 12 L16 13.5 L12 16 L8 13.5 L10 12 L9 10.5 Z"
        fill="currentColor"
        className="opacity-90 core-pulse"
      />
      {/* Inner Energy Core */}
      <path
        d="M12 9.5 L13.5 11 L12 13 L10.5 11 Z"
        fill="currentColor"
        className="opacity-70 core-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      
      {/* Primary Ring Nodes */}
      <rect x="10.5" y="4.5" width="3" height="3" transform="rotate(45 12 6)" fill="currentColor" className="opacity-80" />
      <rect x="16.5" y="10.5" width="3" height="3" transform="rotate(45 18 12)" fill="currentColor" className="opacity-80" />
      <rect x="10.5" y="16.5" width="3" height="3" transform="rotate(45 12 18)" fill="currentColor" className="opacity-80" />
      <rect x="4.5" y="10.5" width="3" height="3" transform="rotate(45 6 12)" fill="currentColor" className="opacity-80" />
      
      {/* Secondary Ring Nodes */}
      <rect x="14.5" y="7.5" width="2" height="2" transform="rotate(45 15.5 8.5)" fill="currentColor" className="opacity-70" />
      <rect x="14.5" y="14.5" width="2" height="2" transform="rotate(45 15.5 15.5)" fill="currentColor" className="opacity-70" />
      <rect x="7.5" y="14.5" width="2" height="2" transform="rotate(45 8.5 15.5)" fill="currentColor" className="opacity-70" />
      <rect x="7.5" y="7.5" width="2" height="2" transform="rotate(45 8.5 8.5)" fill="currentColor" className="opacity-70" />
      
      {/* Outer Ring Nodes */}
      <rect x="11.2" y="2.2" width="1.6" height="1.6" transform="rotate(45 12 3)" fill="currentColor" className="opacity-60" />
      <rect x="20.2" y="11.2" width="1.6" height="1.6" transform="rotate(45 21 12)" fill="currentColor" className="opacity-60" />
      <rect x="11.2" y="20.2" width="1.6" height="1.6" transform="rotate(45 12 21)" fill="currentColor" className="opacity-60" />
      <rect x="2.2" y="11.2" width="1.6" height="1.6" transform="rotate(45 3 12)" fill="currentColor" className="opacity-60" />
      
      {/* Connection Lines - Primary */}
      <line x1="12" y1="10" x2="12" y2="8" stroke="currentColor" strokeWidth="0.8" className="opacity-60 line-flicker" />
      <line x1="14" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="0.8" className="opacity-60 line-flicker" style={{ animationDelay: '0.3s' }} />
      <line x1="12" y1="14" x2="12" y2="16" stroke="currentColor" strokeWidth="0.8" className="opacity-60 line-flicker" style={{ animationDelay: '0.6s' }} />
      <line x1="10" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="0.8" className="opacity-60 line-flicker" style={{ animationDelay: '0.9s' }} />
      
      {/* Connection Lines - Secondary */}
      <line x1="13.5" y1="10.5" x2="14.5" y2="9.5" stroke="currentColor" strokeWidth="0.6" className="opacity-50 line-flicker" style={{ animationDelay: '1.2s' }} />
      <line x1="13.5" y1="13.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="0.6" className="opacity-50 line-flicker" style={{ animationDelay: '1.5s' }} />
      <line x1="10.5" y1="13.5" x2="9.5" y2="14.5" stroke="currentColor" strokeWidth="0.6" className="opacity-50 line-flicker" style={{ animationDelay: '1.8s' }} />
      <line x1="10.5" y1="10.5" x2="9.5" y2="9.5" stroke="currentColor" strokeWidth="0.6" className="opacity-50 line-flicker" style={{ animationDelay: '2.1s' }} />
      
      {/* Ancient Runic Marks */}
      <path
        d="M12 4.5 L12.5 5.5 L11.5 5.5 Z"
        fill="currentColor"
        className="opacity-40"
      />
      <path
        d="M19.5 12 L18.5 11.5 L18.5 12.5 Z"
        fill="currentColor"
        className="opacity-40"
      />
      <path
        d="M12 19.5 L11.5 18.5 L12.5 18.5 Z"
        fill="currentColor"
        className="opacity-40"
      />
      <path
        d="M4.5 12 L5.5 12.5 L5.5 11.5 Z"
        fill="currentColor"
        className="opacity-40"
      />
      
      {/* Mystical Energy Rings */}
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeDasharray="2,3"
        className="opacity-30 ring-rotate"
        style={{ animationDuration: '25s' }}
      />
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeDasharray="1,4"
        className="opacity-20 ring-rotate"
        style={{ animationDuration: '35s', animationDirection: 'reverse' }}
      />
    </svg>
  );
};

export default AncientGlyphMenuIcon;