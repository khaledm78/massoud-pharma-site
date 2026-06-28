'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Printer, Globe, Pill, X } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ar';
}

// Lightweight, dependency-free accessibility helper for modals:
// - Closes on Escape
// - Traps Tab/Shift+Tab focus cycling inside the modal
// - Returns focus to the element that opened the modal when it closes
function useModalA11y(
  isOpen: boolean,
  containerRef: React.RefObject<HTMLElement>,
  onClose: () => void
) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;

    const getFocusable = () => {
      const container = containerRef.current;
      if (!container) return [] as HTMLElement[];
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
      );
    };

    const focusable = getFocusable();
    if (focusable.length > 0) {
      focusable[0].focus();
    } else {
      containerRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const items = getFocusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
}

export default function Footer({ lang }: FooterProps) {
  const isAr = lang === 'ar';
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const contactModalRef = useRef<HTMLDivElement>(null);
  const privacyModalRef = useRef<HTMLDivElement>(null);

  useModalA11y(isContactModalOpen, contactModalRef, () => setIsContactModalOpen(false));
  useModalA11y(isPrivacyModalOpen, privacyModalRef, () => setIsPrivacyModalOpen(false));

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Body Scroll Lock implementation (now correctly covers BOTH modals)
  useEffect(() => {
    if (isContactModalOpen || isPrivacyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen, isPrivacyModalOpen]);

  return (
    <>
      {/* Redesigned Minimal, Elegant Footer Bottom Bar */}
      <footer className="bg-white text-gray-500 border-t border-slate-200" aria-label="Footer Navigation">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
            <p className="text-slate-500 text-center md:text-left rtl:md:text-right">
              {isAr 
                ? '© 2026 شركة مسعود للأدوية. جميع الحقوق محفوظة.' 
                : '© 2026 Massoud Pharma. All Rights Reserved.'}
            </p>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-slate-600 hover:text-slate-900 font-bold transition-colors focus-visible:outline-none focus-visible:underline rounded cursor-pointer"
              >
                {isAr ? 'اتصل بنا' : 'Contact Us'}
              </button>
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-slate-600 hover:text-slate-900 font-bold transition-colors focus-visible:outline-none focus-visible:underline rounded cursor-pointer"
              >
                {isAr ? 'الخصوصية' : 'Privacy'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Corporate Contact Modal (Direct Strict Data Injection) */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="corporate-contact-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0"
            />

            <motion.div 
              ref={contactModalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative overflow-hidden w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-6 shadow-2xl shadow-blue-900/10 border border-slate-200 text-left rtl:text-right z-10"
            >
              <div className="absolute -bottom-10 -right-10 w-96 h-96 text-slate-900 opacity-[0.03] pointer-events-none overflow-hidden select-none z-0">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="80" />
                  <circle cx="100" cy="100" r="55" />
                  <circle cx="100" cy="100" r="30" />
                  <ellipse cx="100" cy="100" rx="80" ry="30" />
                  <ellipse cx="100" cy="100" rx="30" ry="80" />
                  <line x1="20" y1="100" x2="180" y2="100" />
                  <line x1="100" y1="20" x2="100" y2="180" />
                  <line x1="43" y1="43" x2="157" y2="157" />
                  <line x1="43" y1="157" x2="157" y2="43" />
                  <circle cx="100" cy="20" r="3" fill="currentColor" />
                  <circle cx="100" cy="180" r="3" fill="currentColor" />
                  <circle cx="20" cy="100" r="3" fill="currentColor" />
                  <circle cx="180" cy="100" r="3" fill="currentColor" />
                  <circle cx="43" cy="43" r="3" fill="currentColor" />
                  <circle cx="157" cy="157" r="3" fill="currentColor" />
                  <circle cx="43" cy="157" r="3" fill="currentColor" />
                  <circle cx="157" cy="43" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 flex items-start justify-between mb-5 gap-4 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-[#FACC15] border border-slate-200 shadow-sm">
                    <Mail className="h-5.5 w-5.5 text-[#FACC15]" />
                  </div>
                  <div>
                    <h2 id="corporate-contact-title" className="font-sans text-base sm:text-lg font-bold text-blue-950">
                      {isAr ? 'بيانات الاتصال والمقر الرئيسي' : 'Corporate Communications'}
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {isAr ? 'قنوات ومكاتب مجموعة مسعود للصناعات الدوائية' : 'Massoud Group Pharmaceutical Divisions'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="rounded-full p-1.5 text-slate-600 bg-white border border-slate-200 shadow-sm hover:text-orange-400 hover:border-orange-200 hover:bg-orange-50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950"
                  aria-label="Close dialogue"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 font-sans text-xs text-slate-800">
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest">
                    {isAr ? 'القنوات الرقمية المباشرة' : 'Direct Digital Channels'}
                  </h3>
                  
                  <div className="flex flex-col gap-3.5 flex-grow">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between hover:border-slate-300 transition-colors flex-1">
                      <div>
                        <span className="block font-bold text-[11px] text-blue-950 mb-0.5">
                          {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                        </span>
                        <span className="block text-xs font-semibold text-slate-700 break-all">
                          khaledm78@gmail.com
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy('khaledm78@gmail.com', 'email')}
                        className="mt-2.5 self-start inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold rounded-full border border-orange-200 text-orange-500 bg-white hover:bg-orange-50 transition-colors cursor-pointer"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <span>
                          {copiedId === 'email' ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ البريد' : 'Click to Copy')}
                        </span>
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between hover:border-slate-300 transition-colors flex-1">
                      <div>
                        <span className="block font-bold text-[11px] text-blue-950 mb-0.5">
                          {isAr ? 'رقم المحمول' : 'Mobile Number'}
                        </span>
                        <span className="block text-xs font-semibold text-slate-700">
                          <bdi>+963 965 555 277</bdi>
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy('+963 965 555 277', 'mobile')}
                        className="mt-2.5 self-start inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold rounded-full border border-orange-200 text-orange-500 bg-white hover:bg-orange-50 transition-colors cursor-pointer"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <span>
                          {copiedId === 'mobile' ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الرقم' : 'Click to Copy')}
                        </span>
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <Globe className="h-4.5 w-4.5 text-[#FACC15]" />
                        <div>
                          <span className="block font-bold text-[11px] text-blue-950">
                            {isAr ? 'الموقع الإلكتروني' : 'Corporate Website'}
                          </span>
                          <span className="text-xs font-semibold text-slate-700">
                            www.massoud-group.com
                          </span>
                        </div>
                      </div>
                      <a 
                        href="https://www.massoud-group.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-indigo-900 hover:text-indigo-950 underline cursor-pointer"
                      >
                        {isAr ? 'زيارة' : 'Visit Site'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 h-full">
                  <h3 className="text-[10px] font-bold text-indigo-900 uppercase tracking-widest">
                    {isAr ? 'المواقع والمقرات الرسمية' : 'Corporate Locations'}
                  </h3>

                  <div className="flex flex-col gap-3.5 flex-grow">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between hover:border-slate-300 transition-colors flex-1">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4.5 w-4.5 shrink-0 text-[#FACC15] mt-0.5" />
                        <div>
                          <span className="block font-bold text-[11px] text-blue-950">
                            {isAr ? 'المكتب الرئيسي' : 'Head Office Address'}
                          </span>
                          <p className="text-slate-700 leading-relaxed text-[11px] font-medium mt-0.5">
                            Damascus, Syria - Baghdad st, P.O.Box: 8473
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-200/50">
                        <div className="flex items-center gap-2 text-[11px]">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                          <span className="font-medium text-slate-700">
                            Tel: <bdi>+963 11 445 1345/6</bdi> - <bdi>443 0021/2</bdi>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px]">
                          <Printer className="h-3.5 w-3.5 text-slate-400" />
                          <span className="font-medium text-slate-700">
                            Fax: <bdi>+963 11 445 3139</bdi> - <bdi>443 0020</bdi>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2.5 hover:border-slate-300 transition-colors flex-1">
                      <BuildingWatermark className="h-4.5 w-4.5 shrink-0 text-[#FACC15] mt-0.5" />
                      <div>
                        <span className="block font-bold text-[11px] text-blue-950">
                          {isAr ? 'المصنع' : 'The Factory Address'}
                        </span>
                        <p className="text-slate-700 leading-relaxed text-[11px] font-medium mt-0.5">
                          Damascus, Syria - Airport Road, the 7th bridge, Kafrin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="rounded-lg bg-blue-950 px-5 py-2 text-xs font-bold text-white hover:bg-indigo-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 cursor-pointer"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Corporate Privacy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
            role="dialog"
            aria-modal="true"
            aria-labelledby="corporate-privacy-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute inset-0"
            />

            <motion.div 
              ref={privacyModalRef}
              tabIndex={-1}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="relative overflow-hidden w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl shadow-blue-900/10 border border-slate-200 text-left rtl:text-right z-10"
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-[#FACC15] border border-slate-200">
                    <Pill className="h-5 w-5" />
                  </div>
                  <h2 id="corporate-privacy-title" className="font-sans text-base font-bold text-blue-950">
                    {isAr ? 'سياسة الخصوصية والمعايير' : 'Privacy & Integrity Standards'}
                  </h2>
                </div>
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="rounded-full p-1.5 text-slate-600 bg-white border border-slate-200 shadow-sm hover:text-orange-400 hover:bg-orange-50 transition-colors cursor-pointer"
                  aria-label="Close dialogue"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700 font-sans leading-relaxed">
                <p>
                  {isAr 
                    ? 'نحن نحترم خصوصية بياناتك بالكامل. هذا الكتيب التعريفي التفاعلي لا يقوم بجمع أو تخزين أو إرسال أي بيانات شخصية أو معلومات تعريفية خاصة بالمستخدمين. يتم تشغيل كافة عمليات البحث والتصفح محلياً بشكل كامل.'
                    : 'We respect your data privacy completely. This interactive product brochure does not collect, store, or transmit any personal user information. All searches, filters, and navigations are executed entirely client-side within your browser.'}
                </p>
                <p>
                  {isAr
                    ? 'تم تصميم وبناء هذا التطبيق ليتوافق مع معايير الوصول العالمية والخصوصية الصارمة للمنشآت والمرافق الطبية والصيدلانية.'
                    : 'This application has been engineered to comply with high accessibility guidelines and the rigorous standards required for modern professional medical and pharmaceutical networks.'}
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="rounded-lg bg-blue-950 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-900 transition-colors cursor-pointer"
                >
                  {isAr ? 'موافق' : 'Understood'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function BuildingWatermark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <line x1="9" y1="22" x2="9" y2="16" />
      <line x1="15" y1="22" x2="15" y2="16" />
      <line x1="9" y1="16" x2="15" y2="16" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
    </svg>
  );
}