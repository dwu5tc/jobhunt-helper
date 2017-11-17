import React from 'react';
import PropTypes from 'prop-types';

import JobSummary from './JobSummary';
// import JobController from './JobController';
import JobDetails from './JobDetails';

const Job = (props) => {
	// should i destructure the props???
	// should i move the prop methods into here and change to a functional component???

	// implement a better way of switching whitespace to hyphens
	// regex???
	let formattedClassName;
	switch(props.job.appState) {
		case 'yellow rejection':
			formattedClassName = 'yellow-rejection';
			break;
		case 'red rejection':
			formattedClassName = 'red-rejection';
			break;
		default:
			formattedClassName = props.job.appState;
	}

	return (
		<article className={'job ' + formattedClassName}>
			<JobSummary
				{...props} // don't feel like writing it out... is this bad???
			/>
			<JobDetails 
				comments={props.job.comments}
				interviews={props.job.interviews}
				isShowing={props.showDetails}
			/>
		</article>
	);
}

export default Job;

Job.propTypes = {
	job: PropTypes.object.isRequired,
	handleToggleInfo: PropTypes.func.isRequired,
	handleToggleEdit: PropTypes.func.isRequired,
	handleDeleteJob: PropTypes.func.isRequired
};