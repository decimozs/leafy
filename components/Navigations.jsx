import React from 'react'
import components from '../styles/layouts/_components.module.scss'
import styles from '../styles/modules/_navigations.module.scss'
import Image from 'next/image'
import { cart, search, logo, menu } from '../styles/assets'
import Link from 'next/link'

const Navigations = () => {
  return (
    
    <div className={components.StyledContainer}>
    <div className={components.StyledContent}>
    <div className={components.Navigations}>
    
    <div className={styles.Logo}>
    <Link href="/">
    <Image src={logo} className={styles.StyledLogo} width={70} height={70} ></Image>
    </Link>
    <div className={styles.StyledLinks}>
    <Link href="#discover">
    <a href=''>discover</a>
    </Link>
    <Link href="#helpus">
    <a href=''>help us</a>
    </Link>
    <Link href="#about">
    <a href=''>about</a>
    </Link>
    </div>
    </div>

    <div className={styles.Toggler}>
    <Image src={search} className={styles.StyledToggler} width={40} height={40}></Image>
    <Image src={cart} className={styles.StyledToggler} width={40} height={40}></Image>
    <div className={styles.Forms}>
    <Image src={menu} className={styles.StyledToggler} width={40} height={40}></Image>
    </div>
    <div className={styles.Login}>
    <button className={styles.SignIn}>
    <a>Sign In</a>
    </button>
    </div>
    </div>

    </div>
    </div>
    </div>

  )
}

export default Navigations