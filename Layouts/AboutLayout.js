import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../sass/components/About.module.scss'
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Queries from '../components/Queries';
import Footer from '../components/Footer';

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
            diverse range of customers in all sectors of the economy both local
            and international ranging from medium sized businesses to large
            conglomerates. We are resourced with a team of high caliber staff
            with diverse skills and substantial expertise who provide excellent
            relationship management service to our customers.
          </p>
        </div>
        <div className={styles.content}>
          <h3>Vision</h3>
          <p>
            To be the leading financial service provider in the industry by
            providing a personalised loan application experience to all our
            customers.
          </p>
        </div>
        <div className={styles.content}>
          <h3>Mission</h3>
          <p>
            At depfin Finance we aim to build strong bonds with customers and
            offer them solution based services through dedicated relationship
            management.
          </p>
        </div>

        <section>
          <div className={styles.section__content}>
            <h2>
              What we do? <span> at Depfin Finance</span>
            </h2>
          </div>

          <div className={styles.info__container}>
            <div className={styles.info__description}>
              <h3>
                We offer you a personalised experience with a loan application
              </h3>
              <p>
                At Depfin Finance Our loans are the plans that customers make
                and the potential they have to reach their goals. We’re
                committed to helping them make that difference to their lives
                every day through responsible access to credit and a
                personalised loan application experience.
              </p>
              <p>
                We believe in responsible credit; we therefore make sure that
                our customers understand the terms of repayment and encourage
                them to borrow for the right reasons.
              </p>
            </div>

            <div className={styles.loans}>
              <h3>range of loans you can apply for at Depfin Finance.</h3>
              <div className={styles.loans__items}>
                <div className={styles.loans__items__content}>
                  <h5>
                    <span>
                      <CheckCircleOutlineRoundedIcon />
                    </span>
                    Short term loans
                  </h5>

                  <p>
                    If you need a quick cash boost then a short term loan is the
                    ideal Depfin Finance loan solution for you.
                  </p>
                </div>
                <div className={styles.loans__items__content}>
                  <h5>
                    <span>
                      <CheckCircleOutlineRoundedIcon />
                    </span>
                    Medium term loans
                  </h5>

                  <p>
                    If you need a quick cash boost then a short term loan is the
                    ideal Depfin Finance loan solution for you.
                  </p>
                </div>
                <div className={styles.loans__items__content}>
                  <h5>
                    <span>
                      <CheckCircleOutlineRoundedIcon />
                    </span>
                    Long term loans
                  </h5>

                  <p>
                    If you need a quick cash boost then a short term loan is the
                    ideal Depfin Finance loan solution for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Queries image="https://res.cloudinary.com/de0gawheh/image/upload/v1645266909/pexels-photo-7658355_1_xlhtdc.jpg" />
      <Footer />
    </div>
  );
}

export default AboutLayout