import React, { useState } from 'react'

// a proper place to define a component
const Statistics = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral
  const avg = (good - bad) / all
  const positive = good / all

  const updateGood = () => {
    setGood(good + 1)
  }

  const updateNeutral = () => {
    setNeutral(neutral + 1)
  }

  const updateBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={updateGood} text="good"/>
      <Button handleClick={updateNeutral} text="neutral"/>
      <Button handleClick={updateBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={all}/>
      <Statistics text="average" value={avg}/>
      <Statistics text="positive" value={positive + '%'}/>
    </div>
  )
}

export default App