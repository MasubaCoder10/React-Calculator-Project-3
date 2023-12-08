import React from 'react'
import './Button.css'
export default function Buttons(props) {
  return (
    <div onClick={()=>{props.OnPressClick(props.content)}} className= {`buttons  ${props.content === "0" ? "zero": ""} 
    ${props.content === "±" || props.content === "AC" || props.content === "%"? "ops":""}
    ${props.content === "÷" || props.content === "x" || props.content === "-" || props.content === "+" || props.content === "="? "operator":""}`}>
        {props.content} 
    </div>
  )
}
