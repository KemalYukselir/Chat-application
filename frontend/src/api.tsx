export const sendMessageToBackend = async (username: string, text: string) => {
    await fetch("http://127.0.0.1:8000/send-message/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: username, text: text }),
    });
  };
  
  export const getMessagesFromBackend = async () => {
    const response = await fetch("http://127.0.0.1:8000/get-messages/");
    return response.json();
  };
  