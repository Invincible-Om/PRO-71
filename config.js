import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC4kKnm4n5tcEg6wbiil6lvJqMZKlPvGo0",
    authDomain: "c-71-90691.firebaseapp.com",
    projectId: "c-71-90691",
    storageBucket: "c-71-90691.appspot.com",
    messagingSenderId: "201493803878",
    appId: "1:201493803878:web:a83ecacadde7e68c2c0ea7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
