import { useState, useEffect } from "react";
import { sendMessageToBackend, getMessagesFromBackend } from "../api";

interface Message {
  user: string;
  text: string;
  timestamp: number;
}

interface ChatProps {
  username: string;
  onLogout: () => void;
}

export default function Chat({ username, onLogout }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // ✅ Fetch messages from FastAPI
  useEffect(() => {
    async function fetchMessages() {
      const data = await getMessagesFromBackend();
      setMessages(data);
    }
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    await sendMessageToBackend(username, newMessage);
    setNewMessage(""); // Clear input after sending
    const updatedMessages = await getMessagesFromBackend(); // Refresh messages
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Chat App</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.user}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
