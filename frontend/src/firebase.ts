// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const db = getDatabase(app);

// Function to send a message to Realtime Database
export const sendMessageToDatabase = async (username: string, text: string) => {
  if (!text.trim()) return;

  try {
    const messagesRef = ref(db, "messages"); // Reference to "messages" node
    const newMessageRef = push(messagesRef); // Create a new child key
    await set(newMessageRef, {
      user: username,
      text,
      timestamp: Date.now(), // Use Date.now() for timestamp
    });

    console.log("✅ Message sent successfully!");
  } catch (error) {
    console.error("❌ Error sending message:", error);
  }
};

// Function to subscribe to messages in Realtime Database
export const subscribeToMessages = (callback: (messages: any[]) => void) => {
  const messagesRef = ref(db, "messages");
  let messagesArray;

  onValue(messagesRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      messagesArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      console.log("📩 Messages received from Realtime Database:", messagesArray);
      callback(messagesArray);
    } else {
      console.log("ℹ No messages found in Realtime Database.");
      callback([]);
    }
  }, (error) => {
    console.error("❌ Error receiving messages:", error);
  });

  return messagesArray
};