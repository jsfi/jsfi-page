import PropTypes from 'prop-types';
import React from 'react';

import { NumberInput } from '../../../form/number-input.js';
import { Row } from '../../../form/row.js';

/**
 * @param {Object} props
 * @param {number} props.centerX
 * @param {number} props.centerY
 * @param {Function} props.onChange
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const PositionRow = ({ centerX, centerY, onChange }) => (
	<Row>
		<NumberInput
			label="center-x"
			name="centerX"
			initialValue={centerX}
			onChange={onChange}
		/>
		<NumberInput
			label="center-y"
			name="centerY"
			initialValue={centerY}
			onChange={onChange}
		/>
	</Row>
);

PositionRow.propTypes = {
	centerX: PropTypes.number.isRequired,
	centerY: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};
