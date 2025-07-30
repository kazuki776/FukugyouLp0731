import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision Base株式会社</h3>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                rel="noopener noreferrer"
              >
                会社HP
              </a>
              <a 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                rel="noopener noreferrer"
              >
                プライバシーポリシー
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                rel="noopener noreferrer"
              >
                PM BASE
              </a>
            </div>
          </div>
          
          <div className="flex justify-end">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Vision Base株式会社 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;