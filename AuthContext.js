import React, { createContext, useContext, useState, useEffect } from "react";
import { Auth } from "../components/Firebase";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

export const AuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
 
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const Logout = () => {
    return signOut(Auth);
  };

  const GoogleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(Auth, googleAuthProvider);
  };

  const ForgotPassword = (email) => {
    return sendPasswordResetEmail(Auth, email, {
      url: "http://localhost:3000/signin",
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ForgotPassword,
        Logout,
        SignIn,
        user,
        SignUp,
        setUser,
        GoogleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);

export default UserAuthContextProvider;
