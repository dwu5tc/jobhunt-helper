// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FiltersContainer extends Component { 
	constructer(props) {
		super(props)
	}

	filterClick = (filter) => {
		this.props.handleFilterClick(filter);
	}

	renderFilters = () => {
		let filters;
		if (this.props.filter == )
	}

	render() {
		return (
			<div className="filter">
				{this.renderFilters()}
			</div>
		);
	}
};