import React from 'react'
import dividerMobile from "../assets/images/pattern-divider-mobile.svg"
import dividerDesktop from "../assets/images/pattern-divider-mobile.svg"
import iconDice from "../assets/images/icon-dice.svg"

export default function Advice(props) {
  return (
    <section className='card'>
        <h1 className='num'>Advice #{props.id}</h1>
        <p className='advice-text'>"{props.adviceText}"</p>
    <div className='separator'>
        <img src={dividerMobile} alt="divider" />
        
    </div>
    <button onClick={props.clickBtn}>
        <img className='icon' src={iconDice} alt="dice icon" />
    </button>
    </section>
  )
}
