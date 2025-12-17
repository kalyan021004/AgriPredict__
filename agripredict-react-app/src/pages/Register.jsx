import { useState } from "react";
import { registerUser } from "../api/authApi";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function submit() {
    if(!form.name || !form.email || !form.password) return alert("Please fill all fields");
    const res = await registerUser(form);
    alert(res.message || res.error);
  }

  return (
    <div className="page">
      <div className="center-box card">
        <h2 style={{ width: '100%', borderBottom: 'none', textAlign: 'center' }}>Create Account</h2>
        
        <div className="form-group">
          <label>Full Name</label>
          <input 
            placeholder="e.g. Ram Kumar"
            onChange={e => setForm({ ...form, name: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email"
            placeholder="e.g. ram@example.com"
            onChange={e => setForm({ ...form, email: e.target.value })} 
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Choose a strong password"
            onChange={e => setForm({ ...form, password: e.target.value })} 
          />
        </div>

        <button onClick={submit} style={{ width: '100%' }}>Register</button>

        <p style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
          Already have an account? <Link to="/login" style={{ color: '#2e7d32', fontWeight: 'bold' }}>Login here</Link>
        </p>
      </div>
    </div>
  );
}