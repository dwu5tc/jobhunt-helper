import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
	return (
		<div className="footer">
			<p>Showing: {props.jobs.length} jobs and {props.filters.map(filter => filter)} filters</p>
		</div>
	);
};

Footer.propTypes = {
	jobs: PropTypes.array.isRequired,
	filters: PropTypes.array.isRequired
};

export default Footer;