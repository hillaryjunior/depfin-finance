import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../sass/components/Banner.module.scss'
import { useRouter } from 'next/router'
import { calculateLoanRepaymentMonthly } from '../services/Calculation'
import { useDispatch } from 'react-redux'
import { setRepayment } from '../redux/slices'
import dynamic from 'next/dynamic'
import { Minus, Plus } from 'lucide-react'
import { useMemo } from 'react'

const Disclaimer = dynamic(() => import('./Disclaimer'), {
  ssr: false,
  loading: () => <p>Loading disclaimer...</p>,
})

function Banner() {
  const [value, setValue] = useState(30000)
  const [terms, setTerms] = useState(2)
  const router = useRouter()
  const rate = 6

  const dispatch = useDispatch()

  const monthlyRepayment = useMemo(
    () => calculateLoanRepaymentMonthly(value, rate, terms),
    [value, rate, terms]
  )

  const addLoanDetails = () => {
    dispatch(
      setRepayment({
        amount: value,
        terms: terms,
        rate: rate,
        monthly: monthlyRepayment,
      })
    )
    router.push('/personal/business/loan/apply')
  }

  const decrease = () => {
    terms > 1 ? setTerms(terms - 1) : setTerms(terms)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const increase = () => {
    setTerms(terms + 1)
  }


  
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Get a <span style={{ color: '#fff' }}>loan</span> from RS 30000 to
            R10 Million in minutes at
            <span style={{ color: '#fff' }}> Depfin Finance.</span>
          </h1>
          <Link href='/personal/business/loan/apply'>
            <a className={styles.apply__cta}>Apply Now!</a>
          </Link>
        </div>
        <div className={styles.form__container}>
          <div className={styles.form}>
            <h2>Loan Calculator</h2>
            <div className={styles.loan__amount}>
              <div className={styles.top}>
                <label>Loan Amount</label>
                <p>{`R${value}`}</p>
              </div>
              <input
                id='loanAmount'
                name='loanAmount'
                className={styles.loan__input}
                type='number'
                value={value}
                onChange={handleChange}
                placeholder='Enter Required Loan Amount (R 30000)'
              />
            </div>
            <div className={styles.repayment}>
              <div className={styles.item}>
                <label>period (years)</label>
                <div className={styles.years__item}>
                  <span onClick={decrease}>
                    <Minus size={20} />
                  </span>

                  <input
                    type='number'
                    value={terms}
                    min='1'
                    max='1000'
                    onChange={(e) => setTerms(e.target.value)}
                  />
                  <span onClick={increase}>
                    <Plus size={20} />
                  </span>
                </div>
              </div>
              <div className={styles.item}>
                <label>Monthly payment</label>
                <div className={styles.years__item}>
                  <p>R {monthlyRepayment}</p>
                </div>
              </div>
            </div>
            <button onClick={addLoanDetails}>Apply online</button>
            <div style={{ minHeight: '60px' }}>
              <small>*Loans are calculated at a 6% interest rate</small>
              <Disclaimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
