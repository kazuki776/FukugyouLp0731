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
    const radius = 50;
    const centerX = 64;
    const centerY = 64;
    
    // Calculate path for pie slice
    const angle = (percentage / 100) * 360;
    const startAngle = 0; // Start from 12 o'clock (top)
    const endAngle = startAngle + angle;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg width="128" height="128" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            fill="#F8F9FA"
            stroke="#E5E7EB"
            strokeWidth="1"
            fill="transparent"
            r={radius}
            cx={centerX}
            cy={centerY}
          />
          {/* Pie slice */}
          <path
            d={pathData}
            fill="url(#gradient)"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4A2E8A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  return (
    <section id="talent-cards-section" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
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
              className="bg-white rounded-xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 md:text-center md:min-h-[280px] md:flex md:flex-col md:justify-between"
            >
              {/* Mobile Layout: Icon left, text right */}
              <div className="flex items-start gap-4 md:block">
                <div className="text-vb-purple flex-shrink-0 md:mb-4 md:flex md:justify-center">
                  <benefit.icon size={32} className="md:w-10 md:h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-vb-purple mb-1 md:mb-2">
                    【{benefit.title}】
                  </h3>
                  <h4 className="text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-4 leading-tight">
                    {benefit.subtitle}
                    {benefit.highlight && (
                      <>
                        <span className="font-bold text-xl md:text-2xl text-vb-purple mx-1">
                          {benefit.highlight}
                        </span>
                        {benefit.suffix}
                      </>
                    )}
                  </h4>
                </div>
              </div>
              {/* Donut Chart - hidden on mobile for cards with charts */}
              {(benefit.title === "実績" || benefit.title === "柔軟性") && (
                <div className="hidden md:block md:mt-auto">
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