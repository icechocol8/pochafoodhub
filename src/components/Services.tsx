import { motion } from 'motion/react';
import { Utensils, ShoppingBag, Bike, Sparkles } from 'lucide-react';
import { SERVICES, STORE_INFO } from '../data';

// Map icon string names to components
const iconMap: Record<string, any> = {
  Utensils: <Utensils className="w-7 h-7 text-[#52B447]" />,
  ShoppingBag: <ShoppingBag className="w-7 h-7 text-[#52B447]" />,
  Bike: <Bike className="w-7 h-7 text-[#52B447]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#52B447]" />
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#F9FAF6] to-[#FAFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#52B447] text-xs font-bold uppercase tracking-widest bg-[#EBF6EB] px-3.5 py-1.5 rounded-full inline-block mb-3">
            What We Do Best
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E3F16] tracking-tight">
            Services & Conveniences
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            Whether you want to chill in our study-friendly lounge or enjoy hot ramen in bed, we've got you covered.
          </p>
          <div className="h-1.5 w-16 bg-[#52B447] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Cards bento/grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-3xl p-6.5 border border-gray-100 hover:border-[#BDE0BB] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#52B447] transition-all" />
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#EEF8EE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#52B447]/10 transition-all duration-300">
                {iconMap[srv.iconName] || <Sparkles className="w-7 h-7 text-[#52B447]" />}
              </div>

              {/* Text segment */}
              <h3 className="font-display font-black text-[#1E3F16] text-lg mb-3">
                {srv.title}
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {srv.description}
              </p>

              {/* Decorative arrow overlay */}
              <div className="mt-auto pt-6 text-[11px] font-sans font-bold text-[#52B447] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                See Details &rarr;
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Partner bar at the bottom */}
        <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="font-display font-bold text-sm text-[#1E3F16] mb-1">
              Are you ordering from your home or dorm room?
            </h4>
            <p className="font-sans text-xs text-gray-400">
              Find us on third-party channels for warm-speed delivery straight from our hub!
            </p>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <a 
              href={STORE_INFO.socials.foodpanda}
              target="_blank"
              rel="noreferrer"
              className="font-display font-black text-xs text-red-500 bg-red-50 hover:bg-red-500 hover:text-white hover:border-transparent px-4 py-2.5 rounded-full border border-red-100 uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm transform hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse group-hover:bg-white" />
              <span>Order on Foodpanda</span>
            </a>
            <span className="font-display font-black text-xs text-green-600 bg-green-50 px-3.5 py-2.5 rounded-full border border-green-100 uppercase tracking-wider">
              GrabFood Partner
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
