import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext();

function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };

  initializeApp(firebaseConfig);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [loggedIn]);

  useEffect(() => {
    if (error) {
      setTimeout(function () {
        setError("");
      }, 10000);
    }
  });

  return (
    <authContext.Provider
      value={{
        email,
        password,
        error,
        loggedIn,
        setEmail,
        setPassword,
        setError,
        setLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
