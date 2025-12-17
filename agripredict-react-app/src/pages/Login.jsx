import { useState, useContext } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  async function submit() {
    if(!email || !password) return alert("Please fill all fields");
    const res = await loginUser({ email, password });
    if (res.token) login(res.token);
    else alert(res.error || "Login failed");
  }

  return (
    <div className="page">
      <div className="center-box card">
        <h2 style={{ width: '100%', borderBottom: 'none', textAlign: 'center' }}>Welcome Back</h2>
        
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="e.g. farmer@example.com" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <button onClick={submit} style={{ width: '100%' }}>Login</button>
        
        <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
          Don't have an account? <Link to="/register" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}