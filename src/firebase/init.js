  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMsJewMNWP81Jw0E608ZmJ2wdgLISpS4w",
    authDomain: "events-organiser-4f067.firebaseapp.com",
    databaseURL: "https://events-organiser-4f067.firebaseio.com",
    projectId: "events-organiser-4f067",
    storageBucket: "events-organiser-4f067.appspot.com",
    messagingSenderId: "548015014053"
  };
  

const fireBaseApp=  firebase.initializeApp(config);
fireBaseApp.firestore().settings({timestampsInSnapshots:true})
export default fireBaseApp.firestore()