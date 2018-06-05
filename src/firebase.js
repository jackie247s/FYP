import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACoL7t5Axg0oI1Ou7HQZIvznqsoSibtTU",
  authDomain: "alfalah-431e5.firebaseapp.com",
  databaseURL: "https://alfalah-431e5.firebaseio.com",
  projectId: "alfalah-431e5",
  storageBucket: "alfalah-431e5.appspot.com",
  messagingSenderId: "266207128252"
  };
firebase.initializeApp(config);

export default firebase;
