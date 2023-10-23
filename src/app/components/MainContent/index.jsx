'use client'

import { useState } from 'react'
import formCopy from '@/app/assets/formCopy'
import OverviewBox from '../OverviewBox'

export const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <div>
        <h2>{formCopy[currentIndex].subtitle}</h2>
        <p>{formCopy[currentIndex].content}</p>
        <OverviewBox />
      </div>

      {currentIndex !== 0 && (
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Back
        </button>
      )}
      {currentIndex !== formCopy.length - 1 && (
        <button
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex === formCopy.length - 1}
        >
          Next
        </button>
      )}
    </>
  )
}

export default MainContent
