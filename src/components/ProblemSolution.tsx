import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Tired of hunting for deals?
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            The path to becoming a successful creator is filled with roadblocks: inconsistent paychecks, the struggle to find reliable brand deals, and the overwhelming feeling of not knowing where to start. You're talented, but your income shouldn't be a guessing game.
          </p>
        </div>
        <div className="animate-on-scroll dynamic-3d-card">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video 
              autoPlay 
              loop 
              playsInline 
              controls 
              className="w-full h-auto object-cover rounded-xl shadow-lg border border-slate-700"
            >
              <source 
                src="https://assets.whop.com/uploads-optimized/2024-12-02/user_6083186_53bda3b9-e74b-4daa-8ecf-125d8094a677.mp4" 
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;