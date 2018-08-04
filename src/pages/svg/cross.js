import React from 'react';

import { DefaultPage } from '../../components/default-page.js';
import { Cross } from '../../components/pages/svg/cross/page.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const CrossPage = () => (
	<DefaultPage title="SVG Cross">
		<Cross />
	</DefaultPage>
);

export default CrossPage;
