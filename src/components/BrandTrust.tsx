import React from 'react';

const BrandTrust: React.FC = () => {
  const logos = [
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_724964f5-47b5-48c6-999b-660a5e27b66d.jpeg@avif?w=640&q=75",
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_585f7755-a1e4-4efb-ab80-1f27aef695a0.jpeg@avif?w=640&q=75",
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_01453c54-364c-4caa-987d-c8a5d299812f.jpeg@avif?w=640&q=75",
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_d12f16ea-5516-4502-88ad-2a6b3436c1cb.jpeg@avif?w=640&q=75",
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_77f13f90-7602-4507-9e08-67d311b049e9.jpeg@avif?w=640&q=75",
    "https://img-v2-prod.whop.com/unsafe/rs:fit:640:0/plain/https%3A%2F%2Fassets.whop.com%2Fuploads%2F2025-02-03%2Fuser_1222239_cdf28a49-a344-48cc-bc06-cecc6632c081.jpeg@avif?w=640&q=75"
  ];

  return (
    <section className="py-20 px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center animate-on-scroll">
        <h3 className="text-3xl sm:text-4xl font-semibold text-gray-400 mb-12">
          Trusted by Creators and Brands
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-center mb-16">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out max-h-24 w-auto hover:scale-110"
            />
          ))}
        </div>
        <div className="text-center">
          <a 
            href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
            className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
          >
            Start Your Creator Journey Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;