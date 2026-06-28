import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'], 
  weight: ['300', '400', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Massoud Pharma - Interactive Pharmaceutical Brochure',
  description: 'Interactive pharmaceutical catalog and corporate portfolio of Massoud Pharma. Discover our therapeutic divisions, high-quality manufacturing certificates, and comprehensive product catalog.',
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
