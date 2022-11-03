import React from "react";

import firebase from "firebase/compat/app";
import { auth } from "../../config/firebase.js";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
          cursor: "pointer",
          backgroundColor: 'teal',
          color: '#fff',
          borderRadius: '10px',
          borderColor: 'transparent',
        }}
        onClick={signInWithGoogle}
      >
        Entre com o Google
      </button>
    </div>
  );
};

export default Login;
