// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';

export default class FiltersContainer extends Component { 
	constructer(props) {
		super(props)

		this.state = {
			filtersHidden: true,
		}
	}

	filterClick = (filter) => {
		this.props.handleFilterClick(filter);
	}

	renderFilters = () => {
		let filters;
		if (this.props.filter == )
	}
	
	toggleVisibility = () => {
		this.setState((prevState) => {
			filtersHidden: !prevState.filtersHidden
		});
	}

	render() {
		const { 
			filter,
			handleFilterClick 
		} = this.props;

		return (
			<div className="filter">
				<button 
					onClick={this.toggleVisibility}
				>
					{(this.filtersHidden) 
						? 
						'Filters Show'
						:
						'Filters Hide'
					}
				</button>
				<div className="filter__filters">
					<Filter 
						filter={filter}
						onClick={this.handleFilterClick}
					/>
					<Filter 
						filter={filter}
						onClick={this.handleFilterClick}
					/>
					<Filter 
						filter{filter}
						onClick={this.handleFilterClick}
					/>
				</div>
			</div>
		);
	}
};