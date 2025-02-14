import React from "react";
import AlertButton from "./AlertButton";

export default function App() {
 
  function HandleOnClick(){
    const now= new Date()
    alert(`the time tight now is: ${now.toLocaleTimeString()}`)
}

  return (
    <div>
      <h1>HELLO!
      </h1>
      <hr />
      <AlertButton eventHandler={HandleOnClick}/>
    </div>
  );
}
