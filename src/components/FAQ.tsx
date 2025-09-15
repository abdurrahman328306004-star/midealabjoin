import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is a refund possible?',
      answer: 'Due to the immediate access to our exclusive content, coaching, and community, we have a strict no return and no refund policy. Please ensure you are ready to invest in your future before purchasing.'
    },
    {
      question: 'How long until I see results?',
      answer: 'Based on testimonials from our community, some members have made their money back just 1 month after consistently posting everyday.'
    },
    {
      question: 'What kind of content will I be making?',
      answer: 'Our program focuses on training you to create high-quality short-form video and User-Generated Content (UGC) that brands are actively looking for.'
    }
  ];

  const toggleItem = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 animate-on-scroll">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-xl border border-slate-800 animate-on-scroll dynamic-3d-card hover:border-purple-500/30 transition-colors duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-7 h-7 text-gray-400 transform transition-transform duration-300 ${
                  activeItem === index ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
            <div
              className={`mt-6 transition-all duration-300 overflow-hidden ${
                activeItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-lg text-gray-400">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a 
          href="#join" 
          className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
        >
          Ready to Get Started?
        </a>
      </div>
    </section>
  );
};

export default FAQ;