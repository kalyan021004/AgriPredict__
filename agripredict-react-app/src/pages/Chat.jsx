import { useState } from "react";
import { chatAPI } from "../api/genaiApi";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  async function send() {
    const res = await chatAPI(msg);
    setReply(res.answer);
  }

  return (
    <div className="page">
      <h2>AI Chatbot</h2>
      <input
        placeholder="Ask a farming question"
        value={msg}
        onChange={e => setMsg(e.target.value)}
      />
      <button onClick={send}>Send</button>
      <pre>{reply}</pre>
    </div>
  );
}
