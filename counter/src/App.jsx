import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };
  
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value </button> 
      <br />
      <button
      onClick={removeValue}
      >remove value </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
