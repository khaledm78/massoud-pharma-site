'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Languages } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export default function Header({ onNavClick, activeSection, lang, setLang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', labelAr: 'الرئيسية' },
    { id: 'company-quality', label: 'Our Company & Quality', labelAr: 'عن الشركة والجودة' },
    { id: 'products', label: 'Product Catalog', labelAr: 'دليل المنتجات' },
  ];

  const handleNav = (id: string) => {
    onNavClick(id);
    setIsMobileMenuOpen(false);
  };

  // Translations specifically for header interactions
  const hTrans = {
    en: {
      logoTitle: 'MASSOUD',
      logoSub: 'PHARMA',
      browseBtn: 'Browse Catalog',
    },
    ar: {
      logoTitle: 'مسعود',
      logoSub: 'للصناعات الدوائية',
      browseBtn: 'دليل المستحضرات',
    }
  };

  const t = hTrans[lang];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-charcoal-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Identity */}
        <Link 
          className="flex items-center justify-center shrink-0 h-full py-3" 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('hero');
          }}
        >
          <Image 
            src="/logo-header.png" 
            alt="Massoud Pharma" 
            width={1800}
            height={604}
            priority
            className="h-8 md:h-10 lg:h-11 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 self-stretch" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative px-4 h-full flex flex-col justify-center items-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500
                  ${isActive 
                    ? 'text-brand-navy-500 font-extrabold' 
                    : 'text-brand-charcoal-500 font-semibold hover:text-brand-navy-500'
                  }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className={`${lang === 'ar' ? 'font-arabic text-xs' : 'font-sans text-xs'}`}>
                  {lang === 'ar' ? item.labelAr : item.label}
                </span>
                {isActive && (
                  <motion.span 
                    layoutId="activeHeaderTabUnderline"
                    className="absolute bottom-0 left-4 right-4 h-0.75 bg-brand-yellow rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Language Toggle & Action Controls */}
        <div className="flex items-center gap-2">
          
          {/* Enhanced English/Arabic toggle - Sleeker and Smaller */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex h-8 items-center gap-1 px-3 text-xs font-medium rounded-full border border-slate-200 bg-white/60 backdrop-blur-md shadow-sm hover:bg-slate-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500 cursor-pointer"
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'التحويل للغة الإنجليزية'}
          >
            <Languages className="h-3 w-3 text-slate-400" />
            <span className={lang === 'en' ? 'font-bold text-brand-navy-500' : 'text-slate-400 opacity-60'}>EN</span>
            <span className="text-slate-200">|</span>
            <span className={`${lang === 'ar' ? 'font-bold text-brand-navy-500 font-arabic' : 'text-slate-400 opacity-60'}`}>عربي</span>
            <span className="h-1 w-1 rounded-full bg-brand-yellow animate-pulse shrink-0" />
          </button>

          {/* Contact CTA Button */}
          <button
            onClick={() => handleNav('products')}
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-[#FACC15] px-4 py-2 font-sans text-xs font-bold text-blue-950 hover:bg-[#FDE047] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500 focus-visible:ring-offset-2 cursor-pointer"
          >
            {t.browseBtn}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-charcoal-500 hover:bg-brand-charcoal-50 hover:text-brand-charcoal-900 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-brand-charcoal-200 bg-white px-4 py-3 md:hidden shadow-md"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex w-full min-h-[44px] items-center justify-between rounded-lg px-4 py-3 text-left rtl:text-right font-sans text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500
                    ${isActive 
                      ? 'bg-brand-navy-50 text-brand-navy-600 border-l-2 rtl:border-l-0 rtl:border-r-2 border-brand-yellow' 
                      : 'text-brand-charcoal-600 hover:bg-brand-charcoal-50 hover:text-brand-charcoal-900'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={lang === 'ar' ? 'font-arabic text-xs' : 'font-sans text-xs'}>
                    {lang === 'ar' ? item.labelAr : item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}