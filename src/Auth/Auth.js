import React, { useEffect, useState } from "react";
import firebaseApp from "../components/firebase/config/firebase.config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
