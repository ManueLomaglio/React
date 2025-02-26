import { useState } from "react";

function UseCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}export default UseCounter;