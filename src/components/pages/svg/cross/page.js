import React from 'react';

import { getTemplateNumberFormatter } from '../../../../utils/get-template-number-formatter.js';
import { Fieldset } from '../../../form/fieldset.js';
import { Form } from '../../../form/form.js';
import { NumberInput } from '../../../form/number-input.js';
import { Row } from '../../../form/row.js';
import { half } from '../constants.js';
import { Display } from '../components/display.js';
import { PositionRow } from '../components/position-row.js';
import { SvgFieldset } from '../components/svg-fieldset.js';
import { getCrossPoints } from './get-cross-points.js';
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
export class Cross extends React.Component {
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
			angleDeg,
			radius,
			stretch,
			cornerRadius,
			precision
		} = this.state;

		/**
		 * @param {Point} point
		 * @returns {string}
		 */
		const renderPoint = ({ x, y }) => getTemplateNumberFormatter(precision)`${x} ${y}`;
		const points = getCrossPoints(
			{ x: centerX, y: centerY },
			radius - half(cornerRadius),
			stretch - half(cornerRadius),
			angleDeg
		);

		const [ firstPoint, secondPoint, ...remainingPoints ] = points;

		return `M${renderPoint(firstPoint)} L${renderPoint(secondPoint)} ${remainingPoints.map(renderPoint).join(' ')}Z`;
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
			angleDeg,
			radius,
			stretch,
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
					<Fieldset legend="Cross attributes">
						<PositionRow
							centerX={centerX}
							centerY={centerY}
							onChange={this.handleChange}
						/>
						<Row>
							<NumberInput
								label="angle (degrees)"
								name="angleDeg"
								initialValue={angleDeg}
								onChange={this.handleChange}
							/>
							<NumberInput
								label="radius"
								name="radius"
								initialValue={radius}
								onChange={this.handleChange}
							/>
						</Row>
						<Row>
							<NumberInput
								label="stretch"
								name="stretch"
								initialValue={stretch}
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
