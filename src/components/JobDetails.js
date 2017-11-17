import React from 'react';
import PropTypes from 'prop-types';

const JobDetails = (props) => {
	return (
		<div className={props.isShowing ? 'job-details visible' : 'job-details hidden'}>
			<div className='job-details__comments'>
				<p>Comments: {props.comments}</p>
			</div>
			{props.interviews.map((interview, index) => {
				return (
					<div className="job-details__interview" key={index}>
						<p>{interview.date}</p>
						<p>{interview.notes}</p>
					</div>
				);
			})}
		</div>
	);
}

JobDetails.propTypes = {
	isShowing: PropTypes.bool.isRequired,
	comments: PropTypes.string.isRequired,
	interviews: PropTypes.array.isRequired
}

export default JobDetails;

