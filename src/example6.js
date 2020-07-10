import React, { useReducer } from 'react';

function Example6(){

    const [ count, dispatch ] = useReducer((state, action) =>{
        switch(action){
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state
        }
    },0)
    return (
        <div>
            <div>the number is {count}</div>
            <button onClick = {() => dispatch('add')}>increase</button>
            <button onClick = {() => dispatch('sub')}>decrease</button>
        </div>
    )
}

export default Example6;