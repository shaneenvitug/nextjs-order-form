import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "order-form-app.firebaseapp.com",
  databaseURL: "https://order-form-app.firebaseio.com",
  projectId: "order-form-app",
  storageBucket: "order-form-app.appspot.com",
  messagingSenderId: "549973103998",
  appId: "1:549973103998:web:5e90a9fb0a26b1f8a14f2f"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();