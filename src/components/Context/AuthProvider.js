import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const loginEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
}


  const sinInGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  

  useEffect(() => {
    const unsubscribes = onAuthStateChanged(auth, (currentUser) => {
      console.log("user inside state change", currentUser);
      if (currentUser === null) {
        setUser(currentUser);
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unsubscribes();
    };
  }, []);

  const authInfo = {
    user,
    sinInGoogle,
    logOut,
    createUser,
    loginEmailPass,
    loading,
   
    setLoading,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
