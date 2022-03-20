import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import styles from "../sass/components/Auth.module.scss";
import { resetPassword } from "../services/Auth";

function Reset() {

  const [email, setEmail] = useState('')
  const router = useRouter()
  const [loading,setLoading] = useState(false)

  const passwordReset = async (e) => {
    e.preventDefault();
    if(!email) return toast.warning("Please enter an email")

    setLoading(true)
    
    try {
      await resetPassword(email).then((res) => {
        if (!res.error) {

          toast.success(`Password reset email sent to ${email}`)
          setLoading(false)
          router.push("/auth/login")
        }
        else {
          setLoading(false)
          toast.error("invalid email,user not found")
        }
      });
    }
    catch (error) {
      console.log(error)
    }
  };


    


  return (
    <div className={styles.form__container}>
      <div className={styles.top__header}>
        <h3>Reset Password</h3>
        <button onClick={() => router.replace("/login")}>Cancel</button>
      </div>

      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <input type="password" placeholder="New password" />
        <input type="password" placeholder="Confrim password" /> */}

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
          <button onClick={passwordReset}>Reset</button>
        )}
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

export default Reset;
