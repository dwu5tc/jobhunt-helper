import React from 'react';
import PropTypes from 'prop-types';

const NewJob = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<label>
				Title:
				<input 
					name='title'
					type='text'
					onChange={this.handleChange}
					value={props.title}
				/>
			</label>
			<label>
				Company:
				<input 
					name='company'
					type='text'
					onChange={this.handleChange}
					value={props.company}
				/>
			</label>
			<label>
				Posting Link:
				<input 
					name='link'
					type='text'
					onChange={this.handleChange}
					value={props.link}
				/>
			</label>
			<label>
				Contact:
				<input 
					name='contact'
					type='text'
					onChange={this.handleChange}
					value={props.contact}
				/>
			</label>
			<label>
				Contact Email:
				<input 
					name='contactEmail'
					type='text'
					onChange={this.handleChange}
					value={props.contactEmail}
				/>
			</label>
			<label>
				Contact Position:
				<input 
					name='contactPosition'
					type='text'
					onChange={this.handleChange}
					value={props.contactPosition}
				/>
			</label>
			<label>
				Comments:
				<textarea
					onChange={this.handleChange}
					value={props.comments}
				/>
			</label>
			<button>Applied</button>
			<button>Ongoing</button>
			<button>Yellow Rejection</button>
			<button>Red Rejection</button>
			<button>+ Interview</button>
			<input type="submit" value 'submit' />
		</form>
	);
};

NewJob.propTypes = {
	uid: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired
}

export default NewJob;