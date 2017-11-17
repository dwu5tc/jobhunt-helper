import React from 'react';
import PropTypes from 'prop-types';

const NewJob = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className='new-job'>
			<label>
				Title:
				<input 
					name='title'
					type='text'
					onChange={props.handleChange}
					value={props.title}
				/>
			</label>
			<label>
				Company:
				<input 
					name='company'
					type='text'
					onChange={props.handleChange}
					value={props.company}
				/>
			</label>
			<label>
				Posting Link:
				<input 
					name='link'
					type='text'
					onChange={props.handleChange}
					value={props.link}
				/>
			</label>
			<label>
				Contact:
				<input 
					name='contact'
					type='text'
					onChange={props.handleChange}
					value={props.contact}
				/>
			</label>
			<label>
				Contact Email:
				<input 
					name='contactEmail'
					type='text'
					onChange={props.handleChange}
					value={props.contactEmail}
				/>
			</label>
			<label>
				Contact Position:
				<input 
					name='contactPosition'
					type='text'
					onChange={props.handleChange}
					value={props.contactPosition}
				/>
			</label>
			<label>
				Comments:
				<textarea
					name='comments'
					onChange={props.handleChange}
					value={props.comments}
				/>
			</label>
			<div className="new-job__state-select">
				<button>Applied</button>
				<button>Ongoing</button>
				<button>Yellow Rejection</button>
				<button>Red Rejection</button>
			</div>
			<button>+ Interview</button>
			<div className="new-job__nav">
				<button onClick={props.toggleCreate}>Cancel</button>
				<input type="submit" value='Submit' />
			</div>
		</form>
	);
};

NewJob.propTypes = {
	uid: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	toggleCreate: PropTypes.func.isRequired
}

export default NewJob;