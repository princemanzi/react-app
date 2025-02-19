import { useState, useEffect } from 'react';
import './App.css';

// const  App = () => {
//   const name = 'John';
//   const isNameShowing = true;
//   return (
//     <div className="App">
//       <h1>Hello, {isNameShowing ? name : 'someone'}!</h1>
//     </div>
//   );
// }
// const Person = (props) => {
//   return(
//     <>
//     <h1> Name: {props.name}</h1>
//     <h2> Last Name: {props.lastName}</h2>
//     <h2> Age: {props.Age}</h2>
//     </>
//   );
// }

// const App = () => {
//   return (
//     <div className = "App">
//       <Person name = {'John'} lastName = {'Doe'} Age = {'30'}/>
//       <Person name = "Mary" lastName = 'Doe' Age = {'24'}/>
//     </div>
//   );
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);
  return (
    <div className = "App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
