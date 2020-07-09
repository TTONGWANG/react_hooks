import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index(){
    useEffect(() => {
        console.log(`useEffect => Index come`)
        return () =>{   //只要其他有触发就执行
            console.log('Index leave')
        }
    },[]) //[]真正当组件被销毁了时解绑
    return (
        <h2> Index </h2>
        )
}

function List(){
    useEffect(() => {
        console.log(`useEffect => List come`)
    })
    return <h2> List </h2>
}

function Example4 (){
    const [ count, setCount ] = useState(0);
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`)
        return () => {
            console.log('=====================')
        }
    },[count])
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {() => {setCount(count + 1)}}>click</button>
            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path = "/" exact component = {Index}/>
                <Route path = "/list/"  component = {List}/>
            </Router>
        </div>
    )
}

export default Example4;