import Link from 'next/link'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Fab() {
  return (
    <div className="float">
      <Link href="https://api.whatsapp.com/send?phone=+27630900202">
        <a title ="whatsapp" name ="whatsapp" className="my-float">
          <WhatsAppIcon />
        </a>
      </Link>
    </div>
  );
}

export default Fab