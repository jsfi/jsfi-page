import PropTypes from 'prop-types';
import React from 'react';

import { cls } from '../utils/cls.js';
import { HeaderBackground } from './header-background.js';
import { GithubCorner } from './github-corner.js';

import styles from './header.module.css';

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Header = ({ className: layoutClass }) => (
	<header className={cls(layoutClass, styles.header)}>
		<HeaderBackground className={styles.background} />
		<GithubCorner className={styles.corner} />
	</header>
);

Header.propTypes = {
	className: PropTypes.string
};

Header.defaultProps = {
	className: ''
};
