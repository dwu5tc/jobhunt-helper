// jshint esversion: 6

import React, { Component } from 'react';
// import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { db, auth, provider } from './database/firebase';

class App extends Component {
	constructor() {
		super();

		this.state = {
			uid: null,
			name: null
		};
	}

	userLogin = () => {
		auth.signInWithPopup(provider)
			.then((res) => {
				// can i just delete this???
			})
			.catch((err) => {
				// handle error
				console.log(err);
			});
	}

	userLogout = () => {
		auth.signOut()
			.then(() => {
				this.setState({
					uid: null,
					name: null
				});
			 })
			.catch((err) => {
				// error handling
				console.log(err);
			});
	}

	render() {
		return (
			<div className="App">
				{(this.state.uid)
					?
					<Home 
						{...this.state}
						handleLogout={this.userLogout} 
					/>
					:
					<Login 
						handleLogin={this.userLogin} 
					/>
				}
			</div>
		);
	}

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				const uid = user.uid;
				const name = user.displayName;
				const userRef = db.ref('users/' + uid);
				userRef.once('value').then((snapshot) => {
					const userExists = snapshot.exists(); 
					if (!userExists) { 
						userRef.set({
							uid: user.uid,
							name: user.displayName,
						});
					}
					this.setState({
						uid,
						name
					});
				});
			}
		});
	}
}

export default App;
