import React from 'react';

interface HospitalBuildingPhotoProps {
  className?: string;
  variant?: 'banner' | 'card' | 'feature';
  overlay?: boolean;
}

export const HospitalBuildingPhoto: React.FC<HospitalBuildingPhotoProps> = ({
  className = '',
  variant = 'banner',
  overlay = true,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* SVG illustration representing the authentic building facade of Arogyadhama Hospital */}
      <svg
        viewBox="0 0 1000 480"
        className="w-full h-full object-cover select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky Background */}
        <rect width="1000" height="480" fill="#E2E8F0" />
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9D6DF" />
            <stop offset="60%" stopColor="#E5EDF4" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>

          <linearGradient id="buildingCream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9EB" />
            <stop offset="100%" stopColor="#F5ECE0" />
          </linearGradient>

          <linearGradient id="buildingBeige" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C8A585" />
            <stop offset="100%" stopColor="#A88262" />
          </linearGradient>

          <linearGradient id="signboardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="blueGlass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007ACC" />
            <stop offset="50%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#003580" />
          </linearGradient>
        </defs>

        <rect width="1000" height="480" fill="url(#skyGrad)" />

        {/* Ground / Front Courtyard */}
        <polygon points="0,380 1000,380 1000,480 0,480" fill="#C59D6F" />
        <polygon points="0,410 1000,410 1000,480 0,480" fill="#AF8759" />

        {/* --- MAIN BUILDING STRUCTURE --- */}
        {/* Left Wing (Beige + Terracotta Texture) */}
        <rect x="50" y="80" width="220" height="280" fill="url(#buildingBeige)" />
        {/* Left Wing windows */}
        <rect x="80" y="110" width="60" height="50" fill="#1E293B" rx="3" />
        <line x1="110" y1="110" x2="110" y2="160" stroke="#FFF" strokeWidth="2" />
        <line x1="80" y1="135" x2="140" y2="135" stroke="#FFF" strokeWidth="2" />
        <rect x="75" y="165" width="30" height="22" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />

        <rect x="170" y="110" width="60" height="50" fill="#1E293B" rx="3" />
        <line x1="200" y1="110" x2="200" y2="160" stroke="#FFF" strokeWidth="2" />
        <line x1="170" y1="135" x2="230" y2="135" stroke="#FFF" strokeWidth="2" />

        <rect x="80" y="220" width="60" height="60" fill="#1E293B" rx="3" />
        <line x1="110" y1="220" x2="110" y2="280" stroke="#FFF" strokeWidth="2" />
        <line x1="80" y1="250" x2="140" y2="250" stroke="#FFF" strokeWidth="2" />

        <rect x="170" y="220" width="60" height="60" fill="#1E293B" rx="3" />
        <line x1="200" y1="220" x2="200" y2="280" stroke="#FFF" strokeWidth="2" />
        <line x1="170" y1="250" x2="230" y2="250" stroke="#FFF" strokeWidth="2" />

        {/* Right Wing (Beige + Terracotta Texture) */}
        <rect x="730" y="80" width="220" height="280" fill="url(#buildingBeige)" />
        {/* Right Wing windows */}
        <rect x="760" y="110" width="60" height="50" fill="#1E293B" rx="3" />
        <line x1="790" y1="110" x2="790" y2="160" stroke="#FFF" strokeWidth="2" />
        <line x1="760" y1="135" x2="820" y2="135" stroke="#FFF" strokeWidth="2" />

        <rect x="850" y="110" width="60" height="50" fill="#1E293B" rx="3" />
        <line x1="880" y1="110" x2="880" y2="160" stroke="#FFF" strokeWidth="2" />
        <line x1="850" y1="135" x2="910" y2="135" stroke="#FFF" strokeWidth="2" />

        <rect x="760" y="220" width="60" height="60" fill="#1E293B" rx="3" />
        <line x1="790" y1="220" x2="790" y2="280" stroke="#FFF" strokeWidth="2" />
        <line x1="760" y1="250" x2="820" y2="250" stroke="#FFF" strokeWidth="2" />

        <rect x="850" y="220" width="60" height="60" fill="#1E293B" rx="3" />
        <line x1="880" y1="220" x2="880" y2="280" stroke="#FFF" strokeWidth="2" />
        <line x1="850" y1="250" x2="910" y2="250" stroke="#FFF" strokeWidth="2" />

        {/* Central Hospital Facade Block (White/Cream) */}
        <rect x="250" y="60" width="500" height="300" fill="url(#buildingCream)" stroke="#E2E8F0" strokeWidth="2" />

        {/* Parapet / Roof Border */}
        <rect x="240" y="45" width="520" height="20" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* --- MAIN BLACK SIGNBOARD (SIGNATURE TOP FACADE) --- */}
        <rect x="330" y="60" width="370" height="75" rx="4" fill="url(#signboardGrad)" stroke="#334155" strokeWidth="2" />

        {/* Signboard Logo on Left: Red Heart + Blue Hand + AH Pulse */}
        <g transform="translate(345, 68) scale(0.28)">
          <path
            d="M95 134 C90 128, 22 86, 22 46 C22 22, 40 6, 65 6 C80 6, 90 13, 95 21 C100 13, 110 6, 125 6 C150 6, 168 22, 168 46 C168 86, 100 128, 95 134 Z"
            fill="#EF233C"
          />
          <path
            d="M24 142 C36 130, 62 128, 95 134 C128 140, 154 134, 172 120 C160 144, 128 160, 95 160 C62 160, 38 153, 24 142 Z"
            fill="#0052CC"
          />
          <path
            d="M44 88 L54 50 L64 88 M47 77 L61 77"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M71 50 L71 88 M85 50 L85 88 M71 69 L85 69"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M85 69 L104 69 L108 60 L113 74 L119 36 L126 98 L133 52 L139 69 L196 69"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* Signboard Text Lines */}
        <text x="515" y="94" textAnchor="middle" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="21" letterSpacing="2.5">
          AROGYADHAMA
        </text>
        <text x="515" y="114" textAnchor="middle" fill="#E2E8F0" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="1.2">
          HEART AND SUPER SPECIALITY HOSPITAL
        </text>

        {/* --- 1ST FLOOR BLUE TINTED GLASS ARCHITECTURE --- */}
        <rect x="410" y="145" width="210" height="90" fill="url(#blueGlass)" rx="3" stroke="#003580" strokeWidth="2" />
        {/* Glass vertical mullions */}
        <line x1="515" y1="145" x2="515" y2="235" stroke="#FFFFFF" strokeWidth="3" opacity="0.8" />
        <line x1="462" y1="145" x2="462" y2="235" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
        <line x1="567" y1="145" x2="567" y2="235" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
        {/* Air conditioning outdoor units under windows */}
        <rect x="415" y="210" width="30" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="430" cy="220" r="6" fill="#94A3B8" />
        <rect x="585" y="210" width="30" height="20" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="600" cy="220" r="6" fill="#94A3B8" />

        {/* 1st Floor Canopy / Overhang with decorative vertical louvres */}
        <rect x="330" y="238" width="370" height="15" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
        {/* Louvres */}
        {[345, 360, 375, 390, 405, 620, 635, 650, 665, 680].map((lx) => (
          <rect key={lx} x={lx} y="235" width="5" height="18" fill="#CBD5E1" />
        ))}

        {/* --- GROUND FLOOR MAIN ENTRANCE PORTICO --- */}
        <rect x="440" y="255" width="150" height="110" fill="#1E293B" />
        {/* Glass Sliding Entrance Doors */}
        <rect x="455" y="265" width="120" height="100" fill="#0B1E3F" stroke="#475569" strokeWidth="2" />
        <line x1="515" y1="265" x2="515" y2="365" stroke="#64748B" strokeWidth="2" />
        {/* Warm light inside lobby */}
        <rect x="495" y="280" width="40" height="60" fill="#FEF08A" opacity="0.2" />

        {/* Windows on left & right of ground floor entrance */}
        <rect x="355" y="275" width="55" height="50" fill="#1E293B" rx="2" />
        <line x1="382" y1="275" x2="382" y2="325" stroke="#FFF" strokeWidth="1.5" />
        <line x1="355" y1="300" x2="410" y2="300" stroke="#FFF" strokeWidth="1.5" />

        <rect x="620" y="275" width="55" height="50" fill="#1E293B" rx="2" />
        <line x1="647" y1="275" x2="647" y2="325" stroke="#FFF" strokeWidth="1.5" />
        <line x1="620" y1="300" x2="675" y2="300" stroke="#FFF" strokeWidth="1.5" />

        {/* Entrance Steps and Ramp */}
        <polygon points="410,365 620,365 650,400 380,400" fill="#94A3B8" />
        <polygon points="430,365 600,365 620,385 410,385" fill="#CBD5E1" />

        {/* Perimeter Compound Wall */}
        <rect x="0" y="340" width="370" height="50" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <rect x="0" y="335" width="370" height="8" fill="#C8A585" />

        <rect x="670" y="340" width="330" height="50" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <rect x="670" y="335" width="330" height="8" fill="#C8A585" />

        {/* Entrance Gate Pillars */}
        <rect x="360" y="320" width="35" height="70" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="355" y="315" width="45" height="10" fill="#475569" />

        <rect x="650" y="320" width="35" height="70" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        <rect x="645" y="315" width="45" height="10" fill="#475569" />

        {/* Subtle Shadow under Building */}
        <ellipse cx="500" cy="390" rx="460" ry="15" fill="#000000" opacity="0.12" />
      </svg>

      {/* Optional Gradient Overlay for text contrast */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
