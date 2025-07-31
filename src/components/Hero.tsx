import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070"
          alt="プロフェッショナルチーム"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vb-purple/80 to-vb-blue/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          即戦力のエンジニアを、必要な時に。
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
            VisionBase
          </span>
          が、貴社の成長を加速する。
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
        >
          Vision Baseは、独自の非公開データベースから、貴社のプロジェクトに最適なエンジニアをご提案します。
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          onClick={scrollToForm}
          className="bg-vb-yellow text-gray-900 px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 hover:shadow-xl transition-all duration-200 flex items-center gap-3 mx-auto"
        >
          <Download size={24} />
          待機中人材一覧を見る
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;