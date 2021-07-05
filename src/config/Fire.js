import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA9HLx8gdEA0A6dyH82bPhOfQQiOhk44yQ",
  authDomain: "loginform-eab97.firebaseapp.com",
  projectId: "loginform-eab97",
  storageBucket: "loginform-eab97.appspot.com",
  messagingSenderId: "66209815024",
  appId: "1:66209815024:web:13ecc6ca9e14c8cc722535",
};

const fire = firebase.initializeApp(config);
export default fire;
