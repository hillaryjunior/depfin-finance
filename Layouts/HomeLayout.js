import React from 'react';
import dynamic from 'next/dynamic';

// ✅ Eager-load critical components (above-the-fold)
import Header from '../components/Header';
import Banner from '../components/Banner';

// ✅ Code-split non-critical components (below-the-fold)
const Section = dynamic(() => import('../components/Section'), {
  loading: () => <div>Loading section...</div>,
  ssr: false, // Optional: disables SSR if it's very heavy
});

const Queries = dynamic(() => import('../components/Queries'), {
  loading: () => <div>Loading FAQs...</div>,
});

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading footer...</div>,
});

const Fab = dynamic(() => import('../utils/Fab'), {
  ssr: false, // ❗ Small interactive widget — better without SSR
});

function HomeLayout() {
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <Fab />
      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg" />
      <Footer />
    </>
  );
}

export default HomeLayout;
