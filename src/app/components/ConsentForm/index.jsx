import React, { useState } from 'react'
import { format } from 'date-fns'
import Styles from './consentForm.module.css'

const ConsentForm = () => {
  const time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  setInterval(updateTime, 1000)

  return (
    <div className={Styles.wrapForm}>
      <form className={Styles.form}>
        <p className={Styles.date}>Today, on {format(new Date(), 'EEEE d MMM yyyy H:mm:ss')}</p>
        <p className={Styles.consent}>
          <span className={Styles.checks}>
            <input
              className={Styles.name}
              type="checkbox"
              name="consent"
              value="no"
              id="consent"
              unchecked
              required
              height="30px"
              width="30px"
            />
          </span>
          I,{' '}
          <input
            type="text"
            id="fname"
            name="name"
            required
            placeholder="enter your name"
          />{' '}
          hereby consent to the processing of my personal data as described
          before.
        </p>
      </form>
    </div>
  )
}

export default ConsentForm
