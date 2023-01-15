import './App.css'
import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signOutUser } from "./config/firebase";
import GettingStarted from './pages/GettingStarted';
import { RouterProvider } from "react-router-dom"
import { router } from "./config/router"

export const AuthContext = createContext();


export default function App() {
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUid(uid)
      } else {
        setUid(null);
      }
    });

    window.addEventListener("storage", () => {
      storedUserData = JSON.parse(localStorage.getItem("user"))
      setUser({ ...user, ...storedUserData })
    })
  }, [uid]);


  return <AuthContext.Provider value={user}>
    <RouterProvider router={router} />
  </AuthContext.Provider>
}

