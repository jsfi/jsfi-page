const minX = 0;
const minY = 0;
const width = 100;
const height = 100;
const centerX = 50;
const centerY = 50;
const circumRadius = 50;
const cornerRadius = 10;
const precision = 3;

const initialState = {
	minX,
	minY,
	width,
	height,
	centerX,
	centerY,
	circumRadius,
	cornerRadius,
	precision
};

/**
 * @returns {Object}
 */
export const getInitialState = () => ({
	...initialState
});
