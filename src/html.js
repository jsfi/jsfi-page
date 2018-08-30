import React from 'react';
import PropTypes from 'prop-types';

import favicon from './assets/favicon.ico';

/**
 * @param {Object} props
 * @param {Object} props.htmlAttributes
 * @param {Array} props.headComponents
 * @param {Object} props.bodyAttributes
 * @param {Array} props.preBodyComponents
 * @param {string} props.body
 * @param {Array} props.postBodyComponents
 * @returns {React.ReactElement<React.ReactNode>}
 */
const HTML = ({
	htmlAttributes,
	headComponents,
	bodyAttributes,
	preBodyComponents,
	body,
	postBodyComponents
}) => (
	<html lang="en" {...htmlAttributes}>
		<head>
			<meta charSet="utf-8" />
			<link
				rel="icon"
				href={favicon}
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, viewport-fit=cover"
			/>
			{headComponents}
		</head>
		<body {...bodyAttributes}>
			{preBodyComponents}
			<div
				key="body"
				id="___gatsby"
				dangerouslySetInnerHTML={{ __html: body }} // eslint-disable-line react/no-danger
			/>
			{postBodyComponents}
		</body>
	</html>
);

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array
};

HTML.defaultProps = {
	htmlAttributes: {},
	headComponents: [],
	bodyAttributes: {},
	preBodyComponents: [],
	body: '',
	postBodyComponents: []
};

export default HTML;
