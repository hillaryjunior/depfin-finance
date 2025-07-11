import dynamic from 'next/dynamic'
import styles from '../sass/components/Blogs.module.scss'

const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div>Loading Header...</div>,
})

const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <div>Loading Hero...</div>,
})

const BlogCard = dynamic(() => import('../components/BlogCard'), {
  loading: () => <div>Loading Blog Cards...</div>,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading Footer...</div>,
})

function BlogsLayout() {
  return (
    <div className={styles.blogs}>
      <Header />

      <Hero content='Depfin Finance offers a personalised business and personal loan application experience. Read through our latest news here' />

      <div className={styles.blogs__container}>
        <BlogCard />
      </div>

      <Footer />
    </div>
  )
}

export default BlogsLayout
