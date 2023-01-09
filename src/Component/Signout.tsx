import React from "react";
import { auth } from "../firebase";

function Signout() {
  // Signout Component
  return (
    <div>
      <button
        onClick={() => auth.signOut()}
        type="button"
        className="btn btn-outline-danger"
      >
        SignOut
      </button>
    </div>
  );
}

export default Signout;
