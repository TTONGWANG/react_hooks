import React,{useState} from 'react';

function App () {
  const [counter, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick = {() => {setCount(counter + 1)}}>Click me</button>
    </div>
  )
}

 
export default App;

// import React,{Component} from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//       }
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
   
//     // this.setState((state) =>({
//     //   count: state.count + 1
//     // }))
//     console.log(this.state.count)
//   }

//   render() { 
//     return (  
//       <div>
//         <p>click{this.state.count}times</p>
//         <button onClick = {this.handleClick}>click</button>
//       </div>
//     );
//   }
// }
 
// export default App;