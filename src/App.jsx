import './App.css'
import { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, signOutUser } from "./config/firebase";
import GettingStarted from './pages/GettingStarted';
import { RouterProvider } from "react-router-dom"
import { router } from "./config/router"

export const AuthContext = createContext();


export default function App() {
  const [user, setUser] = useState({ uid: null });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser({ ...user, uid })
      } else {
        setUser({ ...user, uid: null });
      }
    });

    window.addEventListener("storage", () => {
      storedUserData = JSON.parse(localStorage.getItem("user"))
      setUser({ ...user, ...storedUserData })
    })
  }, [user]);


  return <AuthContext.Provider value={user}>
    <RouterProvider router={router} />
  </AuthContext.Provider>
}

