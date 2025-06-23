import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { blogsData } from '../../Blogs/blogs'
import styles from '../../sass/components/BlogsDetails.module.scss'

// 🔹 Code-split component
const BlogDetailsContent = dynamic(() =>
  import('../../components/BlogDetailsContent')
)

function BlogID({ blog }) {
  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>
  if (!blog) return <div>Blog post not found</div>

  return (
    <>
      <Head>
        <title>{blog.title} | My Blog</title>
        <meta name='description' content={blog.description || blog.title} />
        <meta property='og:title' content={blog.title} />
        <meta
          property='og:description'
          content={blog.description || blog.title}
        />
        <meta property='og:image' content={blog.image} />
        <link rel='preload' as='image' href={blog.image} />
      </Head>

      <div className={styles.container}>
        <Image
          className={styles.images_detail}
          src={blog.image}
          layout='fill'
          objectFit='contain'
          quality={75}
          priority
          alt={blog.title}
        />
        <div className={styles.blogs__container}>
          <BlogDetailsContent blog={blog} styles={styles} />
        </div>
      </div>
    </>
  )
}

// 🔹 Static paths
export async function getStaticPaths() {
  const paths = blogsData.map((blog) => ({
    params: { id: blog.id.toString() },
  }))
  return { paths, fallback: true }
}

// 🔹 Static props
export async function getStaticProps({ params }) {
  const blog = blogsData.find((blog) => blog.id.toString() === params.id)
  if (!blog) return { notFound: true }

  return {
    props: { blog },
  }
}

export default BlogID
