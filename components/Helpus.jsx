import React from 'react'
import components from '../styles/layouts/_components.module.scss'
import styles from '../styles/modules/_helpus.module.scss'
import { blackArrow } from '../styles/assets'
import Image from 'next/image'
import { why } from '../styles/assets'
import { cart } from '../styles/assets'
import Link from 'next/link'

const Helpus = () => {
  return (
    
    <div className={components.StyledContainerHelpus}  id="helpus">
    <div className={components.StyledHelpusContent}>
    <div className={components.StyledContentTitle}>
      <Image src={blackArrow} width={20} height={20} ></Image>
      <div className={components.StyledTitle} >
      <h1 className={components.Title}>help us</h1>
      <div className={components.StyledTitleBars} ></div>
      </div>
      </div>
      <div className={styles.Helpus}>
      <h1 className={styles.HelpusSnippets}>help us by planting more plants and also improve the quality of life especially at your home.</h1>
      <div className={styles.StyledHelpusButtonContainer}>
      <Link href='/Why'>
      <button className={styles.HelpusButton}>
      <a>Why</a>
      <Image src={why} width={20} height={20} ></Image>
      </button>
      </Link>
      <Link href='/Shop'>
      <button className={styles.HelpusButton}>
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

export default Helpus