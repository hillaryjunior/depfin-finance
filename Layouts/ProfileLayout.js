import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Queries from '../components/Queries';
import Tabs from '../components/Tabs';
import { selectUser } from '../redux/slices';
import styles from '../sass/components/Profile.module.scss'

function ProfileLayout() {
  const user = useSelector(selectUser)
  
  return (
    <div>
      <Header />

      <div className={styles.profile}>
        <div className={styles.profile__bg}>
          <h1>My Account Dashboard</h1>
          <p>
            {`Hello ${user?.title} ${user.displayName} This is your profile page. You can manage
            your profile information and track the progress of your loan
            applications`}
          </p>
          <p>
            A confirmation email with the next steps has has been sent to your email address. please check under Spam or junk mail if you do not see it under your inbox
          </p>
        </div>
        <div className={styles.profile__header}>
          <div>
            <h4>{user?.displayName}</h4>
            <small>{user?.email}</small>
          </div>

          <div className={styles.profile__info}>
            <form>
              <div className={styles.input__group}>
                <input type="text" defaultValue={user?.firstName} />
                <input type="text" defaultValue={user?.lastName} />
              </div>
              <div className={styles.input__group}>
                <input type="text" readOnly defaultValue={user?.email} />

                <input type="text" readOnly defaultValue={user?.idNumber} />
                <input type="text" defaultValue={user?.phoneNumber} />
              </div>
              {/* <button>Save Profile</button> */}
            </form>
          </div>

          <div className={styles.applications__details}>
            <h4>Loan Application Details</h4>
            <div className = {styles.tab}><Tabs  /></div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProfileLayout