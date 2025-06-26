import { useState, useMemo } from "react";
import styles from "../sass/components/Forms.module.scss";
import countryList from "react-select-country-list";
import Link from "next/link";
import { useRouter } from "next/router";
// import { validateIdNumber } from "south-african-id-validator";
import { createAccount, getData } from "../services/Auth";
import { login } from "../redux/slices";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";

const ThreeCircles = dynamic(
  () =>
    import("react-loader-spinner").then((mod) => mod.ThreeCircles),
  { ssr: false }
);

function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    title: "",
    idNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [nationality, setNationality] = useState("South Africa");
  const options = useMemo(() => countryList().getData(""), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      phoneNumber,
      title,
      idNumber,
    } = form;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !title ||
      !idNumber
    ) {
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    // Optional: Validate SA ID
    // if (!validateIdNumber(idNumber)) {
    //   return toast.error("Invalid SA ID number");
    // }

    setLoading(true);

    const displayName = `${firstName} ${lastName}`;
    const data = { email, photoURL: "", displayName };
    const userAcount = { ...data, firstName, lastName, title, phoneNumber, idNumber };

    try {
      const res = await createAccount(email, password, data, userAcount);

      if (res?.user?.uid) {
        toast.success("Account created successfully");
        const uid = res.user.uid;
        const userData = await getData(uid);

        if (!userData?.error) {
          dispatch(login(userData));
          router.replace("/apply");
        } else {
          toast.error("Something went wrong loading user data");
        }
      } else {
        toast.error("Account creation failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error creating account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form__container}>
      <h2>Complete Loan Application</h2>
      <p>*Application takes less than 5 Minutes</p>

      <form onSubmit={handleRegister}>
        <div className={styles.form__group}>
          <h3>Personal Details</h3>
          <div className={styles.select__input}>
            <select name="title" value={form.title} onChange={handleChange}>
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.form__inputs}>
            <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={handleChange} />
            <input type="number" name="idNumber" placeholder="SA ID number" value={form.idNumber} onChange={handleChange} />
            <div className={styles.select__input}>
              <label>Nationality</label>
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                {options.map((opt) => (
                  <option key={opt.label} value={opt.label}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.form__group}>
          <h3>Create Password</h3>
          <div className={styles.form__inputs}>
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.terms}>
          <input defaultChecked type="checkbox" />
          <Link href="/terms" passHref>
            <a className="terms__link">Accept <span>terms and conditions</span></a>
          </Link>
        </div>

        <p>
          I hereby declare that all information submitted is correct and to the best of my knowledge...
        </p>

        {loading ? (
          <div style={{ display: "grid", placeItems: "center", margin: "20px 0" }}>
            <ThreeCircles color="#01C5C4" height={60} width={60} ariaLabel="three-circles-rotating" />
          </div>
        ) : (
          <button type="submit">Next Step</button>
        )}
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
    </div>
  );
}

export default RegisterForm;
