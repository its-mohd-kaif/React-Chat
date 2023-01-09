import Home from "./Component/Home";
import Signin from "./Component/Signin";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div>{user ? <Home /> : <Signin />}</div>;
}

export default App;
