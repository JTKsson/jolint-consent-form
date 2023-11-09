import React, { useState } from 'react'
import { format } from 'date-fns'

const ConsentForm = () => {
  const time = new Date().toLocaleTimeString()
  const [currentTime, setCurrentTime] = useState(time)

  const updateTime = () => {
    let time = new Date().toLocaleTimeString()
    setCurrentTime(time)
  }

  setInterval(updateTime, 1000)

  return (
    <div>
      <form>
        <p>Today, on {format(new Date(), 'EEEE d MMM yyyy H:mm:ss')}</p>
        <p>
          <span>
            <input
              type="checkbox"
              name="consent"
              value="no"
              id="consent"
              unchecked
              required
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
