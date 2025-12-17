import { useState } from "react";

export default function Market() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:6001/api/ml/market-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          crop: "Groundnut",
          season: "harvest",
          location: "Nellore"
        })
      });
      const result = await res.json();
      setData(result);
    } catch (e) {
      alert("Failed to fetch prices");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <h2>💰 Market Price Intelligence</h2>
        <p>Get real-time market predictions for your crops.</p>

        <div className="card" style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
             <div style={{ flex: 1 }}>
                <label>Crop</label>
                <input value="Groundnut" disabled />
             </div>
             <div style={{ flex: 1 }}>
                <label>Location</label>
                <input value="Nellore" disabled />
             </div>
             <button onClick={load} disabled={loading}>
                {loading ? "Loading..." : "Check Price"}
             </button>
          </div>
        </div>

        {data && (
          <div className="card">
            <h3>Prediction Results</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ background: '#f1f1f1', textAlign: 'left' }}>
                   <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Parameter</th>
                   <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(data).map(([key, value]) => (
                  <tr key={key}>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee', textTransform: 'capitalize' }}>{key.replace(/_/g, ' ')}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}