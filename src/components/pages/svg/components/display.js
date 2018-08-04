import PropTypes from 'prop-types';
import React from 'react';

import styles from './display.module.css';

/**
 * @param {Object} cssObject
 * @returns {string}
 */
const objToStyleText = cssObject => {
	const declarations = Object.entries(cssObject).map(([ property, value ]) =>
		`${property.replace(/[A-Z]/g, c =>
			`-${c.toLowerCase()}`)}: ${value}`);

	if (declarations.length) {
		return ` style="${declarations.join('; ')}"`;
	}

	return '';
};

/**
 * @param {Object} props
 * @param {string} props.viewBox
 * @param {string} props.shape
 * @param {React.CSSProperties} [props.pathStyle]
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Display = ({ viewBox, shape, pathStyle }) => (
	<div className={styles.displayWrapper}>
		<svg viewBox={viewBox} className={styles.svgElement}>
			<path d={shape} style={pathStyle} />
		</svg>
		<output className={styles.outputElement}>
			<pre className={styles.preElement}>
				{`<svg viewBox="${viewBox}">\n    <path d="${shape}"${objToStyleText(pathStyle)} />\n</svg>`}
			</pre>
		</output>
	</div>
);

Display.propTypes = {
	viewBox: PropTypes.string.isRequired,
	shape: PropTypes.string.isRequired,
	pathStyle: PropTypes.object
};

Display.defaultProps = {
	pathStyle: {}
};
