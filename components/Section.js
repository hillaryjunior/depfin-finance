import React from "react";
import styles from "../sass/components/Section.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CustomizedSteppers from "./Steper";
import Testimonials from "./Testimonials";
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
                <CheckCircleIcon className={styles.icon} /> SA Identity Document
              </span>
              <span>
                <CheckCircleIcon className={styles.icon} /> Three months stamped
                bank statement
              </span>
              <span>
                <CheckCircleIcon className={styles.icon} />
                Proof of residential address
              </span>
              <span>
                <CheckCircleIcon className={styles.icon} /> Latest pay slip from
                the current employer.
              </span>
            </div>
          </div>
        </div>
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
  );
}

export default Section;
