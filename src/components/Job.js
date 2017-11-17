import React from 'react';
import PropTypes from 'prop-types';

const Job = (props) => {
	// should i destructure the props???
	console.log(props);
	const formattedDate = props.dateApplied.getMonth() + '/' +
							props.dateApplied.getDate() + '/' +
							props.dateApplied.getFullYear();

	return (
		<article className={'job' + props.job.appState}>
			<div className='job-summary'>
				<div className='job-summary__content'>
					<p>{props.job.title}</p>
					<p>{props.job.company}</p>
					<p>{formattedDate}</p>
					<p className='contact'>
						{props.job.contact}
					</p>
					<div className='contact-details hidden'>
						<p>{props.job.contactEmail}</p>
						<p>{props.job.contactPosition}</p>
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
			<div className={props.showDetails ? 'job-details visible' : 'job-details hidden'}>
				<div className='job-details__comments'>
					<p>Comments: {props.job.comments}</p>
				</div>
				{props.job.interviews.map((interview, index) => {
					return (
						<div className="job-details__interview" key={index}>
							<p>{interview.date}</p>
							<p>{interview.notes}</p>
						</div>
					);
				})}
			</div>
		</article>
	);
}

export default Job;

Job.propTypes = {
	job: PropTypes.object.isRequired,
	handleToggleInfo: PropTypes.func.isRequired
};