import React, { useState } from 'react'
import styles from '../sass/components/Forms.module.scss'

import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';
import ReCAPTCHA from 'react-google-recaptcha';


function ContactForm() {
       
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [phone, setPhone] = useState('');
        const [loading, setLoading] = useState('');
        const [isVerified,setIsVerified] = useState(false);
        
       
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message)
      return toast.error("Please fill in all fields");
    setLoading(true);

    try {
      

      axios
        .get(`/api/hello?email=${email}&name=${name}&phone=${phone}&&message=${message}`)
        .then((res) => {
          setLoading(false);
          toast.success("Your message has been sent successfully");
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");

          console.log("response", res);
        });
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
      setLoading(false)
    }
  };
  

       

  return (
    <div className={styles.contact}>
      <div className={styles.contact__container}>
        <h3>Write to us here</h3>

        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            placeholder="Phone number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <ReCAPTCHA
            sitekey="6LcoOvYeAAAAAPqz2GvBd_D2Jr0l7C6uZ1LqU0Zt"
            onChange={(e) => setIsVerified(!isVerified)}
          />
          ,
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
            <>{isVerified && <button onClick={sendEmail}>Send</button>}</>
          )}
        </form>
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

export default ContactForm