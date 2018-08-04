import React from 'react';

import { DefaultPage } from '../components/default-page.js';

import textStyles from '../components/text.module.css';

/* tslint:disable:no-default-export */

const meetups = [{
	name: 'React London Meetup',
	url: 'https://meetup.react.london/',
	from: '10/2017'
}, {
	name: 'WEBdeLDN',
	url: 'http://webdeldn.rocks/',
	from: '08/2017'
}, {
	name: 'London Web Performance Group',
	url: 'https://ldnwebperf.org/',
	from: '07/2017'
}, {
	name: 'GraphQL London',
	url: 'https://www.meetup.com/GraphQL-London/',
	from: '05/2017'
}, {
	name: 'JS Monthly',
	url: 'https://www.meetup.com/js-monthly/',
	from: '05/2017'
}, {
	name: 'The JS Roundabout',
	url: 'https://www.meetup.com/The-JS-Roundabout/',
	from: '05/2017'
}, {
	name: 'London Node.JS Meetup',
	url: 'https://www.meetup.com/LNM-London-Node-JS-Meetup/',
	from: '05/2017'
}, {
	name: 'London HalfStack',
	url: 'https://www.meetup.com/halfstack/',
	from: '01/2017'
}, {
	name: 'London JavaScript Community',
	url: 'https://www.meetup.com/London-JavaScript-Community/',
	from: '09/2016'
}, {
	name: 'CSS Meetup London',
	url: 'https://www.meetup.com/London-CSS-Meetup/',
	from: '08/2016',
	to: '04/2017'
}, {
	name: 'London Node.js User Group',
	url: 'https://www.meetup.com/london-nodejs/',
	from: '07/2016'
}, {
	name: 'Serverless London',
	url: 'https://www.meetup.com/Serverless-London/',
	from: '07/2016'
}, {
	name: 'DresdenJS',
	url: 'http://www.meetup.com/dresdenjs-io-javascript-user-group/',
	from: '10/2015',
	to: '03/2016'
}, {
	name: 'WDCM Dresden',
	url: 'http://www.meetup.com/wdcm-dresden/',
	from: '11/2014',
	to: '03/2016'
}];

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const ConferencesPage = () => (
	<DefaultPage title="Meetups">
		<header>
			<h1>
				{'Meetups'}
			</h1>
		</header>
		<p>
			<a href="http://www.meetup.com/members/109026402/" target="_blank" rel="noopener noreferrer">
				{'Meetup-Profile'}
			</a>
		</p>
		<ol className={textStyles.listReset}>
			{meetups.map(meetup => (
				<li key={meetup.name}>
					<a
						className={textStyles.listLink}
						href={meetup.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{meetup.name}
						{' ('}
						{meetup.from}
						{meetup.to && ` - ${meetup.to}`}
						{')'}
					</a>
				</li>
			))}
		</ol>
	</DefaultPage>
);

export default ConferencesPage;
