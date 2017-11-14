// jshint esversion: 6
import React from 'react';
import PropTypes from 'prop-types';

const AddExpense = ({ handleAddExpenseChange, handleAddExpenseSubmit }) => {
	return (
		<form className="add-expense" onSubmit={handleAddExpenseSubmit}>
			<input type="text" onChange={handleAddExpenseChange}/>
			<input type="submit"/>
		</form>
	);
}

AddExpense.propTypes = {
	handleAddExpenseChange: PropTypes.func.isRequired,
	handleAddExpenseSubmit: PropTypes.func.isRequired
}

export default AddExpense;