import React from 'react';
import { Target, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: Target,
      title: "希望するスキルを持つ即戦力人材にアプローチできない",
      description: "適切な技術スキルを持つ人材を見つけるのに苦労している"
    },
    {
      icon: Users,
      title: "求めるスキルを持つ人材がいない",
      description: "応募者は多いが、本当に必要なスキルを持つ人材が少ない"
    },
    {
      icon: Clock,
      title: "採用プロセスが長期化し、タイミングを逃してしまう",
      description: "スピード感のある事業展開に採用が追いつかない"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            こんな<span className="text-red-600">課題</span>に直面していませんか？
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="text-red-500 flex-shrink-0 md:mb-4">
                  <problem.icon size={40} className="md:w-12 md:h-12" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {problem.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-bold text-gray-900">
            その課題、Vision Baseが解決します。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;