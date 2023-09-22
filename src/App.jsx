import { useState, useEffect } from 'react'

import './App.css'

function App() {
const apiURL = "https://api.adviceslip.com/advice"
const [advice, setAdvice] = useState("")

useEffect(()=>{

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      setAdvice({
        id: data.slip.id,
        advice: data.slip.advice
      })
      })
}, [])
console.log(advice)

  return (
      <main>
       
      </main>
 
  )
}

export default App
