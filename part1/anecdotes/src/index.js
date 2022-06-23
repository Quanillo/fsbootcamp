import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const WarningNotUsed = () => {
  return <h1>No feedback given</h1>
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * props.anecdotes.length))
  const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length))
  const [mostVoted, setMostVoted] = useState(0)
  const [used, setUsed] = useState (false)

  const handleClickNext = () => {
    let num = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(num)
  }

  const handleClickVote = () => {
    const copy = [...points]
    const higher = copy.indexOf(Math.max(...copy)) 
    copy[selected] += 1

    setPoints(copy)
    setMostVoted(higher)
    setUsed(true)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <h3>Has {points[selected]} votes</h3>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
      {used === false ? (
        <WarningNotUsed />
      ) : (
        <div>
          <h2>Anecdote whit most votes</h2>
          <p>{props.anecdotes[mostVoted]}</p>
        </div>
      )}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
] 

root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>
);

