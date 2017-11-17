import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
	const visibleJobs = props.jobs.filter(job => props.filters.indexOf(job.appState) !== -1); 

	return (
		<footer>
			<p>Showing: {visibleJobs.length} jobs and {props.filters.map(filter => filter)} filters</p>
		</footer>
	);
};

Footer.propTypes = {
	jobs: PropTypes.array.isRequired,
	filters: PropTypes.array.isRequired
};

export default Footer;