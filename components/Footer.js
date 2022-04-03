import React from 'react'
import Link from 'next/link';
import styles from '../sass/components/Footer.module.scss';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>Depfin Finance</h3>
        </div>
        <div className={styles.quick__links}>
          <h6>Quick Links</h6>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/apply">
              <a>Apply online</a>
            </Link>
            <Link href="/about">
              <a>about</a>
            </Link>
            <Link href="/solutions">
              <a>Solutions</a>
            </Link>

            <Link href="contact">
              <a>Contact</a>
            </Link>
          </ul>
        </div>
        <div className={styles.quick__links}>
          <h6>Resources</h6>
          <ul>
            <Link href="/complaints">
              <a>Complaints Management</a>
            </Link>
            <Link href="/conflictofinterest">
              <a>Conflict of Interest management</a>
            </Link>
            <Link href="/terms">
              <a>Terms & Conditions</a>
            </Link>
            <Link href="/faqs">
              <a>FAQs</a>
            </Link>
            <Link href="privacypolicy">
              <a>Privacy Policy</a>
            </Link>
          </ul>
          <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/Depfin-Finance-Loans-100582409291663" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="social-button twitter" href="https://twitter.com/DepfinL" target="_blank" rel="noreferrer"><i className="fab fa-twitter" rel="noreferrer"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/in/palesa-namhla-b19254236/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                   
                    <a className="social-button instagram" href="https://www.instagram.com/kimlorna46/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>
          Copyright &copy; {`${new Date().getUTCFullYear()}`} Depfin Finance
        </small>
      </div>
    </footer>
  );
}

export default Footer