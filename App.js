
import Keypad from './Keypad'
import './App.css'
import { useState } from 'react'
function App() {
  let [input ,setInput]=useState("")
  function handleClick(value){
      setInput(input+value)
  }


  function handleCaluclate(value){
    let outputVal=eval(input)
    setInput(outputVal)
  }

  function handleClear(){
    setInput("")
  }
  return (
    <div className='container'>
      <h1>Caluclator App Using React</h1>
      <div className='caluclator'>
        <input type='text' value={input} className='output'/>
        <Keypad handleClick={handleClick}  handleClear={handleClear}  handleCaluclate={handleCaluclate}></Keypad>
      </div>
    </div>
    
  )
}

export default App