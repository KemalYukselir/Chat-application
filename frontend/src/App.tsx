import { useState } from 'react';
import './App.css'
import './styles/Login.css';
import './styles/Chat.css';
import Chat from './components/Chat'
import Login from './components/login'

export default function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <>
      {user ? (
        <Chat username={user} onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={(username) => setUser(username)} />
      )}
    </>
  );
}

