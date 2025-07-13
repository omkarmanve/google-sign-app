import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

function GoogleSignInButton({ setUser }) {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in", error);
    }
  };

  return <button onClick={handleLogin}>Sign in with Google</button>;
}

export default GoogleSignInButton;
