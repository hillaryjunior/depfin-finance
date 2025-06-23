import React from 'react';
import dynamic from 'next/dynamic';

// ✅ Critical: SSR + visible above the fold
import Header from '../components/Header';
import Hero from '../components/Hero';

// ✅ Code-split non-critical parts (below the fold)
const Form = dynamic(() => import('../components/Form'), {
  loading: () => <div>Loading form...</div>,
});

const Queries = dynamic(() => import('../components/Queries'), {
  loading: () => <div>Loading FAQs...</div>,
});

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading footer...</div>,
});

function ApplyLayout() {
  return (
    <>
      <Header />

      <Hero
        content="Apply for Personal Loans, Business Loans, Mortgage Loans,
        Consolidation Loans at Depfin Finance."
      />

      <Form apply />
      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg" />
      <Footer />
    </>
  );
}

export default ApplyLayout;
