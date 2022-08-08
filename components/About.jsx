import React from 'react'
import components from '../styles/layouts/_components.module.scss'
import styles from '../styles/modules/_about.module.scss'
import { whiteArrow, twitter, instagram, facebook, greenPhone, whitePhone, location, email, aboutlogo } from '../styles/assets'
import Image from 'next/image'

const About = () => {
  return (
    
    <div className={components.StyledAboutContainer}>
    <div className={components.StyledAboutContent} id="about">
    <div className={components.StyledAboutContentTitle}>
      <Image src={whiteArrow} width={20} height={20} ></Image>
      <div className={components.AboutTitle} >
      <h1 className={components.Title}>about us</h1>
      <div className={components.StyledTitleBars} ></div>
      </div>
    </div>
    <div className={styles.About}>
    <div className={styles.AboutContent1}>
    <Image src={aboutlogo}></Image>
    <div className={styles.WrapFollow}>
    <h1 className={styles.AboutFollow}>Follow us</h1>
    <div className={styles.Socials}>
    <Image src={instagram} width={50} height={50} ></Image>
    <Image src={facebook} width={50} height={50}></Image>
    <Image src={twitter} width={50} height={50}></Image>
    </div>
    </div>
    </div>
    <div className={styles.AboutContent2}>
    <h1 className={styles.AboutSnippets}>We are leafy your guide to enhance your quality of living by the help of planting plants and to save our mother earth.</h1>
    <div className={styles.Contacts}>
    <div className={styles.ContactInfo}>
    <Image src={location} width={30} height={30} ></Image>
    <p>Manila, Philippines</p>
    </div>
    <div className={styles.ContactInfo}>
    <Image src={whitePhone} width={30} height={30} ></Image>
    <p>(+63) 927 016 6200</p>
    </div>
    <div className={styles.ContactInfo}>
    <Image src={email} width={30} height={30} ></Image>
    <p>marlonadiguemartin548@gmail.com</p>
    </div>
    <button className={styles.ContactUs}>
    <a>Contact Us</a>
    <Image src={greenPhone} width={30} height={30} ></Image>
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default About