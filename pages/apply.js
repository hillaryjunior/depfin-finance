import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Queries from '../components/Queries'

function ApplyLayout() {
  return (
    <>
      <Header />

      <Hero
        content=' Apply for Personal Loans, Business Loans, Mortgage Loans,
            Consolidation Loans at Depfin Finance.'
      />

      <Form apply />
      <Queries image='https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg' />

      <Footer />
    </>
  )
}

export default ApplyLayout
