import overviewPageCopy from '@/app/assets/overviewPageCopy'
import OverviewBox from '../OverviewBox'

export const OverviewPage = ({currentIndex}) => {
  return (
    <>
      <p>{overviewPageCopy}</p>
      <OverviewBox currentIndex={currentIndex}/>
    </>
  )
}
