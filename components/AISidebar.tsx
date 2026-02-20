
import React, { useState } from 'react';
import { getGrowthAdvice } from '../services/gemini';

const AISidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [businessInfo, setBusinessInfo] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessInfo.trim()) return;
    
    setLoading(true);
    const advice = await getGrowthAdvice(businessInfo);
    setResult(advice);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] bg-primary text-white p-4 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-3"
      >
        <span className="material-symbols-outlined text-3xl font-bold animate-pulse">auto_awesome</span>
        <span className="font-black pr-2 hidden sm:inline">AI Growth Audit</span>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background-dark/80 backdrop-blur-sm z-[70] transition-all"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white z-[80] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl font-black">auto_awesome</span>
              <h3 className="text-2xl font-black">AI Growth Auditor</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-background-dark/30 hover:text-background-dark transition-colors">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          {!result ? (
            <div className="flex-grow flex flex-col">
              <p className="text-background-dark/60 text-lg mb-8 font-medium">
                Describe your business, current monthly revenue, and biggest challenge. Our AI (trained on Nadir's framework) will generate a custom audit for you.
              </p>
              
              <form onSubmit={handleAudit} className="flex flex-col flex-grow">
                <textarea 
                  value={businessInfo}
                  onChange={(e) => setBusinessInfo(e.target.value)}
                  placeholder="e.g. I run a luxury skincare brand in the UK doing £50k/month. I'm struggling with rising Meta CPA and low LTV..."
                  className="flex-grow p-6 rounded-2xl border-2 border-gray-100 focus:border-primary focus:ring-0 transition-all text-lg font-medium resize-none mb-6 outline-none"
                  required
                />
                
                <button 
                  type="submit"
                  disabled={loading}
                  className={`w-full py-5 rounded-2xl bg-primary text-white text-xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <span className="animate-spin border-4 border-white border-t-transparent rounded-full w-6 h-6"></span>
                      Analyzing Funnel...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined font-black">bolt</span>
                      Generate Free Audit
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="flex-grow flex flex-col">
              <div className="prose prose-blue max-w-none text-background-dark/80 text-lg">
                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 mb-8">
                  <h4 className="font-black text-primary mb-2 uppercase tracking-widest text-xs">Strategy Breakdown</h4>
                  <div className="whitespace-pre-wrap leading-relaxed font-medium">
                    {result}
                  </div>
                </div>
              </div>
              
              <div className="mt-auto space-y-4">
                <button 
                  onClick={() => {setResult(''); setBusinessInfo('');}}
                  className="w-full py-4 rounded-xl border-2 border-gray-100 text-background-dark font-black hover:bg-gray-50 transition-all"
                >
                  Start New Audit
                </button>
                <a 
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 rounded-xl bg-primary text-white font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
                >
                  Discuss Results with Nadir
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AISidebar;
