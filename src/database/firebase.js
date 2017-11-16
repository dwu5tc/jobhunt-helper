import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyDTxQF6E8AFTpFc4biwCY6bnf55L1lVsJs",
	authDomain: "jobhunt-helper.firebaseapp.com",
	databaseURL: "https://jobhunt-helper.firebaseio.com",
	projectId: "jobhunt-helper",
	storageBucket: "",
	messagingSenderId: "757577170005"
};
firebase.initializeApp(config);

export const db = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
