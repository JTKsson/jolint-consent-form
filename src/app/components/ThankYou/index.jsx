import Image from 'next/image'
import checkActive from '/public/checkround.svg'
import Link from 'next/link'
import Styles from './thankYou.module.css'

const ThankYou = () => {
  return (
    <div className={Styles.thanks}>
      <div className={Styles.picture}>
        <Image
          src={checkActive}
          alt="Icon of check being active"
          width={70}
          height={70}
        />
      </div>
      <h1 className={Styles.title}>Thank you!</h1>
      <p className={Styles.text}>
        Your consent form was successfully submitted. We appreciate your
        collaboration. Thank you!
      </p>
      <div>
        <Link href="https://jolint.com/">
          <button className={Styles.button}>Close</button>
        </Link>
      </div>
    </div>
  )
}

export default ThankYou
