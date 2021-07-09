import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAXrwKU2yTD3EccNpNg4jbat0mxsS0OW4",
    authDomain: "discord-clone-c1bb7.firebaseapp.com",
    projectId: "discord-clone-c1bb7",
    storageBucket: "discord-clone-c1bb7.appspot.com",
    messagingSenderId: "406505950248",
    appId: "1:406505950248:web:e709ab30eca453e64c391d",
    measurementId: "G-DTNQPHWTE4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export { auth, provider }
  export default db