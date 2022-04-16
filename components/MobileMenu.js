import { Avatar, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../redux/slices';
import styles from '../sass/components/Header.module.scss';
import { LogOut } from '../services/Auth';

function MobileMenu() {
   const user = useSelector(selectUser);
  const router = useRouter()
   const dispatch = useDispatch();
  
  
   const [open, setOpen] = useState(false);

   const [anchorEl, setAnchorEl] = useState(null);
   const openMenu = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };

   const userLogout = () => {
     LogOut();
     dispatch(logout());
   };
        return (
          <div className={styles.mobile__menu}>
            <nav>
              <ul>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/apply">
                  <a>Apply online</a>
                </Link>
                <Link href="/about">
                  <a>About us</a>
                </Link>
                <Link href="/solutions">
                  <a>Solutions</a>
                </Link>
                {/* <Link href="/blogs">
                  <a>Blogs</a>
                </Link> */}
                <Link href="/contact">
                  <a>Contact us</a>
                </Link>
              </ul>
              <>
                {user ? (
                  <div style = {{display: 'grid',placeItems : 'center'  }}>
                    <Avatar
                      style={{ cursor: "pointer" }}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    ></Avatar>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "profile-menu",
                      }}
                    >
                      <MenuItem onClick={() => router.push("/auth/profile")}>
                        My Account
                      </MenuItem>

                      <MenuItem onClick={userLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <button onClick={() => router.push("/auth/login")}>
                    Login
                  </button>
                )}
              </>
              
            </nav>
          </div>
        );
}

export default MobileMenu;
