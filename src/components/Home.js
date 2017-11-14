// jshint esversion: 6
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddExpenseContainer from '../containers/AddExpenseContainer';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expenses: [],
			currDate: new Date(),
			selectedDate: null,
			budget: null,
			viewBy: 'month',
		};
		// this.handleViewChange = this.handleViewChange.bind(this);
		// this.handleMonthChange = this.handleMonthChange.bind(this);
		// this.handleAddExpense = this.handleAddExpense.bind(this);
	}

	viewChange(viewBy) {
		this.setState({
			viewBy
		});
	}

	monthChange(month) {
		this.setState({
			month
		});
	}

	fetchExpenses() {
		let expenses;
		return expenses; 
	}

	componentDidMount() {
		this.setState({
			expenses: [
			{
				date: 5,
				name: 'starbucks',
				amount: 5.50
			},
			{
				date: 12,
				name: 'dinner',
				amount: 12
			},
			{
				date: 30,
				name: 'lunch',
				amount: 11
			}],
			budget: 750,
			viewBy: 'month',
			selectedDate: this.state.currDate
		});
	}

	render() {
		return (
			<div className="home">
				<button className="logout-button" onClick={this.props.handleLogout}>Logout</button>
				{/*<ViewFilter 
					handleViewChange={this.viewChange} 
				/>*/}
				{/*<CalendarContainer 
					{...this.state} // pass all to props
				/>*/}
				<AddExpenseContainer 
					currDate={this.state.currDate}
				/>
				{/*<Summary 
					expenses={this.state.expenses}
					budget={this.state.budget}
					currDate={this.state.currDate}
				/>*/}
			</div>
		);
	}
}

Home.propTypes = {
	user: PropTypes.string.isRequired,
	handleLogout: PropTypes.func.isRequired
}
