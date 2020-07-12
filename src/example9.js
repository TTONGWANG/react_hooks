import React, { useState, useEffect, useRef } from 'react';

function Example9 (){
    const inputE1 = useRef(null);
    const buttonClick = () => {
        inputE1.current.value = "Hello"
        console.log(inputE1.current.value)
    }
    return(
        <>
            <input ref = {inputE1} type = 'text'/>
            <button onClick = {buttonClick}>show words in input</button>
        </>
    )
}

export default Example9;

  
   
