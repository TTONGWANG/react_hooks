import React, {useState, useEffect } from 'react';

function Example3 (){

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`)
    })
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick = {() => {setCount(count + 1)}}>click</button>
        </div>
    )
}

export default Example3;


// import React,{Component} from 'react';

// class Example3 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//       }
//   }

//   handleClick ()  {
//     this.setState({
//       count: this.state.count + 1
//     })
   
//     // this.setState((state) =>({
//     //   count: state.count + 1
//     // }))
//   }

//   componentDidMount(){
//       console.log(`componentDidMount => you click ${this.state.count} times`)
//   }

//   componentDidUpdate(){
//     console.log(`componentDidUpdate => you click ${this.state.count} times`)
//   }

//   render() { 
//     return (  
//       <div>
//         <p>you click {this.state.count} times</p>
//         <button onClick = {this.handleClick.bind(this)}>click</button>
//       </div>
//     );
//   }
// }

// export default Example3;