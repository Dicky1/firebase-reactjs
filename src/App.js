import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDkGAgIKRU4g4HzrSe5vmeJ8Y37IaW3ujI",
  authDomain: "dicky-75a0b.firebaseapp.com",
  databaseURL: "https://dicky-75a0b.firebaseio.com",
  projectId: "dicky-75a0b",
  storageBucket: "dicky-75a0b.appspot.com",
  messagingSenderId: "803499473374"
};
firebase.initializeApp(config);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};


class App extends Component {

  state = {
    isLogin: false
  }
  
  render() {
    if(this.state.isLogin){
      return (
        <div>
          <h1>Kamu sudah login</h1>
        </div>
      )
    }

    return (
      <div>
        <h1>Kamu belum login</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default App;
