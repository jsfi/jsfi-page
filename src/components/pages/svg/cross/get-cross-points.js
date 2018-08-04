import { translatePoint } from '../utils/translate-point.js';
import { RAD_RIGHT_ANGLE } from '../constants.js';

const BEAMS = 4;
const DEG_HALF_CIRCLE = 180;

/**
 * @param {Point} center
 * @param {number} radius
 * @param {number} stretch
 * @param {number} angleDeg
 * @returns {Point[]}
 */
export const getCrossPoints = (center, radius, stretch, angleDeg) => {
	const angleRad = angleDeg * Math.PI / DEG_HALF_CIRCLE;
	const angles = Array.from(
		{ length: BEAMS },
		(_, idx) => angleRad + RAD_RIGHT_ANGLE * idx
	);

	/**
	 * @param {Point[]} acc
	 * @param {number} currentAngle
	 * @returns {Point[]}
	 */
	const getPointsFromAngle = (acc, currentAngle) => {
		// Center top of the beam
		const beam = translatePoint(center, currentAngle, radius);

		// Right corner
		acc.push(translatePoint(beam, currentAngle - RAD_RIGHT_ANGLE, stretch));

		// Left corner
		const pointL = translatePoint(beam, currentAngle + RAD_RIGHT_ANGLE, stretch);
		acc.push(pointL);

		// Center between beams
		acc.push(translatePoint(pointL, currentAngle + Math.PI, radius - stretch));

		return acc;
	};

	return angles.reduce(getPointsFromAngle, []);
};
