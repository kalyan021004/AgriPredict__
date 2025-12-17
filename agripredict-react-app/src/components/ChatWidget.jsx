import { useState, useContext } from "react";
import { chatAPI } from "../api/genaiApi";
import { AuthContext } from "../context/AuthContext";
import { startListening } from "../utils/voice";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([{ role: 'ai', text: "Hi! Ask me anything about farming." }]);
  const [isListening, setIsListening] = useState(false);
  const { token } = useContext(AuthContext);

  async function send() {
    if (!token) return alert("Please login to chat");
    if (!msg.trim()) return;

    const newMessages = [...messages, { role: 'user', text: msg }];
    setMessages(newMessages);
    setMsg("");

    const loadingMsg = { role: 'ai', text: "..." };
    setMessages([...newMessages, loadingMsg]);

    try {
      const res = await chatAPI(msg, token);
      setMessages([...newMessages, { role: 'ai', text: res.answer }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'ai', text: "Error fetching response." }]);
    }
  }

  const handleVoice = () => {
    if (isListening) return;
    setIsListening(true);
    startListening(
      (text) => {
        setMsg(text);
        setIsListening(false);
      },
      (error) => {
        console.error("Voice error", error);
        setIsListening(false);
      }
    );
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {/* Chat Window */}
      {isOpen && (
        <div className="card" style={{ 
            width: '300px', 
            height: '400px', 
            marginBottom: '10px', 
            display: 'flex', 
            flexDirection: 'column',
            padding: 0,
            overflow: 'hidden'
        }}>
          <div style={{ background: '#2e7d32', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>🌱 AgriBot</span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', color: 'white' }}>✕</button>
          </div>
          
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto', background: '#f1f8e9' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ 
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                background: m.role === 'user' ? '#c8e6c9' : 'white',
                padding: '8px',
                borderRadius: '5px',
                margin: '5px 0',
                maxWidth: '80%',
                marginLeft: m.role === 'user' ? 'auto' : '0'
              }}>
                {m.text}
              </div>
            ))}
          </div>

          <div style={{ padding: '10px', borderTop: '1px solid #ddd', display: 'flex', gap: '5px' }}>
            <button onClick={handleVoice} style={{ background: isListening ? 'red' : '#ff9800', color: 'white', padding: '5px 10px' }}>🎤</button>
            <input 
              value={msg} 
              onChange={(e) => setMsg(e.target.value)} 
              placeholder="Ask..." 
              style={{ margin: 0, flex: 1 }}
              onKeyPress={(e) => e.key === 'Enter' && send()}
            />
            <button onClick={send} style={{ background: '#2e7d32', color: 'white', padding: '5px 10px' }}>➤</button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: '#2e7d32', 
            color: 'white',
            fontSize: '24px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
          }}
        >
          💬
        </button>
      )}
    </div>
  );
}