import React from 'react';

const PurpleGlow: React.FC = () => {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
        animation: 'pulse 10s infinite cubic-bezier(0.4, 0, 0.6, 1)'
      }}
    />
  );
};

export default PurpleGlow;