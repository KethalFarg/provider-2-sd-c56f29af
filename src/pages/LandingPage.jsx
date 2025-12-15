import React from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';

// --- Helper Components ---
const Heading = ({ level = 2, theme = 'light', className = '', children }) => {
  const Tag = `h${level}`;
  const color = theme === 'dark' ? 'text-white' : 'text-slate-800';
  const sizeClass = {
    1: "text-4xl md_text-5xl lg_text-6xl font-light tracking-tight",
    2: "text-3xl md_text-4xl lg_text-5xl font-light tracking-tight",
    3: "text-2xl md_text-3xl font-normal",
    4: "text-xl font-medium"
  }[level];

  return <Tag className={`${sizeClass} ${color} ${className}`}>{children}</Tag>;
};

const Text = ({ theme = 'light', size = 'base', className = '', children }) => {
  const color = theme === 'dark' ? 'text-clinical-100 opacity-90' : 'text-slate-600';
  const sizeClass = {
    sm: "text-sm leading-relaxed",
    base: "text-base leading-relaxed",
    lg: "text-lg md_text-xl leading-relaxed font-light"
  }[size];

  return <p className={`${sizeClass} ${color} ${className}`}>{children}</p>;
};

const Button = ({ variant = 'primary', fullWidth = false, className = '', children, onClick }) => {
  const base = "px-8 py-3 rounded-md font-medium transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer";
  const styles = {
    primary: "bg-brand-orange text-white",
    outline: "border-2 border-clinical-900 text-clinical-900 hover:bg-clinical-50",
  }[variant];

  // Manual hover effect via class not supported in inline styles easily without CSS, relying on CSS hover
  return (
    <button onClick={onClick} className={`${base} ${styles} ${fullWidth ? "w-full" : ""} ${className}`}>
      {children}
    </button>
  );
};

const Circle = ({ size = "w-64 h-64", color = "bg-clinical-800", opacity = "opacity-50", blur = "", position = "" }) => (
  <div className={`absolute rounded-full pointer-events-none ${size} ${color} ${opacity} ${blur} ${position}`} />
);

const Ring = ({ size = "w-64 h-64", color = "border-clinical-800", opacity = "opacity-20", width = "border-2", position = "" }) => (
  <div className={`absolute rounded-full pointer-events-none ${size} ${color} ${opacity} ${width} ${position} border-solid`} />
);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container" style={{ padding: 0 }}>
      {/* RotatedSplitHero Implementation */}
      <div className="relative w-full flex flex-col lg_flex-row h-screen max-h-screen shadow-xl overflow-hidden">

        {/* 
           LEFT PANEL (1/3) - Teal Gradient
           This replaces the checkered area.
        */}
        <div className="relative w-full lg_w-35 bg-clinical-900 overflow-hidden">
          {/* Background Image Layer */}
          {/* Mobile Background Image - New dedicated image */}
          <div
            className="absolute inset-0 bg-cover bg-y-20 bg-no-repeat lg_hidden"
            style={{
              backgroundImage: "url('https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/51002061-9724-443e-1dd6-a4de4a178300/public')"
            }}
          />

          {/* Desktop Background Image - Original image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg_block"
            style={{
              backgroundImage: "url('https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/a8a74e0d-bd10-4257-9d4a-72e79c17c500/public')"
            }}
          />

          {/* Teal Gradient Overlay - Adjusted opacity for visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-start to-teal-end opacity-90 mix-blend-multiply" />

          {/* Light Overlay for texture */}
          <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-white opacity-10 mix-blend-overlay pointer-events-none" />

          {/* New Left Content */}
          {/* New Left Content - Removed as requested */}
          <div className="relative z-10 px-8 py-16 lg_px-12 lg_py-0 flex flex-col justify-center h-full">
          </div>
        </div>

        {/* 
           RIGHT PANEL (2/3) - White Background
           This holds the main text content.
        */}
        <div className="relative w-full lg_w-65 bg-white flex flex-col justify-center p-8 lg_p-24 overflow-hidden">
          {/* Subtle Light-side decoration */}
          <div className="absolute right-0 top-0 w-1_2 h-full bg-clinical-50 opacity-50 pointer-events-none skew-x-12 origin-top-right translate-x-32" />

          <div className="relative z-10 max-w-2xl">
            {/* Logo added above headline */}
            {/* Logo added above headline */}
            <img
              src="https://imagedelivery.net/ye6TBwd9tSy8dGYL2VHjgg/fdd5f772-73a3-4208-fd11-f03e2a90eb00/public"
              alt="Logo"
              className="mb-8 h-16 w-auto hidden lg_block"
            />
            <Heading level={1} theme="light" className="text-teal-headline mb-4">
              CREATING YOUR PERSONALIZED PATIENT ACQUISITION STRATEGY
            </Heading>
            <Text theme="light" className="mt-6">
              Share key details about your practice so we can customize your lead delivery and growth strategy.
            </Text>

            <div className="mt-10">
              <Button variant="primary" onClick={() => navigate('/basics/cover')}>
                CONTINUE
              </Button>
            </div>
          </div>
        </div>

        {/* 
            SHARED DECORATION LAYER 
            Absolute on top of the flex container to allow orbs to cross the boundary.
        */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 11 }}>

          {/* Big Bridge Orb */}
          <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full bg-clinical-600 opacity-10 mix-blend-multiply blur-3xl z-20" style={{ transform: 'translate(30%, -50%)' }} />

          {/* Highlight Orb */}
          <Circle size="w-96 h-96" position="left-0 top-0" color="bg-teal-400" opacity="opacity-10" blur="blur-3xl" />

          {/* Geometric Connector Ring - Positioned near the split */}
          <Ring size="w-96 h-96" position="left-0 top-1/2" color="border-clinical-800" width="border-2" opacity="opacity-10" style={{ transform: 'translate(110%, -50%)' }} />

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
