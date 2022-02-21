import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Hero from '../components/Hero'
import Queries from '../components/Queries';
import styles  from '../sass/components/Solutions.module.scss'

function SolutionsLayout() {
  return (
    <div className={styles.solutions}>
      <Header />

      <Hero content="Personal and business loan solutions to help you meet your financial goals." />

      <div className={styles.solutions__container}>
        <div className={styles.solution__info}>
          <h2>Personal & Business Loan Solutions</h2>

          <p>
            Our transactional loan solutions have been developed to meet your
            needs as an individual – and come with a range of features and
            benefits designed to add real value to your life.
          </p>
          <p>
            Our business Loan solutions have been developed to meet your
            business needs. We have a range of products and services designed to
            add real value to your business.
          </p>
        </div>

        <div className={styles.solution__info__additional}>
          <h3>Borrowing</h3>
          <p>
            We offer a variety of loans to help you meet both your short- and
            long-term financial obligations. Competitive interest rates apply,
            and flexible terms can be negotiated to suit your budget.
          </p>
        </div>
        <div className={styles.solution__info__additional}>
          <h3>Investing</h3>
          <p>
            Saving and investing is vital to ensuring your future financial
            security. Our savings and investment options will help you to
            achieve your goals and dreams
          </p>
        </div>
      

        <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645285292/pexels-photo-8867176_1_fkpify.jpg" />
                  </div>
        <Footer />
    </div>
  );
}

export default SolutionsLayout