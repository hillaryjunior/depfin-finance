"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "../sass/components/Footer.module.scss"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

function Footer() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    if (document?.fonts?.ready) {
      document.fonts.ready.then(() => setFontsLoaded(true))
    } else {
      setFontsLoaded(true)
    }
  }, [])

  return (
    <footer className={`${styles.footer} ${fontsLoaded ? styles.loaded : ""}`}>
      <h2>
        Startup Business Loans | Blacklisted Loans & Short Term Loans Cape Town | Instant Online Loans South Africa
      </h2>
      <div className={styles.container}>
        <div>
          <h3>Depfin Finance</h3>
        </div>
        <div className={styles.quick__links}>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <Link href="/">
                <a title="Home">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/personal/business/loan/apply">
                <a title="Apply Online">Apply online</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a title="About Us">About us</a>
              </Link>
            </li>
            <li>
              <Link href="/solutions">
                <a title="Solutions">Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/sitemap">
                <a title="sitemap">Sitemap</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.quick__links}>
          <h5>Resources</h5>
          <ul>
            <li>
              <Link href="/conflictofinterest">
                <a title="Conflict of interest management">Conflict of Interest management</a>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <a title="terms">Terms & Conditions</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                <a title="faqs">FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/privacypolicy">
                <a title="Privacy Policy">Privacy Policy</a>
              </Link>
            </li>
          </ul>
          <div className="rounded-social-buttons">
            <a
              title="facebook"
              className="social-button facebook"
              href="https://www.facebook.com/Depfin-Finance-Loans-100582409291663"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook size={20} />
            </a>
            <a
              title="twitter"
              className="social-button twitter"
              href="https://twitter.com/DepfinL"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              title="linkedin"
              className="social-button linkedin"
              href="https://www.linkedin.com/in/palesa-namhla-b19254236/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              title="instagram"
              className="social-button instagram"
              href="https://www.instagram.com/kimlorna46/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>
          Copyright &copy; <span className="year">{new Date().getUTCFullYear()}</span> Depfin Finance
        </small>
      </div>
    </footer>
  )
}

export default Footer
