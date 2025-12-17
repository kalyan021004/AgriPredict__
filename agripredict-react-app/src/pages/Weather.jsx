export default function Weather() {
  return (
    <div className="page">
      <div className="container">
        <h2>🌦️ Weather Insights</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Current Status Card */}
          <div className="card" style={{ borderLeft: '5px solid #2e7d32' }}>
            <h3 style={{ margin: 0 }}>Today's Forecast</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '10px 0' }}>28°C</div>
            <p style={{ color: '#555' }}>Partly Cloudy • Humidity: 65%</p>
          </div>

          {/* Advisory Card */}
          <div className="card" style={{ borderLeft: '5px solid #ff9800' }}>
            <h3 style={{ margin: 0, color: '#e65100' }}>⚠️ Farming Advisory</h3>
            <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>
              Rain is expected in the next <strong>24 hours</strong>.
            </p>
            <div style={{ background: '#fff3e0', padding: '10px', marginTop: '10px', borderRadius: '4px' }}>
              <strong>Action:</strong> Please delay irrigation and cover harvested crops.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}