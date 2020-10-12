import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCaFSLtIXBCNAblWubEog7nZK1cKY4TlPQ",
    authDomain: "todo-app-6442a.firebaseapp.com",
    databaseURL: "https://todo-app-6442a.firebaseio.com",
    projectId: "todo-app-6442a",
    storageBucket: "todo-app-6442a.appspot.com",
    messagingSenderId: "35406620422",
    appId: "1:35406620422:web:4683a328f6ae929e066087",
    measurementId: "G-955LETRD0T"

});

const db = firebaseApp.firestore();
export default db;