//This is function base component . Below you can check the class component
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inc=()=>{
    setCount(count +1)
  }
  const dec=()=>{
    setCount(count -1)
  }

  return (
    <>
     <div>
      <p>Counter {count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
     </div>
    </>
  )
}

export default App
//This is class based component which is bit complicated byt here we are doing coz some company might have code base in class component
//Although funtional components are much better

// import React, { Component } from 'react'

// export default class Appclass extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//           count :0
//         }
//     }
//      inc=()=>{
//         this.setState({
//             count: this.state.count+1
//         })
//       }
//        dec=()=>{
//         this.setState({
//             count: this.state.count-1
//         })
//       }
//   render() {
   
//     return (
//         <>
//         <div>
//          <p>Counter {this.state.count}</p>
//          <button onClick={this.inc}>+</button>
//          <button onClick={this.dec}>-</button>
//         </div>
//        </>
//     )
//   }
// }
