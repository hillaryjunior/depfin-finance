import React from 'react'
import dynamic from 'next/dynamic'
import styles from '../sass/components/About.module.scss'
import { CheckCircle } from 'lucide-react'

// 🔹 Dynamically imported components with loading placeholders
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div>Loading Header...</div>,
})

const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <div>Loading Hero Section...</div>,
})

const Queries = dynamic(() => import('../components/Queries'), {
  ssr: false,
  loading: () => <div>Loading Contact Section...</div>,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading Footer...</div>,
})

function AboutLayout() {
  return (
    <div className={styles.about}>
      <Header />

      <Hero content=" Depfin Finance offers you loans according to your needs and circumstances." />

      <div className={styles.container}>
        <h2>Who we are</h2>
        <div className={styles.content}>
          <p>
            Depfin Finance serves as a financial service provider for the
            diverse range of customers in all sectors of the economy...
          </p>
        </div>

        <div className={styles.content}>
          <h3>Vision</h3>
          <p>To be the leading financial service provider...</p>
        </div>

        <div className={styles.content}>
          <h3>Mission</h3>
          <p>At depfin Finance we aim to build strong bonds with customers...</p>
        </div>

        <section>
          <div className={styles.section__content}>
            <h2>What we do? <span> at Depfin Finance</span></h2>
          </div>

          <div className={styles.info__container}>
            <div className={styles.info__description}>
              <h3>We offer you a personalised experience with a loan application</h3>
              <p>At Depfin Finance Our loans are the plans that customers make...</p>
              <p>We believe in responsible credit...</p>
            </div>

            <div className={styles.loans}>
              <h3>range of loans you can apply for at Depfin Finance.</h3>
              <div className={styles.loans__items}>
                {['Short', 'Medium', 'Long'].map((type) => (
                  <div key={type} className={styles.loans__items__content}>
                    <h5>
                      <span><CheckCircle /></span>
                      {type} term loans
                    </h5>
                    <p>If you need a quick cash boost then a short term loan is the ideal Depfin Finance loan solution for you.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645266909/pexels-photo-7658355_1_xlhtdc.jpg" />
      <Footer />
    </div>
  )
}

export default AboutLayout
