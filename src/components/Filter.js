// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component { 
	constructer(props) {
		super(props)
	}

	filterClick = (filter) => {
		this.props.handleFilterClick(filter);
	}

	render() {
		return (
			<div className="filter">

			</div>
		);
	}
};