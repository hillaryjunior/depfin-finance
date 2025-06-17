import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../redux/slices";
import styles from "../sass/components/Auth.module.scss";
import { userLogin } from "../services/Auth";
import { ThreeCircles } from "react-loader-spinner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading , setLoading] = useState(false);

  const SignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill in all fields");
    setLoading(true);

    try {
      await userLogin(email, password)
        .then((res) => {

          if (!res.error) {
            toast.success("Login Successful");
            setLoading(false);
            dispatch(login(res.data));
           router.push("/");
           
            
          }
          else {
            setLoading(false);
            toast.error("Invalid email or password");
            
          }

          
          
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error("Invalid email or password");
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
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
          <Link href="/auth/reset">
            <a>Forgot password ?</a>
          </Link>
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
          <button onClick={SignIn}>Login</button>
        )}
      </form>
      <div className={styles.sign__up}>
        <Link href="/apply">
          <a>
            New user ? <span>Register</span>
          </a>
        </Link>
      </div>
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

export default Login;
