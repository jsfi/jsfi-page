/* eslint-disable no-magic-numbers */

const DEG_TO_RAD_FAKTOR = Math.PI / 180;

/**
 * @param {number} n
 * @returns {number}
 */
export const half = n => n / 2;

export const IN_RADIUS_ANGLE = DEG_TO_RAD_FAKTOR * 30;
export const RAD_RIGHT_ANGLE = half(Math.PI);
export const TAU = Math.PI * 2;
