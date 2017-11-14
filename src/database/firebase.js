import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBHjtWxuYK6WwjmguvIEd6wpSS3UlMw55s",
	authDomain: "budget-helper-7d737.firebaseapp.com",
	databaseURL: "https://budget-helper-7d737.firebaseio.com",
	projectId: "budget-helper-7d737",
	storageBucket: "budget-helper-7d737.appspot.com",
	messagingSenderId: "508676884787"
};
firebase.initializeApp(config);

export const db = firebase.database();
// export const dbRef = firebase.database().ref('/');
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
