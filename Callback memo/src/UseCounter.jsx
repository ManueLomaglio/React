import { useCallback, useState } from "react";

function UseCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  const handleIncrement=useCallback(()=> {
    setCounter(counter + 1);
  },[counter]);
  const handleDecrement=useCallback(()=> {
    setCounter(counter - 1);
  },[counter]);
  const handleReset=useCallback(()=> {
    setCounter(0);
  },[]);
  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}export default UseCounter;