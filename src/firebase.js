import firebase from 'firebase/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "yt-clone-420",
  storageBucket: "yt-clone-420.appspot.com",
  messagingSenderId: process.env.MSG_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: "G-HC2VR8KXYY"
};

firebase.initializeApp(firebaseConfig)