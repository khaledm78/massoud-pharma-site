'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Atom, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onOverviewClick: () => void;
  lang: 'en' | 'ar';
}

export default function Hero({ onExploreClick, onOverviewClick, lang }: HeroProps) {
  const isAr = lang === 'ar';

  const translations = {
    en: {
      badge: 'Leading with Science',
      titlePrimary: 'Massoud Pharma',
      titleSecondary: 'Excellence in Care',
      desc: 'Commitment to the development, manufacturing, and distribution of high-quality medicinal products tailored for global standard therapeutic efficacy. Empowering healthcare networks through uncompromised quality control.',
      ctaProducts: 'Browse Catalog',
      ctaOverview: 'Corporate Profile',
    },
    ar: {
      badge: 'الريادة من خلال العلم',
      titlePrimary: 'مسعود للأدوية',
      titleSecondary: 'التميز الدوائي والشفاء',
      desc: 'ملتزمون بتطوير وتصنيع وتوزيع المستحضرات الصيدلانية عالية الجودة لضمان أقصى درجات الفعالية العلاجية المطابقة للمعايير العالمية، مع تمكين شبكات الرعاية الصحية بأنظمة جودة صارمة.',
      ctaProducts: 'دليل المستحضرات',
      ctaOverview: 'الملف التعريفي للشركة',
    }
  };

  const t = translations[lang];

  return (
    <section className="relative overflow-hidden w-full min-h-[75vh] flex items-center justify-center bg-[#0a192f] text-white py-16 md:py-24 border-b border-slate-900">
      
      {/* Premium Background Architecture (Depth & Luxury glows + Molecular Watermark) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Radial Glow Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,156,58,0.08)_0%,transparent_50%)]"></div>
        
        {/* Hexagon/Molecular Watermark Pattern (CSS Base64 inline SVG) */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}
        ></div>

        {/* Large Centered Glowing Navy/Blue Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 md:bg-blue-600/15 blur-[100px] md:blur-[130px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Decorative Secondary Ambient Spots */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/5 blur-[90px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-500/5 blur-[90px] rounded-full" />
      </div>

      {/* Flawless Centered Layout & Staggered Animations */}
      <div className="relative flex flex-col items-center justify-center text-center z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Element 1: Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: [0, -12, 0] }}
          transition={{ duration: 1, ease: "easeOut", y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          className="mb-6 flex items-center justify-center"
        >
          <Image 
            src="/logo-hero.png" 
            alt="Massoud Pharma" 
            width={280} 
            height={280} 
            className="w-48 md:w-64 h-auto object-contain drop-shadow-2xl mb-8" 
            referrerPolicy="no-referrer"
            priority
          />
        </motion.div>

        {/* Element 2: Bilingual Typography (Directly below animated logo) */}
        <div className="flex flex-col items-center justify-center text-center mt-6 mb-6">
          {lang === 'en' ? (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase leading-none drop-shadow-lg">
                MASSOUD PHARMA
              </h1>
              <p className="text-sm md:text-lg text-white/80 font-light uppercase tracking-[0.3em] md:tracking-[0.4em] mt-4">
                PHARMACEUTICAL INDUSTRIES
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-none drop-shadow-lg font-arabic">
                مسعود فارما
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-light mt-4 font-arabic">
                للصناعات الدوائية
              </p>
            </>
          )}
        </div>

        {/* Element 3: The Science Badge with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg text-brand-yellow text-xs md:text-sm font-medium mb-6 hover:bg-white/10 transition-colors duration-300"
        >
          <Atom className="h-3.5 w-3.5 text-brand-yellow animate-spin" style={{ animationDuration: '10s' }} />
          <span className="tracking-wide uppercase font-bold text-[10px] md:text-xs">
            {t.badge}
          </span>
          <Sparkles className="h-3 w-3 text-brand-yellow/80" />
        </motion.div>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="text-xs sm:text-sm md:text-base font-normal leading-relaxed text-slate-400 max-w-2xl mb-8 font-sans"
        >
          {t.desc}
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 items-center justify-center"
        >
          <button
            onClick={onExploreClick}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#FACC15] px-7 font-sans text-xs font-bold text-blue-950 shadow-lg shadow-[#FACC15]/15 hover:bg-[#FDE047] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            <span>{t.ctaProducts}</span>
            {isAr ? (
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>

          <button
            onClick={onOverviewClick}
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 font-sans text-xs font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-xs cursor-pointer"
          >
            <span>{t.ctaOverview}</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
