import * as firebase from "firebase/app";
import   "firebase/storage";

import "firebase/storage";
let firebaseConfig = {
    apiKey: "AIzaSyD1jhzXOBgPIpgW0HWfvpHk9Lwg9zb2dKc",
    authDomain: "myvan-12eb8.firebaseapp.com",
    databaseURL: "https://myvan-12eb8.firebaseio.com",
    projectId: "myvan-12eb8",
    storageBucket: "myvan-12eb8.appspot.com",
    messagingSenderId: "193318999071",
    appId: "1:193318999071:web:6f70d36b03a18cf5d4f12a",
    measurementId: "G-6XWD1DQ5M8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  const storage = firebase.storage();
  export {
      storage as default
  }