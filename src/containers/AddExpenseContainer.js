// jshint esversion: 6
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddExpense from '../components/AddExpense.js';

export default class AddExpenseContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			date: null,
			name: null,
			amount: null,
		};
		this.addExpenseChange = this.addExpenseChange.bind(this);
		this.addExpenseSubmit = this.addExpenseSubmit.bind(this);
	}

	addExpenseChange(e) {
		console.log('made change: ' + e);
	}

	addExpenseSubmit(expense) {
		alert('added expense lol');
		// push expense to the db
		// db access depends on the user as well as the month
	}

	render() {
		let date = this.props.currDate;
		return (
			<div className="add-expense-container">
				<AddExpense
					handleAddExpenseChange={this.addExpenseChange}
					handleAddExpenseSubmit={this.addExpenseSubmit} 
				/>
				{`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}
			</div>
		);
	}

	// componentDidMount() {
	// 	// necessary?
	// }
}

AddExpenseContainer.propTypes = {
	currDate: PropTypes.object.isRequired,
};
