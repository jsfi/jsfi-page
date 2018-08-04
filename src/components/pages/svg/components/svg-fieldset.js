import PropTypes from 'prop-types';
import React from 'react';

import { Fieldset } from '../../../form/fieldset.js';
import { NumberInput } from '../../../form/number-input.js';
import { Row } from '../../../form/row.js';

/**
 * @param {Object} props
 * @param {number} props.minX
 * @param {number} props.minY
 * @param {number} props.width
 * @param {number} props.height
 * @param {Function} props.onChange
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const SvgFieldset = ({ minX, minY, width, height, onChange }) => (
	<Fieldset legend="SVG attributes">
		<Row>
			<NumberInput
				label="min-x"
				name="minX"
				initialValue={minX}
				onChange={onChange}
			/>
			<NumberInput
				label="min-y"
				name="minY"
				initialValue={minY}
				onChange={onChange}
			/>
		</Row>
		<Row>
			<NumberInput
				label="width"
				name="width"
				initialValue={width}
				onChange={onChange}
			/>
			<NumberInput
				label="height"
				name="height"
				initialValue={height}
				onChange={onChange}
			/>
		</Row>
	</Fieldset>
);

SvgFieldset.propTypes = {
	minX: PropTypes.number.isRequired,
	minY: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};
