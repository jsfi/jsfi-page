import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../assets/favicon.ico';

import { Footer } from './footer.js';
import { Header } from './header.js';
import { SideNav } from './side-nav.js';

import './base.css';
import styles from './page.module.css';

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const DefaultPage = ({ title, children }) => (
	<React.Fragment>
		<Helmet>
			<html lang="en" />
			<title>
				{title}
			</title>
			<link
				rel="icon"
				href={favicon}
			/>
		</Helmet>
		<div className={styles.layout}>
			<Header className={styles.header} />
			<main className={styles.main}>
				<article className={styles.mainContent}>
					{children}
				</article>
			</main>
			<aside className={styles.side}>
				<SideNav className={styles.sideNav} />
			</aside>
			<Footer />
		</div>
	</React.Fragment>
);

DefaultPage.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
