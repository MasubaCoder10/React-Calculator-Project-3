import React, { useState } from 'react'
import Buttons from './Buttons'
import './CalculatorApp.css'

export default function CalculatorApp() {
    const [value, setValue] = useState(0);
    const [number, setNumber] = useState(null);
    const [operator, setOperator] = useState(null);
     const handlePress = content =>{
        let numbers = (value)
        if(content === "AC"){
            setValue(0)
            setNumber(null);
            setOperator(null);
            return;
        }
        if(content === "±"){
            setValue((numbers * -1).toString() )
            return;
        }
        if(content === "%"){
            setValue((numbers / 100).toString())
            return;
        }

        if(content === "+"){      
            setNumber((value).toString());
            setValue(0);
            setOperator("+");
            return;
        }
    
        if(content === "-"){
            setNumber((value).toString())
            setOperator("-")
            setValue(0);
            return;
        }
        if(content === "÷"){
            setNumber((value).toString())
            setOperator("÷")
            setValue(0);
            return;
        }
        if(content === "x"){
            setNumber((value).toString())
            setOperator("x")
            setValue(0);
            return;
        } 

          if(content === "="){
            if(operator === "+"){
                let result= Number(number) + Number(value)
                setValue(result)
                return;
            }else if(operator === "-"){
                let result= Number(number) - Number(value)
                setValue(result)
                return;
            }
            else if(operator === "x"){
                let result= Number(number) * Number(value)
                setValue(result)
                return;
            }
             else if(operator === "÷"){
                let result= Number(number) / Number(value)
                setValue(result)
                return;
            }

            /* if(value[value.length -1] === "."){

            } */

            
            
        }
        
        
        setValue((numbers + content));    
}
 
    const arrayButton = ["AC", "±", "%", "÷", "7", "8","9", "x", "4", "5", "6", "-",
     "1","2", "3", "+", "0", ".", "="];

   return (
    <div className='calculator'>
    <div className="result">{value}</div>
    <div className='CalculatorApp'>
    {
        arrayButton.map((item, index)=>{
            return <Buttons key={"buttonsCalculator" + index} OnPressClick = {handlePress} content = {item} />
        })
    }
        
    </div>
    </div>
  )
}
