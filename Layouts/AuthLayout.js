import React from 'react'
import Footer from '../components/Footer'
import styles from '../sass/components/Auth.module.scss'

function AuthLayout({ form }) {
  return (
    <div>
      <main className={styles.container}>{form}</main>
      <Footer />
    </div>
  )
}

export default AuthLayout
