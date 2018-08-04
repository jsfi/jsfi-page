import PropTypes from 'prop-types';
import React from 'react';

import styles from './github-corner.module.css';
import textStyles from './text.module.css';

/**
 * @param {Object} props
 * @param {string} props.className
 * @param {string} [props.root]
 * @param {string} [props.href]
 * @param {string} [props.text]
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const GithubCorner = ({ className, root, href, text }) => (
	<a
		className={className}
		href={href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<svg
			viewBox="0 0 250 250"
			className={root}
		>
			<defs>
				<mask id="m">
					<path
						d="M0 0h250v250z"
						fill="#fff"
					/>
					<path
						d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"
						className={styles.arm}
						fill="#000"
					/>
					<path
						d="M114.751 114.949c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6a23.512 23.512 0 0 1 15.9-7c.6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1a58.656 58.656 0 0 1 12.1 9.2 54.323 54.323 0 0 1 9.2 12.2c13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7a23.444 23.444 0 0 1-7.1 15.9c-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8l-11.7 11.6c-1.2 1.2.6 5.4.8 5.3z"
						fill="#000"
					/>
				</mask>
			</defs>
			<rect
				width="250"
				height="250"
				fill="currentColor"
				mask="url(#m)"
			/>
		</svg>
		<span className={textStyles.visuallyhidden}>
			{text}
		</span>
	</a>
);

GithubCorner.propTypes = {
	className: PropTypes.string.isRequired,
	root: PropTypes.string,
	href: PropTypes.string,
	text: PropTypes.string
};

GithubCorner.defaultProps = {
	root: styles.root,
	href: 'https://github.com/jsfi',
	text: 'Github'
};
