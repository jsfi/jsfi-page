import { RAD_RIGHT_ANGLE } from '../constants.js';

// eslint-disable-next-line no-magic-numbers
const FACTOR = 4 / 3; // https://stackoverflow.com/q/1734745#answer-27863181

/**
 * @param {number} parts
 * @param {number} radius
 * @returns {number}
 */
export const getControlLength = (parts, radius) => FACTOR * Math.tan(RAD_RIGHT_ANGLE / parts) * radius;
