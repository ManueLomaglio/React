import React from "react";
import Counter from "./Counter";
import Clicker from "./Clicker";
import Clock from "./clock";

export default function App() {
  return (
    <div>
      <h1>HELLO!</h1>
      <hr />
      <Counter initialValue={0} increment={1} />
      {/* <Clicker/> */}
      <Clock/>
    </div>
  );
}
