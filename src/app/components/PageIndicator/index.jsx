import { PiCircleDuotone } from 'react-icons/pi'
import Styles from './pageIndicator.module.css'

const PageIndicator = () => {
  return (
    <div className={Styles.page}>
      <ul className={Styles.circles}>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots1}  />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots2} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots3} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots4} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots5} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots6} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots7} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots8} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots9} />
        </li>
      </ul>
    </div>
  )
}

export default PageIndicator
