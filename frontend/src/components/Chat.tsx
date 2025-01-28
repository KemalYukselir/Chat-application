import { useState, useEffect } from "react";
import { db, sendMessageToDatabase, subscribeToMessages } from "../firebase";

interface Message {
  id: string;
  text: string;
  user: string;
}

interface ChatProps {
  username: string;
  onLogout: () => void;
}

export default function Chat({ username, onLogout }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // Fetch messages in real-time
  useEffect(() => {
    const subscribe = subscribeToMessages(setMessages);
    return () => subscribe;
  }, []);

  const sendMessage = async () => {
    await sendMessageToDatabase(username, newMessage);
    setNewMessage(""); // Clear input after sending
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Chat App</h1>
        <button onClick={onLogout}>Logout</button>
      </header>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
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
