/**
 * @param {Object} point
 * @param {number} point.x
 * @param {number} point.y
 * @param {number} angle - radian
 * @param {number} distance
 * @returns {Point}
 */
export const translatePoint = ({ x, y }, angle, distance) => ({
	x: x + distance * Math.cos(angle),
	y: y + distance * Math.sin(angle)
});
