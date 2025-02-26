import GithubUser from "../GithubUser"
import Counter from "./Counter"
import Location from "./Location";
import Login from "./Login"


function App() {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return (<main>
   <Counter/>
   <GithubUser username="mojombo"/>
   <Login onLogin={handleLogin}/>
   <Location/>
   </main>
  )
}

export default App
