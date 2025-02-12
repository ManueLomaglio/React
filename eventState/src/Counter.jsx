import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

// function Counter(){
//     const[counter,setCounter] = useState(0)

//     function handleIncrement(){
//         setCounter(counter+1)
//     }
//     function handleDecrement(){
//         setCounter(counter-1)
//     }
//     function handleReset(){
//         setCounter(0)
//     }
// return(
//     <div>
//          <p>Ho contato fino a<CounterDisplay count={counter}/> </p>
//         <button onClick={handleIncrement}>incrementa</button>
//         <button onClick={handleDecrement}>dimunisci</button>
//         <button onClick={handleReset}>azzera</button>
//     </div>

// )

// }
export default Counter;

function Counter({ initialValue, increment }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter(counter + increment);
  }
  useEffect(() => {
    console.log(`Current counter value: ${counter}`);
  }, [counter]);
  
  return (
    <main>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>increment</button>
    </main>
  );
}
