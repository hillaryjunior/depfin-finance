
import React, { useState ,useMemo } from "react";
import styles from "../sass/components/Forms.module.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import countryList from "react-select-country-list";
import RegisterForm from "./RegisterForm";


function Form() {
   const [terms, setTerms] = useState(2);
 const [value, setValue] = useState("");
 const options = useMemo(() => countryList().getData(), []);

 const changeHandler = (value) => {
   setValue(value);
 };
   const increase = () => {
     setTerms(terms + 1);
   };
   const decrease = () => {
     terms > 1 ? setTerms(terms - 1) : setTerms(terms);
   };
  return (
    <div className={styles.apply__from}>
     <RegisterForm />
    </div>
  );
}

export default Form;
