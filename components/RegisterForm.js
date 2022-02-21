import React, { useState, useMemo } from "react";
import styles from "../sass/components/Forms.module.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import countryList from "react-select-country-list";
import Link from "next/link";

function RegisterForm() {
           const [terms, setTerms] = useState(2);
           const [value, setValue] = useState("");
           const options = useMemo(() => countryList().getData(), []);

           const changeHandler = (value) => {
             setValue(value);
           };
           const increase = () => {
             setTerms(terms + 1);
           };
           const decrease = () => {
             terms > 1 ? setTerms(terms - 1) : setTerms(terms);
           };
  return (
    <div className={styles.form__container}>
      <h2>Create an account</h2>
      <p>*Appplication takes less than 5 Minutes</p>

      <form>
        <div className={styles.form__group}>
          <h3>Personal Details</h3>

          <div className={styles.select__input}>
            <select>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Ms">Other</option>
            </select>
          </div>

          <div className={styles.form__inputs}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />

            <input type="text" placeholder="SA ID number" />
            <div className={styles.select__input}>
              <label htmlFor="">Nationality</label>
              <select value={value} onChange={changeHandler}>
                {options.map((option) => (
                  <option key={option.label} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.form__group}>
          <h3>Create Password</h3>

          <div className={styles.form__inputs}>
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
          </div>
        </div>
        <div className={styles.terms}>
          <input defaultChecked type="checkbox" />
          <Link href="/">
            <a className="terms__link">
              Accept <span>terms and conditions</span>
            </a>
          </Link>
        </div>
        <p>
          I hereby declare that all information submitted is correct and to the
          best of my Knowledge and I understand that any information supplied
          that is false or misleading could lead to the disqualification of my
          application or any further assistance from Depfin Finance .
          Information found to be incorrect after disbursement may result in the
          termination of the loan facility with the requirement of full and
          final settlement of the outstanding amount.
        </p>
        <button>Create account</button>
                  </form>
                  
                  
    </div>
  );
}

export default RegisterForm;
