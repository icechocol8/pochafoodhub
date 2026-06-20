import { motion } from 'motion/react';
import { Heart, BookOpen, Smile, ShieldCheck, HelpCircle } from 'lucide-react';
import { STORE_INFO } from '../data';

export default function About() {
  const storyPoints = [
    {
      icon: <Smile className="w-6 h-6 text-[#52B447]" />,
      title: 'Our Philosphy',
      subtitle: 'Derived from Pojangmacha (Korean street vendors), "Pocha" represents warmth, laughter, and high-quality, uncomplicated soul food cooked with heart.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#52B447]" />,
      title: 'Fresh Leaves Only',
      subtitle: 'Unlike instant bubble powders, our teas are brewed strictly from premium whole black Assam and green Jasmine leaves every 4 hours.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#52B447]" />,
      title: 'Gold-Standard Safety',
      subtitle: 'Every corndog is fresh-dipped on order in safe, clean high-heat oil. We promise absolute crunch without compromising on digestive comfort.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFDF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#52B447] text-xs font-bold uppercase tracking-widest bg-[#EBF6EB] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Story & Heritage
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E3F16] tracking-tight">
            The Concept Behind Pocha Food Hub
          </h2>
          <div className="h-1.5 w-16 bg-[#52B447] mx-auto rounded-full mt-4" />
        </div>

        {/* Story details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Image & floating quotes */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white-50 aspect-[4/5] bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&auto=format&fit=crop&q=80" 
                alt="Cozy eatery tea brewing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122A10]/70 via-[#122A10]/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="font-sans italic text-sm text-gray-200 mb-2">
                  "We wanted a cozy, homey shelter where students and neighborhood families could share simple street skewers and a perfect, tall milk tea without breaking the bank."
                </p>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#52B447]">
                  — Founders, Pocha Food Hub
                </span>
              </div>
            </div>

            {/* Accent sticker absolute */}
            <div className="absolute -top-6 -left-6 bg-[#FF4500] text-white font-display font-black p-4 rounded-2xl shadow-xl transform -rotate-6 text-xs uppercase tracking-wider">
              ❤️ Handcrafted<br />With Love
            </div>
          </div>

          {/* Column 2: Detailed Text & Story Points */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h3 className="font-display font-extrabold text-2xl text-[#1E3F16] mb-4">
              Where Hot Gochujang and Icy Boba Coexist
            </h3>
            <p className="font-sans text-gray-600 mb-6 leading-relaxed">
              In Korea, Pojangmacha represent the comforting refuge that awaits after a hard working day – offering hot, steamy noodles, spicy rice cakes, and companionship. 
            </p>
            <p className="font-sans text-gray-600 mb-10 leading-relaxed">
              At **Pocha Food Hub**, we carry that legacy. We source original gochujang paste, authentic rice cakes, and real Dutch cacao to craft delicious fusion pairings. Our specialty milk teas, led by the fan-favorite <strong>Dark Choco Milk Tea (₱115)</strong>, provide the ultimate soothing contrast to our hot and crispy snacks.
            </p>

            {/* Icon grid points */}
            <div className="space-y-6">
              {storyPoints.map((point) => (
                <div key={point.title} className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-[#EEF8EE] rounded-xl flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-sm text-[#1E3F16] mb-1">
                      {point.title}
                    </span>
                    <span className="font-sans text-xs text-gray-500 leading-relaxed">
                      {point.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
