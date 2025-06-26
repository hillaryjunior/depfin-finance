import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices'
import { LogOut } from '../services/Auth'

// Dynamically load MUI components (only used client-side)
const Avatar = dynamic(() => import('@mui/material/Avatar'), { ssr: false })
const Menu = dynamic(() => import('@mui/material/Menu'), { ssr: false })
const MenuItem = dynamic(() => import('@mui/material/MenuItem'), { ssr: false })

export default function UserMenu({ anchorEl, setAnchorEl }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)

  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleLogout = () => {
    LogOut()
    dispatch(logout())
  }

  return (
    <>
      <Avatar
        style={{ cursor: 'pointer' }}
        id="user-avatar"
        onClick={handleClick}
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      />
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'user-avatar' }}
      >
        <MenuItem onClick={() => router.push('/auth/profile')}>My Account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}
