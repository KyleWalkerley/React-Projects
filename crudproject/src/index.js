import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDhl0JshDFO6-e6kAH-GIx4vsAOFTALHh0",
  authDomain: "reactloginservers.firebaseapp.com",
  projectId: "reactloginservers",
  storageBucket: "reactloginservers.appspot.com",
  messagingSenderId: "234223541718",
  appId: "1:234223541718:web:af56e7904c5d5981e79877",
  measurementId: "G-DNRL694NEC"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
