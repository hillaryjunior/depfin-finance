import Link from "next/link"
import styles from "../sass/components/Float.module.scss"
import { MessageCircle } from "lucide-react"

function Fab() {
  return (
    <div className={styles.float}>
      <Link href="https://api.whatsapp.com/send?phone=27604601979">
        <a title="whatsapp" name="whatsapp" className={styles.myfloat}>
          <MessageCircle size={48} color="white" />
        </a>
      </Link>
    </div>
  )
}

export default Fab
