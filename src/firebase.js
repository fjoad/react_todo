import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJOjdfY0XkFOJPjre70Ama3r29owYXxVk",
    authDomain: "todo-app-cp-c815d.firebaseapp.com",
    projectId: "todo-app-cp-c815d",
    storageBucket: "todo-app-cp-c815d.appspot.com",
    messagingSenderId: "1086389735015",
    appId: "1:1086389735015:web:0bfe0633bd81b56b674ec2",
    measurementId: "G-G0WJB8T7HS"
});

const db = firebaseApp.firestore();

export default db;