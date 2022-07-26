import Head from 'next/head'
import Link from 'next/link';
import React from 'react'

function sitemap() {
  return (
    <div>
      <Head>
        <title>Sitemap - Depfin Finance</title>
        <meta
          name="description"
          content="This is a sitemap page made up of all links to all the web pages present in Depfinfinance.co.za for your easy navigation.  "
        />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className = "sitemap">
        <ul>
          <Link href="/">
            <a title="Home">Home</a>
          </Link>
          <Link href="/apply">
            <a title="Apply Online">Apply online</a>
          </Link>
          <Link href="/about">
            <a title="About Us">About us</a>
          </Link>
          <Link href="/solutions">
            <a title="Solutions">Solutions</a>
          </Link>

          <Link href="/contact">
            <a title="contact us">Contact us</a>
          </Link>
          <Link href="/complaints">
            <a title="Complaints Management">Complaints Management</a>
          </Link>
          <Link href="/conflictofinterest">
            <a title="Conflict of interest management">
              Conflict of Interest management
            </a>
          </Link>
          <Link href="/terms">
            <a title="terms">Terms & Conditions</a>
          </Link>
          <Link href="/faqs">
            <a title="faqs">FAQs</a>
          </Link>
          <Link href="privacypolicy">
            <a title="Privacy Policy">Privacy Policy</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default sitemap