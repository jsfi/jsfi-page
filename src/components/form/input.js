import PropTypes from 'prop-types';
import React from 'react';

import styles from './form.module.css';

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {string} props.name
 * @param {string} props.value
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChange
 * @param {React.KeyboardEventHandler<HTMLInputElement>} [props.onKeyDown]
 * @param {string} [props.type]
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Input = ({ label, name, value, onChange, onKeyDown, type }) => (
	<label className={styles.element}>
		<span className={styles.label}>
			{label}
		</span>
		<input
			name={name}
			value={value}
			type={type}
			onChange={onChange}
			onKeyDown={onKeyDown}
			className={styles.input}
		/>
	</label>
);

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onKeyDown: PropTypes.func,
	type: PropTypes.string
};

Input.defaultProps = {
	type: 'text',
	onKeyDown: void 0
};
