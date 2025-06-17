import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../sass/components/Banner.module.scss';
import { Slider } from '@mui/material';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useRouter } from 'next/router';
import { calculateLoanRepaymentMonthly } from "../services/Calculation";
import { useDispatch } from 'react-redux';
import { setRepayment } from '../redux/slices';
import Disclaimer from './Disclaimer';
function Banner() {
        const [value, setValue] = useState(30000);
  const [terms, setTerms] = useState(2);
  const router = useRouter()
  const rate = 6;

  const dispatch = useDispatch();
  
 

  
  const monthlyRepayment = calculateLoanRepaymentMonthly(value, rate, terms);
   const addLoanDetails = () => {
     dispatch(
       setRepayment({
         amount: value,
         terms: terms,
         rate: rate,
         monthly: monthlyRepayment,

       })
     );
     router.push("/personal/business/loan/apply");
   };


  // console.log(monthlyRepayment)


         const handleChange = (e) => {
           setValue(e.target.value);
         };
        const increase = () => {
                setTerms(terms + 1);
        }
        const decrease = () => {
                terms > 1 ? setTerms(terms - 1) : setTerms(terms);
              
        }
        return (
          <div className={styles.banner}>
            <div className={styles.container}>
              <div className={styles.content}>
                <h1>
                  Get a <span>loan</span> from R30 000 to R10 Million in minutes
                  at
                  <span> Depfin Finance.</span>
                </h1>
                <Link href="/personal/business/loan/apply">
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
                      type="number"
                      value={value}
                      onChange={handleChange}
                      placeholder="Enter Required Loan Amount (R 30000)"
                    />
                  </div>
                  <div className={styles.repayment}>
                    <div className={styles.item}>
                      <label>period (years)</label>
                      <div className={styles.years__item}>
                        <span onClick={decrease}>
                          <RemoveRoundedIcon />
                        </span>

                        <input
                          type="number"
                          value={terms}
                          min="1"
                          max="1000"
                          onChange={(e) => setTerms(e.target.value)}
                        />
                        <span onClick={increase}>
                          <AddRoundedIcon />
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
        );
}

export default Banner;
