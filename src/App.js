import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App(){
  // const[state,setState] = useState()
  const[count,setCount] = useState(10)

  const Incrementbtn = ()=>{
    if(count < 50)
    setCount(count+1) 
  };
  const Decrementbtn = ()=>{
    if(count > 1)
    setCount(count-1)
  };


 


  return (
    <div className = "App">
       {count} 
      <button onClick ={Incrementbtn}>Increament</button>
      <button onClick = {Decrementbtn}>Decrement</button> 

     
    </div>
 
  );
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
