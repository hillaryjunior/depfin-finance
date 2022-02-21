import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Queries from '../components/Queries';
import Section from '../components/Section';

function HomeLayout() {
        return (
          <>
            <Header />
            <Banner />
            <Section />
            <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg" />
            <Footer />
          </>
        );
}

export default HomeLayout;
