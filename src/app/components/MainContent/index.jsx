'use client'

import { useState } from 'react'
import formCopy from '@/app/assets/formCopy'

export const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <div>
        <h2>{formCopy[currentIndex].subtitle}</h2>
        <p>{formCopy[currentIndex].content}</p>
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
          {currentIndex === 0 ? 'Start' : 'Next'}
        </button>
      )}
    </>
  )
}

export default MainContent
