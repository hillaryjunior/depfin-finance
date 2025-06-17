// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig =
  {
        apiKey: "AIzaSyAN_9Yh9XETytTU3TO2ioaJ-UAG1JRg3CI",
        authDomain: "depfin-finance.firebaseapp.com",
        projectId: "depfin-finance",
        storageBucket: "depfin-finance.appspot.com",
        messagingSenderId: "16093135629",
        appId: "1:16093135629:web:ce6d74b82b06a218a46644",
        measurementId: "G-KTG8BSQYSM",
      }
    //  {
    //     apiKey: "AIzaSyCSRiFAIFZaadvmmzyLLa1W93BJB8oXC8M",
    //     authDomain: "depfin-testing.firebaseapp.com",
    //     projectId: "depfin-testing",
    //     storageBucket: "depfin-testing.appspot.com",
    //     messagingSenderId: "217508802445",
    //     appId: "1:217508802445:web:b269faa6ef382a098597c4",
    //     measurementId: "G-P0H7NRREQN",
    //   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth, db };


