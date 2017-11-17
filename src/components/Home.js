// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FiltersContainer from '../containers/FiltersContainer';
import JobsContainer from '../containers/JobsContainer';
import NewJobContainer from '../containers/NewJobContainer';
import Footer from './Footer';
import { db } from '../database/firebase';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCreatingNewJob: true,
			filters: ['applied', 'ongoing', 'yellow rejection', 'red rejection'],
			jobs: [
				{
					title: 'fe dev',
					company: 'spaceX',
					link: 'https://www.instagram.com/dwu5tc',
					dateApplied: new Date(),
					contact: 'elon musk', // should i used an object for contact???
					contactEmail: 'elon.musk@spacex.com',
					contactPosition: 'ceo yo',
					comments: 'cool company',
					appState: 'applied',
					interviews: [ // cant i just use date as key, notes as value???
					{
						date: 'nov 4, 2017',
						notes: 'went well'
					}, 
					{
						date: 'nov 10, 2017',
						notes: 'failed so hard'
					}
					]
				},
				{
					title: 'fs dev',
					company: 'facesmash',
					link: 'https://www.instagram.com/shampoo_sensei',
					dateApplied: new Date(),
					contact: 'mark zuckerberg',
					contactEmail: 'mark.zuckerdude@facesmash.com',
					contactPosition: 'ceo yo',
					comments: 'just for memes',
					appState: 'ongoing',
					interviews: [
					{
						date: 'nov 4, 2017',
						notes: 'went well'
					}, 
					{
						date: 'nov 10, 2017',
						notes: 'failed so hard'
					}
					]
				},
				{
					title: 'be dev',
					company: 'googs',
					link: 'https://www.instagram.com/derek.slr',
					dateApplied: new Date(),
					contact: 'ceo of google',
					contactEmail: 'googledude@googlio.com',
					contactPosition: 'idk',
					comments: 'taking over the world',
					appState: 'yellow rejection',
					interviews: [
					{
						date: 'nov 4, 2017',
						notes: 'went well'
					}, 
					{
						date: 'nov 10, 2017',
						notes: 'failed so hard'
					}
					]
				},
				{
					title: 'FE DEV',
					company: 'companyyyyyyy',
					link: 'https://www.instagram.com/brycity',
					dateApplied: new Date(),
					contact: 'whos your contact',
					contactEmail: 'no email here',
					contactPosition: 'contact position???',
					comments: 'comments herejslgkasdglkslfkjslfklaksjl',
					appState: 'red rejection',
					interviews: [
					{
						date: 'nov 4, 2017',
						notes: 'went well'
					}, 
					{
						date: 'nov 10, 2017',
						notes: 'failed so hard'
					}
					]
				}
			]
		};
	}

	setFilters = (clickedFilter) => {
		switch(clickedFilter) {
			case 'all': 
				this.setState({
					filters: ['applied', 'ongoing', 'yellow rejection', 'red rejection']
				});
				break;
			case 'none':
				this.setState({
					filters: []
				});
				break;
			default: 
				this.setState((prevState) => {
					if (prevState.filters.indexOf(clickedFilter) !== -1) {
						return ({
							filters: prevState.filters.filter(filter => filter !== clickedFilter)
						});
					}
					return ({
						filters: prevState.filters.concat(clickedFilter)
					});
				});
		}
	}

	render() {
		const {
			isCreatingNewJob,
			filters,
			jobs
		} = this.state;

		return (
			<div className='home'>
				<header>
					<h1>Job Hunt Tracker</h1>
					<button className='logout-button' 
						onClick={this.props.handleLogout}
					>Logout
					</button>
				</header>
				<FiltersContainer
					filters={filters}
					handleFilterClick={this.setFilters}
				/>
				<JobsContainer
					uid={this.props.uid}
					filters={filters}
					jobs={jobs}
				/>
				{isCreatingNewJob && 
					<NewJobContainer 
						uid={this.props.uid}
					/>
				}
				<Footer
					jobs={jobs}
					filters={filters}
				/>
			</div>
		);
	}

	// componentDidMount() {
	// 	const userRef = db.ref('users/' + this.props.uid);
	// 	userRef.on('value', (snapshot) => {
	// 		const jobs = snapshot.val();
	// 		this.setState({
	// 			jobs
	// 		});
	// 	});
	// }
}

// could do this with es7 property initializers...
Home.propTypes = {
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	handleLogout: PropTypes.func.isRequired
};
