'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Package } from 'lucide-react';

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [error, setError] = useState(false);

  // Check if we have a valid image source (ignoring dummy placeholder URLs)
  const isValid = src && typeof src === 'string' && src.trim() !== '' && !src.includes('picsum.photos');

  if (!isValid || error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-50/50 rounded-xl border border-slate-100/60 select-none p-4 w-full h-full ${className}`}>
        <div className="relative flex items-center justify-center p-3 rounded-lg bg-white/40 border border-slate-100/50 shadow-xs mb-2">
          <Package 
            strokeWidth={1} 
            className="text-slate-300 w-12 h-12" 
          />
        </div>
        <span className="text-[8px] font-mono tracking-widest text-slate-400 font-bold uppercase leading-none">
          MEDICAL PACK
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        className="object-contain"
        referrerPolicy="no-referrer"
        onError={() => setError(true)}
      />
    </div>
  );
}
