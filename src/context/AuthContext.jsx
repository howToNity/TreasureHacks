import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ uid: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser({ ...user, uid });
      } else {
        setUser({ ...user, uid: null });
      }

      if (localStorage.getItem("user") != undefined) {
        setUser({ ...user, ...JSON.parse(localStorage.getItem("user")) })
      }
    });

    window.onstorage = (e) => {
      if (localStorage.getItem("user") != undefined) {
        setUser({ ...user, ...JSON.parse(localStorage.getItem("user")) })
      }
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
