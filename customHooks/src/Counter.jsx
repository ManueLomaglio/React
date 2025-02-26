
import UseCounter from "./UseCounter";
//creaiamo il custom hook
//usiamo la sintassi use per identificarlo e impostiamo un valore default


function Counter( {initialValue=0}) {
  const { counter, onIncrement, onDecrement, onReset } =
    UseCounter(initialValue );

  return (
    <div>
      <p>Ho contato fino a {counter}</p>
      <button onClick={onIncrement}>incrementa</button>
      <button onClick={onDecrement}>dimunisci</button>
      <button onClick={onReset}>azzera</button>
    </div>
  );
}
//in questo modo il component counter non sa nulla della parte logica
//riceve elementi di un oggetto e cerca di utilizzarli o rappresentarli
export default Counter;
