import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../sass/components/Blogs.module.scss'

function BlogCardItem({ item, priority }) {
  return (
    <div className={styles.blog__items__card}>
      {priority && (
        <Head>
          <link rel='preload' as='image' href={item.image} />
        </Head>
      )}

      <div className={styles.blog__image}>
        <Image
          src={item.image}
          width={400}
          height={250}
          quality={75}
          objectFit='cover'
          alt={item.title}
          priority={priority}
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
