import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import { cls } from '../utils/cls.js';

import styles from './side-nav.module.css';

const links = [{
	name: 'Contrast Ratio',
	to: '/contrast-ratio'
}, {
	name: 'SVG Circle',
	to: '/svg/circle'
}, {
	name: 'SVG Cross',
	to: '/svg/cross'
}, {
	name: 'SVG Hexagon',
	to: '/svg/hexagon'
}];

/**
 * @param {Object} props
 * @param {string} props.className
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const SideNav = ({ className: layoutClass }) => (
	<nav className={cls(layoutClass, styles.nav)}>
		<ul className={styles.list}>
			<li className={styles.homeItem}>
				<Link
					to="/"
					className={styles.link}
					activeClassName={styles.activeHomeLink}
				>
					<svg viewBox="0 0 24 24" className={styles.linkIcon}>
						<path d="M12 5.69l5 4.5V18h-2v-6H9v6H7V10.19l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
					</svg>
					<span className={styles.linkText}>
						{'Home'}
					</span>
				</Link>
			</li>
			{links.map(({ name, to }) => (
				<li className={styles.item} key={to}>
					<Link
						to={to}
						className={styles.link}
						activeClassName={styles.activeLink}
					>
						<svg viewBox="0 0 24 24" className={styles.linkIcon}>
							<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
						</svg>
						<span className={styles.linkText}>
							{name}
						</span>
					</Link>
				</li>
			))}
		</ul>
	</nav>
);

SideNav.propTypes = {
	className: PropTypes.string
};

SideNav.defaultProps = {
	className: ''
};
