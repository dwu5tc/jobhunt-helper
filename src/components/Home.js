// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import JobsContainer from '../containers/JobContainer';
import NewJobContainer from '../containers/NewJobContainer';
import Footer from './Footer';
import { db } from '../database/firebase';

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCreatingNewJob: true,
			filter: 'all',
			jobs: [
				{
					title: 'fe dev',
					company: 'spaceX',
					link: 'https://www.instagram.com/dwu5tc',
					dateApplied: new Date(),
					contact: 'elon musk',
					contactEmail: 'elon.musk@spacex.com',
					contactPosition: 'ceo yo',
					comments: 'cool company',
					appState: 'applied',
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
					appState: '',
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
					appState: '',
				}
			]
		};
	}

	changeFilter = (filter) =>{
		this.setState({
			filter
		});
	}

	render() {
		return (
			<div className="home">
				<div className="top-bar">
					<h1>Job Hunt Tracker</h1>
					<button className="logout-button" 
						onClick={this.props.handleLogout}
					>Logout
					</button>
				</div>
				<Filter
					handleFilterClick={this.changeFilter}
				/>
				<JobsContainer
					uid={this.props.uid}
					{...this.state}
				/>
				{this.state.isCreatingNewJob && 
					<NewJobContainer 
						uid={this.props.uid}
					/>
				}
			</div>
		);
	}

	componentDidMount() {
		const userRef = db.ref('users/' + this.props.uid);
		userRef.on('value', (snapshot) => {
			const jobs = snapshot.val();
			this.setState({
				jobs
			});
		});
	}
}

// could do this with es7 property initializers...
Home.propTypes = {
	uid: PropTypes.string.isRequired,
	name: PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired
}
