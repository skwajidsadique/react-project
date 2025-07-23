import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter = counter+1
    setCounter(counter + 1)

// when multiple number prin to use this 
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
   
   

  }

  const removeValue = () => {
    setCounter(counter - 1)
    if (counter === 0) {
      setCounter(0)
    }

  }

  const resetValue = () => {
    if (counter) {
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Simple Number Counter App</h1>
      <h3>Counter value : {counter} </h3>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
