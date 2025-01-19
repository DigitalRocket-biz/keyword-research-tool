import React from 'react';
import { Search, Zap, Database, BarChart3, Globe, Lock } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Advanced Keyword Discovery',
    description: 'Find untapped keyword opportunities with our comprehensive research algorithm.'
  },
  {
    icon: Database,
    title: 'Multi-Source Data',
    description: 'Get insights from Google, Bing, and other major search engines in one place.'
  },
  {
    icon: BarChart3,
    title: 'Competitive Analysis',
    description: 'Analyze your competitors\' keyword strategies and find gaps in the market.'
  },
  {
    icon: Zap,
    title: 'Real-Time Metrics',
    description: 'Access up-to-date search volumes, CPC, and difficulty scores instantly.'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Research keywords in multiple languages and locations worldwide.'
  },
  {
    icon: Lock,
    title: 'Exclusive Insights',
    description: 'Get unique keyword suggestions not available in standard tools.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Powerful Features for
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Smarter Research</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}