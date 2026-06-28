'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Microscope,
  Activity,
  Sparkles,
  Pill,
  Droplet,
  FlaskConical,
  Globe,
  Shield,
  Heart
} from 'lucide-react';

interface CompanyQualityViewProps {
  lang: 'en' | 'ar';
}

export default function CompanyQualityView({ lang }: CompanyQualityViewProps) {
  const isAr = lang === 'ar';

  const translations = {
    en: {
      preTitle: 'Corporate Integrity & Quality Ecosystem',
      title: 'Our Company & Quality Standards',
      subtitle: 'Massoud Pharma is committed to pharmaceutical formulation precision, rigorous safety verification, and compliance with the highest global directives.',
      
      // Bento Cards
      ourStoryBadge: 'Establishment & Vision',
      ourStoryTitle: 'Our Story & Vision',
      ourStoryText: 'Massoud Pharma for Pharmaceutical Industries is part of the Massoud Group, specializing in the pharmaceutical and medical fields and operating in this sector since 2005. Massoud Pharma was established in Damascus, Syria in 2017, with a focus on non-sterile production according to international standards and specifications.',
      
      productionLinesBadge: 'Manufacturing Capabilities',
      productionLinesTitle: 'Advanced Production Lines',
      productionLinesText: 'Tablets & Film-Coated Tablets, Capsules, Cephalosporins (Tablets, Dry suspensions, Capsules, Vials), Liquid syrups, β-lactam antibiotics (Tablets, Dry suspensions), Immunosuppressants.',
      
      globalReachBadge: 'Global Reach',
      globalReachTitle: 'International Scope',
      globalReachText: 'Besides being one of the most trusted pharmaceutical companies in Syria, Massoud Pharma is actively exporting its products to many countries worldwide.',
      
      certificationsBadge: 'Official Accreditations',
      certificationsTitle: 'World-Class Certifications',
      certificationsSub: 'Operating under rigorous safety audits and international Quality Assurance protocols.',

      // Individual production line detailed tags
      lines: [
        { title: 'Tablets & Film-Coated Tablets', desc: 'Precision compression and high-barrier film coating.', icon: Pill },
        { title: 'Capsules', desc: 'Solid gelatin capsule filing with strict temperature controls.', icon: Layers },
        { title: 'Cephalosporins', desc: 'Separate, isolated division producing Tablets, Dry suspensions, Capsules, Vials.', icon: FlaskConical },
        { title: 'Liquid Syrups', desc: 'Fully automated continuous mixing, bottle filling, and capping lines.', icon: Droplet },
        { title: 'β-Lactam Antibiotics', desc: 'Serrated production lines for superior Tablets and Dry suspensions.', icon: ShieldCheck },
        { title: 'Immunosuppressants', desc: 'Specialized isolated containment lines for critical immune therapies.', icon: Heart }
      ]
    },
    ar: {
      preTitle: 'منظومة النزاهة الدوائية وجودة التصنيع',
      title: 'عن الشركة ومعايير الجودة',
      subtitle: 'تلتزم شركة مسعود فارما بالدقة العلمية الفائقة في صياغة الأدوية، مع الالتزام التام ببروتوكولات الرقابة والسلامة وأرقى التوجيهات العالمية.',
      
      // Bento Cards
      ourStoryBadge: 'التأسيس والرؤية',
      ourStoryTitle: 'قصتنا ورؤيتنا',
      ourStoryText: 'شركة مسعود فارما للصناعات الدوائية، هي جزء من مجموعة مسعود المتخصصة في المجالات الدوائية والصيدلانية والعاملة في هذا القطاع منذ عام 2005، وقد تأسست شركة مسعود فارما في دمشق، سوريا عام 2017، مع التركيز على الإنتاج غير العقيم وفقاً للمعايير والمواصفات الدولية.',
      
      productionLinesBadge: 'القدرات والخطوط الإنتاجية',
      productionLinesTitle: 'خطوط الإنتاج المتقدمة',
      productionLinesText: 'المضغوطات والمضغوطات الملبسة بالفيلم، الكبسولات، السيفالوسبورينات (مضغوطات، معلقات جافة، كبسولات، فيالات)، الشرابات السائلة، صادات بيتا لاكتام (مضغوطات، معلقات جافة)، كابحات المناعة.',
      
      globalReachBadge: 'الانتشار والوصول',
      globalReachTitle: 'الانتشار والعمليات الدولية',
      globalReachText: 'إلى جانب كونها إحدى أكثر شركات الأدوية موثوقية في سوريا، تقوم مسعود فارما بتصدير منتجاتها بثقة إلى العديد من دول العالم.',
      
      certificationsBadge: 'الاعتمادات والشهادات',
      certificationsTitle: 'الشهادات والاعتمادات العالمية',
      certificationsSub: 'نعمل وفق أرقى معايير ممارسات التصنيع والتدقيق الرقابي الصارم لضمان فعالية وسلامة كافة الدفعات الدوائية.',

      // Individual production line detailed tags
      lines: [
        { title: 'المضغوطات والمضغوطات الملبسة', desc: 'كبس دوائي فائق الدقة وتغليف غشائي متطور لحماية الفعالية.', icon: Pill },
        { title: 'الكبسولات', desc: 'تعبئة كبسولات صلبة تحت مستويات رطوبة وحرارة مثالية ومراقبة.', icon: Layers },
        { title: 'السيفالوسبورينات', desc: 'منشأة معزولة ومستقلة: مضغوطات، معلقات جافة، كبسولات، فيالات.', icon: FlaskConical },
        { title: 'الشرابات السائلة', desc: 'خطوط آلية لخلط وتعبئة وإغلاق زجاجات الشراب الطبي بإحكام.', icon: Droplet },
        { title: 'صادات بيتا لاكتام', desc: 'خطوط إنتاج مخصصة لإنتاج المضغوطات والمعلقات الجافة الممتازة.', icon: ShieldCheck },
        { title: 'كابحات المناعة', desc: 'تنظيم واحتواء كامل لمعالجة وتجهيز العلاجات المناعية الحساسة والحرجة.', icon: Heart }
      ]
    }
  };

  const t = translations[lang];

  // Certifications data conforming to strict dictionary requirements
  const certificationsData = [
    {
      id: 'gmp',
      title: 'GMP',
      subtitle: isAr ? 'ممارسات التصنيع الجيد' : 'Good Manufacturing Practice',
      fullTitle: isAr ? 'GMP (ممارسات التصنيع الجيد)' : 'GMP (Good Manufacturing Practice)',
      icon: ShieldCheck
    },
    {
      id: 'iso9001',
      title: 'ISO 9001',
      subtitle: isAr ? 'ضمان الجودة' : 'Quality Assurance',
      fullTitle: isAr ? 'ISO 9001 (ضمان الجودة)' : 'ISO 9001 (Quality Assurance)',
      icon: Award
    },
    {
      id: 'iso14001',
      title: 'ISO 14001',
      subtitle: isAr ? 'الإدارة البيئية' : 'Environmental Management',
      fullTitle: isAr ? 'ISO 14001 (الإدارة البيئية)' : 'ISO 14001 (Environmental Management)',
      icon: Globe
    },
    {
      id: 'iso18001',
      title: 'ISO 18001',
      subtitle: isAr ? 'الصحة والسلامة المهنية' : 'Occupational Health & Safety',
      fullTitle: isAr ? 'ISO 18001 (الصحة والسلامة المهنية)' : 'ISO 18001 (Occupational Health & Safety)',
      icon: Shield
    }
  ];

  // Cascading animation stagger variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 18
      }
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800 pb-0 overflow-hidden bg-white">
      {/* Premium Precision Dot Grid Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23143A6E'/%3E%3C/svg%3E")`, 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* Glowing Ambient Orbs (Mesh Gradients) */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#FACC15] opacity-5 blur-3xl pointer-events-none select-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] rounded-full bg-indigo-500 opacity-[0.04] blur-3xl pointer-events-none select-none z-0" />
      
      {/* Band 1: The Header Zone (Premium Navy) */}
      <header className="relative w-full bg-[#143A6E] text-white py-12 md:py-16 overflow-hidden z-10 border-b border-white/10">
        {/* Soft background glow */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_75%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black tracking-widest text-[#FACC15] uppercase">
              {t.preTitle}
            </span>
            <h1 className="font-display text-2xl sm:text-3.5xl font-black tracking-tight text-white leading-tight">
              {t.title}
            </h1>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Band 2: Vision & Global Reach (Light Canvas + Glassmorphism) */}
      <section className="relative w-full bg-slate-50/50 py-12 sm:py-16 overflow-hidden z-10 border-b border-slate-100">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 md:grid-cols-3 text-left rtl:text-right items-stretch transform-gpu"
          >
            
            {/* Bento Card 1: Our Story (Damascus establishment, vision, standards - spans 2 cols on md) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(20,58,110,0.04)] hover:shadow-[0_20px_40px_rgba(20,58,110,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform-gpu"
              id="our-story-card"
            >
              <div className="absolute -right-16 -top-16 rtl:-right-auto rtl:-left-16 w-36 h-36 rounded-full bg-[#FACC15]/10 blur-2xl group-hover:bg-[#FACC15]/20 transition-colors" />
              
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#FACC15]/10 text-slate-800 mb-4 border border-[#FACC15]/20">
                  {t.ourStoryBadge}
                </span>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 shadow-sm">
                    <Building2 className="h-5 w-5 text-indigo-950" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-black text-[#143A6E]">
                    {t.ourStoryTitle}
                  </h3>
                </div>
                
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {t.ourStoryText}
                </p>
              </div>

              <div className="border-t border-slate-100 mt-6 pt-4 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  SINCE 2017 &bull; DAMASCUS, SYRIA
                </span>
                <span className="h-2 w-2 rounded-full bg-[#FACC15] animate-pulse" />
              </div>
            </motion.div>

            {/* Bento Card 2: Global Reach (Syrian trust, global export - spans 1 col) */}
            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(20,58,110,0.04)] hover:shadow-[0_20px_40px_rgba(20,58,110,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform-gpu"
              id="global-reach-card"
            >
              <div className="absolute -left-12 -bottom-12 rtl:-left-auto rtl:-right-12 w-32 h-32 rounded-full bg-[#FACC15]/10 blur-2xl group-hover:bg-[#FACC15]/20 transition-all duration-500" />
              
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#FACC15]/10 text-slate-800 mb-4 border border-[#FACC15]/20">
                  {t.globalReachBadge}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 shadow-sm">
                    <Globe className="h-5 w-5 text-indigo-950" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-black text-[#143A6E]">
                    {t.globalReachTitle}
                  </h3>
                </div>

                <p className="font-sans text-xs text-slate-700 leading-relaxed">
                  {t.globalReachText}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 font-bold">
                  <span>ACTIVE GLOBAL EXPORT</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15] animate-ping" />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Band 3: Manufacturing Capabilities (Navy + Abstract Production Watermark) */}
      <section className="relative w-full bg-[#143A6E] text-white py-12 sm:py-16 overflow-hidden z-10 border-b border-white/10">
        
        {/* Glowing Ambient Orb & Molecular background overlay to kill flat blue space */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06)_0%,transparent_70%)]" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-[#FACC15]/5 blur-3xl pointer-events-none select-none z-0" />

        {/* Abstract Production Watermark related to manufacturing/science */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-5 z-0">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-96 h-96 text-white transform-gpu">
            <circle cx="20" cy="30" r="3" fill="currentColor" />
            <circle cx="50" cy="20" r="4" />
            <circle cx="80" cy="35" r="3" fill="currentColor" />
            <circle cx="35" cy="65" r="5" />
            <circle cx="65" cy="70" r="3" />
            <line x1="20" y1="30" x2="50" y2="20" />
            <line x1="50" y1="20" x2="80" y2="35" />
            <line x1="50" y1="20" x2="35" y2="65" />
            <line x1="35" y1="65" x2="65" y2="70" />
            <line x1="80" y1="35" x2="65" y2="70" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 md:grid-cols-3 text-left rtl:text-right items-stretch transform-gpu"
          >
            
            {/* Bento Card 3: Production Lines Grid (Spans all 3 cols, frosted glassmorphism) */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl hover:bg-white/10 hover:border-white/15 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform-gpu"
              id="production-lines-card"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-white/10 text-[#FACC15] mb-2 border border-white/10">
                      {t.productionLinesBadge}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-black text-white">
                      {t.productionLinesTitle}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 font-mono">
                    NON-STERILE & BETA-LACTAM DEPARTMENTS
                  </span>
                </div>

                {/* Glassmorphism department cards with subtle hover translation */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                  {t.lines.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex gap-3.5 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 shadow-3xs">
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans text-xs font-bold text-white leading-tight">
                            {item.title}
                          </h4>
                          <p className="font-sans text-[10px] text-slate-300 leading-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Entire string as a strict fallback representation matching corporate database */}
              <div className="mt-6 pt-4 border-t border-white/10 bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-slate-200 leading-relaxed">
                <span className="font-bold uppercase tracking-wider block text-[10px] text-[#FACC15] mb-1.5 font-mono">
                  Full Production Spec:
                </span>
                <p className="font-medium text-slate-200">
                  {t.productionLinesText}
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Band 4: Accreditations (Light Canvas + Shield Watermark + Text Cleanup) */}
      <section className="relative w-full bg-slate-50 py-12 sm:py-16 overflow-hidden z-10">
        
        {/* Shield Watermark */}
        <div className="pointer-events-none absolute right-0 bottom-0 z-0 opacity-[0.03] text-[#143A6E] w-[120vw] md:w-[50vw] max-w-2xl transform rotate-12">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
            <path d="M 50,5 L 85,15 L 85,55 C 85,75 70,90 50,95 C 30,90 15,75 15,55 L 15,15 Z" strokeWidth="0.5" />
            <path d="M 35,50 L 45,60 L 65,35" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 md:grid-cols-3 text-left rtl:text-right items-stretch transform-gpu"
          >
            
            {/* Bento Card 4: Certifications Minimalist Grid */}
            <motion.div 
              variants={fadeInUp}
              className="md:col-span-3 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform-gpu"
              id="certifications-card"
            >
              <div>
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#FACC15]/10 text-slate-800 mb-2 border border-[#FACC15]/20">
                    {t.certificationsBadge}
                  </span>
                  <h3 className="font-display text-lg font-black text-[#143A6E]">
                    {t.certificationsTitle}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1">
                    {t.certificationsSub}
                  </p>
                </div>

                {/* Minimalist Grid of 4 Certifications using Accent Colors */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {certificationsData.map((cert) => {
                    const IconComponent = cert.icon;
                    return (
                      <div 
                        key={cert.id}
                        className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-100 bg-slate-50/50 shadow-xs hover:bg-slate-50 transition-all duration-300 text-left rtl:text-right"
                      >
                        {/* Circle container for Accent Colors */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FACC15]/10 text-[#FACC15] shadow-3xs border border-[#FACC15]/20 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <span className="block font-mono text-xs font-black text-[#143A6E] uppercase tracking-tight">
                            {cert.title}
                          </span>
                          <span className={`block text-[10px] text-slate-600 font-medium truncate ${isAr ? 'font-arabic' : 'font-sans'}`}>
                            {cert.subtitle}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}
