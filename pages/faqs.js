import { useState } from 'react'
import styles from '../sass/components/Faq.module.scss'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Queries from '../components/Queries'
import { faqSchema } from '../data'
import { faqsData as data } from '../components/faqsData'


const PlusIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
)

const MinusIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
)

function Faqs() {
  const [open, setOpen] = useState(false)

  const handleClick = (index) => {
    //close accordion if already active
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  

  return (
    <div>
      <Head>
        <title>Frequently Asked Questions - Depfin Finance</title>
        {/* coronical url */}
        <link rel='canonical' href='https://depfinfinance.co.za/faqs' />
        <meta
          name='description'
          content='Frequently asked questions like, what documentation do I need to apply for a personal loan? What are the latest interest rates and charges? '
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: faqSchema }}
        />
      </Head>
      <Header />
      <Hero content='Read through all the frequently asked questions about Depfin Finance.' />

      <div className='contact'>
        <h2>Frequently asked questions</h2>
        <div className={styles.accordion}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.accordion__content}>
                <h3>{item.title}</h3>
                <div
                  className={styles.question}
                  onClick={() => handleClick(index)}
                >
                  <p>{item.question}</p>
                  <button
                    className={styles.icon__btn}
                    onClick={() => handleClick(index)}
                  >
                    {open === index ? <PlusIcon /> : <MinusIcon />}
                  </button>
                </div>
                {open === index && (
                  <div key={item.id} className={styles.answer}>
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <Queries
        image='https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg'
        contact
      />
      <Footer />
    </div>
  )
}

export default Faqs
