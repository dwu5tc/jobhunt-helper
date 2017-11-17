import React from 'react';
import PropTypes from 'prop-types';

const JobSummary = (props) => {
	const formattedDate = props.job.dateApplied.getMonth() + '/' +
							props.job.dateApplied.getDate() + '/' +
							props.job.dateApplied.getFullYear();

	// should i break this into more components???
	return (
		<div className='job-summary'>
			<div className='job-summary__content'>
				<p>{props.job.title}</p>
				<p>{props.job.company}</p>
				<p>{formattedDate}</p>
				<div className='contact'>
					<p>{props.job.contact}</p>
					<div className="contact-details">
						<p>{props.job.contactEmail}</p>
						<p>{props.job.contactPosition}</p>
					</div>
				</div>
				<p>{props.job.comments}</p>
			</div>
			<div className='job-summary__controller'>
				<button onClick={props.handleToggleInfo}>
					{props.showDetails
						? 'Hide Details'
						: 'Show Details'
					}
				</button>
			</div>
		</div>
	);
}

JobSummary.propTypes = {
	job: PropTypes.object.isRequired,
	handleToggleInfo: PropTypes.func.isRequired,
	handleToggleEdit: PropTypes.func.isRequired,
	handleDeleteJob: PropTypes.func.isRequired
}

export default JobSummary;

