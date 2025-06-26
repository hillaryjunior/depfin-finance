import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SITE_URL } from '../constants'
import Fab from '../utils/Fab'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' itemScope itemType='http://schema.org/Organization'>
        <Head>
          {/* ✅ Security */}
          <meta
            httpEquiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />

          {/* ✅ SEO / OpenGraph */}
          <meta name='robots' content='index, follow' />
          <meta property='og:url' content={SITE_URL} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Depfin Finance' />
          <meta
            name='title'
            content='Instant Business Loans Services South Africa | Personal Loans'
          />
          <meta
            name='keywords'
            content='Instant Business Loans Services, Business Loans Services, Personal Loans Services, Personal Loans Cape Town, Business Loans South Africa, Affordable Loans South Africa'
          />
          <meta
            name='description'
            content='Depfin Finance offers affordable personal & business loan services in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply today!'
          />

          {/* ✅ Google Verification */}
          <meta
            name='google-site-verification'
            content='o2c09wBxSEGBC_spdIgsJCtzSmxyeti2XTly5wM9pSc'
          />

          <link
            rel='preload'
            as='image'
            href='/Images/ezgif.com-webp-to-jpg-converter (1) (1) (1).webp'
          />

          {/* ✅ Fonts Optimization */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <Head>
            <link
              rel='preload'
              href='/fonts/Poppins-Bold.woff2'
              as='font'
              type='font/woff2'
              crossOrigin='anonymous'
            />
          </Head>

          <link
            rel='preload'
            href='/fonts/Poppins-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          {/* <link
            rel='preload'
            as='image'
            href='https://res.cloudinary.com/devtedcloud/image/upload/q_22/v1685956866/depfin-finance/pexels-photo-2599538_1_1_czdf1j_1_r3mh1t.webp'
            
          /> */}

          <link rel='preload' as='image' href='/Images/herobgimg.webp' />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
            integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />

          {/* <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
            media='print'
            onLoad="this.media='all'"
            integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          /> */}

          {/* ✅ Inject NextUI styles */}
          {CssBaseline.flush()}
        </Head>

        <body>
          <Main />
          <Fab />
          <NextScript />

          {/* ✅ GTM noscript fallback */}
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
