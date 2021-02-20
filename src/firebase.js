import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCXbQODzAb-E7aKusbZRsgsDOCREslrnV8",
    authDomain: "slack-clone-41e64.firebaseapp.com",
    projectId: "slack-clone-41e64",
    storageBucket: "slack-clone-41e64.appspot.com",
    messagingSenderId: "1075691155317",
    appId: "1:1075691155317:web:406e6327f9858e25806d3c",
    measurementId: "G-62SSQBXNS3"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider,
    db
};