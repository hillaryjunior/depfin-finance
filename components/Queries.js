import { Link } from "@mui/material"
import Image from "next/image"
import styles from "../sass/components/Queries.module.scss"
import useMediaQuery from "@mui/material/useMediaQuery"
import { depfinFaqs } from "../data"
import { Phone, MessageCircle, Mail } from "lucide-react"
import dynamic from "next/dynamic"

// ✅ Optimized dynamic imports with better loading states
const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => <div style={{ minHeight: "200px" }}>Loading Contact Form...</div>,
  ssr: false,
})

const FAQS = dynamic(() => import("./FAQS"), {
  loading: () => <div style={{ minHeight: "200px" }}>Loading FAQs...</div>,
  ssr: false,
})

function Queries({ contact }) {
  const mobile = useMediaQuery("(max-width:769px)")

  return (
    <div className={styles.queries}>
      <h6>
        {contact ? "Get in touch" : "Require more Help?"}
        <span> our advisors are always ready to assist you.</span>
      </h6>

      <div className={styles.queries__container}>
        <div className={styles.contact__info}>
          <div className={styles.image__container}>
            <Image
              className={styles.image}
              src="https://res.cloudinary.com/devtedcloud/image/upload/q_25/v1685957431/depfin-finance/pexels-photo-8867630_1_hxo02o_1_mxcaaq.webp"
              alt="Require more help for Loan In South Africa"
              width={700}
              height={400}
              layout="intrinsic"
              objectFit="cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          <div className={styles.work__hours}>
            <p>Week Day 08:00 - 16: 00</p>
          </div>

          <div className={styles.socials__details}>
            <div className={styles.social__item}>
              <span>
                <Phone size={20} />
              </span>
              <Link href="tel:+27604601979">
                {mobile ? <a target="_blank">call</a> : <a target="_blank">27604601979</a>}
              </Link>
            </div>

            <div className={styles.social__item}>
              <span>
                <MessageCircle size={20} />
              </span>
              <Link href="https://api.whatsapp.com/send?phone=27604601979">
                {mobile ? <a target="_blank">chat</a> : <a target="_blank"> WhatsApp</a>}
              </Link>
            </div>

            <div className={styles.social__item}>
              <span>
                <Mail size={20} />
              </span>
              <Link href="mailto:info@depfinfinance.co.za">
                {mobile ? (
                  <a name="mail" target="_blank">
                    mail
                  </a>
                ) : (
                  <a name="email" target="_blank">
                    {" "}
                    info@depfinfinance.co.za
                  </a>
                )}
              </Link>
            </div>
          </div>

          <h5>•Branch Address</h5>
          <p>208 De Waal Rd, Southfield, Cape Town, 7800 South Africa.</p>
          <h5>•Head office address</h5>
          <p>
            Office Ground Flour, The Glen Shopping Centre, C/O Orpen & Letaba Road, Eastcliff, Oakdene, Johannesburg,
            2190
          </p>
        </div>

        <div className={styles.queries__faqs}>{contact ? <ContactForm /> : <FAQS data={depfinFaqs} />}</div>
      </div>
    </div>
  )
}

export default Queries
