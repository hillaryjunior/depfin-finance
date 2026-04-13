import Head from 'next/head'
<Head>
  <title>Contact Depfin Finance | Loan Help South Africa</title>
  <meta name="description" content="Contact Depfin Finance for quick loans, business funding and personal loans in South Africa. Get expert help with applications and approvals." />
</Head>
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
