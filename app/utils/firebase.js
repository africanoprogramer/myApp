import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSabus6d4xEovHcrtuHPeTHow44BeQbAE",
  authDomain: "fullerzes-abc43.firebaseapp.com",
  projectId: "fullerzes-abc43",
  storageBucket: "fullerzes-abc43.appspot.com",
  messagingSenderId: "85942179398",
  appId: "1:85942179398:web:3c7cf86d96746cde41dc47",
  measurementId: "G-XM0663J82B",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
