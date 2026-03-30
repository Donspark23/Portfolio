import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await axios.post("https://portfolio-knr6.onrender.com/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <div>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
