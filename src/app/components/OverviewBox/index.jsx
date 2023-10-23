import introIcon from '../../../../public/introIcon.jpg'
import purposeIcon from '../../../../public/purposeIcon.jpg'
import rightsIcon from '../../../../public/rightsIcon.jpg'
import consentIcon from '../../../../public/consentIcon.jpg'
import checkActive from '../../../../public/checkActive.jpg'
import Image from 'next/image'
import Styles from './overviewBox.module.css'

const boxDatas = [
  {
    id: 1,
    icon: introIcon,
    alt: 'icon for intro section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Introduction',
    text: 'Let Jolint introduce themselves to you',
  },
  {
    id: 2,
    icon: purposeIcon,
    alt: 'icon for purpose section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Purpose',
    text: 'The purpose of having Jolint in your company',
  },
  {
    id: 3,
    icon: rightsIcon,
    alt: 'icon for my rights section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Your Rights',
    text: 'Your rights with the processing of your personal data',
  },
  {
    id: 4,
    icon: consentIcon,
    alt: 'icon for consent section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Consent',
    text: 'Sign to improve inclusion and belonging in your company',
  },
]

const OverviewBox = () => {
  return (
    <div className={Styles.container}>
      {boxDatas.map((boxData) => (
        <div key={boxData.id} className={Styles.box}>
          <div className={Styles.boxHeader}>
            
          <div className={`${Styles.icon}-${boxData.icon[0]}`}>
    
            <Image className={Styles.image}
              src={boxData.icon}
              alt={boxData.alt}
              width={31}
              height={26}
              />
            </div>
            <div className={Styles.checkBox}>
            <Image className={Styles.imageCheckBox}
              src={boxData.box}
              alt={boxData.altCheck}
              width={25}
              height={20}
              />
            </div>
          </div>
          <h3 className={Styles.title}>{boxData.title}</h3>
          <p className={Styles.text}>{boxData.text}</p>
        </div>
      ))}
    </div>
  )
}

export default OverviewBox
