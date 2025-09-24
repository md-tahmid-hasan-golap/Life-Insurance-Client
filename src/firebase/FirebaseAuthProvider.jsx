import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const FirebaseAuthProvider = () => {
  // set user
  const [user, setUser] = useState(null);
  // set loadding
  const [loading, setLoading] = useState(true);
  // creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign In user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  // signOut

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on Auth Change user
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      console.log(crueentUser);
      setLoading(false);
    });
    return () => {
      unsuscribe();
    };
  }, []);
  // dataInfo
  const dataInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };
  return <AuthContext.Provider value={dataInfo}></AuthContext.Provider>;
};

export default FirebaseAuthProvider;
