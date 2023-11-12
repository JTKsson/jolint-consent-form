'use client'
import React, { useEffect, useState } from 'react'
import { unlockBox, checkBox } from './progressFunctions'
import boxData from './boxDatas'

import Image from 'next/image'
import Styles from './overviewBox.module.css'

const OverviewBox = ({ currentIndex }) => {
  
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage

  const storedBoxDatas = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem('boxDatas')) || boxData
    : boxData

  const [boxDatas, setBoxDatas] = useState(storedBoxDatas)
  

  useEffect(() => {
    if (isLocalStorageAvailable) {
      if (currentIndex === 0) {
        setBoxDatas((prevBoxDatas) => unlockBox(0, true, prevBoxDatas))
      } else if (currentIndex === 3) {
        setBoxDatas((prevBoxDatas) =>
          checkBox(0, true, unlockBox(1, true, prevBoxDatas)),
        )
      } else if (currentIndex === 5) {
        setBoxDatas((prevBoxDatas) =>
          checkBox(1, true, unlockBox(2, true, prevBoxDatas)),
        )
      } else if (currentIndex === 9) {
        setBoxDatas((prevBoxDatas) =>
          checkBox(2, true, unlockBox(3, true, prevBoxDatas)),
        )
      } else if (currentIndex === 13) {
        setBoxDatas((prevBoxDatas) => checkBox(3, true, prevBoxDatas))
      }
    }
  }, [currentIndex, isLocalStorageAvailable])

  useEffect(() => {
    if (isLocalStorageAvailable) {
      localStorage.setItem('boxDatas', JSON.stringify(boxDatas))
    }
  }, [boxDatas, isLocalStorageAvailable])

  return (
    <div className={Styles.container}>
      {boxDatas.map((boxData) => (
        <div
          className={`${Styles.box} ${
            !boxData.unlocked ? Styles.checkBoxLocked : ''
          }`}
          key={boxData.title}
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
