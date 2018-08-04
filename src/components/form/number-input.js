import PropTypes from 'prop-types';
import React from 'react';

import { getNumberFormatter } from '../../utils/get-number-formatter.js';
import { getPrecision } from '../../utils/get-precision.js';
import { Input } from './input.js';

const DIFF = 1;
const DIFF_ALT = 0.1;
const DIFF_SHIFT = 10;
const DIFF_META = 100;
const DIRECTION_ASC = 1;
const DIRECTION_DESC = -1;
const KEY_DOWN = 40;
const KEY_UP = 38;
const DIRECTIONS = { [KEY_UP]: DIRECTION_ASC, [KEY_DOWN]: DIRECTION_DESC };

/**
 * @param {React.KeyboardEvent<HTMLInputElement>} event
 * @returns {number}
 */
const getDiff = event => {
	if (event.altKey) {
		return DIFF_ALT;
	}

	if (event.shiftKey) {
		return DIFF_SHIFT;
	}

	if (event.metaKey) {
		return DIFF_META;
	}

	return DIFF;
};

/**
 * @extends React.Component
 */
export class NumberInput extends React.Component {
	/**
	 * @param {Object} props
	 * @param {number} props.initialValue
	 */
	constructor(props) {
		super(props);

		const { initialValue } = props;

		this.state = {
			// https://github.com/yannickcr/eslint-plugin-react/issues/1697
			// eslint-disable-next-line react/no-unused-state
			value: initialValue,
			inputValue: String(initialValue)
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	/**
	 * @param {number} value
	 */
	updateValue(value) {
		this.props.onChange(this.props.name, value);
	}

	/**
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	handleChange({ target: { value }}) {
		const parsedValue = parseFloat(value);

		let updateState;
		if (Number.isNaN(parsedValue)) {
			updateState = () => ({
				inputValue: value
			});
		} else {
			updateState = () => ({
				value: parsedValue,
				inputValue: value
			});

			this.updateValue(parsedValue);
		}

		this.setState(updateState);
	}

	/**
	 * @param {React.KeyboardEvent<HTMLInputElement>} event
	 */
	handleKeyDown(event) {
		const direction = DIRECTIONS[
			event.keyCode
		];

		if (!direction) {
			return;
		}

		event.preventDefault();

		const diff = getDiff(event);

		/**
		 * @param {Object} state
		 * @returns {Object}
		 */
		const updateState = state => {
			/** @type {{value: number}} */
			const { value } = state;
			const precision = Math.max(getPrecision(value), getPrecision(diff));
			const nextValue = getNumberFormatter(precision)(
				value + diff * direction
			);

			this.updateValue(nextValue);

			return {
				value: nextValue,
				inputValue: String(nextValue)
			};
		};

		this.setState(updateState);
	}

	/**
	 * @returns {React.ReactElement<React.ReactNode>}
	 */
	render() {
		const { label, name } = this.props;
		const { inputValue } = this.state;

		return (
			<Input
				label={label}
				name={name}
				value={inputValue}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
}

NumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	initialValue: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};
