# **AgriPredict – CHAIN X**

### Smart India Hackathon 2025  
### **Problem Statement ID:** SIH25030  
### **AI-Based Crop Recommendation for Farmers**  
**Theme:** Agriculture, FoodTech & Rural Development  
**Category:** Software  
**Team Name:** **CHAIN X**

---

## 🚀 Project Overview

**AgriPredict** is an AI-driven decision support system that provides **personalized, hyper-local crop recommendations** to Indian farmers. It integrates satellite data, weather forecasts, and machine learning to offer precise farming advice without the need for manual soil testing.

### Key Capabilities
- Real-time **NASA SMAP soil moisture** analysis  
- **Live weather forecast** (OpenWeatherMap)  
- **AI-driven Crop Recommendation** (NPK + pH + Satellite Data)  
- **Plant Disease Detection** via Image Upload  
- **Generative AI Chatbot** for farming queries (Voice + Text)  
- **Market Price Trends** analysis  

---

## ✅ Key Features

| Feature | Technology / Data Source |
|------|---------------------------|
| Satellite Soil Analysis | NASA SMAP L4 Data (9 km resolution) |
| Weather Insights | OpenWeatherMap One Call API 3.0 |
| Crop Recommendation | Hybrid Engine (Rule-based ML + Satellite Data) |
| Disease Diagnosis | Computer Vision (Image Processing) |
| Smart Chatbot | GenAI / LLM Integration (OpenRouter) |
| Market Intelligence | Historical price trends & prediction |
| Secure Authentication | JWT & BCrypt (Node.js Middleware) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-----|------------|
| Frontend | React.js, Vite, PWA, CSS Modules |
| Backend | Node.js, Express.js, MongoDB (Mongoose) |
| ML Models | Node.js Logic, Mock ML Server |
| AI / LLM | OpenRouter API |
| APIs | NASA Earthdata, OpenWeatherMap |

---

## 📁 Project Structure

```bash
AgriPredict/
├── backend/
│   ├── src/
│   │   ├── main.js
│   │   ├── gen_ai/
│   │   └── models/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── agripredict-react-app/
│   ├── src/
│   ├── vite.config.js
│   └── package.json
│
├── ml_models/
│   ├── mock_server.js
│   ├── cropLogic.js
│   └── package.json
│
└── README.md
```

---

## 🧩 How to Run the Project

This project consists of **three services**:
1. ML Models  
2. Backend  
3. Frontend  

---

## 1️⃣ Prerequisites

- Node.js & npm  
- MongoDB Atlas or Local MongoDB  
- OpenRouter API Key  

---

## 2️⃣ Run ML Models (Mock)

```bash
cd AgriPredict/ml_models
npm install
node mock_server.js
```

📍 Runs on **http://localhost:6001**

---

## 3️⃣ Setup & Run Backend

```bash
cd AgriPredict/backend
npm install
```

### 🔐 Environment Variables (`.env`)

Create a `.env` file inside `backend/` and configure as follows:

```env
PORT=5001

# =========================
# OPENROUTER (LLM)
# =========================
OPENROUTER_API_KEY=your_openrouter_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=your_openrouter_model

OPENROUTER_SITE_URL=http://localhost:5173
OPENROUTER_SITE_NAME=your_openrouter_site_name

# =========================
# ML & AUDIO CONFIG
# =========================
USE_MOCK_ML=true
USE_MOCK_AUDIO=true
AUDIO_STORAGE_PATH=./data/audio

# =========================
# DATABASE (MongoDB Atlas)
# =========================
MONGO_URI=your_Mongodb_url

# =========================
# AUTH (JWT)
# =========================
JWT_SECRET=your_JWT_secret_key
JWT_EXPIRES_IN=7d
```

### Start Backend

```bash
npm run dev
```

📍 Backend runs on **http://localhost:5001**

---

## 4️⃣ Setup & Run Frontend

```bash
cd AgriPredict/agripredict-react-app
npm install
npm run dev
```

📍 Frontend runs on **http://localhost:5173**

---

## 🎥 Demo Features

### 🌾 Crop Recommendation
- Fetches user location (Lat/Lon)
- Uses NASA SMAP soil moisture
- Takes NPK input
- Returns AI-based crop suggestion

### 🌿 Disease Detection
- Upload leaf image
- ML mock server analyzes disease
- Treatment recommendation shown

### 🤖 AI Chatbot
- Text + Voice-based farming queries
- Powered by OpenRouter LLM

### 🌦️ Weather
- Real-time location-based weather forecast

---

## 🏁 Conclusion

**AgriPredict – CHAIN X** is a scalable, AI-powered agricultural platform designed for Indian farmers, enabling data-driven decisions using satellite intelligence and generative AI.

---

### 📌 Smart India Hackathon 2025  
**Theme:** Agriculture, FoodTech & Rural Development  
