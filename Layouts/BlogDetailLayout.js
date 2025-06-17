
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import BlogCardDetail from '../components/BlogCardDetail';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../sass/components/Blogs.module.scss'

function BlogDetailLayout() {
  return (
    <div className = {styles.blogs}>
      <Header />
      {/* <Hero content="Depfin Finance offers a personalised business and personal loan application experience. Read through our latest news here" /> */}

      <div className = {styles.blogs__container}>
        <BlogCardDetail />
       
       
      </div>
   
    </div>
  );
}

export default BlogDetailLayout