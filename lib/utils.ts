import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToWesternNumerals(str: string | undefined | null): string {
  if (!str) return '';
  const easternDigits = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
  let result = str;
  for (let i = 0; i < 10; i++) {
    result = result.replace(easternDigits[i], String(i));
  }
  return result;
}

// المسار الفرعي الحالي لمعاينة GitHub Pages (فاضٍ تلقائياً عند النشر على الدومين الرسمي لاحقاً)
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';