'use client';

import React from 'react';
import Hero from './Hero';

interface HomeViewProps {
  lang: 'en' | 'ar';
  onExploreClick: () => void;
  onOverviewClick: () => void;
}

export default function HomeView({ lang, onExploreClick, onOverviewClick }: HomeViewProps) {
  return (
    <div className="w-full">
      <Hero 
        lang={lang} 
        onExploreClick={onExploreClick} 
        onOverviewClick={onOverviewClick} 
      />
    </div>
  );
}
