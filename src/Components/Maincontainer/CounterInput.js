import {useState} from 'react';
import InputComponent from '../Maincontainer/InputComponent';
export default function CounterInput({min,max, value, onChange}){

    const handleIncrement = ()=>{
        if(value < 4){
            onChange(value+1)
        }
    }
    const handleDecrement = ()=>{
        if(value > 1){
            onChange(value-1)
        }
    }
    return(
        <>
            <div className="quanitity-input-div d-flex align-items-center justify-content-center">
                 <button className="counter" onClick={handleDecrement}>-</button>                        
                 <InputComponent min={min} max={max} value={value} onChange={onChange}/>
                 <button className="counter" onClick={handleIncrement}>+</button>
            </div>
        </>
    )
}