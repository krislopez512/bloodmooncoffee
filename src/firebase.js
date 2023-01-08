// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCEXe79DsA0tZIx9MIaxXPJd8ZGg17a518",
//   authDomain: "bloodmoon-coffee.firebaseapp.com",
//   projectId: "bloodmoon-coffee",
//   storageBucket: "bloodmoon-coffee.appspot.com",
//   messagingSenderId: "707305574836",
//   appId: "1:707305574836:web:beeba9d06d4713abb522e1",
//   measurementId: "G-V4DH63SYHS",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDF0PRL0DH7L3mP_huFzRBQJvNQD-VdULo",

  authDomain: "bloodmoon-coffee-5f379.firebaseapp.com",

  projectId: "bloodmoon-coffee-5f379",

  storageBucket: "bloodmoon-coffee-5f379.appspot.com",

  messagingSenderId: "221289975456",

  appId: "1:221289975456:web:b15d709e7789d3e8c243c5"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
