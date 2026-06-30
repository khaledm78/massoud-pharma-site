'use client';

import React, { useState, useRef, useId, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, FileText, AlertCircle, RefreshCw, Layers, X, Pill, Syringe, Package } from 'lucide-react';
import { catalogData, getComputedCategoryTabs, Product, ProductVariant } from '../data/catalogData';
import { convertToWesternNumerals, getProductImageUrl, getVariantImageUrl, basePath } from '../lib/utils';
import { useDebounce } from '../hooks/use-debounce';
import Image from 'next/image';
import ProductImage from './ProductImage';

interface ProductCatalogProps {
  lang: 'en' | 'ar';
}

const BrandedImageFallback = ({ title, isAr }: { title: string; isAr: boolean }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy-950 to-brand-charcoal-900 flex flex-col items-center justify-center p-4 text-center select-none border border-brand-navy-800 rounded-xl">
      {/* Elegant glowing background motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-brand-yellow/5 blur-xl pointer-events-none" />
      
      {/* Decorative molecular icon */}
      <div className="relative mb-2 p-1.5 bg-brand-navy-850/40 rounded-full border border-brand-navy-700/30">
        <svg className="h-5 w-5 text-brand-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="5" r="2.5" className="fill-brand-navy-900" />
          <circle cx="5" cy="12" r="2.5" className="fill-brand-navy-900" />
          <circle cx="19" cy="12" r="2.5" className="fill-brand-navy-900" />
          <circle cx="12" cy="19" r="2.5" className="fill-brand-navy-900" />
          <line x1="12" y1="7.5" x2="12" y2="16.5" />
          <line x1="7.5" y1="12" x2="16.5" y2="12" />
        </svg>
      </div>

      <span className="text-[7px] font-mono tracking-widest text-brand-yellow font-bold uppercase mb-1">
        {isAr ? 'مسعود فارما' : 'MASSOUD PHARMA'}
      </span>
      <p className="text-[10px] font-sans text-white/95 font-medium tracking-tight truncate max-w-full px-1">
        {title}
      </p>
      <span className="text-[6.5px] font-mono text-brand-navy-300 mt-1 uppercase font-semibold">
        {isAr ? 'مستحضر معتمد' : 'CERTIFIED FORMULATION'}
      </span>
    </div>
  );
};

const ProductCardImage = ({ product, isAr }: { product: Product; isAr: boolean }) => {
  const [hasError, setHasError] = useState(false);
  const firstDosage = product.variants?.[0];

  return (
    <div className="relative w-full aspect-[4/3] h-32 sm:h-40 bg-slate-50/60 rounded-xl overflow-hidden p-3 border border-slate-100 flex items-center justify-center select-none">
      {hasError || !firstDosage ? (
        <BrandedImageFallback title={isAr ? product.name.ar : product.name.en} isAr={isAr} />
      ) : (
        <>
          {/* Abstract geometric background motif */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
            <svg className="w-full h-full text-brand-navy-500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${product.id}`} width="14" height="14" patternUnits="userSpaceOnUse">
                  <path d="M 14 0 L 0 0 0 14" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#grid-${product.id})`} />
            </svg>
          </div>

          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-brand-yellow/10 blur-xl pointer-events-none group-hover:bg-brand-yellow/20 transition-all duration-500 z-10" />
          
          {/* Top row: Brand & clinical signifier */}
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-20">
            <span className="text-[7px] font-mono tracking-widest text-slate-400 font-bold uppercase">
              {isAr ? 'مسعود للأدوية' : 'MASSOUD PHARMA'}
            </span>
            <div className="flex gap-1">
              <span className="h-1.2 w-1.2 rounded-full bg-brand-navy-200" />
              <span className="h-1.2 w-1.2 rounded-full bg-brand-yellow" />
            </div>
          </div>

          {/* Center: Mathematically constrained premium clinical/tablet image layout using ProductImage */}
          <div className="relative w-full h-full max-h-20 sm:max-h-28 z-10 animate-fade-in flex items-center justify-center">
            <ProductImage
              src={product.mainImage || getProductImageUrl(product.id)}
              alt={isAr ? product.name.ar : product.name.en}
              className="w-full h-full text-brand-navy-500"
            />
          </div>

          {/* Bottom row: Clean barcode & scientific details */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-20">
            <div className="flex flex-col gap-0.5 text-left rtl:text-right">
              <span className="text-[7px] font-mono text-brand-navy-500/80 font-bold leading-none">
                {product.id.substring(0, 5).toUpperCase()}
              </span>
            </div>
            
            {/* Minimal barcode */}
            <div className="flex gap-[1px] h-2.5 items-end opacity-35 text-slate-900">
              <div className="w-[1px] h-full bg-current" />
              <div className="w-[1.5px] h-full bg-current" />
              <div className="w-[1px] h-[70%] bg-current" />
              <div className="w-[2px] h-full bg-current" />
              <div className="w-[1px] h-[50%] bg-current" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};


const getDosageFormType = (packaging: string): 'tablet' | 'capsule' | 'suspension' | 'syrup' | 'vial' | 'default' => {
  const p = packaging.toLowerCase();
  if (p.includes('suspension') || p.includes('معلق')) return 'suspension';
  if (p.includes('tablet') || p.includes('tab') || p.includes('مضغوط')) return 'tablet';
  if (p.includes('capsule') || p.includes('cap') || p.includes('كبسول')) return 'capsule';
  if (p.includes('vial') || p.includes('أمبول') || p.includes('inj') || p.includes('حقن') || p.includes('ampoule')) return 'vial';
  if (p.includes('syrup') || p.includes('شراب')) return 'syrup';
  return 'default';
};

const translateToArabic = (text: string): string => {
  const dictionary: Record<string, string> = {
    // Dosages & Strengths with standard Western Arabic numerals as per strict specifications
    '250 mg': '250 ملغ',
    '500 mg': '500 ملغ',
    '125 mg / 5 ml': '125 ملغ / 5 مل',
    '250 mg / 5 ml': '250 ملغ / 5 ml',
    '200 mg / 5 ml': '200 ملغ / 5 مل',
    '10 mg': '10 ملغ',
    '20 mg': '20 ملغ',
    '40 mg': '40 ملغ',
    '5 mg': '5 ملغ',
    '25 mg': '25 ملغ',
    '50 mg': '50 ملغ',
    '135 mg': '135 ملغ',
    '200 mg SR': '200 ملغ ممتد المفعول',
    '1 mg / 1 ml': '1 ملغ / 1 مل',
    '1000 mg': '1000 ملغ',
    '120 mg / 5 ml': '120 ملغ / 5 مل',
    '400 mg': '400 ملغ',
    '600 mg': '600 ملغ',
    '100 mg / 5 ml': '100 ملغ / 5 مل',
    '5 mg / 5 ml': '5 ملغ / 5 مل',
    '4 mg Chewable': '4 ملغ قابلة للمضغ',
    '5 mg Chewable': '5 ملغ قابلة للمضغ',
  };

  return dictionary[text] || text;
};

// Custom React component that unconditionally replaces and enforces standard Western Arabic numerals (0-9)
const ForceWesternDigits = ({ text }: { text: string | undefined | null }) => {
  if (!text) return null;
  const converted = convertToWesternNumerals(text);
  const hasDigits = /[0-9]/.test(converted);
  if (hasDigits) {
    return <span dir="ltr" className="font-sans inline-block">{converted}</span>;
  }
  return <>{converted}</>;
};

const getCategoryStyles = (id: string, isActive: boolean) => {
  const base = "relative px-5 py-2.5 min-h-[44px] rounded-full font-sans text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 snap-center md:snap-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer select-none";

  if (!isActive) {
    return `${base} bg-white/10 backdrop-blur-md border border-white/20 text-white/90 hover:bg-white hover:text-[#143A6E] hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]`;
  }

  return `${base} bg-gradient-to-br from-[#FACC15] to-[#F89C3A] border border-white/40 text-[#143A6E] font-black shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_20px_rgba(248,156,58,0.35)] after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-[#143A6E] after:rounded-full`;
};



const renderMedicineVisualLarge = (dosageForm: string) => {
  const colorTheme = {
    primary: 'fill-brand-navy-500 stroke-brand-navy-600',
    secondary: 'fill-brand-navy-200 stroke-brand-navy-300',
    accent: 'fill-brand-yellow',
  };

  switch (dosageForm) {
    case 'capsule':
      return (
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-charcoal-50 to-brand-charcoal-100 border border-brand-charcoal-200/50 shadow-sm">
          <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10 16C10 12.6863 12.6863 10 16 10V22C12.6863 22 10 19.3137 10 16Z" className={colorTheme.primary} strokeWidth="1" />
            <path d="M16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22V10Z" className={colorTheme.secondary} strokeWidth="1" />
            <rect x="15" y="9" width="2" height="14" rx="1" className={colorTheme.accent} />
          </svg>
        </div>
      );
    case 'tablet':
      return (
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-charcoal-50 to-brand-charcoal-100 border border-brand-charcoal-200/50 shadow-sm">
          <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="16" cy="16" r="9" className={colorTheme.primary} strokeWidth="1" />
            <circle cx="16" cy="16" r="6.5" className={colorTheme.secondary} fillOpacity="0.4" strokeWidth="1" />
            <line x1="16" y1="7" x2="16" y2="25" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 2" />
            <circle cx="16" cy="16" r="1.5" className="fill-brand-yellow" />
          </svg>
        </div>
      );
    case 'suspension':
    case 'syrup':
      return (
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-charcoal-50 to-brand-charcoal-100 border border-brand-charcoal-200/50 shadow-sm">
          <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="11" y="13" width="10" height="13" rx="2" className={colorTheme.primary} strokeWidth="1" />
            <rect x="13" y="9" width="6" height="4" className={colorTheme.secondary} strokeWidth="1" />
            <rect x="12" y="7" width="8" height="2.5" rx="0.5" className={colorTheme.accent} />
            <rect x="13.5" y="15" width="5" height="5" fill="#ffffff" rx="1" />
            <line x1="15" y1="17.5" x2="17" y2="17.5" stroke="#000000" strokeWidth="1.2" strokeOpacity="0.3" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-charcoal-50 to-brand-charcoal-100 border border-brand-charcoal-200/50 shadow-sm">
          <svg className="h-8 w-8 text-brand-navy-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-brand-navy-500" />
            <path d="M12 8v8M8 12h8" className="stroke-brand-navy-500" />
          </svg>
        </div>
      );
  }
};

const getDosageIcon = (form: string) => {
  const f = form.toLowerCase();
  if (f.includes('vial') || f.includes('inject') || f.includes('ampoule')) return Syringe;
  if (f.includes('tablet') || f.includes('tab') || f.includes('capsule') || f.includes('cap')) return Pill;
  return Package;
};

const renderLargeShowcaseVisual = (form: string, strength: string) => {
  const type = getDosageFormType(form);
  switch (type) {
    case 'tablet':
      return (
        <div className="relative flex flex-col items-center justify-center animate-fade-in w-full h-full select-none">
          <svg className="w-2/3 h-2/3 max-h-[140px] drop-shadow-2xl filter saturate-100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="52" rx="36" ry="36" fill="#143A6E" fillOpacity="0.08" />
            <circle cx="50" cy="50" r="35" fill="url(#tabletGrad)" stroke="#143A6E" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="28" fill="url(#tabletInnerGrad)" stroke="#143A6E" strokeWidth="0.5" strokeOpacity="0.3" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#143A6E" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 2" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#ffffff" strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.6" />
            <text x="32" y="52" fill="#143A6E" fillOpacity="0.6" fontSize="5.5" fontWeight="bold" fontFamily="monospace">M P</text>
            <text x="56" y="52" fill="#F89C3A" fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">{strength}</text>
            
            <defs>
              <linearGradient id="tabletGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.5" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#e2e8f0" />
              </linearGradient>
              <linearGradient id="tabletInnerGrad" x1="22" y1="22" x2="78" y2="78" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f8fafc" stopOpacity="0.8" />
                <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[9px] font-mono tracking-widest text-[#143A6E] font-bold uppercase mt-4">
            COMPRESSED TABLET
          </span>
        </div>
      );
    case 'capsule':
      return (
        <div className="relative flex flex-col items-center justify-center animate-fade-in w-full h-full select-none">
          <svg className="w-2/3 h-2/3 max-h-[140px] drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(-45 50 50)">
              <rect x="35" y="15" width="30" height="70" rx="15" fill="url(#capsuleShadow)" />
              <path d="M35,50 L35,70 C35,78.3 41.7,85 50,85 C58.3,85 65,78.3 65,70 L65,50 Z" fill="url(#capsuleBottom)" stroke="#143A6E" strokeWidth="1" />
              <path d="M35,50 L35,30 C35,21.7 41.7,15 50,15 C58.3,15 65,21.7 65,30 L65,50 Z" fill="url(#capsuleTop)" stroke="#143A6E" strokeWidth="1" />
              <rect x="34" y="48.5" width="32" height="3" rx="0.5" fill="#F89C3A" stroke="#143A6E" strokeWidth="0.5" />
              <path d="M38,25 L38,45" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
            </g>
            <defs>
              <linearGradient id="capsuleShadow" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#000000" stopOpacity="0.1" />
                <stop offset="1" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="capsuleBottom" x1="35" y1="50" x2="65" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af" />
                <stop offset="0.5" stopColor="#143A6E" />
                <stop offset="1" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="capsuleTop" x1="35" y1="15" x2="65" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.8" stopColor="#f1f5f9" />
                <stop offset="1" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[9px] font-mono tracking-widest text-[#143A6E] font-bold uppercase mt-4">
            HARD GELATIN CAPSULE
          </span>
        </div>
      );
    case 'suspension':
    case 'syrup':
      return (
        <div className="relative flex flex-col items-center justify-center animate-fade-in w-full h-full select-none">
          <svg className="w-2/3 h-2/3 max-h-[140px] drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35,32 L65,32 L65,80 C65,84.4 61.4,88 57,88 L43,88 C38.6,88 35,84.4 35,80 Z" fill="url(#bottleGrad)" stroke="#143A6E" strokeWidth="1" />
            <rect x="44" y="20" width="12" height="12" fill="url(#neckGrad)" stroke="#143A6E" strokeWidth="1" />
            <rect x="41" y="14" width="18" height="7" rx="1.5" fill="url(#capGrad)" stroke="#143A6E" strokeWidth="1" />
            <line x1="45" y1="15" x2="45" y2="20" stroke="#143A6E" strokeWidth="0.5" />
            <line x1="50" y1="15" x2="50" y2="20" stroke="#143A6E" strokeWidth="0.5" />
            <line x1="55" y1="15" x2="55" y2="20" stroke="#143A6E" strokeWidth="0.5" />
            <path d="M36,48 L64,48 L64,79 C64,82.9 60.9,86 57,86 L43,86 C39.1,86 36,82.9 36,79 Z" fill="url(#liquidGrad)" fillOpacity="0.85" />
            <ellipse cx="50" cy="48" rx="14" ry="2" fill="#F89C3A" fillOpacity="0.4" />
            <rect x="38" y="52" width="24" height="24" rx="1" fill="#ffffff" stroke="#143A6E" strokeWidth="0.5" />
            <rect x="41" y="55" width="18" height="2" fill="#143A6E" />
            <rect x="41" y="59" width="12" height="1.5" fill="#94a3b8" />
            <rect x="41" y="62" width="15" height="1.5" fill="#94a3b8" />
            <text x="41" y="71" fill="#F89C3A" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif">{strength}</text>

            <defs>
              <linearGradient id="bottleGrad" x1="35" y1="32" x2="65" y2="88" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="1" stopColor="#e2e8f0" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="neckGrad" x1="44" y1="20" x2="56" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="capGrad" x1="41" y1="14" x2="59" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#334155" />
                <stop offset="0.5" stopColor="#1e293b" />
                <stop offset="1" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="liquidGrad" x1="36" y1="48" x2="64" y2="86" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fdba74" />
                <stop offset="0.5" stopColor="#f97316" />
                <stop offset="1" stopColor="#c2410c" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[9px] font-mono tracking-widest text-[#143A6E] font-bold uppercase mt-4">
            ORAL SUSPENSION / SYRUP
          </span>
        </div>
      );
    default:
      return (
        <div className="relative flex flex-col items-center justify-center animate-fade-in w-full h-full select-none">
          <svg className="w-2/3 h-2/3 max-h-[140px] drop-shadow-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="20" width="50" height="60" rx="4" fill="url(#boxGrad)" stroke="#143A6E" strokeWidth="1" />
            <rect x="30" y="25" width="40" height="5" fill="#143A6E" rx="0.5" />
            <rect x="30" y="34" width="20" height="2" fill="#94a3b8" />
            <rect x="30" y="38" width="30" height="2" fill="#94a3b8" />
            <path d="M 50,48 L 50,60 M 44,54 L 56,54" stroke="#F89C3A" strokeWidth="2.5" strokeLinecap="round" />
            <text x="30" y="72" fill="#143A6E" fontSize="5" fontWeight="bold" fontFamily="sans-serif">{strength}</text>

            <defs>
              <linearGradient id="boxGrad" x1="25" y1="20" x2="75" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" />
                <stop offset="0.8" stopColor="#f8fafc" />
                <stop offset="1" stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[9px] font-mono tracking-widest text-[#143A6E] font-bold uppercase mt-4">
            CLINICAL PACKAGING
          </span>
        </div>
      );
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 110,
      damping: 16
    }
  }
};

export default function ProductCatalog({ lang }: ProductCatalogProps) {
  const categoryTabs = getComputedCategoryTabs(catalogData);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [imgError, setImgError] = useState(false);
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedVariantIndex(0);
    const img = product.variants?.[0]?.variantImage || getVariantImageUrl(product.id, 0);
    setActiveImage(img);
    setIsImageLoading(true);
    setImgError(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSelectedVariantIndex(0);
    setActiveImage(undefined);
    setIsImageLoading(true);
    setImgError(false);
  };

  const handleSelectVariant = (index: number) => {
    setSelectedVariantIndex(index);
    if (selectedProduct) {
      const currentVariant = selectedProduct.variants[index];
      const img = currentVariant?.variantImage || selectedProduct.mainImage;
      setActiveImage(img);
      setIsImageLoading(true);
      setImgError(false);
    }
  };

  // Compute selectedVariant on the fly
  const selectedVariant = selectedProduct?.variants[selectedVariantIndex] || selectedProduct?.variants[0] || null;

  const searchInputId = useId();
  const tabListRef = useRef<HTMLDivElement>(null);
  const isAr = lang === 'ar';

  const translations = {
    en: {
      preTitle: 'Therapeutic Divisions',
      title: 'Pharmaceutical Catalog',
      desc: 'Browse our pharmaceutical formulations, precise packaging specifications, and medical directions. Grouped elegantly by active categories.',
      searchPlaceholder: 'Search products by name, formula, or indications...',
      clearBtn: 'Clear',
      noFormulations: 'No formulations found',
      noFormulationsDesc: 'We could not find any products matching your query or selected therapeutic class. Please check your spelling or choose a different category.',
      resetBtn: 'Reset Catalog Filters',
      activeIngredient: 'Active Ingredient',
      dosageHeader: 'AVAILABLE DOSAGE STRENGTHS & PACKAGING',
      indicationHeader: 'THERAPEUTIC INDICATIONS',
      resultsCount: (count: number) => `Showing ${count} products`,
      modalClose: 'Close Details',
      modalTitle: 'Product Dossier',
      dosageTitle: 'Dosage Form',
      packagingTitle: 'Packaging Specification',
      indicationsTitle: 'THERAPEUTIC INDICATIONS',
      scientificNameTitle: 'Scientific Formulation',
      categoryTitle: 'Therapeutic Category',
      viewDetails: 'Click to view dossier',
    },
    ar: {
      preTitle: 'الأقسام العلاجية الدوائية',
      title: 'دليل المستحضرات الطبية',
      desc: 'تصفح تراكيبنا الدوائية، ومواصفات التعبئة والتغليف الدقيقة، والإرشادات الطبية المعتمدة. مصنفة بدقة تامة حسب الفئة العلاجية.',
      searchPlaceholder: 'ابحث عن المستحضرات بالاسم أو المادة أو الاستطباب...',
      clearBtn: 'مسح',
      noFormulations: 'لم يتم العثور على مستحضرات',
      noFormulationsDesc: 'تعذر العثور على مستحضرات مطابقة للبحث أو الفئة العلاجية المحددة. يرجى مراجعة التهجئة أو اختيار قسم آخر.',
      resetBtn: 'إعادة تعيين فلاتر الدليل',
      activeIngredient: 'التركيب العلمي',
      dosageHeader: 'العيارات والأشكال الصيدلانية المتوفرة',
      dosageTitle: 'الشكل الصيدلاني',
      packagingTitle: 'مواصفات التعبئة والتغليف',
      indicationsTitle: 'الاستطبابات العلاجية',
      scientificNameTitle: 'التركيبة العلمية',
      categoryTitle: 'الفئة العلاجية',
      resultsCount: (count: number) => `يعرض ${count} مستحضرات`,
      modalClose: 'إغلاق التفاصيل',
      modalTitle: 'ملف التعريف بالمنتج',
      viewDetails: 'انقر لعرض الملف التعريفي',
    }
  };

  const t = translations[lang];

  // Block screen scroll when modal is open for a native UI feel
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  // Filter products based on active therapeutic category tab and search query (debounced for extreme speed and smoothness)
  const filteredProducts = catalogData.filter((product) => {
    const productTabId = product.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const matchesTab = activeTab === 'all' || productTabId === activeTab;
    
    const query = debouncedSearchQuery.toLowerCase().trim();
    if (!query) return matchesTab;

    const matchesSearch = 
      product.name.en.toLowerCase().includes(query) ||
      product.name.ar.toLowerCase().includes(query) ||
      product.activeIngredient.en.toLowerCase().includes(query) ||
      product.activeIngredient.ar.toLowerCase().includes(query) ||
      product.indications.en.toLowerCase().includes(query) ||
      product.indications.ar.toLowerCase().includes(query);

    return matchesTab && matchesSearch;
  });

  const categoryObj = categoryTabs.find(c => c.id === activeTab);
  const categoryName = categoryObj ? (isAr ? categoryObj.nameAr : categoryObj.name) : (isAr ? 'الكل' : 'All');
  const count = filteredProducts.length;
  const srAnnouncement = isAr
    ? `تم العثور على ${count} مستحضرات في قسم ${categoryName}.`
    : `Found ${count} products in ${categoryName}.`;

  // Handle left/right arrow navigation for Tab list (WCAG 2.1 compliance)
  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = categoryTabs.findIndex((c) => c.id === activeTab);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    const nextKey = isAr ? 'ArrowLeft' : 'ArrowRight';
    const prevKey = isAr ? 'ArrowRight' : 'ArrowLeft';

    if (e.key === nextKey) {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % categoryTabs.length;
    } else if (e.key === prevKey) {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + categoryTabs.length) % categoryTabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = categoryTabs.length - 1;
    } else {
      return;
    }

    const nextTabId = categoryTabs[nextIndex].id;
    setActiveTab(nextTabId);

    const nextButton = document.getElementById(`tab-btn-${nextTabId}`);
    if (nextButton) {
      nextButton.focus();
    }
  };

  return (
    <section 
      id="products" 
      className="relative overflow-hidden bg-white text-brand-charcoal-800"
      aria-labelledby="catalog-title"
    >
      {/* Subtle Medical Plus Watermark */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 20h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8z' fill='%23143A6E' fill-rule='evenodd'/%3E%3C/svg%3E")`, 
          backgroundSize: '60px 60px' 
        }}
      ></div>
      
      {/* 1. UPPER ZONE: The Clean White Canvas */}
      <div className="relative z-10 bg-white py-12 sm:py-16 overflow-hidden">
        
        {/* Massive, absolute-positioned pharmaceutical / medical watermark behind text */}
        <div 
          className="pointer-events-none absolute top-0 left-0 z-0"
          style={{ 
            height: '85%',
            maxHeight: '380px',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 85%)',
            maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 85%)',
          }}
        >
          <img src={`${basePath}/mp-icon-navy.svg`} alt="" className="h-full w-auto opacity-[0.08]" />
        </div>

        <div className="sr-only" aria-live="polite" role="status">
          {srAnnouncement}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-wider text-brand-navy-500 uppercase">
              {t.preTitle}
            </span>
            <h2 
              id="catalog-title" 
              className="mt-2 font-display text-2xl font-black tracking-tight text-brand-navy-500 sm:text-3xl"
            >
              {t.title}
            </h2>
            <p className="mt-3 font-sans text-xs text-brand-charcoal-600">
              {t.desc}
            </p>
          </div>

          {/* 1. Interactive Premium Search Box */}
          <div className="max-w-xl mx-auto">
            <label htmlFor={searchInputId} className="sr-only">
              {t.searchPlaceholder}
            </label>
            <div className="relative rounded-xl bg-white border border-brand-charcoal-200/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_2px_rgba(20,58,110,0.04)] focus-within:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_0_4px_rgba(250,204,21,0.25)] focus-within:border-[#FACC15] transition-all duration-300">
              <div className={`pointer-events-none absolute inset-y-0 flex items-center ${isAr ? 'right-4' : 'left-4'}`}>
                <Search className="h-4.5 w-4.5 text-brand-navy-500/80" aria-hidden="true" />
              </div>
              <input
                type="search"
                id={searchInputId}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className={`block w-full rounded-xl border-0 bg-transparent py-3.5 ${
                  isAr ? 'pr-11 pl-20 text-right font-arabic' : 'pl-11 pr-20 text-left font-sans'
                } text-sm text-brand-charcoal-900 placeholder:text-brand-charcoal-400 transition-all focus:outline-none focus:ring-4 focus:ring-brand-navy-500/10`}
                aria-label="Search Massoud Pharma catalog"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className={`absolute inset-y-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500 rounded-lg m-1.5 ${
                    isAr ? 'left-2' : 'right-2'
                  }`}
                  aria-label="Clear search query"
                >
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase bg-brand-charcoal-100 hover:bg-brand-charcoal-200/80 border border-brand-charcoal-200 text-brand-charcoal-700 rounded-full px-3 py-1 cursor-pointer transition-all">
                    <span>{t.clearBtn}</span>
                    <X className="h-3 w-3 shrink-0" />
                  </span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE NAVIGATION BAND: Premium Navy Zone */}
      <div className="relative bg-[#143A6E] py-8 overflow-hidden z-10">
        
        {/* Capsule Watermark - bleeding off the bottom-right corner */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-16 z-0 opacity-[0.10] w-[220px] sm:w-[300px] transform-gpu rotate-[-14deg]">
          <svg viewBox="0 0 100 60" fill="none" stroke="white" strokeWidth="1.3" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect x="4" y="12" width="92" height="36" rx="18" />
            <line x1="50" y1="12" x2="50" y2="48" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Tablist (Intelligent Responsive Wrapping & Mobile Touch Draggable Swipe) */}
          <div className="rounded-2xl bg-white/5 p-2 border border-white/10 backdrop-blur-md">
            <div 
              ref={tabListRef}
              role="tablist"
              aria-label="Therapeutic pharmaceutical categories"
              onKeyDown={handleTabKeyDown}
              className="flex overflow-x-auto flex-nowrap gap-3 pb-2 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-w-full md:flex-wrap md:justify-center md:overflow-x-visible"
            >
              {categoryTabs.map((category, index) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={`cat-tab-${category.id}-${index}`}
                    id={`tab-btn-${category.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${category.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(category.id)}
                    className={getCategoryStyles(category.id, isActive)}
                  >
                    <span className={isAr ? 'font-arabic text-xs leading-none' : 'font-sans text-xs leading-none'}>
                      {isAr ? category.nameAr : category.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. THE PRODUCT GRID BAND: Soft Gray Canvas */}
      <div className="relative bg-slate-50 py-12 sm:py-16 overflow-hidden z-10">
        
        {/* Large Anchor Bottle Watermark - vertically centered, side-fade only, no vertical clipping */}
        <div 
          className="pointer-events-none absolute top-0 right-0 h-full z-0 opacity-[0.05] text-brand-navy-500 flex items-center"
          style={{
            width: 'min(38vw, 420px)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 85%)',
            maskImage: 'linear-gradient(to left, black 0%, black 30%, transparent 85%)',
          }}
        >
          <svg viewBox="0 0 100 160" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto translate-x-8">
            <rect x="32" y="8" width="20" height="14" rx="2" />
            <path d="M37 22 L37 38 Q37 44 30 50 L30 142 Q30 152 40 152 L60 152 Q70 152 70 142 L70 50 Q63 44 63 38 L63 22" />
            <line x1="30" y1="95" x2="70" y2="95" />
          </svg>
        </div>

        {/* Molecular / Hexagonal Texture Pattern - subtle full-width background for the lower section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1400px] z-0 opacity-[0.03] text-brand-navy-500 overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pharmaHexPattern" x="0" y="0" width="220" height="190" patternUnits="userSpaceOnUse">
                <polygon points="60,10 100,30 100,70 60,90 20,70 20,30" fill="none" stroke="currentColor" strokeWidth="1" />
                <polygon points="170,60 200,75 200,105 170,120 140,105 140,75" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="60" cy="10" r="2" fill="currentColor" />
                <circle cx="100" cy="30" r="2" fill="currentColor" />
                <circle cx="20" cy="70" r="2" fill="currentColor" />
                <circle cx="170" cy="60" r="2" fill="currentColor" />
                <path d="M60 90 L60 130 L100 150" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="100" cy="150" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pharmaHexPattern)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Results Info */}
          <div className="mb-6 text-xs font-bold text-brand-charcoal-400 flex items-center justify-between text-left rtl:text-right">
            <span>{t.resultsCount(filteredProducts.length)}</span>
          </div>

          {/* Product Cards Grid */}
          <div 
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-btn-${activeTab}`}
            className="outline-none"
          >
            {filteredProducts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-3xl border border-dashed border-slate-200 p-12 text-center max-w-lg mx-auto bg-white shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-4 border border-slate-200/50">
                  <AlertCircle className="h-6 w-6 text-brand-charcoal-500" />
                </div>
                <h3 className={`font-display text-base sm:text-lg font-bold text-brand-charcoal-900 ${isAr ? 'font-arabic' : 'font-sans'}`}>
                  {isAr ? 'لم يتم العثور على مستحضرات' : 'No formulations found'}
                </h3>
                <p className={`mt-2 text-xs sm:text-sm text-brand-charcoal-500 leading-relaxed ${isAr ? 'font-arabic' : 'font-sans'}`}>
                  {isAr 
                    ? `لم يتم العثور على مستحضرات مطابقة لـ "${searchQuery || debouncedSearchQuery}"` 
                    : `No products found matching "${searchQuery || debouncedSearchQuery}"`}
                </p>
                <button
                  onClick={() => {
                    setActiveTab('all');
                    setSearchQuery('');
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-navy-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-navy-600 shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy-500 cursor-pointer"
                >
                  <RefreshCw className="h-4 w-4 animate-spin-reverse shrink-0" />
                  <span>{t.resetBtn}</span>
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key={activeTab}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch transform-gpu"
              >
                {activeTab !== 'all' ? (
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.map((product, index) => (
                      <motion.article
                        key={`product-${product.id}-${index}`}
                        variants={itemVariants}
                        onClick={() => {
                          handleSelectProduct(product);
                        }}
                        className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_8px_30px_rgba(20,58,110,0.05)] hover:shadow-[0_20px_40px_rgba(20,58,110,0.12)] hover:-translate-y-1 transition-all duration-300 relative cursor-pointer text-center select-none transform-gpu"
                        title={t.viewDetails}
                      >
                        <div>
                          {/* Padded placeholder with high-end molecular structure motif */}
                          <ProductCardImage product={product} isAr={isAr} />

                          {/* Trade Name in Bold Premium Typography */}
                          <h3 className={`mt-4 font-display text-sm sm:text-base md:text-lg font-black text-brand-navy-500 group-hover:text-[#F89C3A] transition-colors duration-300 ${isAr ? 'font-arabic leading-tight' : 'font-sans tracking-tight'}`}>
                            {isAr ? product.name.ar : product.name.en}
                          </h3>
                        </div>
                      </motion.article>
                    ))}
                  </AnimatePresence>
                ) : (
                  categoryTabs
                    .filter((cat) => cat.id !== 'all')
                    .map((category, groupIdx) => {
                      const groupProducts = filteredProducts.filter(
                        (product) =>
                          product.category.en.toLowerCase().replace(/[^a-z0-9]+/g, '-') === category.id
                      );
                      if (groupProducts.length === 0) return null;

                      const groupCategoryName = isAr ? category.nameAr : category.name;
                      const pharmaWatermarks = [
                        <svg key="wm0" viewBox="0 0 100 160" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-auto"><rect x="32" y="8" width="20" height="14" rx="2" /><path d="M37 22 L37 38 Q37 44 30 50 L30 142 Q30 152 40 152 L60 152 Q70 152 70 142 L70 50 Q63 44 63 38 L63 22" /><line x1="30" y1="95" x2="70" y2="95" /></svg>,
                        <svg key="wm1" viewBox="0 0 60 140" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-auto"><rect x="20" y="5" width="20" height="10" rx="1" /><path d="M20 15 L20 30 L14 40 L14 120 Q14 130 24 130 L36 130 Q46 130 46 120 L46 40 L40 30 L40 15" /><line x1="14" y1="85" x2="46" y2="85" /><line x1="14" y1="100" x2="46" y2="100" strokeDasharray="2 2" /></svg>,
                        <svg key="wm2" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-full h-auto"><rect x="4" y="12" width="92" height="36" rx="18" /><line x1="50" y1="12" x2="50" y2="48" /></svg>,
                        <svg key="wm3" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-full h-auto"><circle cx="50" cy="50" r="42" /><line x1="50" y1="10" x2="50" y2="90" strokeDasharray="3 3" /></svg>,
                        <svg key="wm4" viewBox="0 0 140 80" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-full h-auto"><rect x="6" y="10" width="128" height="60" rx="30" /><line x1="70" y1="10" x2="70" y2="70" strokeDasharray="3 3" /></svg>,
                        <svg key="wm5" viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-auto"><rect x="4" y="4" width="112" height="72" rx="8" /><circle cx="22" cy="22" r="9" /><circle cx="48" cy="22" r="9" /><circle cx="74" cy="22" r="9" /><circle cx="100" cy="22" r="9" /><circle cx="22" cy="58" r="9" /><circle cx="48" cy="58" r="9" /><circle cx="74" cy="58" r="9" /><circle cx="100" cy="58" r="9" /></svg>,
                        <svg key="wm6" viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth="1.3" className="w-full h-auto"><path d="M28 25 Q28 65 50 70 Q72 65 72 25" /><line x1="50" y1="70" x2="50" y2="100" /><path d="M32 112 Q50 102 68 112" /><line x1="24" y1="112" x2="76" y2="112" /><path d="M50 15 C 20 25, 80 45, 35 55 C 5 62, 60 80, 45 95 C 38 100, 40 105, 44 106" /><circle cx="46" cy="105" r="2.2" fill="currentColor" stroke="none" /></svg>,
                      ];
                      const showWatermark = groupIdx > 0;
                      const watermarkOnRight = groupIdx % 2 === 0;

                      return (
                        <React.Fragment key={category.id}>
                          {/* Premium Section Divider */}
                          <div className="relative isolate flex items-center w-full mt-12 first:mt-4 mb-8 col-span-full" dir={isAr ? 'rtl' : 'ltr'}>
                            {showWatermark && (
                              <div
                                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 -z-10 opacity-[0.04] text-brand-navy-500 w-[150px] sm:w-[200px] transform-gpu ${watermarkOnRight ? '-right-4 sm:-right-8 rotate-[10deg]' : '-left-4 sm:-left-8 rotate-[-10deg]'}`}
                                style={{
                                  WebkitMaskImage: watermarkOnRight
                                    ? 'linear-gradient(to left, black 0%, transparent 75%)'
                                    : 'linear-gradient(to right, black 0%, transparent 75%)',
                                  maskImage: watermarkOnRight
                                    ? 'linear-gradient(to left, black 0%, transparent 75%)'
                                    : 'linear-gradient(to right, black 0%, transparent 75%)',
                                }}
                              >
                                {pharmaWatermarks[groupIdx % pharmaWatermarks.length]}
                              </div>
                            )}
                            <h3 className={`text-xl md:text-2xl font-bold text-[#143A6E] whitespace-nowrap ${isAr ? 'pl-6 pr-2 font-arabic' : 'pl-2 pr-6 font-sans'}`}>
                              {groupCategoryName}
                            </h3>
                            <div className={`flex-grow h-[1px] bg-gradient-to-r ${isAr ? 'from-transparent to-slate-300' : 'from-slate-300 to-transparent'}`}></div>
                          </div>

                          {/* Products in this category */}
                          {groupProducts.map((product, index) => (
                            <motion.article
                              key={`product-${product.id}-${index}`}
                              variants={itemVariants}
                              onClick={() => {
                                handleSelectProduct(product);
                              }}
                              className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 shadow-[0_8px_30px_rgba(20,58,110,0.05)] hover:shadow-[0_20px_40px_rgba(20,58,110,0.12)] hover:-translate-y-1 transition-all duration-300 relative cursor-pointer text-center select-none transform-gpu"
                              title={t.viewDetails}
                            >
                              <div>
                                {/* Padded placeholder with high-end molecular structure motif */}
                                <ProductCardImage product={product} isAr={isAr} />

                                {/* Trade Name in Bold Premium Typography */}
                                <h3 className={`mt-4 font-display text-sm sm:text-base md:text-lg font-black text-brand-navy-500 group-hover:text-[#F89C3A] transition-colors duration-300 ${isAr ? 'font-arabic leading-tight' : 'font-sans tracking-tight'}`}>
                                  {isAr ? product.name.ar : product.name.en}
                                </h3>
                              </div>
                            </motion.article>
                          ))}
                        </React.Fragment>
                      );
                    })
                )}
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {/* 4. Highly Elegant Detailed Product Modal / Dialog */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Glassmorphism Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative overflow-hidden bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 md:p-10 z-10 scrollbar-thin flex flex-col justify-between text-left rtl:text-right"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-trade-name"
            >
              
              {/* Organic Premium "S" Capsule Background Watermark */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.02] text-slate-900 pointer-events-none z-0"
              >
                {/* Medical capsule outline */}
                <rect x="35" y="15" width="30" height="70" rx="15" stroke="currentColor" strokeWidth="3" />
                <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" />
                {/* Stylized flowing S curves forming capsule details & curves */}
                <path
                  d="M 50,25 C 42,25 38,32 50,40 C 62,48 58,55 50,55"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 50,55 C 42,55 38,62 50,70 C 62,78 58,85 50,85"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Curved smile line */}
                <path
                  d="M 45,78 Q 50,82 55,78"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Premium corner accents - subtle molecular/geometric details (top-left navy, bottom-right gold) */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-6 -left-6 w-28 h-28 sm:w-36 sm:h-36 opacity-[0.06] text-[#143A6E] pointer-events-none z-0"
              >
                <polygon points="50,8 88,30 88,70 50,92 12,70 12,30" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <polygon points="50,28 70,40 70,60 50,72 30,60 30,40" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="50" cy="8" r="2" fill="currentColor" />
                <circle cx="88" cy="30" r="2" fill="currentColor" />
                <circle cx="12" cy="70" r="2" fill="currentColor" />
              </svg>

              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-6 -right-6 w-28 h-28 sm:w-36 sm:h-36 opacity-[0.07] text-[#F89C3A] pointer-events-none z-0"
              >
                <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" />
                <circle cx="50" cy="16" r="2.5" fill="currentColor" />
                <circle cx="84" cy="50" r="2.5" fill="currentColor" />
                <circle cx="50" cy="84" r="2.5" fill="currentColor" />
              </svg>

              {/* Absolute Close Button - Sleek floating circular button over top-right corner */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 bg-white/70 backdrop-blur-md hover:bg-red-50 hover:text-red-500 border border-slate-200/80 rounded-full p-2 transition-all shadow-sm cursor-pointer"
                aria-label={t.modalClose}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="relative z-10">
                {/* Master-Detail Split Header */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column (Context & Typography - span 7) */}
                  <div className="relative overflow-hidden md:col-span-7 flex flex-col justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-xs min-h-[200px]">

                    <div className="relative z-10">
                      {/* Category Badge */}
                      <div className="mb-2">
                        <span className="inline-flex items-center gap-1 rounded-md bg-brand-navy-50 px-2.5 py-1 text-[10px] font-bold text-brand-navy-600 border border-brand-navy-100 uppercase tracking-wider">
                          <Layers className="h-3.5 w-3.5" />
                          {isAr ? selectedProduct.category.ar : selectedProduct.category.en}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 
                        id="modal-trade-name" 
                        className={`text-3xl md:text-5xl font-extrabold text-[#143A6E] tracking-tight mt-3 leading-tight ${isAr ? 'font-arabic' : 'font-sans'}`}
                      >
                        {isAr ? selectedProduct.name.ar : selectedProduct.name.en}
                      </h3>

                      {/* Active Ingredient & Pharmacological Class */}
                      <div className="mt-4">
                        <p className="text-lg text-slate-600">
                          {t.activeIngredient}:{' '}
                          <span className="text-[#F89C3A] font-bold">
                            {isAr ? selectedProduct.activeIngredient.ar : selectedProduct.activeIngredient.en}
                          </span>
                        </p>
                        <p className="text-sm text-slate-400 font-medium mt-1">
                          {isAr ? selectedProduct.pharmacologicalClass.ar : selectedProduct.pharmacologicalClass.en}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Dynamic Image Showcase - span 5) */}
                  <div className="md:col-span-5 w-full">
                    <div className="bg-slate-50 rounded-2xl aspect-square flex items-center justify-center border border-slate-100 shadow-inner relative overflow-hidden w-full h-full min-h-[220px]">
                      {/* Decorative design details */}
                      <div className="absolute top-3 left-3 flex gap-1 z-30">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-navy-200" />
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
                      </div>
                      {selectedVariant && (
                        <div className="absolute bottom-3 right-3 opacity-20 font-mono text-[7px] text-slate-400 z-30">
                          REF: {selectedProduct.id.toUpperCase()}-{selectedVariantIndex}
                        </div>
                      )}

                      {activeImage && !imgError ? (
                        <div className="relative w-full h-full aspect-square flex items-center justify-center p-6">
                          {/* Beautiful shimmering skeleton loader */}
                          {isImageLoading && (
                            <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-20">
                              <div className="w-8 h-8 border-2 border-slate-200 border-t-[#143A6E] rounded-full animate-spin" />
                            </div>
                          )}
                          <Image
                            src={activeImage}
                            alt={isAr ? selectedProduct.name.ar : selectedProduct.name.en}
                            fill
                            priority={true}
                            decoding="async"
                            className={`object-contain p-6 transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                            onLoad={() => setIsImageLoading(false)}
                            onError={() => {
                              setIsImageLoading(false);
                              setImgError(true);
                            }}
                          />
                        </div>
                      ) : (
                        selectedVariant && (
                          <div className="p-6 w-full h-full flex items-center justify-center">
                            {renderLargeShowcaseVisual(selectedVariant.packaging.en, isAr ? selectedVariant.strength.ar : selectedVariant.strength.en)}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                </div>

                {/* The Dosage Selection List */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className={`text-xs font-bold text-brand-charcoal-400 uppercase tracking-wider mb-4 ${isAr ? 'font-arabic' : 'font-sans'}`}>
                    {t.dosageHeader}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
                    {selectedProduct.variants.map((variant, index) => {
                      const isSelected = selectedVariantIndex === index;
                      const strengthText = variant.strength[lang];
                      const packagingText = variant.packaging[lang];
                      
                      const IconComponent = getDosageIcon(variant.packaging.en);

                      const displayName = selectedProduct.name[lang];
                      const titleText = `${displayName} | ${strengthText}`;

                      return (
                        <button
                          key={`dosage-${selectedProduct.id}-${index}`}
                          onClick={() => {
                            handleSelectVariant(index);
                          }}
                          className={`flex items-stretch gap-4 rounded-xl p-4 text-left rtl:text-right transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143A6E]/50 cursor-pointer h-full w-full ${
                            isSelected 
                              ? 'bg-slate-50/80 border-[#143A6E] ring-1 ring-[#143A6E]/30 shadow-md scale-[1.01]' 
                              : 'bg-white border-slate-200 hover:border-[#143A6E]/40 hover:shadow-md'
                          }`}
                        >
                          <div className={`relative p-2 rounded-lg shrink-0 self-start transition-colors duration-300 w-12 h-12 flex items-center justify-center overflow-hidden border ${
                            isSelected 
                              ? 'bg-brand-navy-50 text-brand-navy-600 border-[#143A6E]' 
                              : 'bg-slate-50 text-[#143A6E] border-slate-100'
                          }`}>
                            {variant.variantImage ? (
                              <Image
                                src={variant.variantImage}
                                alt={variant.strength[lang]}
                                fill
                                loading="lazy"
                                decoding="async"
                                className="object-contain p-1"
                              />
                            ) : (
                              <IconComponent className="h-5 w-5" />
                            )}
                          </div>

                          <div className="flex-1 flex flex-col min-w-0 text-left rtl:text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                            <h5 className={`font-bold text-[#143A6E] text-[1.05rem] ${isAr ? 'font-arabic' : 'font-sans'}`}>
                              {displayName} | <bdi className="inline-block text-unicode-isolate">{variant.strength[lang]}</bdi>
                            </h5>
                            <p className={`text-slate-500 font-light text-sm mt-auto pt-2 ${isAr ? 'font-arabic' : 'font-sans'}`}>
                              <bdi className="inline-block text-unicode-isolate">{variant.packaging[lang]}</bdi>
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Therapeutic Indications Section */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className={`text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ${isAr ? 'font-arabic' : 'font-sans'}`}>
                    {isAr ? 'الاستطبابات العلاجية' : 'THERAPEUTIC INDICATIONS'}
                  </h4>
                  <p className={`text-slate-600 font-medium leading-relaxed text-sm md:text-base ${isAr ? 'font-arabic' : 'font-sans'}`}>
                    {isAr ? selectedProduct.indications.ar : selectedProduct.indications.en}
                  </p>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
