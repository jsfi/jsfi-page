import React from 'react';

import { DefaultPage } from '../components/default-page.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const IndexPage = () => (
	<DefaultPage title="404: Page Not Found">
		<p>
			{'This page does not exist.'}
		</p>
	</DefaultPage>
);

export default IndexPage;
