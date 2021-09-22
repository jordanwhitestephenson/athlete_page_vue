import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({ 
    apiKey: "AIzaSyCjgApT3UIZ6R3NaD7qrK_wMhSrR2PxyQ4",
    authDomain: "giroathletes.firebaseapp.com",
    projectId: "giroathletes",
    storageBucket: "giroathletes.appspot.com",
    messagingSenderId: "113857205943",
    appId: "1:113857205943:web:544ad78041048ade841f32"


}).firestore()


export const db = app.collection('athletes')
