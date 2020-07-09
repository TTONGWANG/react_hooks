import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Example3 (){
    const [ count, setCount ] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {() => {setCount(count + 1)}}>click</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

function Counter(){
    let count = useContext(CountContext)
    return (
        <h2>
            {count}
        </h2>
    )
}

export default Example3;
