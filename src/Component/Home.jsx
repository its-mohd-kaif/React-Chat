import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";
import Signout from "./Signout";
function Home() {
  const scroll = useRef();
  const [chat, setChats] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setChats(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  console.log("chat", chat);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  async function sendHandler(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("chats").add({
      text: input,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <center>
      <Signout />
      <div className="msgs">
        {chat.map(({ text, photoURL, uid }) => (
          <div className="chatWindow" key={Math.random() * 1000}>
            <div
              className={`input ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img className="userImg" src={photoURL} alt="" />
              <span className="userMsg">{text}</span>
            </div>
          </div>
        ))}
      </div>
      <div ref={scroll}></div>
      <div className="inputSection">
        <div className="input-group mb-3">
          <input
            type="text"
            value={input}
            onChange={inputHandler}
            className="form-control"
            placeholder="Type your message"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button
            onClick={sendHandler}
            className="input-group-text"
            id="basic-addon2"
          >
            Send
          </button>
        </div>
      </div>
    </center>
  );
}

export default Home;
