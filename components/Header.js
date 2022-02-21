import React from "react";
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
function Header() {
  const router = useRouter();
  const mobile = useMediaQuery("(max-width:769px)");
  const [open, setOpen] = React.useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick = {() => router.push('/')}>
          <Image
            className={styles.image}
            src={logo}
            layout="fill"
            objectFit="contain"
            alt="Depfin Logo"
          />
        </div>

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
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
            <Link href="/contact">
              <a>Contact us</a>
            </Link>
          </ul>
        </nav>
        <div className={styles.cta}>
          <Link href="tel:00000">
            {mobile ? (
              <a>
                {" "}
                <span>
                  <LocalPhoneRoundedIcon />
                </span>{" "}
              </a>
            ) : (
              <a>
                {" "}
                <span>
                  <LocalPhoneRoundedIcon />
                </span>{" "}
                063 9600 080
              </a>
            )}
          </Link>
          {mobile ? (
            <span onClick={() => setOpen(!open)}>
              {open ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
            </span>
          ) : (
            <button>Login</button>
          )}
        </div>
      </div>
      {open && mobile && <MobileMenu />}
    </header>
  );
}

export default Header;
