import React from 'react';
import { Users, Zap, MessageCircle, Monitor } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert-Led Coaching',
      description: 'Access to 7 $100,000+ GMV coaches for personalized video feedback.'
    },
    {
      icon: Zap,
      title: 'Exclusive Brand Access',
      description: 'Near immediate access to brand deals and retainers after passing our entry quiz.'
    },
    {
      icon: MessageCircle,
      title: 'A Thriving Community',
      description: 'Join a thriving Discord community with weekly live calls and constant support.'
    },
    {
      icon: Monitor,
      title: 'Top-Tier Creator Skills',
      description: 'Access online courses for top-tier creator skills and continuous learning.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 animate-on-scroll">
          Everything You Need to Scale Your Content Career.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-800 border border-slate-700 animate-on-scroll dynamic-3d-card hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-400 mb-4">
                <feature.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a 
            href="#join" 
            className="inline-block bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-12 py-5 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-xl"
          >
            Access These Benefits Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;