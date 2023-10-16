import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.modules.css'


const Header = () => {
  return (
    <div>
    <h1 className={styles.title}>hola</h1>
    <Link href= "https://jolint.com/" target="_blank">
      <Image className={styles.logo}
        src="/JOLINT-logo.svg.jpg"
        width={120}
        height={35.518}
        alt="Jolint logo"
        priority={false}
        />
    </Link>
    </div>
  )
}

export default Header