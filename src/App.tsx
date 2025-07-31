import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowToUse from './components/HowToUse';
import StickyForm from './components/StickyForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Desktop Grid Layout (>= 1024px) */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:max-w-7xl lg:mx-auto lg:px-4 lg:pt-16">
        {/* Main Content (Left Column - spans 2 columns) */}
        <div className="lg:col-span-2">
          <Hero />
          <Problem />
          <Solution />
          <HowToUse />
        </div>
        
        {/* Sticky Form (Right Column - spans 1 column, only on desktop) */}
        <div className="hidden lg:block lg:col-span-1 lg:pt-32">
          <div className="sticky top-24">
            <div className="scroll-mt-20">
              <StickyForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Form Section (< 1024px) */}
      <div className="lg:hidden py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-md mx-auto px-4">
          <div id="form-section" className="scroll-mt-20">
            <StickyForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;