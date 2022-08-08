import React from 'react'
import styles from '../styles/modules/_why.module.scss'
import components from '../styles/layouts/_components.module.scss'
import { blackArrow, cart } from '../styles/assets'
import Image from 'next/image'
import Link from 'next/link'

const Why = () => {
  return (
    
    <div className={styles.Container}>
    <Link href="/">
    <div className={components.StyledContentTitle}>
    <Image src={blackArrow} width={20} height={20} ></Image>
    <div className={components.StyledTitle} >
    <h1 className={components.Title}>help us</h1>
    <div className={components.StyledTitleBars} ></div>
    </div>
    </div>
    </Link>
    <div className={styles.Content}>
    <div className={styles.Why}>
    <h1 className={styles.Reasons}>3 reasons</h1>
    <h1 className={styles.ReasonsWhy}>Why
    <span className={styles.QuestionMark}>?</span>
    </h1>
    <div className={styles.WhySnippets}>
    <p><span className={styles.WhyNumbers}>01</span> Earth is a home for different living species and we all are dependent on the environment for food, air, water, and other needs. Therefore, it is important for every individual to save and protect our environment.</p>
    <p><span className={styles.WhyNumbers}>02</span> Healthy ecosystems clean our water, purify our air, maintain our soil, regulate the climate, recycle nutrients and provide us with food. They provide raw materials and resources for medicines and other purposes. They are at the foundation of all civilization and sustain our economies.</p>
    <p><span className={styles.WhyNumbers}>03</span> It is a way to give to the future generations: Not only protecting the environment benefits people in current generation; it will also benefit people in many generations to come. This planet is our legacy to the future generations.</p>
    </div>
    </div>
    <Link href='/Shop'>
      <button className={styles.HelpusButton}>
      <a>Shop</a>
      <Image src={cart} width={30} height={30} ></Image>
      </button>
    </Link>
    </div>
    </div>

  )
}

export default Why