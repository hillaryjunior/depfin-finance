import Head from 'next/head';
import React from 'react'
import SolutionsLayout from '../Layouts/SolutionsLayout';

function solutions() {
  return (
    <div>
      <Head>
        <title>
          Lowest Interest Rate Personal Loan in South Africa - Depfin Finance
        </title>
        {/* coronical url */}
        <link
          rel="canonical"
          href="https://depfinfinance.co.za/solutions"
        />
        
        <meta
          name="description"
          content="If you are looking for Lowest Interest Rate Personal Loans in South Africa then Depfin Finance is just a call away. Meet all your urgent business finance needs at the lowest interest rate possible in South Africa.  "
        />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolutionsLayout />
    </div>
  );
}

export default solutions