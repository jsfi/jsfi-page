import Color from 'color';
import React from 'react';
import { Helmet } from 'react-helmet';

import { ColorControls } from './color-controls.js';
import { ColorDisplays } from './color-displays.js';
import { GithubCorner } from './github-corner.js';
import { getColorString } from './color-helpers.js';

import '../../base.css';
import styles from './styles.module.css';

/**
 * @param {string} property
 * @returns {string}
 */
const valueKey = property => `${property}Value`;

/**
 * @param {string} property
 * @returns {string}
 */
const colorKey = property => `${property}Color`;

/**
 * @param {string|null} param
 * @returns {Color?}
 */
const parseColorParam = param => {
	if (param) {
		try {
			return new Color(param);
		} catch (error) { }
	}

	return null;
};

/**
 * @param {Object} colors
 * @param {string?} backgroundValue
 * @param {string?} foregroundValue
 */
const updateColors = (colors, backgroundValue, foregroundValue) => {
	if (backgroundValue) {
		colors.backgroundValue = backgroundValue;
	}

	const backgroundColor = parseColorParam(backgroundValue);
	if (backgroundColor) {
		colors.backgroundColor = backgroundColor;
	}

	if (foregroundValue) {
		colors.foregroundValue = foregroundValue;
	}

	const foregroundColor = parseColorParam(foregroundValue);
	if (foregroundColor) {
		colors.foregroundColor = foregroundColor;
	}
};

/**
 * @param {string} backgroundValue
 * @param {string} foregroundValue
 * @returns {string}
 */
const getTitle = (backgroundValue, foregroundValue) => `${backgroundValue} - ${foregroundValue}`;

const shiftMultiplier = 10;

const keyArrowUp = 38;
const keyArrowDown = 40;
const keyDirections = new Map([
	[ keyArrowUp, 1 ],
	[ keyArrowDown, -1 ]
]);

const faviconSize = 16;
const faviconHalfSize = 8;

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
export class ContrastRatio extends React.Component {
	/**
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);

		this.canvas = React.createRef();

		this.state = this.initColors();

		this.handleChangeBackground = this.handleChange.bind(this, 'background');
		this.handleChangeForeground = this.handleChange.bind(this, 'foreground');

		this.handleKeyDownBackground = this.handleKeyDown.bind(this, 'background');
		this.handleKeyDownForeground = this.handleKeyDown.bind(this, 'foreground');

		this.handleSwap = this.handleSwap.bind(this);
	}

	/**
	 * @returns {{ backgroundValue: string, backgroundColor: Color, foregroundValue: string, foregroundColor: Color }}
	 */
	initColors() {
		const initBackground = 'white';
		const initForeground = 'hsla(200,0%,0%,.7)';

		const colors = {
			backgroundValue: initBackground,
			backgroundColor: new Color(initBackground),
			foregroundValue: initForeground,
			foregroundColor: new Color(initForeground)
		};

		// Check for window to support server rendering
		if (typeof document !== 'undefined' && typeof URLSearchParams !== 'undefined') {
			const params = new URLSearchParams(document.location.search.substring(1));
			this.searchParams = params;

			updateColors(colors, params.get('bg'), params.get('fg'));
		}

		return colors;
	}

	/**
	 * @param {string} property
	 * @param {React.ChangeEvent<HTMLInputElement>} event
	 */
	handleChange(property, event) {
		const {
			target: { value }
		} = event;

		try {
			const color = new Color(value);

			this.setState(() => ({
				[valueKey(property)]: value,
				[colorKey(property)]: color
			}));
		} catch (error) {
			this.setState(() => ({ [valueKey(property)]: value }));
		}
	}

	/**
	 * @param {string} property
	 * @param {React.KeyboardEvent<HTMLInputElement>} event
	 */
	handleKeyDown(property, event) {
		const { keyCode, shiftKey } = event;

		const direction = keyDirections.get(keyCode);
		if (!direction) {
			return;
		}

		// @ts-ignore
		const currentValue = this.state[valueKey(property)];

		try {
			const color = new Color(currentValue);

			const updatedColor = color.lightness(color.lightness() + direction * (shiftKey ? shiftMultiplier : 1));
			const updateValue = getColorString(updatedColor, currentValue);

			this.setState(() => ({
				[valueKey(property)]: updateValue,
				[colorKey(property)]: updatedColor
			}));

			event.preventDefault();
		} catch (error) {
		}
	}

	/**
	 * @returns {void}
	 */
	handleSwap() {
		/**
		 * @param {Object} state
		 * @returns {Object}
		 */
		const updateState = ({
			backgroundValue: foregroundValue,
			backgroundColor: foregroundColor,
			foregroundValue: backgroundValue,
			foregroundColor: backgroundColor
		}) => ({
			backgroundValue,
			backgroundColor,
			foregroundValue,
			foregroundColor
		});
		this.setState(updateState);
	}

	/**
	 * @returns {string}
	 */
	getFavicon() {
		const context = this.canvas2dContext;
		if (!context) {
			return 'about:blank';
		}

		context.clearRect(0, 0, faviconSize, faviconSize);

		context.fillStyle = this.state.backgroundColor.toString();
		context.fillRect(0, 0, faviconHalfSize, faviconSize);

		context.fillStyle = this.state.foregroundColor.toString();
		context.fillRect(faviconHalfSize, 0, faviconHalfSize, faviconSize);

		return this.canvas.current.toDataURL();
	}

	/**
	 * @returns {void}
	 */
	componentDidMount() {
		this.canvas2dContext = this.canvas.current.getContext('2d');

		if (this.searchParams) {
			this.popstateListener = () => {
				const popParams = new URLSearchParams(document.location.search.substring(1));

				const updatedColors = {};
				updateColors(updatedColors, popParams.get('bg'), popParams.get('fg'));

				this.setState(() => (updatedColors));
			};
			window.addEventListener('popstate', this.popstateListener);
		}
	}

	/**
	 * @param {Object} _
	 * @param {Object} prevState
	 */
	componentDidUpdate(_, prevState) {
		if (this.searchParams) {
			const {
				backgroundValue,
				backgroundColor,
				foregroundValue,
				foregroundColor
			} = this.state;
			const {
				backgroundColor: lastBackgroundColor,
				foregroundColor: lastForegroundColor
			} = prevState;

			if (backgroundColor !== lastBackgroundColor
				|| foregroundColor !== lastForegroundColor
			) {
				const lastUrl = location.search
					? location.href.substr(0, location.href.indexOf('?'))
					: location.href;

				this.searchParams.set('bg', backgroundValue);
				this.searchParams.set('fg', foregroundValue);

				const title = getTitle(backgroundValue, foregroundValue);
				const url = `${lastUrl}?${this.searchParams.toString()}`;
				history.replaceState(void 0, title, url);
			}
		}
	}

	/**
	 * @returns {void}
	 */
	componentWillUnmount() {
		if (this.popstateListener) {
			window.removeEventListener('popstate', this.popstateListener);
		}
	}

	/**
	 * @returns {React.ReactNode}
	 */
	render() {
		const {
			backgroundValue,
			backgroundColor,
			foregroundValue,
			foregroundColor
		} = this.state;

		return (
			<div className={styles.colorContrast}>
				<Helmet>
					<title>
						{getTitle(backgroundValue, foregroundValue)}
					</title>
					<link
						rel="icon"
						type="image/png"
						href={this.getFavicon()}
					/>
				</Helmet>
				<ColorDisplays
					backgroundColor={backgroundColor}
					foregroundColor={foregroundColor}
					onClick={this.handleSwap}
				/>
				<ColorControls
					backgroundValue={backgroundValue}
					backgroundColor={backgroundColor}
					foregroundValue={foregroundValue}
					foregroundColor={foregroundColor}
					onChangeBackground={this.handleChangeBackground}
					onKeyDownBackground={this.handleKeyDownBackground}
					onChangeForeground={this.handleChangeForeground}
					onKeyDownForeground={this.handleKeyDownForeground}
				/>
				<GithubCorner backgroundColor={backgroundColor} />
				<canvas
					ref={this.canvas}
					width="16"
					height="16"
					className={styles.canvas}
				/>
			</div>
		);
	}
}
