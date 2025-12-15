import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Crop from "./pages/Crop";
import Disease from "./pages/Disease";
import Market from "./pages/Market";
import Weather from "./pages/Weather";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/crop" element={<Crop />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/market" element={<Market />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}
