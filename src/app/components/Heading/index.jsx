import speakerIcon from '../../assets/images/speaker-icon.svg'
import Image from 'next/image'
import Styles from './heading.module.css'

export const Heading = () => {
  const icon = speakerIcon

  return (
    <div className={Styles.main}>
      <h1 className={Styles.title}>Consent Form for Data Processing</h1>
      <div>
        <Image src={icon} alt="screen reader button" />
      </div>
    </div>
  )
}
