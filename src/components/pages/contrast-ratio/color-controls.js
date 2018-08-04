import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';

import { cls } from '../../../utils/cls.js';
import { createBackgroundGradient } from './create-background-gradient.js';
import { getContrast, getLuminance } from './color-helpers.js';

import styles from './styles.module.css';

const aaLargeLimit = 3;
const aaLimit = 4.5;
const aaaLimit = 4.5;

const levels = [{
	key: 'fail',
	message: 'Fails WCAG 2.0 :-(',
	min: 0,
	max: aaLargeLimit,
	color: 'hsl(0, 100%, 40%)'
}, {
	key: 'aa-large',
	message: 'Passes AA for large text (above 18pt or bold above 14pt)',
	min: aaLargeLimit,
	max: aaLimit,
	color: 'hsl(40, 100%, 45%)'
}, {
	key: 'aa',
	message: 'Passes AA level for any size text and AAA for large text (above 18pt or bold above 14pt)',
	min: aaLimit,
	max: aaaLimit,
	color: 'hsl(80, 60%, 45%)'
}, {
	key: 'aaa',
	message: 'Passes AAA level for any size text',
	min: aaaLimit,
	max: Infinity,
	color: 'hsl(95, 60%, 41%)'
}];

const semitransparentMessage = 'The background is semi-transparent,'
	+ 'so the contrast ratio cannot be precise.'
	+ 'Depending on what’s going to be underneath,'
	+ ' it could be any of the following:';

/**
 * @param {Object} props
 * @param {string} props.backgroundValue
 * @param {Color} props.backgroundColor
 * @param {string} props.foregroundValue
 * @param {Color} props.foregroundColor
 * @param {React.ChangeEventHandler} props.onChangeBackground
 * @param {React.KeyboardEventHandler} props.onKeyDownBackground
 * @param {React.ChangeEventHandler} props.onChangeForeground
 * @param {React.KeyboardEventHandler} props.onKeyDownForeground
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const ColorControls = ({
	backgroundValue,
	backgroundColor,
	onChangeBackground,
	onKeyDownBackground,
	foregroundValue,
	foregroundColor,
	onChangeForeground,
	onKeyDownForeground
}) => {
	const { min, max, ratio, error } = getContrast(backgroundColor, foregroundColor);
	const validLevels = levels.filter(({ min: levelMin, max: levelMax }) => min < levelMax && max >= levelMin);

	const outputBackground = validLevels.length === 1
		? validLevels[0].color
		: createBackgroundGradient(validLevels, min, max);

	return (
		<div className={styles.colorControl}>
			<h1 className={styles.title}>
				<span className={cls(styles.titleInner, styles.titleInnerFirst)}>
					<span className={cls(styles.titleText, styles.titleTextFirst)}>
						{'Contrast'}
					</span>
				</span>
				{' '}
				<span className={styles.titleInner}>
					<span className={styles.titleText}>
						{'ratio'}
					</span>
				</span>
			</h1>
			<label className={styles.background}>
				<span className={styles.backgroundInner}>
					{'Background:'}
				</span>
				{' '}
				<input
					className={styles.backgroundInput}
					value={backgroundValue}
					autoFocus
					title={getLuminance(backgroundColor)}
					style={{ width: `${backgroundValue.length}ch` }}
					onChange={onChangeBackground}
					onKeyDown={onKeyDownBackground}
				/>
			</label>
			<label className={styles.foreground}>
				<span className={styles.foregroundInner}>
					{'Text color:'}
				</span>
				{' '}
				<input
					className={styles.foregroundInput}
					value={foregroundValue}
					title={getLuminance(foregroundColor)}
					style={{ width: `${foregroundValue.length}ch` }}
					onChange={onChangeForeground}
					onKeyDown={onKeyDownForeground}
				/>
			</label>
			<output
				className={cls(styles.output, ...validLevels.map(level => level.key))}
				style={{ background: outputBackground }}
			>
				<strong className={styles.ratio}>
					{ratio}
				</strong>
				{error > 0 && (
					<React.Fragment>
						{' '}
						<span className={styles.error} title={`${min} - ${max}`}>
							{`±${error}`}
						</span>
					</React.Fragment>
				)}
			</output>
			<section className={styles.results}>
				{validLevels.length === 1
					? validLevels[0].message
					: (
						<React.Fragment>
							<p>
								{semitransparentMessage}
							</p>
							<ul>
								{validLevels.map(({ key, message }) => (
									<li key={key}>
										{message}
									</li>
								))}
							</ul>
						</React.Fragment>
					)
				}
			</section>
		</div>
	);
};

ColorControls.propTypes = {
	backgroundValue: PropTypes.string.isRequired,
	backgroundColor: PropTypes.instanceOf(Color).isRequired,
	foregroundValue: PropTypes.string.isRequired,
	foregroundColor: PropTypes.instanceOf(Color).isRequired,
	onChangeBackground: PropTypes.func.isRequired,
	onKeyDownBackground: PropTypes.func.isRequired,
	onChangeForeground: PropTypes.func.isRequired,
	onKeyDownForeground: PropTypes.func.isRequired
};
