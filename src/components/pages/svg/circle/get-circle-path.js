import { getTemplateNumberFormatter } from '../../../../utils/get-template-number-formatter.js';

/**
 * @param {Point} startPoint
 * @param {Curve[]} curves
 * @param {number} precision
 * @returns {string}
 */
export const getCirclePath = (startPoint, curves, precision) => {
	const toPrecision = getTemplateNumberFormatter(precision);

	return (
		toPrecision`M${startPoint.x} ${startPoint.y} ${curves
			.map(
				({
					c1: { x: c1x, y: c1y },
					c2: { x: c2x, y: c2y },
					point: { x, y }
				}) => toPrecision`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`
			)
			.join('')}`
	);
};
