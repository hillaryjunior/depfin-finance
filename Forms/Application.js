import React, { useState } from "react";
import styles from "../sass/components/Forms.module.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useRouter } from "next/router";
import { calculateLoanRepaymentMonthly } from "../services/Calculation";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices";
import Link from "next/link";
import { applyForLoan } from "../services/Auth";
import { ThreeCircles } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
function Application() {
  const userData = useSelector(selectUser);
  const [isVerified, setIsVerified] = useState(false);
  const [employmentStatus, setEmployeeStatus] = useState("");
  const [value, setValue] = useState(30000);
  const [grossIncome, setGrossIncome] = useState("");
  const [terms, setTerms] = useState(2);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [loanType, setLoanType] = useState("");
  const [isBlackListed, setIsBlackListed] = useState("");
  const [isInDebt, setIsInDebt] = useState("");
  const [repaymentMethod, setRepaymentMethod] = useState("");
  const router = useRouter();
  const rate = 6;
  const monthlyRepayment = calculateLoanRepaymentMonthly(value, rate, terms);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const increase = () => {
    setTerms(terms + 1);
  };
  const decrease = () => {
    terms > 1 ? setTerms(terms - 1) : setTerms(terms);
  };
  const result = Math.random().toString(36).substring(2, 8).toUpperCase();

  const ref_no = userData && `${userData.lastName[0].toUpperCase()}${result}`;


 

  const sendEmail = () => {
    try {
      axios
        .get(
          `https://depfin-admin.vercel.app/api/usermail?email=${userData?.email}&name=${userData.firstName}${userData.lastName}&ref_no=${ref_no}&amount=${value}&repayment=${monthlyRepayment}&type=${loanType}&term=${terms}&rate=${rate}&method=${repaymentMethod}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
      setLoading(false);
    }
  };
  const senAdminEmail = () => {
    try {
      axios
        .get(
          `https://depfin-admin.vercel.app/api/sendadmin?name=${userData.firstName}${userData.lastName}&ref_no=${ref_no}&amount=${value}&repayment=${monthlyRepayment}&type=${loanType}&term=${terms}&rate=${rate}&method=${repaymentMethod}`
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      // toast.error("Something went wrong");
      console.log(err);
      setLoading(false);
    }
  };

  const applicationData = {
    first_name: userData.firstName,
    last_name: userData.lastName,
    ID_number: userData.idNumber,
    ref_no: ref_no,

    email: userData.email,
    date_created: new Date().toLocaleString(),
    phone_number: userData.phoneNumber,
    gross_income: grossIncome,
    employment_status: employmentStatus,
    is_black_listed: isBlackListed,
    is_in_debt: isInDebt,
    status: "pending",
    loan_type: loanType,
    repayment_method: repaymentMethod,
    loan_amount: value,
    date: new Date().toLocaleString(),
    terms,
    rate: rate,
    monthly_repayment_amount: monthlyRepayment,
    uid: userData.uid,
  };

  const apply = async (e) => {
    e.preventDefault();
    if (
      !loanType ||
      !employmentStatus ||
      !isBlackListed ||
      !isInDebt ||
      !repaymentMethod ||
      !grossIncome ||
      !value ||
      !terms ||
      !monthlyRepayment
    )
      return toast.error("Please fill all the fields");
    setLoading(true);
    await applyForLoan(ref_no, loanType, applicationData)
      .then((res) => {


        if (!res.error) {
          toast.success("Loan application submitted successfully, a confirmation email has been sent to your email .Check under Spam as well if you did not recieve the email.");
          sendEmail();
          senAdminEmail();
          setLoading(false);
          setTimeout(() => {
            router.push("/auth/profile");
          }, 3500);
        } else {
          toast.error("Loan application failed");
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error("Error submitting application", err);
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={styles.form__container}>
      <h2>Next Step</h2>
      <p>*Appplication takes less than 5 Minutes</p>
      <form className={styles.application__form}>
        <div className={styles.personal__details}>
          <h3>Personal Details</h3>

          <div className={styles.select__input}>
            <span>Employment Status</span>
            <select
              value={employmentStatus}
              onChange={(e) => setEmployeeStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Employed">Employed</option>
              <option value="unemployed">unemployed</option>
              <option value="self emplopyed">Self employed</option>
              <option value="retired">Retired</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className={styles.form__input}>
            <input
              type="number"
              value={grossIncome}
              required
              onChange={(e) => setGrossIncome(e.target.value)}
              placeholder="Gross income (R30000)"
            />
          </div>
          <div>
            <div className={styles.selects__container}>
              <span>Are you blaklisted?</span>
              <div>
                <select
                  value={isBlackListed}
                  onChange={(e) => setIsBlackListed(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <div className={styles.selects__container}>
              <span>Are you in financial debt?</span>
              <div>
                <select
                  name="in debt"
                  value={isInDebt}
                  onChange={(e) => setIsInDebt(e.target.value)}
                  id=""
                >
                  <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <div className={styles.selects__container}>
              <span>Prefered loan repayment method</span>
              <div>
                <select
                  name="select"
                  value={repaymentMethod}
                  onChange={(e) => setRepaymentMethod(e.target.value)}
                  id=""
                >
                  <option value="">Select</option>
                  <option value="debit order">Debit Order</option>
                  <option value="direct deposit">Direct deposit</option>
                  <option value="salary payment">Salary payment</option>
                  <option value="bank standing order">
                    Bank standing order
                  </option>
                  <option value="post dated check ">Post dated check </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calculator}>
          <h4>Loan Calculator</h4>
          <div className={styles.select__input}>
            <span>Loan Type</span>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Personal loan">Personal Loan</option>
              <option value="Business loan">Business Loan</option>
              <option value="Consolidation loan">Consolidation Loan</option>
              <option value="Mortage loan">Mortage Loan</option>
              <option value="General loan">General Loan</option>
            </select>
          </div>
          <div style={{ margin: "20px 0" }}>
            <input
              className={styles.loan__input}
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Loan Amount (R 30000)"
              required
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
          <div>
            <ReCAPTCHA
              sitekey="6LcoOvYeAAAAAPqz2GvBd_D2Jr0l7C6uZ1LqU0Zt"
              onChange={(e) => setIsVerified(!isVerified)}
            />
          </div>
          {loading ? (
            <div
              style={{
                display: "grid",
                placeItems: "center",
                margin: "20px 0",
              }}
            >
              <ThreeCircles
                color="#01C5C4"
                height={60}
                width={60}
                ariaLabel="three-circles-rotating"
              />
            </div>
          ) : (
            <>{isVerified && <button onClick={apply}>Submit Application</button>}</>
          )}

          <div>
            <small>*Loans are calculated at a 6% interest rate</small>
          </div>
          <div>
            <div className={styles.terms}>
              <input defaultChecked type="checkbox" />
              <Link href="/terms">
                <a className="terms__link">
                  Accept <span>terms and conditions</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Application;
