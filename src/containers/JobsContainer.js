import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class JobsContainer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<p>hi from jobs container</p> 
			// <Jobs />
		);
	}
}

JobsContainer.propTypes = {
	uid: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	jobs: PropTpyes.array.isRequired,
};