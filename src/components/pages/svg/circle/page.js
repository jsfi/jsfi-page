import React from 'react';
import { Link } from 'gatsby';

import { Fieldset } from '../../../form/fieldset.js';
import { Form } from '../../../form/form.js';
import { NumberInput } from '../../../form/number-input.js';
import { Row } from '../../../form/row.js';
import { Display } from '../components/display.js';
import { PositionRow } from '../components/position-row.js';
import { SvgFieldset } from '../components/svg-fieldset.js';
import { getCircleCurves } from './get-circle-curves.js';
import { getCirclePath } from './get-circle-path.js';
import { getInitialState } from './get-initial-state.js';

import style from './circle.module.css';

const MIN_PARTS = 2;

/**
 * @param {React.FormEvent<HTMLFormElement>} event
 */
const handleSubmit = event => {
	event.preventDefault();
};

/**
 * @extends React.Component
 */
export class Circle extends React.Component {
	/**
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = getInitialState();
		this.state.showExample = false;

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
			radius,
			parts,
			precision
		} = this.state;

		if (parts < MIN_PARTS) {
			return '';
		}

		const { startPoint, curves } = getCircleCurves({ x: centerX, y: centerY }, radius, parts);

		return getCirclePath(startPoint, curves, precision);
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
			radius,
			parts,
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
					<Fieldset legend="Circle attributes">
						<PositionRow
							centerX={centerX}
							centerY={centerY}
							onChange={this.handleChange}
						/>
						<Row>
							<NumberInput
								label="radius"
								name="radius"
								initialValue={radius}
								onChange={this.handleChange}
							/>
							<NumberInput
								label="parts"
								name="parts"
								initialValue={parts}
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
				<Display viewBox={this.getViewBox()} shape={this.getShape()} />
				<p>
					<q className={style.quote}>
						{'Why should I use a path to approximate a circle, when the '}
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle"
							target="_blank"
							rel="noopener noreferrer"
							className={style.codeLink}
						>
							<code className={style.code}>
								{'<circle>'}
							</code>
						</a>
						{' element exists?'}
					</q>
					{'This is intended as a base for animations. I wanted to '}
					<Link to="/svg/circle/demo">
						{'dent a circle'}
					</Link>
					{' which is only possible if it is a path.'}
				</p>
			</React.Fragment>
		);
	}
}
