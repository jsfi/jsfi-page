import React from 'react';

import { dentCircleCurves } from './dent-circle-curves.js';
import { getCircleCurves } from './get-circle-curves.js';
import { getCirclePath } from './get-circle-path.js';

import style from './circle.module.css';

const CENTER = 50;
const PARTS = 12;
const RADIUS = 50;
const MIN_RADIUS = 15;
const PRECISION = 2;
const HALF = .5;

const center = { x: CENTER, y: CENTER };
const { startPoint, curves, control } = getCircleCurves(center, RADIUS, PARTS);

const circlePath = getCirclePath(startPoint, curves, PRECISION);

/**
 * @returns {string}
 */
const dentPath = () => {
	const dentedCurves = curves.slice();

	const positions = [];
	const radius = [];
	let count = Math.ceil(Math.random() + HALF);
	while (count--) {
		positions.push(Math.floor(Math.random() * PARTS));
		radius.push(Math.floor(Math.random() * (RADIUS - MIN_RADIUS)) + MIN_RADIUS);
	}
	const dentedStartPoint = dentCircleCurves(center, dentedCurves, control, positions, radius);

	const pathStart = dentedStartPoint || startPoint;

	return getCirclePath(pathStart, dentedCurves, PRECISION);
};

/**
 * @extends React.Component
 */
export class CircleDemo extends React.Component {
	/**
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.state = {
			demoPath: dentPath()
		};

		this.handleMouseEnterDemo = () => {
			this.setState({ demoPath: circlePath });
		};
		this.handleMouseLeaveDemo = () => {
			this.setState({ demoPath: dentPath() });
		};
	}

	/**
	 * @returns {React.ReactNode}
	 */
	render() {
		return (
			<React.Fragment>
				<p className={style.demoHint}>
					{'Hover over the circle to see a different random dent.'}
				</p>
				<svg viewBox="0 0 100 100">
					<path
						d={this.state.demoPath}
						className={style.demoPath}
						onMouseEnter={this.handleMouseEnterDemo}
						onMouseLeave={this.handleMouseLeaveDemo}
					/>
				</svg>
			</React.Fragment>
		);
	}
}
