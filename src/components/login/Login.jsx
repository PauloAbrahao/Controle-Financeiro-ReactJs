import React from "react";

import firebase from "firebase/compat/app";
import { auth } from "../../config/firebase.js";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
          flexDirection: "column",
        }}
        >
        <h1 style={{
          fontFamily: "Arial",
          fontSize: "3rem",
          marginTop: '-5rem'
        }}>
          Controle Financeiro
        </h1>

        <button
          style={{
            padding: "30px",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: '#6F6AF8',
            color: '#fff',
            borderRadius: '10px',
            borderColor: 'transparent',
            marginTop: '5rem'
          }}
          onClick={signInWithGoogle}
          >
          Entre com o Google
        </button>
      </div>
    </>
  );
};

export default Login;
