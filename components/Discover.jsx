import React from 'react'
import components from '../styles/layouts/_components.module.scss'
import styles from '../styles/modules/_discover.module.scss'
import { blackArrow } from '../styles/assets'
import Image from 'next/image'

const Discover = () => {
  return (
    
    <div className={components.StyledContainerDiscover}>
    <div className={components.StyledContent} id="discover">
    <div className={components.Discover} >
    <div className={components.StyledWrapper1} ></div>
      <div className={styles.StyledContentDiscover} >
      <div className={components.StyledContentTitle}>
      <Image src={blackArrow} width={20} height={20} ></Image>
      <div className={components.StyledTitle} >
      <h1 className={components.Title}>discover</h1>
      <div className={components.StyledTitleBars} ></div>
      </div>
      </div>
      <h1 className={styles.DiscoverSnippets} ><span className={styles.StyledNumbers}>01</span> We are here to  <span className={styles.HighlighText}>clean</span> indoor air by absorbing toxins, <span className={styles.HighlighText}>increasing humidity, and producing oxygen</span>.</h1>
      <h1 className={styles.DiscoverSnippets} >
      <span className={styles.StyledNumbers}>02</span> Add life to sterile spaces, offer privacy, and <span className={styles.HighlighText}>reduce noise levels</span>.
      </h1>
      <h1 className={styles.DiscoverSnippets} >
      <span className={styles.StyledNumbers}>03</span> When you feel down, it&apos;s amazing what a walk in the park can do. That&apos;s because <span className={styles.HighlighText}>when we get in touch with nature, we improve our wellbeing</span>.
      </h1>
      </div>
    </div>
    </div>
    </div>

  )
}

export default Discover