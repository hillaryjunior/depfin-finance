// components/Login.jsx
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../redux/slices";
import { userLogin } from "../services/Auth";
import styles from "../sass/components/Auth.module.scss";

// ✅ Lazy load loader only when needed
const ThreeCircles = dynamic(
  () => import("react-loader-spinner").then((mod) => mod.ThreeCircles),
  { ssr: false, loading: () => <div style={{ height: 60 }} /> }
);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const SignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");
    setLoading(true);

    try {
      const res = await userLogin(email, password);
      if (!res.error) {
        dispatch(login(res.data));
        toast.success("Login Successful");
        router.push("/");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.form__container}>
      <div className={styles.top__header}>
        <h3>Login</h3>
      </div>

      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className={styles.forget__password}>
          <Link href="/auth/reset" passHref>
            <a>Forgot password ?</a>
          </Link>
        </div>

        {loading ? (
          <div className={styles.loaderWrapper}>
            <ThreeCircles
              color="#01C5C4"
              height={60}
              width={60}
              ariaLabel="three-circles-rotating"
            />
          </div>
        ) : (
          <button type="submit" onClick={SignIn}>
            Login
          </button>
        )}
      </form>

      <div className={styles.sign__up}>
        <Link href="/apply" passHref>
          <a>
            New user ? <span>Register</span>
          </a>
        </Link>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Login;
