import React, { useState } from "react";
import styles from "../sass/components/Faq.module.scss";
import { Plus, X } from "lucide-react";

function FAQs({ data }) {
  const [open, setOpen] = useState(false);

  const handleClick = (index) => {
    //close accordion if already active
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles.accordion__content}>
            <div className={styles.question} onClick={() => handleClick(index)}>
              <p>{item.question}</p>
              <button
                name="open"
                title="open"
                className={styles.icon__btn}
                onClick={() => handleClick(index)}
              >
                {open === index ? <X size={24} /> : <Plus size={24} />}
              </button>
            </div>
            {open === index && (
              <div key={item.id} className={styles.answer}>
                <p>{item.answer} </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQs;
