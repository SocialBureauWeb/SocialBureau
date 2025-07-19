import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';


const cards = [
  { title: 'Full-Funnel Performance Marketing', content: 'Click costs don\'t matter if they don\'t convert. We deploy vertical-informed models and 14-day sprint cycles tied to LTV, not vanity ROAS.' },
  { title: 'Funnel Architecture & Growth Pathways', content: 'Stop leaking revenue. We map awareness to LTV with customized, P&L-aligned blueprints.' },
  { title: 'Conversion Rate Optimization & Landing Systems', content: 'Built with psychology, tested with micro-experiments. Bounce less. Convert more.' },
  { title: 'Messaging & Positioning for Niche Brands', content: 'Generic messaging kills growth. We uncover category-specific codes using ethnographic and linguistic analysis.' },
  { title: 'API-Driven Growth & Automated Distribution', content: 'Eliminate friction. Merge engineering + marketing for compounding growth loops.' },
  { title: 'Niche Market Penetration Strategy', content: 'We speak fluent healthtech, crypto, fintech, and more. Penetrate with precision.' },
  { title: 'Influencer & UGC Growth Engines', content: 'No vanity metrics. Just creator content built for performance and attribution.' },
  { title: 'Lifecycle & Email Automation Strategy', content: 'Trigger behavior-based flows that drive revenue, measured on 30-day impact.' },
  { title: 'Software GTM & Growth Architecture', content: 'PLG meets sales-assist in a system that converts trials and grows MRR.' }
];

export default function Ser() {
  const [activeIndex, setActiveIndex] = useState(null);


  return (
   <div className="flex space-x-2 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            animate={{
              flex: activeIndex === index ? 3 : 1,
              transition: { duration: 0.4, ease: 'easeInOut' }
            }}
            className={clsx(
              'bg-gradient-to-br from-[#ff0000] to-[#000] rounded-xl text-white cursor-pointer flex items-center justify-center h-[430px] overflow-hidden relative',
              'transition-all duration-300 p-4'
            )}
          >
            {activeIndex === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm opacity-90 text-left"
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3><br/>
                <p>{card.content}</p><br/>
                <a href={`/services/${encodeURIComponent(card.title)}`} className='font-bold hover:text-[1rem]'>Read More </a>
              </motion.div>
            ) : (
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="transform -rotate-90 font-bold whitespace-nowrap text-md tracking-wide"
              >
                {card.title}
              </motion.h3>
            )}
          </motion.div>
        ))}
      </div>
  );
}
