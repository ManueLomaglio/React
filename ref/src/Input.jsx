import { useState } from "react";
import { useEffect, useRef } from "react";

function Input() {
  const reference = useRef(null);
 
  console.log(reference);
  useEffect(() => {
    reference.current?.focus();//optional change operator. esegue il codice dopo il ? solo se il valoreè !==null or undefiend
  }, []);
  
const mountedRef=useRef(false);


  function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.namedItem("username").value;
    console.log(username);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <input name="username" ref={reference} type="text" />
      </label>

      <button type="submit">cliccami</button>
    </form>
  );
}
export default Input;
