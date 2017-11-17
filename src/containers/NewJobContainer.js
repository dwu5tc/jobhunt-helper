// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewJob from '../components/NewJob';
import { db } from 'firebase';

export default class NewJobContainer extends Component {
	constructor(props) {
		super(props);

		this.state = this.initialState();
	}

	initialState = () => {
		title: '',
		company: '',
		link: '',
		contact: '',
		contactEmail: '',
		contactPosition: '',
		comments: '',
		appState: 'applied',
		interviews: []
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log('submitting!!!');
		const initialState = this.initialState();
		this.setState({
			{...initialState} // obj spread
		});
	}

	onChange = (e) => {
		this.setState({
			e.target.name = e.target.value
		});
	}

	render() {
		return (
			<NewJob 
				uid={this.props.uid}
				handleChange={this.onChange}
				handleSubmit={this.handleChange}
			/>
		);
	}
}

NewJobContainer.propTypes = {
	uid: PropTypes.string.isRequired
};