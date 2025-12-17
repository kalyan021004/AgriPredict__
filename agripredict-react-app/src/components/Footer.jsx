import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1b5e20', color: 'white', padding: '2rem 0', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3>AgriPredict</h3>
          <p>Empowering farmers with AI-driven decisions.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/" style={{ color: '#a5d6a7', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/crop" style={{ color: '#a5d6a7', textDecoration: 'none' }}>Crop Recommendation</a></li>
            <li><a href="/disease" style={{ color: '#a5d6a7', textDecoration: 'none' }}>Disease Detection</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Team CHAIN X</p>
          <p>SIH 2025 - ID: SIH25030</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #2e7d32', paddingTop: '10px' }}>
        <small>&copy; {new Date().getFullYear()} AgriPredict. All rights reserved.</small>
      </div>
    </footer>
  );
}