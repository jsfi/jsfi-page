import { translatePoint } from '../utils/translate-point.js';
import { RAD_RIGHT_ANGLE, TAU } from '../constants.js';
import { getControlLength } from './get-control-length.js';

/**
 * @param {Point} center
 * @param {number} radius
 * @param {number} parts
 * @returns {{ startPoint: Point, curves: Curve[], control: number }}
 */
export const getCircleCurves = (center, radius, parts) => {
	const intervalAngle = TAU / parts;
	const control = getControlLength(parts, radius);
	const startPoint = translatePoint(center, 0, radius);

	let lastAngle = 0;
	let lastPoint = startPoint;

	const curves = Array.from({ length: parts }, (_, idx) => {
		const angle = (idx + 1) * intervalAngle;

		const point = translatePoint(center, angle, radius);
		const c1 = translatePoint(lastPoint, lastAngle + RAD_RIGHT_ANGLE, control);
		const c2 = translatePoint(point, angle - RAD_RIGHT_ANGLE, control);

		lastAngle = angle;
		lastPoint = point;

		return { c1, c2, point, angle };
	});

	return { startPoint, curves, control };
};
