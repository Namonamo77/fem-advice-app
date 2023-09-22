import React from 'react'
import dividerMobile from "../assets/images/pattern-divider-mobile.svg"
import dividerDesktop from "../assets/images/pattern-divider-mobile.svg"
import iconDice from "../assets/images/icon-dice.svg"

export default function Advice() {
  return (
    <section className='card'>
        <h1 className='num'>Advice #117</h1>
        <p>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</p>
    <div className='separator'>
        <img src={dividerMobile} alt="divider" />
        
    </div>
    <button>
        <img src={iconDice} alt="dice icon" />
    </button>
    </section>
  )
}
