import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";




export default function App() {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div>
      <h2>Interactive Welcome</h2>
      <InteractiveWelcome />
      <h2>Login</h2>
      <Login onLogin={handleLogin} />
    </div>
  );
}