import Head from 'next/head'
import dynamic from 'next/dynamic'

const ConflictPolicy = dynamic(() => import('../pages/ConflictPolicy'), {
  ssr: false, // optional: disables SSR for faster client-side loading
})

const ConflictOfInterest = () => {
  return (
    <>
      <Head>
        <title>Conflict of Interest Management - Depfin Finance</title>
        <link rel='canonical' href='https://depfinfinance.co.za/conflictofinterest' />
        <meta name='description' content='We are a reliable financial services provider...' />
      </Head>
      <ConflictPolicy />
    </>
  )
}

export default ConflictOfInterest
