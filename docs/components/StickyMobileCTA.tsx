import React from 'react';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900 border-t border-slate-800 md:hidden">
      <a 
        href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
        className="block text-center bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 text-lg"
      >
        Join MediaLabs
      </a>
    </div>
  );
};

export default StickyMobileCTA;