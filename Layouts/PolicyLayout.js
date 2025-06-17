import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Hero from '../components/Hero';
import Queries from '../components/Queries';

function PolicyLayout({content,title}) {

 
  return (
    <div>
      <Header />
      <Hero content={`Depfin Finance ${title}`} />

      <div className="policy" dangerouslySetInnerHTML={{ __html: content }} />

      <Queries
        image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg"
        contact
      />
      <Footer />
    </div>
  );
}

export default PolicyLayout