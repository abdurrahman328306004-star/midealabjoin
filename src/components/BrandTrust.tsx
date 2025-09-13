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
    <section className="py-16 px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center animate-on-scroll">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-8">
          Trusted by Creators and Brands
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out max-h-16 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;