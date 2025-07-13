import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function UserProfile({ user, setUser }) {
  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <img src={user.photoURL} alt="profile" style={{ borderRadius: "50%", height: "80px" }} />
      <p>{user.email}</p>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  );
}

export default UserProfile;
