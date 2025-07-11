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
      <Queries />

      <Footer />
    </>
  )
}

export default ApplyLayout
