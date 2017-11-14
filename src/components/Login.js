// jshint esversion: 6
import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
	return (
		<div className="login">
			<p>hello from login</p>
			<button className="login-button" onClick={handleLogin}>Login</button>
		</div>
	);
}

Login.propTypes = {
	handleLogin: PropTypes.func.isRequired
}

export default Login;