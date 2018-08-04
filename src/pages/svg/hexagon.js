import React from 'react';

import { DefaultPage } from '../../components/default-page.js';
import { Hexagon } from '../../components/pages/svg/hexagon/page.js';

/* tslint:disable:no-default-export */

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
const HexagonPage = () => (
	<DefaultPage title="SVG Hexagon">
		<Hexagon />
	</DefaultPage>
);

export default HexagonPage;
