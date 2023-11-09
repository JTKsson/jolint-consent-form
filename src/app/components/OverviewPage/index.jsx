import overviewPageCopy from '@/app/assets/overviewPageCopy'
import OverviewBox from '../OverviewBox'
import Styles from './overviewPage.module.css'
import { Heading } from '../Heading'

export const OverviewPage = ({currentIndex}) => {
  return (
    <div className={Styles.main}>
      <Heading />
      <p className={Styles.text}>{overviewPageCopy}</p>
      <OverviewBox currentIndex={currentIndex}/>
    </div>
  )
}
