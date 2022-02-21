import React from 'react'
import styles from '../sass/components/Forms.module.scss'

function ContactForm() {
  return (
          <div className={styles.contact}>
                  
                  <div className={styles.contact__container}>
                          <h3>Write to us here</h3>

                          <form >
                                  <input type="text" placeholder="Full name" />
                                  <input type="email" placeholder="Email" />
                                  <input type="tel" placeholder="Phone number" />
                                  <textarea placeholder="Message" />
                                        <button >Send</button>
                          </form>
                          </div>
                

    </div>
  )
}

export default ContactForm