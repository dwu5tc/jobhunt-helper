// jshint esversion: 6
import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
	return (
		<div className="login">
			<h1>Job Hunt Tracker</h1>
			<p>Please Login</p>
			<button className="login-button" onClick={handleLogin}>Login</button>
		</div>
	);
}

Login.propTypes = {
	handleLogin: PropTypes.func.isRequired
}

export default Login;