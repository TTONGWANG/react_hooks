import React, {useState} from 'react';
function Example2 (){
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