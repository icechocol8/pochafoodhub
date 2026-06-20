import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, CheckCircle, Clock, Bike } from 'lucide-react';
import { STORE_INFO } from '../data';
// @ts-ignore
import dcmtImage from '../../DCMT.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-36 bg-gradient-to-b from-[#F2F7F2]/60 via-[#F7FAF6] to-[#F9FAF6]">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#52B447]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-72 h-72 bg-[#dfedd9] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Segment */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#E1F2E0] border border-[#BDE0BB] px-3.5 py-1.5 rounded-full text-xs font-bold text-[#224F18] uppercase tracking-wide mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#52B447] animate-pulse" />
              <span>Cozy Foodie Hideout in Bacolod City</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E3F16] tracking-tight leading-tight mb-6"
            >
              Sip, Snack, and Smile: Bacolod's Ultimate Destination for <span className="text-[#52B447] relative">Premium Boba & Munchies</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
              Po'cha offers milk tea drinks & other beverages along with complimentary finger food snacks.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a 
                href="#menu" 
                className="flex items-center justify-center gap-2 bg-[#1E3F16] hover:bg-[#2c5b20] active:bg-[#1a3814] text-white font-display font-extrabold px-6 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 group focus:outline-none w-full sm:w-auto text-sm"
              >
                <span>View Digital Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={STORE_INFO.socials.foodpanda}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D70F64] hover:bg-[#c20d5a] text-white font-display font-extrabold px-6 py-3.5 rounded-full shadow-md shadow-pink-100 hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none w-full sm:w-auto text-sm"
              >
                <Bike className="w-4.5 h-4.5" />
                <span>Order on Foodpanda</span>
              </a>
              <a 
                href="#location" 
                className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#224F18] border border-[#CBDDC7] font-display font-bold px-5 py-3.5 rounded-full hover:border-[#52B447] transition-all focus:outline-none w-full sm:w-auto text-sm"
              >
                <MapPin className="w-4 h-4 text-[#52B447]" />
                <span>Visit Us</span>
              </a>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-gray-200/80 w-full"
            >
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E3F16]">100%</span>
                <span className="text-xs text-gray-500 font-sans font-medium mt-1">Brewed Tea Leaves</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E3F16]">₱115</span>
                <span className="text-xs text-gray-500 font-sans font-medium mt-1">Top-Tier Dark Choco Spec</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#1E3F16]">Cozy</span>
                <span className="text-xs text-gray-500 font-sans font-medium mt-1">Aesthetic Lounge</span>
              </div>
            </motion.div>
          </div>

          {/* Right Stage: Signature item showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden bg-white shadow-2xl shadow-green-100/60 p-4 border border-[#e3ede2]"
            >
              {/* Main item block */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-md bg-stone-100 border border-gray-100">
                <img 
                  src={dcmtImage} 
                  alt="Dark Choco Milk Tea" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600";
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#FF4500] text-white text-[11px] font-sans font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Signature Specialty
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow-md rounded-xl py-2 px-3.5 border border-stone-200 text-right">
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Starting at</div>
                  <div className="font-display font-extrabold text-xl text-[#FF4500]">₱115.00</div>
                </div>
              </div>

              {/* Informative footer for the card */}
              <div className="pt-4 px-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-extrabold text-[#1E3F16] text-xl">Dark Choco Milk Tea</h3>
                  <div className="flex items-center gap-1 bg-[#F1F8F1] px-2 py-0.5 rounded text-xs font-bold text-[#52B447]">
                    ★★★★★
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-3 font-sans leading-relaxed">
                  Real Dutch dark cocoa folded with our special black-brewed Assam boba milk tea. Deeply decadent and satisfying.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-sans font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#52B447]" /> Ready in 5 min</span>
                  <span className="text-[#52B447] font-semibold">100% Recommended</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#224F18] shadow-xl rounded-2xl p-4 border border-[#2d6421] text-white flex items-center gap-3"
            >
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-xs text-[#52B447]">ORDER PICK-UP</span>
                <span className="font-sans font-medium text-[11px] text-gray-300">Save waiting times!</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
