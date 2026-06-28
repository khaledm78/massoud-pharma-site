import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import { basePath } from '../lib/utils';
import './globals.css';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Massoud Pharma | مسعود للصناعات الدوائية',
  description: 'Interactive pharmaceutical catalog and corporate portfolio of Massoud Pharma — كتيب تعريفي تفاعلي لشركة مسعود للصناعات الدوائية، يضم دليل المنتجات الكامل والملف التعريفي للشركة ومعايير الجودة المعتمدة.',
  openGraph: {
    title: 'Massoud Pharma | مسعود للصناعات الدوائية',
    description: 'Interactive pharmaceutical catalog and corporate portfolio of Massoud Pharma.',
    images: [`${basePath}/logo-header.png`],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massoud Pharma | مسعود للصناعات الدوائية',
    description: 'Interactive pharmaceutical catalog and corporate portfolio of Massoud Pharma.',
    images: [`${basePath}/logo-header.png`],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cairo.variable}`}>
      <body className={`${cairo.className} ${cairo.variable} antialiased bg-white text-slate-900 selection:bg-amber-100 selection:text-brand-navy-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}