import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function Signin() {
  const signinHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      <button onClick={signinHandler} type="button" className="btn btn-primary">
        Sign in with google
      </button>
    </div>
  );
}

export default Signin;
