import React from 'react'
import FAQs from '../components/FAQS'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Queries from '../components/Queries'
import { depfinFaqs } from '../data'

function ContactLayout() {
  return (
    <div>
      <Header />
      <Hero content='Enquire  for a personalised loan application experience at Depfin Finance' />
      <Queries contact />

      <div className='contact'>
        <h2>Frequently asked questions</h2>
        <FAQs data={depfinFaqs} />
      </div>
      <Footer />
    </div>
  )
}

export default ContactLayout
