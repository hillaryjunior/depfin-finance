
  import React from "react";
  import styles from "../sass/components/Forms.module.scss";

  import RegisterForm from "./RegisterForm";
  import { useSelector } from "react-redux";
  import { selectUser } from "../redux/slices";
  import Application from "../Forms/Application";


  function Form() {
    const user = useSelector(selectUser)
    
    return (
      <div className={styles.apply__from}>
        {user ? <Application /> : <RegisterForm />}
      
      </div>
    );
  }

  export default Form;
