import React, { useState } from 'react';

const LeadCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you! We have received your email and will be in touch shortly.');
      setIsSuccess(true);
      setEmail('');
      
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 px-8 bg-slate-900">
      <div className="max-w-xl mx-auto text-center animate-on-scroll">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Want to know more?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Drop your email below and we'll send you a detailed overview of the program.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full sm:w-auto flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700 text-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-stone-950 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Get Free Info
          </button>
        </form>
        {message && (
          <div className={`mt-6 p-5 rounded-xl text-lg ${isSuccess ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadCapture;