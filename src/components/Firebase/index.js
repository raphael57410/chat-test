// on import les fichiers de firebase
import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

export const FbApp = () => {
    
    // configuration avec les clés privée pour la connection a la base de données
  const firebaseConfig = {
    apiKey: "AIzaSyBFGFk8do7yUsMG--_ur2n4YGDN8lvcE8c",
    authDomain: "test-5d45f.firebaseapp.com",
    databaseURL: "https://test-5d45f-default-rtdb.firebaseio.com/",
    projectId: "test-5d45f",
    storageBucket: "test-5d45f.appspot.com",
    messagingSenderId: "429703768983",
    appId: "1:429703768983:web:2e6654be1a6e0a8d8872d2",
    measurementId: "G-LT4SX8MYX1"
  };

  // initialisation et connection a la base de données
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return firebase.firestore();
};

/**
*   function on submit connection
* @param {string} email
* @param {string} password
* @param {function setIsLogged(boolean) {change state from isLogged}}
*
*/
  export const FbConnect = (email,password,isLogged,loader,setMessage) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      isLogged(true);
      loader(false);
      
      // ...
    })
    .catch((error) => {
      if (error) {
        setTimeout(loader(false), 3000);
        setMessage('les informations entrées son incorrect')
        console.log(error);
      }
      // ..
    });
  };

  export const FbAddNewUser = (email,password,isLogged,loader,setMessage,) => {
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      isLogged(true);
      loader(false);
      // ...
    })
    .catch((error) => {
      if (error) {
        setTimeout(loader(false), 3000);
        setMessage('les informations entrées son incorrect')
        console.log(error);
      }
      // ..
    });
  };