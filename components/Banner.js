import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../sass/components/Banner.module.scss'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setRepayment } from '../redux/slices'
import { calculateLoanRepaymentMonthly } from '../services/Calculation'

// 🔹 Dynamic imports for heavy components
import dynamic from 'next/dynamic'
const Disclaimer = dynamic(() => import('./Disclaimer'))

function Banner() {
  const [value, setValue] = useState(30000)
  const [terms, setTerms] = useState(2)
  const router = useRouter()
  const rate = 6
  const dispatch = useDispatch()

  const monthlyRepayment = calculateLoanRepaymentMonthly(value, rate, terms)

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

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const increase = () => {
    setTerms(terms + 1)
  }

  const decrease = () => {
    terms > 1 ? setTerms(terms - 1) : setTerms(terms)
  }

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Get a <span>loan</span> from R30 000 to R10 Million in minutes at
            <span> Depfin Finance.</span>
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
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='10'
                        fill='currentColor'
                        opacity='0.1'
                      />
                      <path
                        d='M12 8v8M8 12h8'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
                  </span>
                  <input
                    type='number'
                    value={terms}
                    min='1'
                    max='1000'
                    onChange={(e) => setTerms(e.target.value)}
                  />
                  <span onClick={increase}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='10'
                        fill='currentColor'
                        opacity='0.1'
                      />
                      <path
                        d='M8 12h8'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                      />
                    </svg>
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
            <div>
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
