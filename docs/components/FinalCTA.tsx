import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="join" className="py-16 md:py-24 px-8 bg-slate-900 text-center border-t border-slate-800 animate-on-scroll hidden md:block">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Are you ready to quit your job and earn thousands monthly?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Join a community of top-tier creators and gain the skills, coaching, and brand access you need to succeed.
        </p>
        <a 
          href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
          className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
        >
          Join MediaLabs
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;