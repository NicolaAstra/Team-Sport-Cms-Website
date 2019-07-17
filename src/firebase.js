import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCr3sU425uF2tj8F3tEmc_ZhVXjYvdOap0",
    authDomain: "sport-team-cms.firebaseapp.com",
    databaseURL: "https://sport-team-cms.firebaseio.com",
    projectId: "sport-team-cms",
    storageBucket: "",
    messagingSenderId: "454564747465",
    appId: "1:454564747465:web:612a4d69e8e6f48b"
  };

firebase.initializeApp(config);


const firebaseDB =  firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export{
  firebase,
  firebaseMatches
}