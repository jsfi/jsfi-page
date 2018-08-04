import React from 'react';

import { DefaultPage } from '../../components/default-page.js';
import { Circle } from '../../components/pages/svg/circle/page.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const CirclePage = () => (
	<DefaultPage title="SVG Circle">
		<Circle />
	</DefaultPage>
);

export default CirclePage;
