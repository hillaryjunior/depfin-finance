import Link from 'next/link'
import React from 'react'


function Fab() {
  return (
    <div className='float'>
      <Link href='https://api.whatsapp.com/send?phone=27604601979'>
        <a title='whatsapp' name='whatsapp' className='my-float'>
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </Link>
    </div>
  )
}

export default Fab
