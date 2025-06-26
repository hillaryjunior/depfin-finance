// components/BlogCard.jsx
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Blogs from '../sass/components/Blogs.module.scss'
import { blogsSummary } from '../dataBlog/blogsSummary'

export default function BlogCard() {
  return (
    <>
      {blogsSummary.map((item, index) => {
        const priority = index === 0 // Only preload first image (for LCP)

        return (
          <div key={item.id} className={Blogs.blog__items__card}>
            {priority && (
              <Head>
                <link rel="preload" as="image" href={item.image} />
              </Head>
            )}

            <div className={Blogs.blog__image}>
              <Image
                src={item.image}
                width={400}
                height={250}
                quality={75}
                alt={item.title}
                priority={priority}
                style={{ objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div className={Blogs.blog__blurb}>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
            </div>

            <div className={Blogs.cta__buttons}>
              <Link href={`/blogs/${item.id}`}>
                <a className={Blogs.link}>Read more</a>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
