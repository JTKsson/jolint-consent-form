'use client'

import { useState } from 'react'
import formCopy from '@/app/assets/formCopy'
import { OverviewPage } from '../OverviewPage'
import ThankYou from '../ThankYou'

export const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <div>
        {formCopy[currentIndex].pageType === 'overview' && <OverviewPage currentIndex={currentIndex}/>}
        {formCopy[currentIndex].pageType === 'info' && (
          <>
            <h2>{formCopy[currentIndex].subtitle}</h2>
            <p>{formCopy[currentIndex].content}</p>
          </>
        )}
        {formCopy[currentIndex].pageType === 'thanks' && <ThankYou />}
      </div>

      {currentIndex !== 0 && currentIndex !== formCopy.length - 1 && (
        <button
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Back
        </button>
      )}
      {currentIndex !== formCopy.length - 1 &&
        formCopy[currentIndex].buttonType !== 'submit' &&
        formCopy[currentIndex].buttonType !== 'done' &&
        formCopy[currentIndex].pageType !== 'thanks' && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === formCopy.length - 1}
          >
            {currentIndex === 0 ? 'Start' : 'Next'}
          </button>
        )}
      {formCopy[currentIndex].buttonType === 'done' && (
        <button onClick={() => setCurrentIndex(currentIndex + 1)}>Done</button>
      )}
      {formCopy[currentIndex].buttonType === 'submit' && (
        <button onClick={() => setCurrentIndex(currentIndex + 1)}>
          Submit
        </button>
      )}
    </>
  )
}

export default MainContent
