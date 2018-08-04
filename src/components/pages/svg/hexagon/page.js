import React from 'react';

import { getTemplateNumberFormatter } from '../../../../utils/get-template-number-formatter.js';
import { Fieldset } from '../../../form/fieldset.js';
import { Form } from '../../../form/form.js';
import { NumberInput } from '../../../form/number-input.js';
import { Row } from '../../../form/row.js';
import { IN_RADIUS_ANGLE, half } from '../constants.js';
import { Display } from '../components/display.js';
import { PositionRow } from '../components/position-row.js';
import { SvgFieldset } from '../components/svg-fieldset.js';
import { getInitialState } from './get-initial-state.js';

/**
 * @param {React.FormEvent<HTMLFormElement>} event
 */
const handleSubmit = event => {
	event.preventDefault();
};

/**
 * @extends React.Component
 */
export class Hexagon extends React.Component {
	/**
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = getInitialState();

		this.handleChange = this.handleChange.bind(this);
	}

	/**
	 * @returns {string}
	 */
	getViewBox() {
		const { width, height, minX, minY } = this.state;

		return `${minX} ${minY} ${width} ${height}`;
	}

	/**
	 * @returns {string}
	 */
	getShape() {
		const {
			centerX,
			centerY,
			circumRadius,
			cornerRadius,
			precision
		} = this.state;

		const adjustedCircumRadius = circumRadius - half(cornerRadius);
		const inRadius = Math.cos(IN_RADIUS_ANGLE) * (adjustedCircumRadius);
		const halfCircumRadius = half(adjustedCircumRadius);

		const toPrecision = getTemplateNumberFormatter(precision);

		return toPrecision`M${centerX - inRadius} ${centerY - halfCircumRadius}l${inRadius} ${-halfCircumRadius}l${inRadius} ${halfCircumRadius}v${adjustedCircumRadius}l${-inRadius} ${halfCircumRadius}l${-inRadius} ${-halfCircumRadius}z`;
	}

	/**
	 * @param {string} name
	 * @param {number} value
	 */
	handleChange(name, value) {
		this.setState(() => ({ [name]: value }));
	}

	/**
	 * @returns {React.ReactElement<React.ReactNode>}
	 */
	render() {
		const {
			minX,
			minY,
			width,
			height,
			centerX,
			centerY,
			circumRadius,
			cornerRadius,
			precision
		} = this.state;

		return (
			<React.Fragment>
				<Form onSubmit={handleSubmit}>
					<SvgFieldset
						minX={minX}
						minY={minY}
						width={width}
						height={height}
						onChange={this.handleChange}
					/>
					<Fieldset legend="Hexagon attributes">
						<PositionRow
							centerX={centerX}
							centerY={centerY}
							onChange={this.handleChange}
						/>
						<Row>
							<NumberInput
								label="circum radius"
								name="circumRadius"
								initialValue={circumRadius}
								onChange={this.handleChange}
							/>
							<NumberInput
								label="corner radius"
								name="cornerRadius"
								initialValue={cornerRadius}
								onChange={this.handleChange}
							/>
							<NumberInput
								label="precision"
								name="precision"
								initialValue={precision}
								onChange={this.handleChange}
							/>
						</Row>
					</Fieldset>
				</Form>
				<Display
					viewBox={this.getViewBox()}
					shape={this.getShape()}
					pathStyle={cornerRadius ? {
						stroke: 'currentColor',
						strokeWidth: cornerRadius,
						strokeLinejoin: 'round'
					} : {}}
				/>
			</React.Fragment>
		);
	}
}
