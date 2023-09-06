import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { blogsData } from '../Blogs/blogs';
import styles from '../sass/components/Blogs.module.scss'

function BlogCard() {
  return (
    <>
      {blogsData?.map((item) => (
        <div key={item.id} className={styles.blog__items__card}>
          <div className={styles.blog__image}>
            <Image
              className={styles.image}
              src={item.image}
              layout="fill"
              objectFit="cover"
              priority
              alt={item.title}
            />
          </div>
          <div className={styles.blog__blurb}>
            <h3> {item.title}</h3>
            <p>{item.blurb}</p>
          </div>
          <div className={styles.cta__buttons}>
            <Link
              href="/blogs/[id]"
              as={`/blogs/${item.id}`}
              key={item.title}
            >
              <a className={styles.link}> Read more </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogCard