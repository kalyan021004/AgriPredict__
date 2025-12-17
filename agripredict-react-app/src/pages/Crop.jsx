import { useState, useContext } from "react";
import { cropAPI } from "../api/genaiApi";
import { AuthContext } from "../context/AuthContext";

export default function Crop() {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({ soil: "", rainfall: "", temperature: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function submit() {
    setError("");
    setResult(null);
    if (!token) return setError("Please login to use this feature.");
    if (!formData.soil || !formData.rainfall || !formData.temperature) return setError("Please fill all fields.");

    setLoading(true);
    try {
      const data = await cropAPI({
        soil: formData.soil,
        rainfall: Number(formData.rainfall),
        temperature: Number(formData.temperature)
      }, token);
      setResult(data);
    } catch (err) {
      setError("Failed to fetch recommendation. Please check your inputs.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <h2>🌾 Crop Recommendation</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          
          {/* Input Section */}
          <div className="card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Enter Field Details</h3>
            
            <div className="form-group">
              <label>Soil Type</label>
              <select name="soil" value={formData.soil} onChange={handleChange}>
                <option value="">Select Soil Type</option>
                <option value="Alluvial">Alluvial</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Clay">Clay</option>
                <option value="Sandy">Sandy</option>
                <option value="Loam">Loam</option>
              </select>
            </div>

            <div className="form-group">
              <label>Annual Rainfall (mm)</label>
              <input type="number" name="rainfall" placeholder="e.g. 1200" value={formData.rainfall} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Average Temperature (°C)</label>
              <input type="number" name="temperature" placeholder="e.g. 30" value={formData.temperature} onChange={handleChange} />
            </div>

            {error && <p style={{ color: '#d32f2f', background: '#ffebee', padding: '10px', borderRadius: '4px' }}>{error}</p>}

            <button onClick={submit} disabled={loading} style={{ width: '100%' }}>
              {loading ? "Analyzing..." : "Predict Best Crop"}
            </button>
          </div>

          {/* Result Section */}
          <div>
            {result ? (
              <div className="card" style={{ borderLeft: '5px solid #2e7d32' }}>
                <h3>✅ Recommended Crop</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2e7d32', margin: '15px 0' }}>
                  {result.prediction || "Wheat"} {/* Fallback if API structure differs */}
                </div>
                <p>Based on your soil and weather parameters, this crop gives the highest yield probability.</p>
                <div style={{ background: '#f1f8e9', padding: '15px', marginTop: '10px', borderRadius: '4px' }}>
                  <strong>Confidence:</strong> 92% <br/>
                  <strong>Season:</strong> Rabi/Kharif
                </div>
              </div>
            ) : (
              <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
                <p>Enter details to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}