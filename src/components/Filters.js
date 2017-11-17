// jshint esversion: 6

import React from 'react';
import PropTypes from 'prop-types';

// clean up the button rendering and the onclick functions...
const Filters = (props) => {
	const { 
		filters,
		isHidden,
		handleFilterClick,
		handleToggleFilterVisibility
	} = props;

	return (
		<div className="filters">
			<button onClick={handleToggleFilterVisibility}>
				{isHidden 
					? 'Filters Show'
					: 'Filters Hide'
				}
			</button>
			<ul className={isHidden 
				? 'filters__filters hidden'
				: 'filters__filters visible'
			}>
				<button 
					className={filters.length === 4 ? 'selected' : ''}
					onClick={() => handleFilterClick('all')}
				>
					All
				</button>
				<button 
					className={filters.indexOf('applied') !== -1 ? 'selected' : ''}
					onClick={() => handleFilterClick('applied')}
				>
					Applied
				</button>
				<button 
					className={filters.indexOf('ongoing') !== -1 ? 'selected' : ''}
					onClick={() => handleFilterClick('ongoing')}
				>
					Ongoing
				</button>
				<button 
					className={filters.indexOf('yellow rejection') !== -1 ? 'selected' : ''}
					onClick={() => handleFilterClick('yellow rejection')}
				>
					Yellow Rejections
				</button>
				<button 
					className={filters.indexOf('red rejection') !== -1 ? 'selected' : ''}
					onClick={() => handleFilterClick('red rejection')}
				>
					Red Rejections
				</button>
				<button 
					className={filters.length === 0 ? 'selected' : ''}
					onClick={() => handleFilterClick('none')}
				>
					None
				</button>
			</ul>
		</div>
	);
};

export default Filters;

Filters.propTypes = {
	filters: PropTypes.array.isRequired,
	isHidden: PropTypes.bool.isRequired,
	handleToggleFilterVisibility: PropTypes.func.isRequired,
	handleFilterClick: PropTypes.func.isRequired,
};