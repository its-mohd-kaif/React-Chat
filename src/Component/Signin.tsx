import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import "./Home.css";

function Signin() {
  const signinHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // Pass Privider in auth
    auth.signInWithPopup(provider);
  };
  return (
    <center>
      <div className="signinContainer">
        <h1>Sign in for chat</h1>
        <br></br>
        <div className="d-grid gap-2">
          <button
            onClick={signinHandler}
            className="btn btn-primary btn-dark"
            type="button"
          >
            Signin
          </button>
        </div>
      </div>
    </center>
  );
}

export default Signin;
