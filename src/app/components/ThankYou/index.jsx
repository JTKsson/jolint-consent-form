import Image from 'next/image'
import checkActive from '../../../../public/checkround.svg'
import Link from 'next/link'
import Styles from "./thankyou.module.css";

const ThankYou = () => {
  return (
    <div className={Styles.thanks}>
      
        <Image
          src={checkActive}
          alt="Icon of check being active"
          weight={64}
          height={51}
        />
        <h1>Thank you!</h1>
      <p>
        Your consent form was successfully submitted. We appreciate your
        collaboration. Thank you!
      </p>
      <Link href="https://jolint.com/">
        <button>Close</button>
      </Link>
    </div>
  )
}

export default ThankYou
