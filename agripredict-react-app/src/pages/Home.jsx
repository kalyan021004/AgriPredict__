import React from 'react';
import { Link } from 'react-router-dom';
import ChatWidget from '../components/ChatWidget';

export default function Home() {
  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#2e7d32', /* Solid color fallback or flat design */
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', color: 'white' }}>AgriPredict</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px', opacity: 0.9 }}>
          AI-driven decision support system for personalized, hyper-local crop recommendations.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/crop" style={{ 
            backgroundColor: 'white', 
            color: '#2e7d32', 
            padding: '12px 25px', 
            textDecoration: 'none', 
            borderRadius: '4px', 
            fontWeight: 'bold' 
          }}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container" style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', border: 'none' }}>Key Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌾</div>
            <h3 style={{ fontSize: '1.2rem' }}>Smart Crop Recs</h3>
            <p style={{ color: '#666' }}>Hybrid engine using NPK values and NASA SMAP data.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌿</div>
            <h3 style={{ fontSize: '1.2rem' }}>Disease Detection</h3>
            <p style={{ color: '#666' }}>Upload a photo of your crop leaf for instant diagnosis.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤖</div>
            <h3 style={{ fontSize: '1.2rem' }}>AI Chatbot</h3>
            <p style={{ color: '#666' }}>Voice-enabled GenAI assistant for farming queries.</p>
          </div>

          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌦️</div>
            <h3 style={{ fontSize: '1.2rem' }}>Weather & Market</h3>
            <p style={{ color: '#666' }}>Live forecasts and market price trends.</p>
          </div>

        </div>
      </section>

      <ChatWidget />
    </div>
  );
}