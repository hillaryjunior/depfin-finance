"use client"

import { useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import styles from "../sass/components/Section.module.scss"
import { CheckIcon } from "lucide-react"
import Image from "next/image"

// ✅ Optimized dynamic imports with intersection observer
const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
  loading: () => <div style={{ minHeight: "400px" }}>Loading Testimonials...</div>,
})

const CustomizedSteppers = dynamic(() => import("./Steper"), {
  loading: () => <div style={{ minHeight: "200px" }}>Loading Stepper...</div>,
})

function Section() {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [showStepper, setShowStepper] = useState(false)

  // ✅ Use Intersection Observer for better performance
  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "testimonials-section") {
          setShowTestimonials(true)
        }
        if (entry.target.id === "stepper-section") {
          setShowStepper(true)
        }
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    })

    const testimonialsEl = document.getElementById("testimonials-section")
    const stepperEl = document.getElementById("stepper-section")

    if (testimonialsEl) observer.observe(testimonialsEl)
    if (stepperEl) observer.observe(stepperEl)

    return () => {
      if (testimonialsEl) observer.unobserve(testimonialsEl)
      if (stepperEl) observer.unobserve(stepperEl)
    }
  }, [handleIntersection])

  return (
    <div className={styles.section__about}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <Image
            src="/Images/heroimg.webp"
            alt="Hero background"
            loading="lazy"
            quality={60}
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h2>
            Need a <span>loan?</span> Think <span>Depfin Finance</span>
          </h2>
        </div>
        <div className={styles.introduction}>
          <p className={styles["lcp-text"]}>
            At Depfin Finance we offer affordable and easy to manage loans of up to R10 Million with ideal repayment
            terms. Our transparent loan products and services ensures that you get what you pay for with no hidden
            costs. We make managing your loan easy by allowing you access to your loan account at any time. Our
            affordability assessment process also considers the best interests of our customers.
          </p>

          <h3>We are able to offer the best loans to match clients requirements.</h3>

          <p className={styles["lcp-text"]}>
            24 hours approval on all applications. Simple online application takes less than 5 minutes to complete. Give
            us a try and see how satisfied you will be with our fast flexible approval process.
          </p>

          <p className={styles["lcp-text"]}>
            We offer loans at 6% Interest rate, Apply Now for any type of loans and you will be glad and be satisfied
            with our flexibility and fast services. Blacklisted and Clients under debt review are qualified to apply.
          </p>

          <div className={styles.requirements}>
            <h3>All You need to apply</h3>
            <div className={styles.required__items}>
              <span>
                <CheckIcon className={styles.icon} /> SA Identity Document
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Three months stamped bank statement
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Proof of residential address
              </span>
              <span>
                <CheckIcon className={styles.icon} /> Latest pay slip from the current employer.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.steper} id="stepper-section">
          <h4>Why Choose Depfin Finance?</h4>
          <div style={{ minHeight: "200px", width: "100%" }}>{showStepper && <CustomizedSteppers />}</div>
        </div>

        <div className={styles.testimonials} id="testimonials-section">
          <h4>What clients are saying</h4>
          <div style={{ minHeight: "400px", width: "100%" }}>{showTestimonials && <Testimonials />}</div>
        </div>
      </div>
    </div>
  )
}

export default Section
