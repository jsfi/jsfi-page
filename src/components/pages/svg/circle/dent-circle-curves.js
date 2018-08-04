import { translatePoint } from '../utils/translate-point.js';
import { RAD_RIGHT_ANGLE } from '../constants.js';

/**
 * @param {Point} center
 * @param {Curve[]} curves
 * @param {number} control
 * @param {number[]} positions
 * @param {number[]} radius
 * @returns {Point|void}
 */
export const dentCircleCurves = (center, curves, control, positions, radius) => { // eslint-disable-line max-params
	const lastCurveIdx = curves.length - 1;
	let startPoint;

	positions.forEach((position, idx) => {
		const curveIndex = position % curves.length;
		const isLast = curveIndex === lastCurveIdx;
		const next = isLast ? 0 : curveIndex + 1;

		const curve = curves[curveIndex];
		const point = {
			...curve.point,
			...translatePoint(center, curve.angle, radius[idx])
		};

		const c2 = {
			...curve.c2,
			...translatePoint(point, curve.angle - RAD_RIGHT_ANGLE, control)
		};

		curves[curveIndex] = { ...curve, ...{ c2, point }};

		const curveNext = curves[next];
		const c1 = {
			...curveNext.c1,
			...translatePoint(point, curve.angle + RAD_RIGHT_ANGLE, control)
		};

		curves[next] = { ...curveNext, ...{ c1 }};

		if (isLast) {
			startPoint = point;
		}
	});

	return startPoint;
};
