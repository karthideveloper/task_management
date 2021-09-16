
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import  'firebase/compat/database'


const firebaseConfig = {
  apiKey: "AIzaSyBkQCbfV4W_-6c0_pLuOWsfBpEq1oUxv24",
  authDomain: "todo-39081.firebaseapp.com",
  databaseURL: "https://todo-39081-default-rtdb.firebaseio.com",
  projectId: "todo-39081",
  storageBucket: "todo-39081.appspot.com",
  messagingSenderId: "777985754462",
  appId: "1:777985754462:web:3cfc81132110c30f29bbcf"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var fireDb = firebase.initializeApp(firebaseConfig);

var db=fireDb.database().ref();

// export default db
export default fireDb.database().ref()