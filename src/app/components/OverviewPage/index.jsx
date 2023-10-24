import overviewPageCopy from '@/app/assets/overviewPageCopy'
import OverviewBox from '../OverviewBox'

export const OverviewPage = () => {
  console.log(overviewPageCopy)
  return (
    <>
      <p>{overviewPageCopy}</p>
      <OverviewBox />
    </>
  )
}
