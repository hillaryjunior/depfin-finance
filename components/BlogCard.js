import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '../sass/components/Blogs.module.scss'

function BlogCard() {
  return (
    <div className={styles.blog__items__card}>
      <div className={styles.blog__image}>
        <Image
          className={styles.image}
          src="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg"
          layout="fill"
          objectFit="cover"
          alt="title"
        />
      </div>
      <div className={styles.blog__blurb}>
        <h3> What is a business loan? </h3>
        <p>
          Business loans are financial credits extended by financial
          institutions to corporations and sole traders for financing business
          activities.
        </p>
      </div>
      <div className={styles.cta__buttons}>
        <Link href="/about">
          <a className={styles.link}> Read more </a>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard