import { useState } from "react";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    onLogin(formData);
  };

  const handleReset = () => {
    setFormData({ username: "", password: "", remember: false });
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember Me
        </label>
      </div>
      <button type="submit" disabled={!formData.username || !formData.password}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
