import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 max-w-2xl mx-auto text-center animate-on-scroll dynamic-3d-card">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
        Your Investment in Yourself
      </h2>
      <p className="text-xl text-gray-400 mb-10">
        This isn't a cost—it's a strategic, long-term investment in your career and financial freedom. Unlock the potential for a massive return on your future.
      </p>
      <div className="p-10 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl hover:border-purple-500/50 transition-colors duration-300 dynamic-3d-card">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <div className="relative z-10">
        <div className="text-6xl sm:text-8xl font-extrabold text-white mb-6">
          $2,500<span className="text-3xl text-gray-400 font-normal">.00</span>
        </div>
        <p className="text-xl text-gray-400 font-medium mb-8">One-Time Purchase</p>
        <a 
          href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
          className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
        >
          Join MediaLabs
        </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;