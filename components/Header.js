import  { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import styles from '../sass/components/Header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../redux/slices'
import { MenuIcon, Phone, X } from 'lucide-react'
import useMediaQuery from '@mui/material/useMediaQuery'

// 🔹 Dynamically load heavy components
const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false })
const UserMenu = dynamic(() => import('./UserMenu'), { ssr: false })

function Header() {
  const router = useRouter()
  const dispatch = useDispatch()
  const mobile = useMediaQuery('(max-width:769px)')
  const [open, setOpen] = useState(false)
  const user = useSelector(selectUser)
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => router.push('/')}>
          <Image
            className={styles.image}
            src='/Images/ezgif.com-webp-to-jpg-converter (1) (1) (1).webp'
            width={250}
            height={110}
            alt='Depfin Logo'
            quality={60}
            priority
            decoding='async'
            objectFit='cover'
          />
        </div>

        <nav>
          <ul>
            <li>
              <Link href='/'>
                <a title='Home'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/personal/business/loan/apply'>
                <a title='Apply Online'>Apply online</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a title='About Us'>About us</a>
              </Link>
            </li>
            <li>
              <Link href='/solutions'>
                <a title='Solutions'>Solutions</a>
              </Link>
            </li>
            <li>
              <Link href='/blogs'>
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a title='contact us'>Contact us</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.cta}>
          <Link href='tel:27604601979' passHref={true}>
            <li>
              <a title='phone'>
                <span>
                  <Phone size={20} />
                </span>
                {!mobile && ' 27604601979'}
              </a>
            </li>
          </Link>

          {mobile ? (
            <span onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <MenuIcon size={20} />}
            </span>
          ) : (
            <>
              {user ? (
                <UserMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
              ) : (
                <button onClick={() => router.push('/auth/login')}>
                  Login
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {open && mobile && <MobileMenu />}
    </header>
  )
}

export default Header
