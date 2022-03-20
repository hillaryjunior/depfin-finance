import Head from "next/head";
import Image from "next/image";
import HomeLayout from "../Layouts/HomeLayout";
import { SITE_URL } from "../constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices";
import { getData } from "../services/Auth";

export default function Home() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getData(user.uid)
        .then((data) => {
          if (!data.error) {
           
         
              dispatch(login(data));
           
          } else {
            dispatch(logout());
          }
        })
        .catch((err) => {
          dispatch(logout());
          signOut();
        });
    }
  });

  return (
    <div className="app">
      <Head>
        <title>
          Loans from R30 000 to R10 Million | Apply Now - Depfin Finance
        </title>
        <meta
          name="description"
          content="We offer personal loans of up to R200 000 with repayment terms ranging from 24 - 72 months. Apply for a loan today!"
        />
        {/* viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:title"
          content="Loan from R5000 to R200 000 | Apply in minutes - Depfin Finance"
        />
        <meta
          property="og:description"
          content="We offer personal loans of up to R200 000 with repayment terms ranging from 24 - 72 months. Apply for a loan today!"
        />

       
      </Head>

      <main>
        <HomeLayout />
      </main>
    </div>
  );
}
