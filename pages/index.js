import Head from 'next/head'

import HomeLayout from '../Layouts/HomeLayout'
import { SITE_URL } from '../constants'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/slices'
import { getData } from '../services/Auth'



export default function Home() {
  const dispatch = useDispatch()

  const shema = {
    '@context': 'https://schema.org',
    '@type': 'BankOrCreditUnion',
    name: 'Depfin Finance',
    image: 'https://i.ibb.co/DbD4Cpw/depfin.png?imwidth=3840',
    '@id': 'https://depfinfinance.co.za/',
    url: 'https://depfinfinance.co.za/',
    telephone: '0836174518',
    priceRange: '000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '208 De Waal Rd, Southfield',
      addressLocality: 'Cape Town',
      postalCode: '7800',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.0364812,
      longitude: 18.4824277,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Monday',
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '16:00',
      },
    ],
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getData(user.uid)
        .then((data) => {
          if (!data.error) {
            dispatch(login(data))
          } else {
            dispatch(logout())
          }
        })
        .catch((err) => {
          console.log(err)
          dispatch(logout())
        })
    }
  })

  return (
    <div className='app'>
      <Head>
        <title>
          Instant Business Loans Services in South Africa - Depfin Finance
        </title>
        <meta
          name='description'
          content='Depfin Finance offers personal loans and business loans in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply for a loan today!'
        />
        {/* viewport */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link rel='icon' href='/favicon.ico' />

        {/* coronical url */}

        <link rel='canonical' href={SITE_URL} />

        <meta
          property='og:title'
          content='Instant Business Loans Services in South Africa - Depfin Finance'
        />
        <meta
          property='og:description'
          content='Depfin Finance offers personal loans and business loans in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply for a loan today!'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(shema),
          }}
        />

        {/*<script>*/}
        {/*  !function(f,b,e,v,n,t,s){*/}
        {/*    if(f.fbq)return;n=f.fbq=function(){*/}
        {/*      n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
        {/*    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
        {/*    n.queue=[];t=b.createElement(e);t.async=!0;*/}
        {/*    t.src=v;s=b.getElementsByTagName(e)[0];*/}
        {/*    s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
        {/*    'https://connect.facebook.net/en_US/fbevents.js');*/}
        {/*  fbq('init', '594446976951212');*/}
        {/*  fbq('track', 'PageView');*/}
        {/*</script>*/}
        <noscript>
          <img
            height='1'
            width='1'
            style='display:none'
            src='https://www.facebook.com/tr?id=594446976951212&ev=PageView&noscript=1'
          />
        </noscript>
      </Head>

      <main>
        <HomeLayout />
      </main>
    </div>
  )
}
