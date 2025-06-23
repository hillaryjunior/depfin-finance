import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../sass/components/Blogs.module.scss'

function BlogCardItem({ item, priority }) {
  return (
    <div className={styles.blog__items__card}>
      <div className={styles.blog__image}>
        <Image
          src={item.image}
          width={400}
          height={250}
          objectFit='cover'
          quality={75}
          priority={priority}
          alt={item.title}
        />
      </div>
      <div className={styles.blog__blurb}>
        <h3>{item.title}</h3>
        <p>{item.blurb}</p>
      </div>
      <div className={styles.cta__buttons}>
        <Link href='/blogs/[id]' as={`/blogs/${item.id}`}>
          <a className={styles.link}>Read more</a>
        </Link>
      </div>
    </div>
  )
}

export default BlogCardItem
