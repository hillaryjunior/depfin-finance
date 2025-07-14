import dynamic from 'next/dynamic'
import styles from '../sass/components/Section.module.scss'
import Image from 'next/image'
import { CheckIcon } from 'lucide-react'

const Testimonials = dynamic(() => import('./Testimonials'), {
  ssr: false,
  loading: () => <div>Loading Testimonials...</div>,
})

const CustomizedSteppers = dynamic(() => import('./Steper'), {
  loading: () => <div>Loading Steper ...</div>,
})

function Section() {
  return (
    <div className={styles.section__about}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <Image
            src='/Images/herobgimg_73_80.webp'
            alt='Depfin Finance background'
            width={1250}
            height={340}
            priority
            placeholder='blur'
            blurDataURL='/Images/herobgimg-small.webp'
            className={styles.backgroundImage}
          />
          <h2>
            Need a <span>loan?</span> Think <span>Depfin Finance</span>
          </h2>
        </div>
        <div className={styles.introduction}>
          <p className={styles['lcp-text']}>
            At Depfin Finance we offer affordable and easy to manage loans of up
            to R10 Million with ideal repayment terms. Our transparent loan
            products and services ensures that you get what you pay for with no
            hidden costs. We make managing your loan easy by allowing you access
            to your loan account at any time. Our affordability assessment
            process also considers the best interests of our customers.
          </p>
          <h3>
            We are able to offer the best loans to match clients requirements.
          </h3>
          <p>
            24 hours approval on all applications. Simple online application
            takes less than 5 minutes to complete. Give us a try and see how
            satisfied you will be with our fast flexible approval process.
          </p>
          <p>
            We offer loans at 6% Interest rate, Apply Now for any type of loans
            and you will be glad and be satisfied with our flexibility and fast
            services. Blacklisted and Clients under debt review are qualified to
            apply.
          </p>
          <div className={styles.requirements}>
            <h3>All You need to apply</h3>
            <div className={styles.required__items}>
              <span>
                <CheckIcon className={styles.icon} /> SA Identity Document
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Three months stamped bank
                statement
              </span>
              <span>
                <CheckIcon className={styles.icon} />
                Proof of residential address
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Latest pay slip from the
                current employer.
              </span>
            </div>
          </div>
        </div>
        {/* Code-split the stepper component */}
        <div className={styles.steper}>
          <h4>Why Choose Depfin Finance?</h4>
          <CustomizedSteppers />
        </div>
        <div className={styles.testimonials}>
          <h4>What clients are saying</h4>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}

export default Section
