'use client'

import { useState, useEffect } from 'react'
import formCopy from '@/app/assets/formCopy'
import { OverviewPage } from '../OverviewPage'
import ThankYou from '../ThankYou'
import Styles from './mainContent.module.css'
import PageIndicator from '../PageIndicator'
import { Heading } from '../Heading'
import ConsentForm from '../ConsentForm'


export const MainContent = () => {
  const savedIndex = parseInt(localStorage.getItem('currentIndex')) || 0
  const [currentIndex, setCurrentIndex] = useState(savedIndex)

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex.toString())
  }, [currentIndex])

  return (
    <>
      <div>
        {formCopy[currentIndex].pageType === 'overview' && (
          <OverviewPage currentIndex={currentIndex} />
        )}
        {formCopy[currentIndex].pageType === 'info' && (
          <div className={Styles.content}>
            <Heading />
            <PageIndicator />
            <h2 className={Styles.title}>{formCopy[currentIndex].subtitle}</h2>
            <p className={Styles.text}>{formCopy[currentIndex].content}</p>
          </div>
        )}

        {formCopy[currentIndex].pageType === 'form' && (
          <div className={Styles.content}>
            <Heading />
            <PageIndicator />
            <h2 className={Styles.title}>{formCopy[currentIndex].subtitle}</h2>
            <p className={Styles.text}>{formCopy[currentIndex].content}</p>
            <ConsentForm />
          </div>
        )}

        {formCopy[currentIndex].pageType === 'thanks' && <ThankYou />}
      </div>

      <div className={Styles.wrapButton}>
        {currentIndex !== 0 && currentIndex !== formCopy.length - 1 && (
          <button
            className={Styles.backButton}
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
              className={Styles.blueButton}
              onClick={() => setCurrentIndex(currentIndex + 1)}
              disabled={currentIndex === formCopy.length - 1}
            >
              {currentIndex === 0 ? 'Start' : 'Next'}
            </button>
          )}
        {formCopy[currentIndex].buttonType === 'done' && (
          <button
            className={Styles.blueButton}
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            Done
          </button>
        )}
        {formCopy[currentIndex].buttonType === 'submit' && (
          <button
            className={Styles.submitButton}
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            Submit
          </button>
        )}
      </div>
    </>
  )
}

export default MainContent
