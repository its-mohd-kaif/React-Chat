import React from "react";
import { auth } from "../firebase";

function Signout() {
  return (
    <div>
      <button
        onClick={() => auth.signOut()}
        type="button"
        className="btn btn-primary"
      >
        SignOut
      </button>
    </div>
  );
}

export default Signout;
