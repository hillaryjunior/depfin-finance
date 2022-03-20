
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../sass/components/Blogs.module.scss'

function BlogsLayout() {
  return (
    <div className = {styles.blogs}>
      <Header />
      <Hero content="Depfin Finance offers a personalised business and personal loan application experience. Read through our latest news here" />

      <div className = {styles.blogs__container}>
        <BlogCard />
       
       
      </div>
   
    </div>
  );
}

export default BlogsLayout