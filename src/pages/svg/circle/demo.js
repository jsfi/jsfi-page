import React from 'react';

import { DefaultPage } from '../../../components/default-page.js';
import { CircleDemo } from '../../../components/pages/svg/circle/demo.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const CircleDemoPage = () => (
	<DefaultPage title="SVG Circle Demo">
		<CircleDemo />
	</DefaultPage>
);

export default CircleDemoPage;
