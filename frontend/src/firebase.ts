import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNtczdmnPls2ekZTUU840pn8WxA5Dpa-E",
  authDomain: "chat-app-61711.firebaseapp.com",
  databaseURL: "https://chat-app-61711-default-rtdb.firebaseio.com",
  projectId: "chat-app-61711",
  storageBucket: "chat-app-61711.firebasestorage.app",
  messagingSenderId: "355283628819",
  appId: "1:355283628819:web:69d0368beb7217208160e6",
  measurementId: "G-L3STSTJ973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to Sign In with Google
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const token = await result.user.getIdToken(); // Get Firebase ID Token
  return {
    displayName: result.user.displayName,
    email: result.user.email,
    token: token
  };
};

// Function to Sign Out
export const logout = async () => {
  await signOut(auth);
};
