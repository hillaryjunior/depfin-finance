import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import styles from "../sass/components/Header.module.scss";
import logo from "../public/depfin.png";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
const MobileMenu = dynamic(() => import("./MobileMenu"));
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slices";
import { LogOut } from "../services/Auth";
function Header() {
   const dispatch = useDispatch();
  const router = useRouter();
  const mobile = useMediaQuery("(max-width:769px)");
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUser);
 
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
    dispatch(logout())

  }
  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <Image
            className={styles.image}
            src="https://res.cloudinary.com/devtedcloud/image/upload/q_27/v1685956866/depfin-finance/depfin_ihgf00.webp"
            layout="fill"
            objectFit="contain"
            alt="Depfin Logo"
            priority
          />
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a title="Home">Home</a>
              </Link>
            </li>

            <li>
              <Link href="/personal/business/loan/apply">
                <a title="Apply Online">Apply online</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a title="About Us">About us</a>
              </Link>
            </li>
            <li>
              <Link href="/solutions">
                <a title="Solutions">Solutions</a>
              </Link>
            </li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
            <li>
              <Link href="/contact">
                <a title="contact us">Contact us</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cta}>
          <Link href="tel:0710822692">
            {mobile ? (
              <li>
                <a title="mobile number">
                  {" "}
                  <span>
                    <LocalPhoneRoundedIcon />
                  </span>{" "}
                </a>
              </li>
            ) : (
              <li>
                <a title="phone">
                  {" "}
                  <span>
                    <LocalPhoneRoundedIcon />
                  </span>{" "}
                  0710822692
                </a>
              </li>
            )}
          </Link>
          {mobile ? (
            <span onClick={() => setOpen(!open)}>
              {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </span>
          ) : (
            <>
              {user ? (
                <div>
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
          )}
        </div>
      </div>
      {open && mobile && <MobileMenu />}
    </header>
  );
}

export default Header;
