import introIcon from 'public/overview-box-icons/introduction-icon.svg'
import purposeIcon from 'public/overview-box-icons/purpose-icon.svg'
import rightsIcon from 'public/overview-box-icons/your-rights-icon.svg'
import consentIcon from 'public/overview-box-icons/consent-icon.svg'
import checkActive from 'public/overview-box-icons/checkBoxActive.svg'
import Image from 'next/image'
import Styles from './overviewBox.module.css'
import React from 'react'

const OverviewBox = ({ currentIndex }) => {
  const boxDatas = [
    {
      icon: introIcon,
      alt: 'icon for intro section',
      box: checkActive,
      altCheck: 'icon for checkbox',
      title: 'Introduction',
      text: 'Let Jolint introduce themselves to you',
      unlocked: currentIndex >= 0,
      checkBoxDone: currentIndex >= 3,
    },
    {
      icon: purposeIcon,
      alt: 'icon for purpose section',
      box: checkActive,
      altCheck: 'icon for checkbox',
      title: 'Purpose',
      text: 'The purpose of having Jolint in your company',
      unlocked: currentIndex >= 3,
      checkBoxDone: currentIndex >= 5,
    },
    {
      icon: rightsIcon,
      alt: 'icon for my rights section',
      box: checkActive,
      altCheck: 'icon for checkbox',
      title: 'Your Rights',
      text: 'Your rights with the processing of your personal data',
      unlocked: currentIndex >= 5,
      checkBoxDone: currentIndex >= 9,
    },
    {
      icon: consentIcon,
      alt: 'icon for consent section',
      box: checkActive,
      altCheck: 'icon for checkbox',
      title: 'Consent',
      text: 'Sign to improve inclusion and belonging in your company',
      unlocked: currentIndex >= 9,
      checkBoxDone: currentIndex >= 13,
    },
  ]

  console.log({ currentIndex })

  return (
    <div className={Styles.container}>
      {boxDatas.map((boxData) => (
        <div
          className={`${Styles.box} ${
            !boxData.unlocked ? Styles.checkBoxLocked : ''
          }`}
        >
          <div className={Styles.boxHeader}>
            <div>
              <Image
                className={Styles.image}
                src={boxData.icon}
                alt={boxData.alt}
                width={45}
                height={45}
              />
            </div>

            <div className={Styles.checkBox}>
              <Image
                className={`${Styles.imageCheckBox} ${
                  !boxData.checkBoxDone ? Styles.checkboxUnchecked : ''
                }`}
                src={boxData.box}
                alt={boxData.altCheck}
                width={30}
                height={30}
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
