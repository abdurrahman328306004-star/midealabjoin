import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg animate-on-scroll dynamic-3d-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQG9yipPLmPmjQ/profile-displayphoto-shrink_800_800/B4EZOdWpJ8H0Ac-/0/1733511780713?e=1760572800&v=beta&t=BkLZPR6AMTGm4LtssGkyuREdB5xkVJdK5f1_IZfvkhc"
            alt="Alex P Sedlak"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Meet the Founder
          </h2>
          <h3 className="text-3xl font-semibold text-gray-300 mb-8">
            Alex P Sedlak
          </h3>
          <p className="text-xl text-gray-400 italic leading-relaxed border-l-4 border-purple-400 pl-6">
            "I've seen how businesses struggle to find skilled creators. At Media Labs, we train creators to be the internet's best, connecting them with brands ready to pay generously for top-notch content."
          </p>
          <div className="mt-8">
            <a 
              href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
              className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Learn From Alex Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;