import React, { useState } from 'react'


const StatisticLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = good + bad + neutral
  const avg = (good - bad) / all
  const positive = (good / all) * 100

  return(
    <div>
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" value={positive + '%'}/>
      </table>
    </div>
  )
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      {good || neutral || bad ? 
      <Statistics good={good} neutral={neutral} bad={bad}/>
      : <div>No feedback given</div> }
    </div>
  )
}

export default App