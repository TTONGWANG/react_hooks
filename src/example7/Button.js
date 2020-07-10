import React, {useContext} from 'react';
import { ColorContext, UPDATE_COLOR } from './color'

function Button() {
    const { dispatch } = useContext(ColorContext)
    return(
        <div>
            <button onClick = {() => {dispatch({type: UPDATE_COLOR, color: "red"})}}>red</button>
            <button onClick = {() => {dispatch({type: UPDATE_COLOR, color: "yellow"})}}>red</button>
        </div>
    )
}

export default Button;