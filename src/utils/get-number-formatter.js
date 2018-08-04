const BASE_DEC = 10;

/**
 * @param {number} precision
 * @returns {Function}
 */
export const getNumberFormatter = precision => {
	const factor = Math.pow(BASE_DEC, precision);

	/**
	 * @param {number} value
	 * @returns {number}
	 */
	const formatNumber = value => Math.round(value * factor) / factor;

	return formatNumber;
};
