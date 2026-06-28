'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import HomeView from '../components/HomeView';
import CompanyQualityView from '../components/CompanyQualityView';
import ProductCatalogView from '../components/ProductCatalogView';
import Footer from '../components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('hero');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  // Sync document attributes with active language to ensure standard CSS & screen readers respond instantly
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    
    // Shift focus to the main content container for keyboard accessibility
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus({ preventScroll: true });
    }
  };

  const handleExploreClick = () => {
    handleNavClick('products');
  };

  // Corporate translations for the footer & page shell
  const footerTranslations = {
    en: {
      tagline: 'Quality Healthcare',
      desc: 'Formulating and packaging high-efficacy therapeutics to support health infrastructure with absolute regulatory precision. Certified cGMP and ISO 9001.',
      arabicSeal: 'Massoud Pharma - Globally Certified Quality.',
      divisions: 'Brochure Divisions',
      home: 'Homepage Overview',
      about: 'Company & Quality',
      catalog: 'Therapeutic Catalog',
      contacts: 'Corporate Contacts & Address',
      address: 'Damascus Countryside, Industrial Zone, Damascus, Syria',
      noticeTitle: 'Medical Notice',
      noticeBody: 'This catalog is an interactive information brochure for medical and pharmacy networks. Patient prescriptions and dosages must be determined exclusively by certified clinical physicians.',
      copyright: 'Massoud Pharma. All rights reserved. cGMP Certified Manufacturer.',
      privacy: 'Privacy Standards',
      disclaimer: 'Healthcare Disclaimer',
      skipLink: 'Skip to main content'
    },
    ar: {
      tagline: 'رعاية صحية متميزة',
      desc: 'تطوير وتعبئة مستحضرات علاجية عالية الفعالية لتعزيز البنية التحتية الصحية بدقة تصنيعية مطلقة. حاصلون على شهادتي cGMP و ISO 9001.',
      arabicSeal: 'شركة مسعود للصناعات الدوائية - دقة وعناية تصنيعية مطلقة.',
      divisions: 'أقسام الكتيب التعريفي',
      home: 'نظرة عامة على الشركة',
      about: 'الشركة والجودة',
      catalog: 'دليل المستحضرات الدوائية',
      contacts: 'العناوين وقنوات الاتصال',
      address: 'ريف دمشق، المنطقة الصناعية، دمشق، سوريا',
      noticeTitle: 'تنويه طبي هام',
      noticeBody: 'هذا الدليل عبارة عن نشرة معلوماتية تفاعلية مخصصة للشبكات الطبية والصيدلانية فقط. يجب تحديد الوصفات والجرعات للمرضى حصرياً من قبل أطباء معتمدين.',
      copyright: 'شركة مسعود للأدوية. جميع الحقوق محفوظة 2026. مصنع معتمد لممارسات التصنيع الجيد cGMP.',
      privacy: 'معايير الخصوصية',
      disclaimer: 'إخلاء المسؤولية الطبية',
      skipLink: 'الانتقال إلى المحتوى الرئيسي'
    }
  };

  const t = footerTranslations[lang];

  return (
    <div className={`min-h-screen flex flex-col justify-between selection:bg-brand-yellow-light selection:text-brand-navy-950 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* WCAG 2.1 Skip Link */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-brand-navy-500 focus:px-5 focus:py-3.5 focus:text-sm focus:font-bold focus:text-brand-yellow focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
      >
        {t.skipLink}
      </a>

      {/* Corporate Header Nav */}
      <Header 
        onNavClick={handleNavClick} 
        activeSection={activeTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Content Area with elegant direction transition */}
      <main id="main-content" className="flex-grow outline-none overflow-hidden" tabIndex={-1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${lang}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {activeTab === 'hero' && (
              <HomeView 
                lang={lang} 
                onExploreClick={handleExploreClick} 
                onOverviewClick={() => handleNavClick('company-quality')} 
              />
            )}
            {activeTab === 'company-quality' && (
              <CompanyQualityView lang={lang} />
            )}
            {activeTab === 'products' && (
              <ProductCatalogView lang={lang} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
