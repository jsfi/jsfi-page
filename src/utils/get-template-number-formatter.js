import { getNumberFormatter } from './get-number-formatter.js';

/**
 * @param {number} precision
 * @returns {Function}
 */
export const getTemplateNumberFormatter = precision => {
	const numberFormatter = getNumberFormatter(precision);

	/**
	 * @param {string[]} parts
	 * @param {...(number|string)} values
	 * @returns {string}
	 */
	const toPrecision = (parts, ...values) => {
		const formattedValues = values.map(value => {
			if (typeof value === 'number') {
				return numberFormatter(value);
			}

			return value;
		});

		return parts.reduce((result, part, idx) => `${result}${part}${(typeof formattedValues[idx] === 'undefined'
			? ''
			: formattedValues[idx])}`, '');
	};

	return toPrecision;
};
