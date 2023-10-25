import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <Link href="https://jolint.com/" target="_blank">
        <Image
          src="/JOLINT-logo.svg"
          width={120}
          height={35.518}
          alt="Jolint logo"
        />
      </Link>
    </div>
  )
}

export default Header
