import PropTypes from 'prop-types';
import React from 'react';

import styles from './form.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.legend]
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Fieldset = ({ children, legend }) => (
	<fieldset className={styles.fieldset}>
		{legend && (<legend className={styles.legend}>{legend}</legend>)}
		{children}
	</fieldset>
);

Fieldset.propTypes = {
	children: PropTypes.node.isRequired,
	legend: PropTypes.string
};

Fieldset.defaultProps = {
	legend: ''
};
