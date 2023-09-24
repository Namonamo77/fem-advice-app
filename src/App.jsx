import { useState, useEffect } from 'react'
import Advice from './Components/Advice'

import './App.css'

function App() {
const apiURL = "https://api.adviceslip.com/advice"


const [advice, setAdvice] = useState({
  id: "99",
  advice: "Learn from your mistakes."
})

function clickBtn(){
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice
      })
      })
}

  return (
      <main className='wrapper'>
        <Advice
          id={advice.id}
          adviceText={advice.advice}
          clickBtn={()=>clickBtn()}
        />
      </main>
 
  )
}

export default App
