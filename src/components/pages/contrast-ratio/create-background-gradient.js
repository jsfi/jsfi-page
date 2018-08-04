const TO_PERCENTAGE = 100;

/**
 * @typedef {Object} stop
 * @property {string} color
 * @property {number} stop
 */

/**
 * @param {{ min: number, max: number, color: string }[]} validLevels
 * @param {number} min
 * @param {number} max
 * @returns {string}
 */
export const createBackgroundGradient = (validLevels, min, max) => {
	const range = max - min;
	const percentageFactor = TO_PERCENTAGE / range;

	/**
	 * @param {{ color: string, stop: number}[]} rStops
	 * @param {*} param1
	 * @param {*} index
	 * @returns {stop[]}
	 */
	const createStops = (rStops, { min: levelMin, max: levelMax, color }, index) => {
		const previous = rStops[index - 1];
		const previousStop = previous ? previous.stop : 0;

		const distance = (max < levelMax ? max : levelMax) - (levelMin < min ? min : levelMin);
		const percentage = distance * percentageFactor;
		const stop = percentage + previousStop;

		rStops[index] = {
			color,
			stop
		};

		return rStops;
	};
	const stops = validLevels.reduce(createStops, []);

	/**
	 * @param {stop} stop
	 * @param {number} index
	 * @returns {string}
	 */
	const createGradientString = ({ color, stop }, index) =>
		`${color} ${stops[index - 1] ? stops[index - 1].stop : 0}%, ${color} ${stop}%`;

	const gradientStops = stops.map(createGradientString);

	return `linear-gradient(135deg, ${gradientStops.join(', ')})`;
};
