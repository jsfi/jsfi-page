import PropTypes from 'prop-types';
import React from 'react';

import styles from './form.module.css';

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {React.FormEventHandler<HTMLFormElement>} props.onSubmit
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Form = ({ children, onSubmit }) => (
	<form action="" onSubmit={onSubmit} className={styles.form}>
		{children}
	</form>
);

Form.propTypes = {
	children: PropTypes.node.isRequired,
	onSubmit: PropTypes.func.isRequired
};
