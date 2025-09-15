import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I already made my money back 1 month after posting everyday.",
      name: "Eva Torrado",
      initials: "ET"
    },
    {
      quote: "made 2k my first month, INSANE.",
      name: "Maximus Ogden",
      initials: "MO"
    },
    {
      quote: "went from a $400 month to $8k COMMISION not including retainers all thanks to media labs.",
      name: "Nick Brown",
      initials: "NB"
    },
    {
      quote: "The community as a whole is great and it contains such valuable resources and information.",
      name: "Rodrigo Pena",
      initials: "RP"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-8 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 animate-on-scroll">
        Hear from Our Top Creators
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl animate-on-scroll testimonial-card hover:border-purple-500/30 transition-all duration-500"
          >
            <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center text-white text-2xl font-bold">
                {testimonial.initials}
              </div>
              <p className="ml-6 text-lg text-gray-400 font-semibold">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a 
          href="https://whop.com/media-labs?a=muhammadabdurrahman6004" 
          className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
        >
          Join These Successful Creators
        </a>
      </div>
    </section>
  );
};

export default Testimonials;