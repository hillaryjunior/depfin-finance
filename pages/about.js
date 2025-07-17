import Head from 'next/head'
import AboutLayout from '../Layouts/AboutLayout'

function about() {
  return (
    <div>
      <Head>
        <title>About Us - Depfin Finance</title>

        {/* write meta description */}

        <meta
          name='description'
          content='Depfin Finance offers you loans according to your needs and circumstances. If you need a quick loan then a short-term loan is the ideal loan solution for you in Cape Town.

'
        />
        {/* viewport */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link rel='icon' href='/favicon.ico' />
        {/* coronical url */}
        <link rel='canonical' href='https://depfinfinance.co.za/about' />
      </Head>
      <AboutLayout />
    </div>
  )
}

export default about
