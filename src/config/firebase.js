import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAodm23DmDCuzMKjy55CmLe5K7ZlzrSr80",
  authDomain: "controle-financeiro-128b3.firebaseapp.com",
  projectId: "controle-financeiro-128b3",
  storageBucket: "controle-financeiro-128b3.appspot.com",
  messagingSenderId: "90647125246",
  appId: "1:90647125246:web:6ce778b51ca408c3cdd9af"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth, db}