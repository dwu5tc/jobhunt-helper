import React, { Component } from 'react';
import PropTypes from 'prop-types';

import JobContainer from './JobContainer';

export default class JobsContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const visibleJobs = this.props.jobs.filter(job => this.props.filters.indexOf(job.appState) !== -1);
		// add an actual index
		return (
			<section className="jobs">
				{visibleJobs.map((job, index) => {
					return (
						<JobContainer key={index} 
							job={job}
							uid={this.props.uid}
						/>
					);
				})}
			</section>
		);
	}
}

JobsContainer.propTypes = {
	uid: PropTypes.string.isRequired,
	filters: PropTypes.array.isRequired,
	jobs: PropTypes.array.isRequired,
};