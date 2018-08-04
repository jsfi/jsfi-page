import React from 'react';

import { DefaultPage } from '../components/default-page.js';

import textStyles from '../components/text.module.css';

/* tslint:disable:no-default-export */

const conferences = [{
	title: '2018',
	visited: [{
		name: 'componentDidSmoosh',
		url: 'https://smoosh.fun/'
	}, {
		name: 'CityJSConf',
		url: 'http://cityjsconf.org/'
	}]
}, {
	title: '2017',
	visited: [{
		name: 'State of the Browser',
		url: 'https://2017.stateofthebrowser.com/'
	}, {
		name: 'Mobilecamp',
		url: 'http://mobilecamp.de/'
	}]
}, {
	title: '2016',
	visited: [{
		name: 'Nordic.js',
		url: 'http://nordicjs.com/'
	}, {
		name: 'JSConf Budapest',
		url: 'http://jsconfbp.com/'
	}, {
		name: 'CSSconf Budapest',
		url: 'http://cssconfbp.rocks/'
	}]
}, {
	title: '2015',
	visited: [{
		name: 'JSConf EU',
		url: 'http://2015.jsconf.eu/'
	}, {
		name: 'CSSconf EU',
		url: 'http://2015.cssconf.eu/'
	}, {
		name: 'Reject JS',
		url: 'http://rejectjs.org/'
	}, {
		name: 'Typo3-Camp',
		url: 'http://www.typo3camp-berlin.de/'
	}, {
		name: 'Mobilecamp',
		url: 'http://mobilecamp.de/'
	}, {
		name: 'Front-Trends',
		url: 'http://2015.front-trends.com/'
	}]
}, {
	title: '2014',
	visited: [{
		name: 'JSConf EU',
		url: 'http://2014.jsconf.eu/'
	}, {
		name: 'CSSconf EU',
		url: 'http://2014.cssconf.eu/'
	}, {
		name: 'Reject JS',
		url: 'http://2014.rejectjs.org/'
	}, {
		name: 'Mobilecamp',
		url: 'http://mobilecamp.de/'
	}, {
		name: 'Front-Trends',
		url: 'http://2014.front-trends.com/'
	}, {
		name: 'JS Unconf',
		url: 'http://2014.jsunconf.eu/'
	}, {
		name: 'RWD Summit',
		url: 'http://environmentsforhumans.com/2014/responsive-web-design-summit/'
	}]
}, {
	title: '2013',
	visited: [{
		name: 'Accessibility Summit',
		url: 'http://environmentsforhumans.com/2013/accessibility-summit/#.Vk-Zy6krKEL'
	}, {
		name: 'CSS Summit',
		url: 'http://environmentsforhumans.com/2013/css-summit/'
	}, {
		name: 'Mobilecamp',
		url: 'http://mobilecamp.de/'
	}, {
		name: 'Front-Trends',
		url: 'http://2013.front-trends.com/'
	}]
}];

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const ConferencesPage = () => (
	<DefaultPage title="Conferences">
		<header>
			<h1>
				{'Conferences'}
			</h1>
		</header>
		<ol className={textStyles.listReset} reversed>
			{conferences.map(year => (
				<li key={year.title}>
					<h2>
						{year.title}
					</h2>
					<ol className={textStyles.listReset} reversed>
						{year.visited.map(conference => (
							<li key={conference.name}>
								<a
									className={textStyles.listLink}
									href={conference.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{conference.name}
								</a>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	</DefaultPage>
);

export default ConferencesPage;
