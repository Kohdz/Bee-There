import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwMpzVWNRHTeyMwmkjnB0kWrxzaQSywlg',
  authDomain: 'bee-thair.firebaseapp.com',
  databaseURL: 'https://bee-thair.firebaseio.com',
  projectId: 'bee-thair',
  storageBucket: 'bee-thair.appspot.com',
  messagingSenderId: '484196596273',
  appId: '1:484196596273:web:0e720afecf74dfe797f310'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

export default firebase;
