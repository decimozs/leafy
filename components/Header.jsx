import React from 'react'
import components from '../styles/layouts/_components.module.scss'
import styles from '../styles/modules/_header.module.scss'
import { whiteArrow, cart, logo } from '../styles/assets'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    
    <div className={components.StyledContainer}>
    <div className={components.StyledContent}>
    <div className={components.Header}>
    <h1 className={styles.StyledHeaderTitle}>We love helping you to fill your home with nature <span className={styles.StyledExtras}>
    <Image src={logo} width={50} height={50}></Image>
    </span>.</h1>
    <div className={styles.StyledBars}></div>
    <p className={styles.StyledHeaderSnippets}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum porttitor velit. Sed aliquet eget magna vitae molestie. Sed vitae ligula mi. Nunc a pulvinar lectus.</p>
    <div className={styles.StyledHeaderButtonContainer}>
    <Link href="#discover">
    <button className={styles.StyledHeaderButton}>
    <a>Discover</a>
    <Image src={whiteArrow} width={20} height={20} ></Image>
    </button>
    </Link>
    <Link href="/Shop">
    <button className={styles.StyledHeaderButton}>
    <a>Shop</a>
    <Image src={cart} width={20} height={20} ></Image>
    </button>
    </Link>
    </div>
    </div>
    </div>
    </div>

  )
}

export default Header