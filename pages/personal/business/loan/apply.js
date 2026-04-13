import React from 'react'
import link from 'next/link'
import Head from 'next/head'
<Head>
  <title>Apply Online Loan South Africa | Instant Approval & Same Day Payout</title>
  <meta name="description" content="Apply for instant loans online in South Africa. Fast approval, same day payout loans, unsecured loans and loans for blacklisted or bad credit clients." />
</Head>
import ApplyLayout from '../../../../Layouts/ApplyLayout';

function Apply() {
  return (
    <div>
      <Head>
        <title>
          Personal & Business Loan | Mortgage Loans | Depfin Finance
        </title>
        <meta
          name="description"
          content="Apply for personal, business, mortgage, and consolidation loans without getting into tedious paperwork. Get easy online loans at Depfin Finance in Cape Town, South Africa."
        />
        {/* coronical url */}
        <link rel="canonical" href="https://depfinfinance.co.za/personal/business/loan/apply" />
      </Head>

      <ApplyLayout />
    </div>
  );
}

export default Apply
