import Head from 'next/head';
import React from 'react'
import SolutionsLayout from '../Layouts/SolutionsLayout';

function solutions() {
  return (
    <div>
      <Head>
        <title>
          Loans to help you meet your financial goals | Depfin Finance
        </title>
        <meta
          name="description"
          content="At Depfin Finance we offer a variety of loans the help you meet financial obligations at a competitive interest rate. Apply for a loan today!"
        />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Loan from R5000 to R200 000 | Apply in minutes - Depfin Finance"
        />
        <meta
          property="og:description"
          content="at Depfin Finance we offer a variety of loans the help you meet financial obligations at a competitive interest rate. Apply for a loan today!"
        />
        <meta
          property="og:image"
          content="https://depfin.com.au/static/media/logo.png"
        />
        <meta property="og:url" content="https://depfin.com.au/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Depfin Finance" />
      </Head>
      <SolutionsLayout />
    </div>
  );
}

export default solutions