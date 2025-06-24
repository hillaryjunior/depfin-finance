import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { SITE_URL } from '../constants'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { login, logout } from '../redux/slices'
import { getData } from '../services/Auth'

// 🔹 Lazy load HomeLayout
const HomeLayout = dynamic(() => import('../Layouts/HomeLayout'), {
  loading: () => <p>Loading...</p>,
})

// ✅ JSON-LD Schema
const schema = {
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

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getData(user.uid)
          .then((data) => {
            if (!data.error) {
              dispatch(login(data))
            } else {
              dispatch(logout())
            }
          })
          .catch(() => dispatch(logout()))
      } else {
        dispatch(logout())
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <div className='app'>
      <Head>
        {/* ✅ SEO Title & Description */}
        <title>
          Instant Business Loans Services in South Africa - Depfin Finance
        </title>
        <meta
          name='description'
          content='Depfin Finance offers personal loans and business loans in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply for a loan today!'
        />

        {/* ✅ Viewport and Canonical */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href={SITE_URL} />
        <link rel='icon' href='/favicon.ico' />

        {/* ✅ Preload Hero Image */}
        <link
          rel='preload'
          as='image'
          href='/your-hero.jpg'
          fetchpriority='high'
          imagesrcset='/your-hero.jpg 1x'
        />

        {/* ✅ OpenGraph Tags */}
        <meta
          property='og:title'
          content='Instant Business Loans Services in South Africa - Depfin Finance'
        />
        <meta
          property='og:description'
          content='Depfin Finance offers personal loans and business loans in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply for a loan today!'
        />
        <meta
          property='og:image'
          content='https://i.ibb.co/DbD4Cpw/depfin.png?imwidth=3840'
        />
        <meta property='og:url' content={SITE_URL} />
        <meta property='og:type' content='website' />

        {/* ✅ Compressed JSON-LD Schema */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/\s+/g, ''),
          }}
        />

        {/* ✅ Facebook Pixel Fallback */}
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=594446976951212&ev=PageView&noscript=1'
            alt=''
          />
        </noscript>
      </Head>

      <main>
        <HomeLayout />
      </main>
    </div>
  )
}
