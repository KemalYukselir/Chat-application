import { useState } from 'react';
import './App.css'
import './styles/Login.css';
import Login from './components/login'

function App() {
  const [user, setUser] = useState<string | null>(null);
  return (
    <>
      <div className='app'>
        <Login onLogin={(username) => setUser(username)} />
      </div>
    </>
  )
}

export default App
