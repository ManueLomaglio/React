import Age from "./Age";
import Message from "./Message";

 function Welcome({ name, age }) {
  return (
    <main>
      <p> Welcome, {name}!</p>
      {age > 18 && <Age age={age}/>}
      {age && <Age age={age}/>}
      {(age > 18 && age < 65) && <Age age={age} />}
      {(age > 18 && name==="John") && <Age age={age}/>}
      {/* {age > 18 ? <Age age={age}/> : <Message/>} */}
      {age < 18 && <Message name={name}/>}
      
    </main>
  );
}
export default Welcome;