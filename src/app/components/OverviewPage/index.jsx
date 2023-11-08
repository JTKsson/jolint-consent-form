import overviewPageCopy from '@/app/assets/overviewPageCopy'
import OverviewBox from '../OverviewBox'
import Styles from './overviewPage.module.css'

export const OverviewPage = ({currentIndex}) => {
  return (
    <div className={Styles.main}>
      <p className={Styles.text}>{overviewPageCopy}</p>
      <OverviewBox currentIndex={currentIndex}/>
    </div>
  )
}
