const minX = 0;
const minY = 0;
const width = 100;
const height = 100;
const centerX = 50;
const centerY = 50;
const radius = 40;
const parts = 4;
const precision = 3;

const initialState = {
	minX,
	minY,
	width,
	height,
	centerX,
	centerY,
	radius,
	parts,
	precision
};

/**
 * @returns {Object}
 */
export const getInitialState = () => ({
	...initialState
});
