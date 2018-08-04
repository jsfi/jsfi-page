import PropTypes from 'prop-types';
import React from 'react';

import styles from './form.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Row = ({ children }) => (
	<div className={styles.row}>
		{children}
	</div>
);

Row.propTypes = {
	children: PropTypes.node.isRequired
};
