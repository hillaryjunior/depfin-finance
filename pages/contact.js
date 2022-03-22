import Head from 'next/head'
import React from 'react'
import ContactLayout from '../Layouts/ContactLayout'

function contact() {
  return (
    <div>
      <Head>
        <title>Contact Depfin finance for a personalised loan experience.</title>
        <meta
          name="description"
          content=" Enquiry about a loan that is guaranteed to make your dream a reality or to cover extra costs. Apply for a  loan today."
        />
      </Head>
      <ContactLayout />
    </div>
  );
}

export default contact