// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Job from '../components/Job';
// import EditJob from './EditJob';
import { db } from '../database/firebase';

export default class JobContainer extends Component {
	constructor() {
		super();

		this.state = {
			isEditing: false,
			showDetails: false
		};
	}

	deleteJob = (key) => {
		// get the correct reference...
		// const postRef = db.ref(`${this.props.uid}/jobs/${key}`);
		// postRef.remove();
	}

	toggleEdit = () => {
		this.setState((prevState) => {
			return ({
				isEditing: !prevState.isEditing
			});
		});
	}

	toggleInfo = () => {
		this.setState((prevState) => {
			return ({
				showDetails: !prevState.showDetails
			});
		});
	}

	render() {
		return (
			<div>
				{(this.isEditing)
					? <p>hi</p>/*<EditJob 
						job={this.props.job}
						handleToggleEdit={this.toggleEdit}
					/>*/
					: <Job 
						{...this.state}
						job={this.props.job}
						handleToggleInfo={this.toggleInfo}
						handleToggleEdit={this.toggleEdit}
						handleDeleteJob={this.deleteJob}
					/>
				}
			</div>
		);
	}
}

JobContainer.propTypes = {
	job: PropTypes.object.isRequired,
};