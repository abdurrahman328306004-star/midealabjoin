import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import BrandTrust from './components/BrandTrust';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import LeadCapture from './components/LeadCapture';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyMobileCTA from './components/StickyMobileCTA';
import PurpleGlow from './components/PurpleGlow';

function App() {
  return (
    <div className="overflow-x-hidden bg-stone-950 text-gray-300">
      <PurpleGlow />
      <Hero />
      <ProblemSolution />
      <BrandTrust />
      <ValueProposition />
      <Testimonials />
      <Pricing />
      <Founder />
      <LeadCapture />
      <FAQ />
      <FinalCTA />
      <StickyMobileCTA />
    </div>
  );
}

export default App;