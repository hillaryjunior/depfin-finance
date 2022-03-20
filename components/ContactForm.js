import React, { useRef, useState } from 'react'
import styles from '../sass/components/Forms.module.scss'
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';
import ReCAPTCHA from 'react-google-recaptcha';
init(process.env.NEXT_PUBLIC_USER_ID);

function ContactForm() {
        const form = useRef();
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [phone, setPhone] = useState('');
        const [loading, setLoading] = useState('');
        const [isVerified,setIsVerified] = useState(false);
        
       


        const sendEmail = (e) => {
                
                  
                e.preventDefault();
                if (!name || !email || !phone) return toast.error('Please fill in all fields');
                setLoading(true);

            emailjs
              .send(
                "service_qexluw5",
                "template_xj1glb5",
                {
                  from_name: name,
                  from_email: email,
                  to_name: "Depfin Finance",
                  message: message,
                  reply_to: email,
                },
                process.env.NEXT_PUBLIC_USER_ID
              )
              .then(
                (result) => {
                  console.log(result.text);
                  toast.success("Enquiry has been sent , an agent will get back to you shortly");
                              setLoading(false);
                              setName('');
                              setEmail('');
                              setMessage('');
                                setPhone('');
                },
                (error) => {
                  console.log(error.text);
                  toast.error("could not send enquiry at this time, please try again later");
                        setLoading(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setPhone("");
                }
              );
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
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
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