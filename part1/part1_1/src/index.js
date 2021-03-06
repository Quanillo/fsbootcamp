import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./App.css";


const root = ReactDOM.createRoot(document.getElementById('root'));

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => { 
    return  <p>{clicks.join(", ")}</p>
}

const App = () => {
    //const [left, setLeft] = useState(0)
    //const [right, setRight] = useState(0)

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        mensaje: 'Mensaje en el estado'
    })

    const [clicks, setClicks] = useState([])


    const handleClickLeft = (event) => {
        console.log(event)
        const newCountersState = {
            ...counters,
            left: counters.left +1,
        }
        setCounters(newCountersState)
        setClicks(prevClicks => ([...prevClicks, 'L']))
    }
    
    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right +1,
        })
        setClicks(prevClicks => ([...prevClicks, 'R']))
    }

    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        <p>Clicks totales: {clicks.length}</p>

        {clicks.length ===0 ? (
         <WarningNotUsed />
        ) : (
        <ListOfClicks clicks = {clicks} />
        )}    
      </div>
    )
  }

//render de la app
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
 