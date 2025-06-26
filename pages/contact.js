import Head from 'next/head'
import ContactLayout from '../Layouts/ContactLayout'
import  '../sass/components/Contact.module.scss'
function contact() {
  return (
    <div>
      <Head>
        <title>Contact Us for Personalised Loan - Depfin Finance</title>
        {/* coronical url */}
        <link rel='canonical' href='https://depfinfinance.co.za/contact' />
        <meta
          name='description'
          content=' Enquire for a personalised loan at Depfin Finance. Share your details with our advisors in the contact information from our advisors are always ready to assist you.'
        />
      </Head>
      <ContactLayout />
    </div>
  )
}

export default contact
