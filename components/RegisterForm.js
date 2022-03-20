import React, { useState, useMemo, useEffect } from "react";
import styles from "../sass/components/Forms.module.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import countryList from "react-select-country-list";
import Link from "next/link";
import { validateIdNumber } from "south-african-id-validator";

import { createAccount } from "../services/Auth";
import { login } from "../redux/slices";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ThreeCircles } from "react-loader-spinner";
import { useRouter } from "next/router";

function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [title, setTitle] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [idIsValid, setIdIsValid] = useState();

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(""), []);

  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (idNumber.length === 13) {
      setIdIsValid(validateIdNumber(idNumber).valid);
    }
  }, [idNumber, idIsValid]);

  const isIdValid = (idNumber) => {
    if (validateIdNumber(idNumber)) {
      return {
        isValid: true,
      };
    } else {
      return {
        isValid: false,
      };
    }
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const data = {
    displayName: `${firstName} ${lastName}`,

    photoURL: "",
    email: email,
  };
  const userAcount = {
    ...data,
    firstName,
    lastName,
    title,
    phoneNumber,
    idNumber,
    applications: [],
  };

  const register = async (e) => {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !title ||
      !idNumber
    )
      return toast.error("Please fill all fields");

    if (password !== confirmPassword)
      return toast.error("Passwords do not match");

    if (!idIsValid) {
      return toast.error("Please enter a valid ID Number");
    }

    setLoading(true);
    try {
      await createAccount(email, password, data, userAcount)
        .then((res) => {
          if (res) {
            toast.success("Account created successfully");
            setLoading(false);
            router.replace("/");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error creating account", err);
          setLoading(false);
        });
    } catch (error) {
      toast.error("Error creating account", error);
      console.log(error);
    }

    return {
      error: "Something went wrong",
    };
  };
  return (
    <div className={styles.form__container}>
      <h2>Create an account</h2>
      <p>*Appplication takes less than 5 Minutes</p>

      <form>
        <div className={styles.form__group}>
          <h3>Personal Details</h3>

          <div className={styles.select__input}>
            <select value={title} onChange={(e) => setTitle(e.target.value)}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Ms">Other</option>
            </select>
          </div>

          <div className={styles.form__inputs}>
            <input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input
              type="number"
              value={idNumber}
              maxLength="13"
              placeholder="SA ID number"
              onChange={(e) => setIdNumber(e.target.value)}
            />
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
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
        {loading ? (
          <div
            style={{ display: "grid", placeItems: "center", margin: "20px 0" }}
          >
            <ThreeCircles
              color="#01C5C4"
              height={60}
              width={60}
              ariaLabel="three-circles-rotating"
            />
          </div>
        ) : (
          <button onClick={register}>Create account</button>
        )}
      </form>

      <ToastContainer
        position="top-right"
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

export default RegisterForm;
