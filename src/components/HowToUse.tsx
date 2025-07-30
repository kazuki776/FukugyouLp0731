import React from 'react';
import { FileText, UserCheck, MessageCircle, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const HowToUse: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "まずは気軽にリスト請求",
      description: "簡単なフォーム入力でリストを即座に入手"
    },
    {
      number: 2,
      icon: UserCheck,
      title: "最適な人材をご提案",
      description: "貴社の要件に最適な候補者をセレクト"
    },
    {
      number: 3,
      icon: MessageCircle,
      title: "候補者と面談",
      description: "スキルと人柄を直接確認いただけます"
    },
    {
      number: 4,
      icon: Rocket,
      title: "プロジェクト開始",
      description: "即戦力として貴社の成長に貢献"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ご利用は<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-600">簡単4ステップ</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-vb-purple text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="text-vb-blue mb-6 flex justify-center mt-4">
                <step.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-y-2 border-y-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;