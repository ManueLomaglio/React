import { useEffect } from "react";
import {  useState} from "react";
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
export default Counter;
