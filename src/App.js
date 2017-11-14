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
			user: null
		};

		this.userLogin = this.userLogin.bind(this);
		this.userLogout = this.userLogout.bind(this);
	}

	userLogin() {
		auth.signInWithPopup(provider)
			.then(function(res) {
				const user = res.user;
				this.setState({
					user
				});
				alert('logged in');
			})
			.catch(function(err) {
				// handle error
				console.log(err);
			});
	}

	userLogout() {
		auth.signOut()
			.then(function() {
				this.setState({
					user: null
				});
				alert('logged out');
			})
			.catch(function(error) {
				// error handling
			});
	}

	render() {
		return (
			<div className="App">
				{(this.state.user)
					?
					<Home 
						user={this.state.user}
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
}

export default App;
