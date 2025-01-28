import { signInWithGoogle } from "../firebase";

interface LoginProps {
  onLogin: (username: string, token: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const handleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      
      // Send the Firebase ID Token to FastAPI for verification
      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: user.token }),
      });

      if (!response.ok) throw new Error("Authentication failed");

      const data = await response.json();
      const { display_name } = data.user;

      // Store authenticated session
      onLogin(display_name, user.token);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <button className="login-button" onClick={handleLogin}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
