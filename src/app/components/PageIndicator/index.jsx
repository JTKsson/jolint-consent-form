import { PiCircleDuotone } from 'react-icons/pi'
import Styles from './pageIndicator.module.css'

const PageIndicator = () => {
  return (
    <div className={Styles.page}>
      <ul className={Styles.circles}>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
        <li className={Styles.list}>
          <PiCircleDuotone className={Styles.dots} />
        </li>
      </ul>
    </div>
  )
}

export default PageIndicator
