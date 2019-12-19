import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCR6pOS4xwVWFN6t5AC5GHX5ouSHv4ltec",
  authDomain: "insta-eddb9.firebaseapp.com",
  databaseURL: "https://insta-eddb9.firebaseio.com",
  projectId: "insta-eddb9",
  storageBucket: "insta-eddb9.appspot.com",
  messagingSenderId: "283216309030",
  appId: "1:283216309030:web:728c849bdaef47d3e4efe7"
});

const db = firebaseApp.firestore();

export { db };

/**
 * {
 * "access_token": "IGQVJWUk84ZA0tZAaUk2N19jcXUxci1HWVFrMVUwTzBLamNuTjJaeVBoSzM0WDA4MngzV2gzQmdaeGVnQWF6TFFoUDFleS1ndU5ZAVUpOLU41cmJZAbzRiS2wzeVVWcUZAoUEY1Sm9lYnlmNEsxd1h1YmtlQW1GX0YwazdvSEM0",
 *  "user_id": 17841408837233987
 * }
 */
