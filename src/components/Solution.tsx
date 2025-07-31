import React from 'react';
import { Shield, Award, TrendingUp, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "実績",
      subtitle: "経験5年以上のハイレベル人材が",
      highlight: "6",
      suffix: "割",
      description: "豊富な実務経験を持つプロフェッショナル"
    },
    {
      icon: RefreshCw,
      title: "柔軟性",
      subtitle: "正社員転換も可能な人材が",
      highlight: "半数",
      suffix: "以上",
      description: "業務委託から正社員への転換にも対応"
    },
    {
      icon: Award,
      title: "品質",
      subtitle: "徹底したスクリーニング",
      description: "担当者が事前面談し、スキルと信頼性を確認済み"
    },
    {
      icon: Shield,
      title: "信頼",
      subtitle: "非公開データベース",
      description: "一般には公開されていない独自のデータベースへアクセス"
    }
  ];

  const DonutChart: React.FC<{ percentage: number; label: string }> = ({ percentage, label }) => {
    const radius = 35;
    const strokeWidth = 6;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative w-24 h-24 mx-auto">
        <svg width="96" height="96" className="transform -rotate-90">
          <circle
            stroke="#E5E7EB"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx="48"
            cy="48"
          />
          <circle
            stroke="#4A2E8A"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            r={normalizedRadius}
            cx="48"
            cy="48"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold text-vb-purple">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            どんな<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-blue-600">人材</span>が登録している？
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center min-h-[280px] flex flex-col justify-between"
            >
              <div>
                <div className="text-vb-purple mb-4 flex justify-center">
                  <benefit.icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-vb-purple mb-2">
                  【{benefit.title}】
                </h3>
                <h4 className="text-base font-semibold text-gray-700 mb-4">
                  {benefit.subtitle}
                  {benefit.highlight && (
                    <>
                      <span className="font-bold text-2xl text-vb-purple mx-1">
                        {benefit.highlight}
                      </span>
                      {benefit.suffix}
                    </>
                  )}
                </h4>
              </div>
              {(benefit.title === "実績" || benefit.title === "柔軟性") && (
                <div className="mt-auto">
                  <DonutChart 
                    percentage={benefit.title === "実績" ? 60 : 50} 
                    label={benefit.highlight || "50%+"} 
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;