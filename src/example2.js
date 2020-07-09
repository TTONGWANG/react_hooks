import React, {useState} from 'react';
function Example2 (){

    //useState不能在if...else...这样的条件语句中进行调用，必须要按照相同的顺序进行渲染，就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
    const [ age, setAge ] = useState(18);
    const [ sex, setSex ] = useState('male');
    const [ work, setWork ] = useState('frontend')
    return (
        <div>
            <p>age: {age}</p>
            <p>sex: {sex}</p>
            <p>job: {work}</p>
        </div>
    )
}



export default Example2;