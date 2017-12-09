import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDhkDERij13E1i2XucaOIinP7Y7nB6rhzU',
    authDomain: 'alfalah-ba2fa.firebaseapp.com',
    databaseURL: 'https://alfalah-ba2fa.firebaseio.com',
    projectId: 'alfalah-ba2fa',
    storageBucket: 'gs://alfalah-ba2fa.appspot.com/',
    messagingSenderId: '848451340159'
  };
firebase.initializeApp(config);

export default firebase;
