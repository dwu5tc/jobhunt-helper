import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewJobContainer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<p>hi from new job container</p>
			// <Jobs />
		);
	}
}

NewJobContainer.propTypes = {
	uid: PropTypes.string.isRequired
};