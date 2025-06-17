import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SITE_URL } from '../constants'
import Fab from '../utils/Fab'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='en' itemScope itemType='http://schema.org/Organization'>
        <Head>
          <meta
            httpEquiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />

          <meta property='og:url' content={SITE_URL} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Depfin Finance' />
          <meta
            name='google-site-verification'
            content='o2c09wBxSEGBC_spdIgsJCtzSmxyeti2XTly5wM9pSc'
          />
          <meta property='og:url' content='https://depfinfinance.co.za/' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Depfin Finance' />

          <meta name='robots' content='index, follow' />

          <meta
            name='title'
            content='Instant Business Loans Services South Africa | Personal Loans'
          />
          <meta
            name='keywords'
            content='Instant Business Loans Services , Business Loans Services , Personal Loans Services , Personal Loans Cape Town , Business Loans South Africa , Affordable Loans South Africa'
          />
          <meta
            name='description'
            content='Depfin Finance offers affordable personal & business loan services in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply today!'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
            rel='stylesheet'
          ></link>

          {/* <script
            data-ad-client="ca-pub-2541847180773588"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script> */}
          {CssBaseline.flush()}
        </Head>

        <body>
          <Main />
          <Fab />
          <NextScript />
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-N4LX88L'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
