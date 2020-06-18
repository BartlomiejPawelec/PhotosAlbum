import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4qiBQWDkhqnUUwXsBs6aTDw9QQ-JeG4M",
    authDomain: "photosalbum-67208.firebaseapp.com",
    databaseURL: "https://photosalbum-67208.firebaseio.com",
    projectId: "photosalbum-67208",
    storageBucket: "photosalbum-67208.appspot.com",
    messagingSenderId: "446803755853",
    appId: "1:446803755853:web:83f6f7b5000f08f259ad04",
    measurementId: "G-7YWLV2YF8V"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;