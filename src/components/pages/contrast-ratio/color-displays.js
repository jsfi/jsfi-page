import Color from 'color';
import PropTypes from 'prop-types';
import React from 'react';

import { cls } from '../../../utils/cls.js';
import { Description } from './description.js';

import styles from './styles.module.css';

/**
 * @param {Object} props
 * @param {Color} props.backgroundColor
 * @param {Color} props.foregroundColor
 * @param {React.MouseEventHandler} props.onClick
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const ColorDisplays = ({ backgroundColor, foregroundColor, onClick }) => (
	<div className={styles.colorDisplays}>
		<section
			className={cls(styles.colorDisplay, styles.backgroundDisplay)}
			style={{ background: backgroundColor.toString(), color: foregroundColor.toString() }}
		>
			<Description />
		</section>
		<section
			className={cls(styles.colorDisplay, styles.foregroundDisplay)}
			style={{ background: foregroundColor.toString() }}
		>
			<button type="button" className={styles.swap} onClick={onClick}>
				{'↔ Swap colors'}
			</button>
			{' '}
		</section>
	</div>
);

ColorDisplays.propTypes = {
	backgroundColor: PropTypes.instanceOf(Color).isRequired,
	foregroundColor: PropTypes.instanceOf(Color).isRequired,
	onClick: PropTypes.func.isRequired
};
