import React, { useEffect, useState } from "react";
import "./Home.css";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";
import Signout from "./Signout";

function Home() {
  // useState that holds user information
  const [chat, setChats] = useState([]);
  useEffect(() => {
    db.collection("chats")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot: any) => {
        // after changes in database state will be updated
        setChats(snapshot.docs.map((doc: any) => doc.data()));
      });
  }, []);
  // State that hold input text value
  const [input, setInput] = useState("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  async function sendHandler() {
    // Check Validation
    if (input === "") {
      alert("Please type something");
    } else {
      const { uid, photoURL } = auth.currentUser as any;
      await db.collection("chats").add({
        text: input,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
    }
  }
  const typeid = auth.currentUser as any;
  return (
    <center>
      <section className="container">
        <div className="navApp">
          <h1 className="column1">SociSnap</h1>
          <div className="column2">
            <Signout />
          </div>
        </div>
        <div className="msgs">
          {/* Display Messages */}
          {chat.map(({ text, photoURL, uid }) => (
            <div className="chatWindow" key={Math.random() * 1000}>
              <div
                className={
                  `input ${uid === typeid.uid ? "sent" : "received"}` as any
                }
              >
                <img className="userImg" src={photoURL} alt="" />
                <span className="userMsg">{text}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Input Field Section */}
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
              className="btn btn-success"
              id="basic-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </center>
  );
}

export default Home;
