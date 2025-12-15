import { useState } from "react";
import { cropAPI } from "../api/genaiApi";

export default function Crop() {
  const [form, setForm] = useState({});
  const [out, setOut] = useState(null);

  async function submit() {
    setOut(await cropAPI(form));
  }

  return (
    <div className="page">
      <h2>Crop Recommendation</h2>

      <input placeholder="Soil type"
        onChange={e => setForm({ ...form, soil: e.target.value })} />

      <input placeholder="Rainfall"
        onChange={e => setForm({ ...form, rainfall: +e.target.value })} />

      <input placeholder="Temperature"
        onChange={e => setForm({ ...form, temperature: +e.target.value })} />

      <button onClick={submit}>Predict</button>

      <pre>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}
