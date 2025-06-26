// pages/blogs/index.js
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../../sass/components/Blogs.module.scss'

const Header   = dynamic(() => import('../../components/Header'))
const Hero     = dynamic(() => import('../../components/Hero'))
const BlogCard = dynamic(() => import('../../components/BlogCard'))
const Footer   = dynamic(() => import('../../components/Footer'))

export default function BlogsPage() {
  return (
    <div className={styles.blogs}>
      <Head>
        <title>Blogs – Depfin Finance</title>
        <meta
          name="description"
          content="Depfin Finance offers you loans according to your needs…"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://depfinfinance.co.za/blogs" />
      </Head>

      <Header />
      <Hero content="Depfin Finance offers a personalised loan experience…" />

      <div className={styles.blogs__container}>
        <BlogCard />
      </div>

      <Footer />
    </div>
  )
}