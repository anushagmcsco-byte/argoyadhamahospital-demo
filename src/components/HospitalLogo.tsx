import React from 'react';

interface HospitalLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'dark' | 'white';
  showSubtitle?: boolean;
}

export const HospitalLogo: React.FC<HospitalLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showSubtitle = true,
}) => {
  // Dimensions based on size
  const iconSizes = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-13 h-13 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const titleSizes = {
    xs: 'text-xs tracking-tight',
    sm: 'text-sm sm:text-base tracking-tight',
    md: 'text-lg sm:text-xl md:text-2xl tracking-tight',
    lg: 'text-2xl sm:text-3xl md:text-4xl tracking-tight',
    xl: 'text-3xl sm:text-4xl md:text-5xl tracking-tight',
  };

  const subtitle1Sizes = {
    xs: 'text-[6px] tracking-wider',
    sm: 'text-[8px] sm:text-[9px] tracking-wider',
    md: 'text-[9.5px] sm:text-[11px] md:text-[12px] tracking-wide font-extrabold',
    lg: 'text-xs sm:text-sm tracking-wide font-extrabold',
    xl: 'text-sm sm:text-base tracking-wide font-extrabold',
  };

  const subtitle2Sizes = {
    xs: 'text-[5.5px] tracking-widest',
    sm: 'text-[7.5px] sm:text-[8.5px] tracking-widest',
    md: 'text-[9px] sm:text-[10px] md:text-[11px] tracking-widest font-extrabold',
    lg: 'text-xs tracking-widest font-extrabold',
    xl: 'text-sm tracking-widest font-extrabold',
  };

  const isDark = variant === 'dark' || variant === 'white';
  const primaryTextColor = isDark ? 'text-white' : 'text-[#0052CC]';
  const subTextColor = isDark ? 'text-blue-200' : 'text-[#0052CC]';
  const ecgStrokeColor = isDark ? '#FFFFFF' : '#0052CC';

  return (
    <div className={`inline-flex items-center space-x-2.5 sm:space-x-3.5 select-none ${className}`}>
      {/* Authentic Arogyadhama Emblem (Red Heart + Blue Hand + AH ECG Lifeline) */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 200 180"
          className="w-full h-full drop-shadow-sm overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. Red Heart */}
          <path
            d="M95 134 C90 128, 22 86, 22 46 C22 22, 40 6, 65 6 C80 6, 90 13, 95 21 C100 13, 110 6, 125 6 C150 6, 168 22, 168 46 C168 86, 100 128, 95 134 Z"
            fill="#EF233C"
          />

          {/* 2. Caring Hand Cupping Base in Royal Blue */}
          {/* Main cupped palm */}
          <path
            d="M24 142 C36 130, 62 128, 95 134 C128 140, 154 134, 172 120 C160 144, 128 160, 95 160 C62 160, 38 153, 24 142 Z"
            fill="#0052CC"
          />
          {/* Supporting lower finger curve */}
          <path
            d="M26 142 C16 150, 24 163, 46 171 C70 179, 124 179, 156 163 C172 155, 180 144, 182 134 C170 145, 150 155, 124 158 C90 162, 55 158, 36 149 C30 146, 27 144, 26 142 Z"
            fill="#0041A3"
          />

          {/* 3. Inside the Heart: AH Monogram + Medical Pulse Wave */}
          {/* Letter 'A' */}
          <path
            d="M44 88 L54 50 L64 88 M47 77 L61 77"
            stroke={ecgStrokeColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter 'H' */}
          <path
            d="M71 50 L71 88 M85 50 L85 88 M71 69 L85 69"
            stroke={ecgStrokeColor}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Connector Node Circles between H and Pulse */}
          <circle cx="92" cy="69" r="2.5" fill={ecgStrokeColor} />
          <circle cx="99" cy="69" r="2.5" fill={ecgStrokeColor} />

          {/* ECG Pulse Waveform extending from H, across the heart, and breaking out the right side */}
          <path
            d="M85 69 L104 69 L108 60 L113 74 L119 36 L126 98 L133 52 L139 69 L154 69 L162 60 L168 76 L174 69 L196 69"
            stroke={ecgStrokeColor}
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Pulse Terminal Node */}
          <circle cx="196" cy="69" r="3.5" fill={ecgStrokeColor} />
        </svg>
      </div>

      {/* Brand Typography (Exact reproduction of uploaded logo) */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center leading-none">
          {/* Top Line: AROGYADHAMA */}
          <span 
            className={`font-black font-sans uppercase tracking-tight ${titleSizes[size]} ${primaryTextColor}`}
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif", letterSpacing: '-0.02em' }}
          >
            AROGYADHAMA
          </span>
          
          {/* Bottom Subtitle Lines */}
          {showSubtitle && (
            <div className="flex flex-col mt-0.5 sm:mt-1">
              <span className={`uppercase font-sans font-extrabold ${subtitle1Sizes[size]} ${subTextColor} leading-tight`}>
                HEART AND SUPERSPECIALITY
              </span>
              <span className={`uppercase font-sans font-extrabold ${subtitle2Sizes[size]} ${subTextColor} leading-tight`}>
                HOSPITAL
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
