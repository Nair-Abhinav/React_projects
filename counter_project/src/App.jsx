import { useState } from 'react'


import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
 

  
  const addVal = () => {
    counter = counter + 1
    setCounter(counter)
  }

  const subVal = () => {
    counter = counter - 1
    setCounter(counter)
  }
  

  return (
    <>
      <h1>Hello Abhinav Here!!</h1>

      <h2>Value : {counter}</h2>
      <button onClick={addVal}>Add value</button>
      <button onClick={subVal}>remove value</button>
    </>
  )
}

export default App
