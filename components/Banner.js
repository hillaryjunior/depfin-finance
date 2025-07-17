import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import dynamic from 'next/dynamic'
import styles from '../sass/components/Banner.module.scss'
import { calculateLoanRepaymentMonthly } from '../services/Calculation'
import { setRepayment } from '../redux/slices'

// ✅ Lazy-load the LoanForm component
const LoanForm = dynamic(() => import('./LoanForm'), {
  ssr: false,
  loading: () => <div>Loading loan form...</div>,
})

function Banner() {
  const [value, setValue] = useState(30000)
  const [terms, setTerms] = useState(2)
  const rate = 6

  const router = useRouter()
  const dispatch = useDispatch()

  const monthlyRepayment = useMemo(
    () => calculateLoanRepaymentMonthly(value, rate, terms),
    [value, rate, terms]
  )

  const addLoanDetails = () => {
    dispatch(
      setRepayment({
        amount: value,
        terms,
        rate,
        monthly: monthlyRepayment,
      })
    )
    router.push('/personal/business/loan/apply')
  }

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.lcpHeading}>
            Get a loan from RS 30,000 to R10 Million in minutes at Depfin
            Finance.
          </h1>

          <Link href='/personal/business/loan/apply'>
            <a className={styles.apply__cta}>Apply Now!</a>
          </Link>
        </div>

        <LoanForm
          value={value}
          terms={terms}
          handleChange={(e) => setValue(Number(e.target.value))}
          decrease={() => terms > 1 && setTerms(terms - 1)}
          increase={() => setTerms(terms + 1)}
          monthlyRepayment={monthlyRepayment}
          addLoanDetails={addLoanDetails}
        />
      </div>
    </div>
  )
}

export default Banner
