import overviewPageCopy from '@/app/assets/overviewPageCopy'
import OverviewBox from '../OverviewBox'
import Styles from './overviewPage.module.css'

export const OverviewPage = ({currentIndex}) => {
  return (
    <>
      <p>{overviewPageCopy}</p>
      <OverviewBox currentIndex={currentIndex}/>
    </>
  )
}
