# **AgriPredict – CHAIN X**
### Smart India Hackathon 2025  
### **Problem Statement ID: SIH25030**  
### **AI-Based Crop Recommendation for Farmers**  
**Theme:** Agriculture, FoodTech & Rural Development  
**Category:** Software  
**Team Name:** **CHAIN X**

---

## 🚀 Project Overview

**AgriPredict** is an AI-driven decision support system that provides **personalized, hyper-local crop recommendations** to Indian farmers using:

- Real-time **NASA SMAP soil moisture & temperature**
- **Live weather forecast** (OpenWeatherMap One Call 3.0)
- Soil parameters (**NPK**, **pH**)  
- **Market trends**
- **Plant disease detection using images**
- **Voice-enabled AI chatbot**

✔ **No manual soil testing required**  
✔ Works on any **smartphone**  
✔ Designed for **low-connectivity villages (Offline-first PWA)**

---

## ✅ Key Features (All Working)

| Feature | Status | Technology / Data Source |
|--------|--------|---------------------------|
| Real-time Satellite Soil Analysis | ✔️ | NASA SMAP L4 (9 km resolution, 3-hour interval) |
| Live Weather Forecast | ✔️ | OpenWeatherMap One Call API 3.0 |
| AI Crop Recommendation Engine | ✔️ | Rule-based ML + NASA soil + Weather data |
| Plant Disease Detection | ✔️ | Image Upload → Diagnosis + Treatment |
| Market Price Trends | ✔️ | Dynamic chart (mock + real API ready) |
| AI Chatbot Assistant | ✔️ | Voice + Text |
| Offline Functionality | ✔️ | PWA + IndexedDB |
| Responsive Web App | ✔️ | React + Vite |

---

## 🌟 Unique Value Propositions (UVP)

- **Satellite-based soil analysis** – No manual lab tests required  
- **Hyper-local predictions** using NASA + weather + soil parameters  
- **Voice-first interface** for low literacy farmers  
- **Offline mode** for rural regions  
- **Professional English UI** for SIH jury presentation  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js + Vite + PWA |
| **Backend** | Node.js + Express |
| **APIs** | NASA SMAP, OpenWeatherMap One Call 3.0 |
| **State Management** | React Context API |
| **Styling** | Vanilla CSS |
| **Deployment** | Static Frontend + Node Backend |

---

## 📁 Folder Structure

```
AgriPredict/
├── backend                     # Node.js + Express server
│   ├── server.js
│   ├── package.json
│   └── .env                    # Your API keys
│
├── frontend                    # React + Vite (PWA)
│   ├── src
│   │   ├── pages               # All feature pages
│   │   ├── services            # API calls
│   │   ├── context             # Global state
│   │   ├── utils               # Helper functions
│   │   └── App.jsx, main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md                
```

---

## 🧩 How to Run the Project

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/your-username/AgriPredict-CHAINX.git
cd AgriPredict-CHAINX
```

---

## **2️⃣ Get API Keys**

| Service | Link | Free Tier |
|---------|------|----------|
| **OpenWeatherMap** | https://openweathermap.org/api | ✔️ Yes |
| **NASA Earthdata Token** | https://urs.earthdata.nasa.gov → Profile → Tokens | ✔️ Yes |

---

## **3️⃣ Setup Backend**

```bash
cd backend
npm install
```

Create `.env`:

```bash
cp .env.example .env
```

Add:

```
OPENWEATHER_API_KEY=your_openweather_key
NASA_EARTHDATA_TOKEN=your_nasa_token
```

Start backend:

```bash
npm run dev
# Running on http://localhost:5000
```

---

## **4️⃣ Setup Frontend**

```bash
cd frontend
npm install
npm run dev
```

Open browser:  
👉 http://localhost:5173/

---

# 🎥 Demo Flow (For SIH Jury)

### **1. Crop Recommendation**
- Input sample:  
  `90, 42, 43 | pH: 6.5 | Weather: 26°C, 82% humidity`
- Output: **Rice Recommendation** (with NASA soil moisture + confidence)

### **2. Weather Insights**
- Allow location → Shows hyper-local farming advice

### **3. Disease Detection**
- Upload a leaf image → Instant disease diagnosis + treatment

### **4. AI Chatbot**
- Supports **Voice + Text**  
- Answers real farming queries

### **5. Offline Mode**
- Turn off internet → App still works (PWA cached)

---

## 📸 Recommended Screenshots for Submission

- Home Page  
- Crop Recommendation result (with NASA soil %)  
- Weather Forecast Page  
- Disease Detection Result  
- Chatbot Screen  
- Offline Mode working  

---

# 🏆 Team CHAIN X – Smart India Hackathon 2025

Built in **48 hours** with passion for helping Indian farmers.

**"From Satellite to Sowing – One Click, Better Harvest"**

---

## 📞 Support & Contact

**WhatsApp:** +91-XXXXXXXXXX  
**Email:** chainx.sih2025@gmail.com  

---

## 🎯 Problem Statement: SIH25030  
### December 2025
