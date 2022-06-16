import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter = ({number}) => {
  return <h1>{number}</h1>
}
const App = (props) => {
  const [contador, setContador]  = useState(0);
  
  console.log("render")

  const handleClick = () => {
      setContador(contador +1)
  }

  const handleClickReset = () => {
    setContador(0)
  }
  const isEven = contador % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar'

  return (
    <div> 
      <p>El valor del contador es:</p>
      <Counter number = {contador} />
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};


//render de la app
/**root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
 );
*/




