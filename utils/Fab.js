import Link from 'next/link'
import styles from '../sass/components/Float.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Fab() {
  return (
    <div className={styles.float}>
      <Link href='https://api.whatsapp.com/send?phone=27604601979'>
        <a title='whatsapp' name='whatsapp' className={styles.myfloat}>
          <FontAwesomeIcon icon={faWhatsapp} size="4x" color="white" />
        </a>
      </Link>
    </div>
  )
}

export default Fab
