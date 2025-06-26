import Link from 'next/link'
import '../sass/components/Float.module.scss'

function Fab() {
  return (
    <div className='float'>
      <Link href='https://api.whatsapp.com/send?phone=27604601979'>
        <a title='whatsapp' name='whatsapp' className='my-float'>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </Link>
    </div>
  )
}

export default Fab
