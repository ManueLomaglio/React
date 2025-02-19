import { useState } from "react";
import CounterDisplay from "./CounterDisplay";


function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return (
    <div>
     
        <CounterDisplay  count={counter} className="counterDisplay"/>
      
      <button onClick={handleIncrement}>incrementa</button>
      <button onClick={handleDecrement}>dimunisci</button>
      <button onClick={handleReset}>azzera</button>
    </div>
  );
}

export default Counter;
