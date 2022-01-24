import React, { useState } from 'react'

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
      <button onClick={updateGood}> good </button>
      <button onClick={updateNeutral}> neutral </button>
      <button onClick={updateBad}> bad </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {avg}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App