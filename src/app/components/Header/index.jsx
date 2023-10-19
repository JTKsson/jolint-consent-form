import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Styles from './header.module.css'


const Header = () => {
  return (
    <div className={Styles.header}>
      <Link href="https://jolint.com/" target="_blank">
        <Image
          src="/JOLINT-logo.svg.jpg"
          width={120}
          height={35.518}
          alt="Jolint logo"
        />
      </Link>
    </div>
  )
}

export default Header
