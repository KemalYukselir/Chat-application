import { useState } from "react";

interface Message {
  id: number;
  text: string;
  user: string;
}

interface ChatProps {
  username: string;
  onLogout: () => void;
}

export default function Chat({ username, onLogout }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! 👋", user: "Alice" },
    { id: 2, text: "Hey there! 😊", user: "Bob" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: messages.length + 1, text: newMessage, user: username }]);
    setNewMessage("");
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
