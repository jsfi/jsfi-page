import Color from 'color';

const BLACK = new Color('#000');
const WHITE = new Color('#FFF');

/**
 * @param {Color} color1
 * @param {Color} color2
 * @returns {Color}
 */
const overlayOn = (color1, color2) => {
	const alpha1 = color1.alpha();

	if (alpha1 >= 1) {
		return color1;
	}

	const diffAlpha = 1 - alpha1;
	const alpha2 = color2.alpha();

	return (new Color([
		color1.red() * alpha1 + color2.red() * alpha2 * diffAlpha,
		color1.green() * alpha1 + color2.green() * alpha2 * diffAlpha,
		color1.blue() * alpha1 + color2.blue() * alpha2 * diffAlpha
	])).alpha(alpha1 + alpha2 * diffAlpha);
};

/**
 * @param {number} number
 * @param {number} decimals
 * @returns {number}
 */
const preciseRound = (number, decimals) => {
	const multiplier = Math.pow(10, decimals);

	return Math.round(number * multiplier) / multiplier;
};

const SLICE_START = 1;
const SLICE_END = 5;

/**
 * @param {...string} matches
 * @returns {string}
 */
const removeRepeatingHexValues = (...matches) => matches.slice(SLICE_START, SLICE_END).join('');

/**
 * @param {Color} color
 * @param {string} format
 * @returns {string}
 */
export const getColorString = (color, format) => {
	if (format.startsWith('#')) {
		return color.hex().replace(/^(#)(\w)\2(\w)\3(\w)\4$/, removeRepeatingHexValues);
	}

	if (format.startsWith('hsl')) {
		return color.hsl().toString();
	}

	return color.rgb().toString();
};

const RGB_CHANNEL_COUNT = 3;
const RGB_CHANNEL_MAX_VALUE = 255;
const OUTPUT_PRECISION = 2;
const MIN_MAX_DIVIDER = 2;
const LUMINANCE_OFFSET = .05;

/**
 * @param {Color} color1
 * @param {Color} color2
 * @returns {{ ratio: number, error: number, min: number, max: number }}
 */
export const getContrast = (color1, color2) => {
	// Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	const alpha = color1.alpha();

	if (alpha < 1) {
		/**
		 * If we’re here, it means we have a semi-transparent background
		 * The text color may or may not be semi-transparent, but that doesn't matter
		 */
		const { ratio: onBlack } = getContrast(overlayOn(color1, BLACK), color2);
		const { ratio: onWhite } = getContrast(overlayOn(color1, BLACK), color2);

		const max = Math.max(onBlack, onWhite);

		const color1Rgb = color1.rgb().array();
		const color2Rgb = color2.rgb().array();

		const closestRgb = Array.from({ length: RGB_CHANNEL_COUNT }, (_, index) => {
			const closestChannel = (color2Rgb[index] - color1Rgb[index] * alpha) / (1 - alpha);

			return Math.min(Math.max(0, closestChannel), RGB_CHANNEL_MAX_VALUE);
		});

		const closestColor = new Color(closestRgb);
		const { ratio: min } = getContrast(overlayOn(color1, closestColor), color2);

		return {
			ratio: preciseRound((min + max) / MIN_MAX_DIVIDER, OUTPUT_PRECISION),
			error: preciseRound((max - min) / MIN_MAX_DIVIDER, OUTPUT_PRECISION),
			min,
			max
		};
	}

	const l1 = color1.luminosity() + LUMINANCE_OFFSET;
	const l2 = (color2.alpha() < 1
		? overlayOn(color2, color1)
		: color2).luminosity() + LUMINANCE_OFFSET;

	let ratio = l1 / l2;
	if (l2 > l1) {
		ratio = 1 / ratio;
	}

	ratio = preciseRound(ratio, OUTPUT_PRECISION);

	return {
		ratio,
		error: 0,
		min: ratio,
		max: ratio
	};
};

/**
 * @param {Color} color
 * @returns {string}
 */
export const getLuminance = color => {
	const luminance = color.alpha() < 1
		? `${overlayOn(color, BLACK).luminosity()} - ${overlayOn(color, WHITE).luminosity()}`
		: color.luminosity();

	return `Relative luminance: ${luminance}`;
};
