import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDoQvDpqT4YMYpPFjkUpvHYeW_lkZ7HhX4",
    authDomain: "tenedores-dev-bd75a.firebaseapp.com",
    databaseURL: "https://tenedores-dev-bd75a.firebaseio.com",
    projectId: "tenedores-dev-bd75a",
    storageBucket: "tenedores-dev-bd75a.appspot.com",
    messagingSenderId: "1007873716564",
    appId: "1:1007873716564:web:a7c917eb345b4bae0918c1",
    measurementId: "G-8K444PZJ85"
  };

  export const firebaseapp = firebase.initializeApp(firebaseConfig);