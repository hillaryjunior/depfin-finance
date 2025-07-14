import { useState, useMemo } from 'react'
import Link from 'next/link'
import styles from '../sass/components/Banner.module.scss'
import { useRouter } from 'next/router'
import { calculateLoanRepaymentMonthly } from '../services/Calculation'
import { useDispatch } from 'react-redux'
import { setRepayment } from '../redux/slices'
import dynamic from 'next/dynamic'

// Lazy-load heavy/secondary components
const LoanForm = dynamic(() => import('./LoanForm'), {
  ssr: false,
  loading: () => <div>Loading loan form...</div>,
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
    if (terms > 1) setTerms(terms - 1)
  }

  const increase = () => {
    setTerms(terms + 1)
  }

  const handleChange = (e) => {
    setValue(Number(e.target.value))
  }

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.lcpHeading}>
            Get a <span>loan</span> from RS 30,000 to R10 Million in minutes at <span>Depfin
            Finance.</span>
          </h1>
          <Link href='/personal/business/loan/apply'>
            <a className={styles.apply__cta}>Apply Now!</a>
          </Link>
        </div>

        <LoanForm
          value={value}
          terms={terms}
          handleChange={handleChange}
          decrease={decrease}
          increase={increase}
          monthlyRepayment={monthlyRepayment}
          addLoanDetails={addLoanDetails}
        />
      </div>
    </div>
  )
}

export default Banner
