import React, {useState, useMemo} from 'react';

function Example8(){
    const [xiaohong, setXiaohong] = useState('xiaohong is waiting');
    const [zhiling, setZhiling] = useState('zhiling is waiting');

    return(
        <>
            <button onClick = {() =>{setXiaohong(new Date().getTime()+ 'zhiling is coming')}}>xiaohong</button>
            <button onClick = {() =>{setZhiling(new Date().getTime() + 'zhiling is coming')}}>zhiling</button>
            <ChildComponent name = {xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){

    function changeXiaohong(){
        console.log('xiaoohng is coming hahaha')
        return name 
    }

    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
 
    return(
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example8;