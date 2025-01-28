from fastapi import FastAPI, HTTPException, Depends, Header
import firebase_admin
from firebase_admin import credentials, auth, db
from pydantic import BaseModel
from typing import List, Optional
import time

# 🔥 Initialize Firebase Admin SDK
cred = credentials.Certificate("firebase_admin_key.json")  # Firebase Admin SDK JSON
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://chat-app-61711-default-rtdb.firebaseio.com'
})

app = FastAPI()

# ✅ User Model
class User(BaseModel):
    uid: str
    email: str
    display_name: str

# ✅ Message Model
class Message(BaseModel):
    user: str
    text: str
    timestamp: float = time.time()

# ✅ Verify Firebase ID Token & Return User Info
@app.post("/login/")
def login(id_token: str):
    try:
        decoded_token = auth.verify_id_token(id_token)
        user = User(
            uid=decoded_token["uid"],
            email=decoded_token["email"],
            display_name=decoded_token.get("name", "Anonymous"),
        )
        return {"status": "success", "user": user.dict()}
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

# ✅ Dependency to Check User Authentication
def verify_token(authorization: Optional[str] = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing token")
    try:
        token = authorization.split(" ")[1]  # Extract Bearer token
        decoded_token = auth.verify_id_token(token)
        return User(
            uid=decoded_token["uid"],
            email=decoded_token["email"],
            display_name=decoded_token.get("name", "Anonymous"),
        )
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

# ✅ Secure Endpoint to Send Messages (Authenticated Users Only)
@app.post("/send-message/")
def send_message(msg: Message, user: User = Depends(verify_token)):
    ref = db.reference("messages")
    new_msg_ref = ref.push()
    new_msg_ref.set({
        "user": user.display_name,  # Use Firebase authenticated name
        "text": msg.text,
        "timestamp": msg.timestamp
    })
    return {"status": "success", "message_id": new_msg_ref.key}

# ✅ Secure Endpoint to Retrieve Messages (Authenticated Users Only)
@app.get("/get-messages/", response_model=List[Message])
def get_messages(user: User = Depends(verify_token)):
    ref = db.reference("messages")
    messages = ref.get()

    if messages:
        return [{"user": msg["user"], "text": msg["text"], "timestamp": msg["timestamp"]} for msg in messages.values()]
    return []
