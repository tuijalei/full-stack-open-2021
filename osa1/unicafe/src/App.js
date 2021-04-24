import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  let all = good+bad+neutral
  
  if(all === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return (
      <table>
        <tbody>
          <h1>Statistics</h1>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all} />
          <StatisticLine text='Average' value={(good+bad*-1)/all} />
          <StatisticLine text='Positive' value={(good/all*100) + ' %'} />
        </tbody>
      </table>
  )
}

const StatisticLine = ({text, value}) => {
    return (
          <tr>
            <td>{text}:</td>
            <td>{value}</td>
          </tr>
    )
}

const Button = ({handleClick, text}) => {
  return (
    <button 
      onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const pageTitle = 'Give feedback'
  const[clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const goodIncrease = () => {
    setClicks({ ...clicks, good: clicks.good+1})
  }

  const neutralIncrease = () => {
    setClicks({ ...clicks, neutral: clicks.neutral+1})
  }

  const badIncrease = () => {
    setClicks({ ...clicks, bad: clicks.bad+1})
  }
  

  return (
    <div>
      <h1>{pageTitle}</h1>
      <Button
        handleClick={goodIncrease}
        text='Good'
      />
      <Button 
        handleClick={neutralIncrease}
        text='Neutral'
      />
      <Button 
        handleClick={badIncrease}
        text='Bad'
      />
        <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </div>
  )
}

export default App