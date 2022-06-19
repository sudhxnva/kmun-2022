import React, { useEffect, useState } from "react"

import { CountdownDiv } from "./CountdownStyles"

export default function Countdown() {
  const deadline = new Date("Jul 06, 2022 10:00:00").getTime()
  const [timerInterval, setTimerInterval] = useState()
  const [time, setTime] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
  })

  useEffect(() => {
    setTimerInterval(setInterval(count, 1000))

    return () => {
      clearInterval(timerInterval)
    }
    // eslint-disable-next-line
  }, [])

  const padZero = (n) => {
    return String(n).padStart(2, "0")
  }

  const count = () => {
    const now = new Date().getTime()
    const timeLeft = deadline - now
    const dd = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hh = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mm = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const ss = Math.floor((timeLeft % (1000 * 60)) / 1000)

    setTime({
      days: padZero(dd),
      hours: padZero(hh),
      minutes: padZero(mm),
      seconds: padZero(ss),
    })

    if (timeLeft < 0) {
      clearInterval(timerInterval)
      setTime({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
      })
    }
  }

  const { days, seconds, hours, minutes } = time
  return (
    <CountdownDiv className="section">
      <div className="container">
        <h1>COUNTDOWN</h1>
        <span className="text-lg">TO THE CONFERENCE</span>
      </div>
      <div className="countdown-container">
        <div id="countdown">
          <div className="col-4">
            <div className="box">
              <p id="day">{days}</p>
              <span className="text">DAYS</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="hour">{hours}</p>
              <span className="text">HOURS</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="minute">{minutes}</p>
              <span className="text">MINUTES</span>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <p id="second">{seconds}</p>
              <span className="text">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dates">
        <span>Mark your calendars for the </span>
        <span className="highlight">6th, 7th and 8th of July.</span>
      </div>
    </CountdownDiv>
  )
}
