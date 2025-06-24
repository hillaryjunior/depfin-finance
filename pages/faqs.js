import { useState } from 'react'
import styles from '../sass/components/Faq.module.scss'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Queries from '../components/Queries'
import { faqSchema } from '../data'
import { Minus, Plus } from 'lucide-react'

function Faqs() {
  const [open, setOpen] = useState(false)

  const handleClick = (index) => {
    //close accordion if already active
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  const data = [
    {
      title: 'Apply and Approval',
      id: 1,
      question: 'What is required to apply for a personal loan?',
      answer: `  <p>
                      <li>• You need to be between the ages of 21 and 60</li>
                      <li>• You need to be earning at least R4500 per month</li>
                      <li>
                        • You must be permanently employed for more than 3
                        months
                      </li>
                      <li>• Your salary must be paid into your bank account</li>
                      <li>
                        • We can also assist anyone under debt review or
                        administration
                      </li>
                    </p>`,
    },
    {
      title: '',
      id: 2,
      question: 'What document do I need to apply for a personal loan?',
      answer: `  <p>
                      <li>•	You need a valid identity Document (ID)</li>
                      <li>•	You need 3 months latest pay slips</li>
                      <li>
                       •	You need 3 months latest bank statements
                      </li>
                      <li>•	You need proof of residence, not older than 3 months</li>
                     
                    </p>`,
    },
    {
      title: '',
      id: 3,
      question: 'Can I use electronic pay slips or bank statements?',
      answer: `  
      <h5>New Clients</h5>
      <p>
                      <li>•	We require the original documents.</li>
                      <li>•	Electronic pay slip, printed with the company stamp.</li>
                      <li>
                       •	Bank statement with a bank stamp.
                      </li>
                     
                     
                    </p>
                     <h5>Existing Clients</h5>
                    
                     <li>• We can use the electronic pay slips and bank statement</li>`,
    },
    {
      title: '',
      id: 4,
      question: 'I have just started a new job, can I apply for a loan?',
      answer:
        'No, you would need to be permanently employed for minimum 3 months.',
    },
    {
      title: '',
      id: 5,
      question: 'What if I am ‘blacklisted’ can I apply for a loan?',
      answer:
        'Yes you can apply, our friendly consultants will perform the necessary credit checks and calculate your affordability.',
    },
    {
      title: '',
      id: 6,
      question: 'What if I have judgements?',
      answer:
        'Yes you can apply, our friendly consultants will perform the necessary credit checks and calculate your affordability.',
    },
    {
      title: '',
      id: 7,
      question: 'When do I get my money, once I have been approved for a loan?',
      answer: 'You will receive the money within 1hrs or 24hrs.',
    },
    {
      title: 'Credit Insurance',
      id: 8,
      question: 'What is Credit Protection Insurance?',
      answer: 'You have to use our own insurance.',
    },
    {
      title: 'Rates and Charges',
      id: 9,
      question: 'What are Letsatsi interest rates and charges?',
      answer: `  
     
      <p>
            Our interest rate in regulated according to the NCR     
                     
                     
                    </p>
      <p>
           Service Fee – A standard service fee is charged on a monthly basis which is applied to your loan account.   
                     
                     
                    </p>
                    
                    
                     <p>Credit Protection Insurance – A credit Life premium is charged on a monthly basis which is applied to your loan repayments.</p>`,
    },
    {
      title: 'Balances, Settlements and Paid Up Loans',
      id: 10,
      question: 'How can I check my loan balance amount?',
      answer: `  
     
      <p>
     
You can contact our customer care branch in order to give you a loan statement.
   
                     
                     
                    </p>
 `,
    },
    {
      title: '',
      id: 11,
      question: 'How can I get a settlement letter?',
      answer:
        'Please contact our Head Office. A settlement letter request form needs to be completed. You will then receive your settlement letter within 3-5 working days.',
    },
    {
      title: '',
      id: 12,
      question: 'How can I get a paid up letter?',
      answer: 'You can contact our head office , to issue a paid up letter.',
    },
  ]

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
                    {open === index ? <Plus size={24} /> : <Minus size={24} />}
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
