import * as firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAK6AoKvF8mHFPTetLQ7vFZyoY9aypd1go",
    authDomain: "laboratoria-9450f.firebaseapp.com",
    databaseURL: "https://laboratoria-9450f.firebaseio.com",
    projectId: "laboratoria-9450f",
    storageBucket: "laboratoria-9450f.appspot.com",
    messagingSenderId: "798928922796",
    appId: "1:798928922796:web:603d93273c73d8a0591709"
  });

  export default app