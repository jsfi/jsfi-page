/**
 * @param {number} value
 * @returns {number}
 */
export const getPrecision = value => {
	const string = String(value);
	const positionDecimalPoint = string.indexOf('.');

	if (positionDecimalPoint > -1) {
		return string.substr(positionDecimalPoint).length;
	}

	return 0;
};
