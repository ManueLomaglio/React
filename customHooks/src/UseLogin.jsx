import { useState } from "react";

function UseLogin(onLogin){
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
return{
    formdata:formData,
  onlogin:handleLogin,
  onChange:handleChange,
  onReset:handleReset
}
}export default UseLogin;