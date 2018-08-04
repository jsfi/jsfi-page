import React from 'react';
import { Link } from 'gatsby';

import { DefaultPage } from '../components/default-page.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const IndexPage = () => (
	<DefaultPage title="Hello World">
		<header>
			<h1 className="article__title">
				{'About me'}
			</h1>
		</header>
		<p>
			{'My name is Martin Sachse. I am a Front-end Developer since 2011.'}
		</p>
		<p>
			{'You can find my public work on '}
			<a
				href="https://github.com/jsfi"
				target="_blank"
				rel="noopener noreferrer"
			>
				{'Github'}
			</a>
			{' and '}
			<a
				href="https://www.npmjs.com/~jsfi"
				target="_blank"
				rel="noopener noreferrer"
			>
				{'NPM'}
			</a>
			{'.'}
		</p>
		<p>
			{'Additionally you can contact me at '}
			<a
				href="https://twitter.com/martin_sachse"
				target="_blank"
				rel="noopener noreferrer"
			>
				{'Twitter'}
			</a>
			{' and '}
			<a
				href="https://plus.google.com/+MartinSachse"
				target="_blank"
				rel="noopener noreferrer"
			>
				{'Google+'}
			</a>
			{'.'}
		</p>
		<p>
			<Link to="/conferences" className="goto">
				{'Conferences'}
			</Link>
			<br />
			<Link to="/meetups" className="goto">
				{'Meetups'}
			</Link>
		</p>
	</DefaultPage>
);

export default IndexPage;
