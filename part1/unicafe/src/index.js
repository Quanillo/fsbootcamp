import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const WarningNotUsed = () => {
  return <h1>No feedback given</h1>
}

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = (props.good-props.bad)/all
  let positive = (props.good/all)*100
  return ( 
  <div>
      <table>
        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{positive}</td>
        </tr>
      </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [used, setUsed] = useState (false)
  
  const handleClickGod = (event) => {
    setGood(good + 1);
    setUsed(true)
  }
  const handleClickNeutral = (event) => {
    setNeutral(neutral + 1);
    setUsed(true)
  }
  const handleClickBad = (event) => {
    setBad(bad + 1);
    setUsed(true)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={handleClickGod}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <h1>Statistics</h1>
      <table>
        <tr>
          <td>Good </td><td>{good}</td>
        </tr>
        <tr>
          <td>Neutral </td><td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad </td><td>{bad}</td>
        </tr>
      </table>
      {used === false ? (
          <WarningNotUsed />
        ) : (
          <Statistics good = {good} neutral = {neutral} bad = {bad} />
        )}
        
    </div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


