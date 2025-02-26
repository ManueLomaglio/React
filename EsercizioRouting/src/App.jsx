import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>TEST APP ROUTING</h1>
      <header>
        <Link to="/">Home</Link> |<Link to="/counter">Counter</Link>|
        <Link to="/users/Dar">GitHub User (Dar)</Link>
      </header>
      <Routes>
        <Route path="/" element={<Welcome name="Manuel" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not found</p>

              <Link to="/">Go home</Link>
            </div>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
