import { useEffect, useState } from "react";
import GithubUser from "./GithubUser";

function Users() {
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    //chiedere perchè non devo passare input come arg

    e.preventDefault();
    if (input.trim()) {
      setUser([...user,input]);
      setInput("");
      console.log(user);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
      <div> {user.map((u)=>(<GithubUser key={u} username={u}/>))}</div>
    </main>
  );
}
export default Users;
//You're passing input as an argument,
// but event handlers in React receive the event object as the first parameter.
//So when handleSubmit is called, input will be the event object,
//  which is not what you intended.
