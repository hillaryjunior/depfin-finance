import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../sass/components/Header.module.scss';

function MobileMenu() {
  const router =  useRouter()
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
              <button onClick={() => router.push("/auth/login")}>Login</button>
            </nav>
          </div>
        );
}

export default MobileMenu;
