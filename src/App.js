import { useState } from "react";
import GoogleSignInButton from "./components/GoogleSignInButton";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Google Sign-In Demo</h1>
      {user ? (
        <UserProfile user={user} setUser={setUser} />
      ) : (
        <GoogleSignInButton setUser={setUser} />
      )}
    </div>
  );
}

export default App;
