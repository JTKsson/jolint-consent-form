import introIcon from 'public/overview-box-icons/introduction-icon.svg'
import purposeIcon from 'public/overview-box-icons/purpose-icon-grey.svg'
import rightsIcon from 'public/overview-box-icons/your-rights-icon.svg'
import consentIcon from 'public/overview-box-icons/consent-icon.svg'
import checkActive from '../../../../public/checkActive.jpg'
import Image from 'next/image'

const boxDatas = [
  {
    icon: introIcon,
    alt: 'icon for intro section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Introduction',
    text: 'Let Jolint introduce them selves to you',
  },
  {
    icon: purposeIcon,
    alt: 'icon for purpose section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Purpose',
    text: 'The purpose of having Jolint in your company',
  },
  {
    icon: rightsIcon,
    alt: 'icon for my rights section',
    box: checkActive,
    altCheck: 'icon for checkbox',
    title: 'Your Rights',
    text: 'Your rights with the processing of your personal data',
  },
  {
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
    <div>
      {boxDatas.map((boxData) => (
        <div>
          <div>
            <Image
              src={boxData.icon}
              alt={boxData.alt}
              width={31}
              height={26}
            />
            <Image
              src={boxData.box}
              alt={boxData.altCheck}
              width={25}
              height={20}
            />
          </div>
          <h3>{boxData.title}</h3>
          <p>{boxData.text}</p>
        </div>
      ))}
    </div>
  )
}

export default OverviewBox
