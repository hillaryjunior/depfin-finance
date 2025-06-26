// pages/blogs/[id].js
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../sass/components/BlogsDetails.module.scss'
import { blogsSummary } from '../../dataBlog/blogsSummary'

export default function BlogDetailPage({ post }) {
  const router = useRouter()
  if (router.isFallback) return <p>Loading…</p>
  if (!post) return <p>Not found</p>

  return (
    <div className={styles.posts}>
      <Head>
        <title>{post.title} – Depfin Finance</title>
        <meta name="description" content={post.meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src={post.image}
        alt={post.title}
        width={800}
        height={450}
        priority
      />

      <article className={styles.container}>
        <h1>{post.title}</h1>
        <p className={styles.meta_description}>{post.blurb}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: blogsSummary.map(b => ({
      params: { id: b.id.toString() }
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const id      = params.id
  const meta   = blogsSummary.find(b => b.id.toString() === id)
  if (!meta) return { notFound: true }

  // dynamic import of the HTML-only module:
  const content = (await import(`../../dataBlog/blogContent/${id}.js`)).default

  return {
    props: {
      post: {
        ...meta,
        content
      }
    },
    revalidate: 60
  }
}