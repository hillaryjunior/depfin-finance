import { Link } from '@mui/material';
import Image from 'next/image'
import React from 'react'
import styles from  '../sass/components/Queries.module.scss'
import FAQS from './FAQS';
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";
import { depfinFaqs } from '../data';
import ContactForm from './ContactForm';


function Queries({ image , contact }) {
        const mobile = useMediaQuery("(max-width:769px)");
  return (
    <div className={styles.queries}>
      <h6>
        {contact ? "Get in touch" : "  Require more Help ?"}
        <span> our advisors are always ready to assist you.</span>{" "}
      </h6>
      <div className={styles.queries__container}>
        <div className={styles.contact__info}>
          <div className={styles.image__container}>
            <Image
              className={styles.image}
              src={image}
              alt="advisor Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className={styles.work__hours}>
            <p>Week Day 08:00 - 16: 00</p>
          </div>
          <div>
            <div className={styles.socials__details}>
              <div className={styles.social__item}>
                <span>
                  <LocalPhoneRoundedIcon />
                </span>
                <Link href="tel:+27630884404">
                  {mobile ? (
                    <a target="_blank">call</a>
                  ) : (
                    <a target="_blank">0630884404</a>
                  )}
                </Link>
              </div>
              <div className={styles.social__item}>
                <span>
                  <WhatsAppIcon />
                </span>
                <Link href="https://api.whatsapp.com/send?phone=+27630900202">
                  {mobile ? (
                    <a target="_blank">chat</a>
                  ) : (
                    <a target="_blank"> WhatsApp</a>
                  )}
                </Link>
              </div>
              <div className={styles.social__item}>
                <span>
                  <EmailIcon />
                </span>
                <Link href="mailto:info@depfinfinance.co.za">
                  {mobile ? (
                    <a target="_blank">mail</a>
                  ) : (
                    <a target="_blank"> info@depfinfinance.co.za</a>
                  )}
                </Link>
              </div>
            </div>
          </div>

          <h5>• Head office address</h5>
          <p>208 De Waal Rd, Southfield, Cape Town, 7800 South Africa.</p>
          <h5>• Branch Address</h5>
          <p>7495 W Atlantic Ave Suite 200-293 Delray Beach, Fl 33446 USA.</p>
        </div>

        <div className={styles.queries__faqs}>
          {contact ? <ContactForm /> : <FAQS data={depfinFaqs} />}
        </div>
      </div>
    </div>
  );
}

export default Queries