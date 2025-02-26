import { useState } from "react";
import UseLogin from "./UseLogin";





function Login({ onLogin }) {
 const {formdata,onlogin,onChange,onReset} = UseLogin(onLogin)
  
  return (
    <form onSubmit={onlogin}>
      <div>
        <input
          type="text"
          name="username"
          value={formdata.username}
          onChange={onChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={onChange}
          placeholder="Password"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="remember"
            checked={formdata.remember}
            onChange={onChange}
          />
          Remember Me
        </label>
      </div>
      <button type="submit" disabled={!formdata.username || !formdata.password}>
        Login
      </button>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}

export default Login;
