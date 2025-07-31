import React from 'react';
import { Download } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      
      // Trigger custom event for form highlight
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('formScrollTriggered'));
      }, 1000); // Wait for scroll animation to complete
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-vb-purple">Vision Base</h1>
          </div>
          <button
            onClick={scrollToForm}
            className="bg-vb-yellow text-gray-900 px-6 py-2 rounded-lg font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <Download size={18} />
            待機中人材一覧を見る
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;