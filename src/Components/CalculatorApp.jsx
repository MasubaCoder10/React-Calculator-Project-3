import React from 'react'
import Buttons from './Buttons'
import './CalculatorApp.css'

export default function CalculatorApp() {
  return (
    <div className='calculator'>
    <div className="result">0</div>
    <div className='CalculatorApp'>
        <Buttons content = {"AC"} />
        <Buttons content = {"±"} />
        <Buttons content = {"%"} />
        <Buttons content = {"÷"} />

        <Buttons content = {"7"} />
        <Buttons content = {"8"} />
        <Buttons content = {"9"} />
        <Buttons content = {"x"} />

        <Buttons content = {"4"} />
        <Buttons content = {"5"} />
        <Buttons content = {"6"} />
        <Buttons content = {"-"} />

        <Buttons content = {"1"} />
        <Buttons content = {"2"} />
        <Buttons content = {"3"} />
        <Buttons content = {"+"} />

        <Buttons content = {"0"} />
        <Buttons content = {"."} />
        <Buttons content = {"="} />
        
    </div>
    </div>
  )
}
