'use client';

import React from 'react';
import ProductCatalog from './ProductCatalog';

interface ProductCatalogViewProps {
  lang: 'en' | 'ar';
}

export default function ProductCatalogView({ lang }: ProductCatalogViewProps) {
  return (
    <div className="w-full">
      <ProductCatalog lang={lang} />
    </div>
  );
}
