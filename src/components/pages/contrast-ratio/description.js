import React from 'react';

import styles from './styles.module.css';

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Description = () => (
	<div className={styles.colorDisplayInner}>
		<h2 className={styles.colorDisplayTitle}>
			{'How to use'}
		</h2>
		<p>
			{'As you type, the contrast ratio indicated will update. '}
			{'Hover over the circle to get more detailed information. '}
			{'When semi-transparent colors are involved as backgrounds,'}
			{' the contrast ratio will have an error margin,'}
			{' to account for the different colors they may be over.'}
		</p>
		<p style={{ fontFamily: 'Garamond, "Palatino Linotype", Georgia, serif' }}>
			{'This sample text attempts to visually demonstrate how readable this color combination is, for normal or '}
			<strong>
				{'bold'}
			</strong>
			{' text of various sizes and font styles.'}
		</p>
		<div className={styles.hint}>
			<p>
				<strong>
					{'Hint: '}
				</strong>
				{'Press the up or down keyboard arrows while over a color to lighten or darken it. Try with the Shift key too!'}
			</p>
		</div>
		<footer className={styles.colorDisplayFooter}>
			{'By '}
			<a
				href="http://lea.verou.me"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.link}
			>
				{'Lea Verou'}
			</a><br />
			{'Edited By '}
			<a
				href="https://jsfi.io"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.link}
			>
				{'Martin Sachse'}
			</a>
			{' • '}
			<a
				href="http://www.w3.org/TR/WCAG/#visual-audio-contrast"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.link}
			>
				{'WCAG 2.0 on contrast ratio'}
			</a>
		</footer>
	</div>
);
