// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from '../components/Filters';

export default class FiltersContainer extends Component { 
	constructor(props) {
		super(props);

		this.state = {
			filtersHidden: true,
		};
	}

	toggleVisibility = () => {
		this.setState((prevState) => {
			return {
				filtersHidden: !prevState.filtersHidden
			}
		});
	}

	// filterClick = (filter) => {
	// 	this.props.handleFilterClick(filter);
	// }

	render() {
		console.log(this.toggleVisibility);
		return (
			<Filters 
				{...this.props}
				isHidden={this.state.filtersHidden}
				handleToggleFilterVisibility={this.toggleVisibility}
			/>
		);
	}
}

FiltersContainer.propTypes = {
	handleFilterClick: PropTypes.func.isRequired
};