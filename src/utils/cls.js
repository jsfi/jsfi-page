/**
 * @param {*[]} classNames
 * @returns {string}
 */
export const cls = (...classNames) => classNames
	.filter(Boolean)
	.join(' ');
