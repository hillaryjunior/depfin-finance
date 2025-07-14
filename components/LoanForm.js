import { useState, useEffect } from 'react'
import styles from '../sass/components/Banner.module.scss'
import { Minus, Plus } from 'lucide-react'
import dynamic from 'next/dynamic'

const Disclaimer = dynamic(() => import('./Disclaimer'), {
  ssr: false,
  loading: () => <small>Loading disclaimer...</small>,
})

function LoanForm({
  value,
  terms,
  handleChange,
  decrease,
  increase,
  monthlyRepayment,
  addLoanDetails,
}) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowDisclaimer(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
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
            <label>Period (years)</label>
            <div className={styles.years__item}>
              <span onClick={decrease}>
                <Minus size={20} />
              </span>
              <input
                type='number'
                value={terms}
                min='1'
                max='1000'
                onChange={(e) => handleChange(e)}
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

        <small style={{ display: 'block', textAlign: 'center', marginTop: '8px' }}>
          *Loans are calculated at a 6% interest rate
        </small>

        {showDisclaimer && (
          <div style={{ marginTop: '5px', textAlign: 'center' }}>
            <Disclaimer />
          </div>
        )}
      </div>
    </div>
  )
}

export default LoanForm
