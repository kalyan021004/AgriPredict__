import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/chat">AI Chatbot</Link>
      <Link to="/crop">Crop Recommendation</Link>
      <Link to="/disease">Disease Detection</Link>
      <Link to="/market">Market Prices</Link>
      <Link to="/weather">Weather Insights</Link>
    </nav>
  );
}
