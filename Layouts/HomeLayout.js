import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

// 🔄 Dynamically import components
const Banner = dynamic(() => import('../components/Banner'), {
  loading: () => <div>Loading banner...</div>,
  ssr: true, // ✅ keep SSR for SEO
});

const Section = dynamic(() => import('../components/Section'), {
  loading: () => <div>Loading section...</div>,
  ssr: false,
});

const Queries = dynamic(() => import('../components/Queries'), {
  loading: () => <div>Loading queries...</div>,
  ssr: true,
});

const Fab = dynamic(() => import('../utils/Fab'), {
  ssr: false, // ❌ no need for SSR here; it's a floating button
});

function HomeLayout() {
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <Fab />
      <Queries/>
      <Footer />
    </>
  );
}

export default HomeLayout;
