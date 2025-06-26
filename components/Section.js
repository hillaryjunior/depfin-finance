import { Suspense } from "react";
import dynamic from 'next/dynamic';
import styles from "../sass/components/Section.module.scss";

// Code splitting for heavy components
const CustomizedSteppers = dynamic(() => import('./Steper'), {
  loading: () => <div className={styles.loading}>Loading steps...</div>,
  ssr: false // If this component doesn't need server-side rendering
});

const Testimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <div className={styles.loading}>Loading testimonials...</div>,
  ssr: false // If this component doesn't need server-side rendering
});


// Custom lightweight check icon to replace Material-UI
const CheckIcon = () => (
  <svg 
    className={styles.icon} 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

function Section() {
  return (
    <div className={styles.section__about}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <h2>
            Need a <span>loan?</span>Think <span>Depfin Finance</span>
          </h2>
        </div>
        
        <div className={styles.introduction}>
          <p>
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
                <CheckIcon className={styles.icon} /> Three months stamped
                bank statement
              </span>
              <span>
                <CheckIcon className={styles.icon} />
                Proof of residential address
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Latest pay slip from
                the current employer.
              </span>
            </div>
          </div>
        </div>

        {/* Code-split the stepper component */}
        <div className={styles.steper}>
          <h4>Why Choose Depfin Finance?</h4>
          <Suspense fallback={<div className={styles.loading}>Loading steps...</div>}>
            <CustomizedSteppers />
          </Suspense>
        </div>

        {/* Code-split the testimonials component */}
        <div className={styles.testimonials}>
          <h4>What clients are saying</h4>
          <Suspense fallback={<div className={styles.loading}>Loading testimonials...</div>}>
            <Testimonials />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Section;