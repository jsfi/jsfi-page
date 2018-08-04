import PropTypes from 'prop-types';
import React from 'react';

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const HeaderBackground = ({ className }) => (
	<svg className={className}>
		<svg viewBox="0 0 3 2" preserveAspectRatio="xMidYMid slice">
			<path d="M0 0h2L0 2z" fill="#f3df49" />
			<path d="M2 0h1L1 2H0z" fill="#7dbf38" />
			<path d="M3 2H1l2-2z" fill="#e2007a" />
		</svg>
		<svg viewBox="-4 -4 40 40" className={className}>
			<defs>
				<pattern
					id="p"
					patternUnits="userSpaceOnUse"
					width="100%"
					height="100%"
				>
					<path
						d="M16 16l13.86 8a16 16 0 0 1-27.72 0z"
						fill="#7dbf38"
					/>
					<path
						d="M16 16V0A16 16 0 0 0 2.14 24z"
						fill="#f3df49"
					/>
					<path
						d="M16 16V0a16 16 0 0 1 13.86 24z"
						fill="#e2007a"
					/>
				</pattern>
			</defs>
			<path
				d="M3.01 8.5l12.99 -7.5l12.99 7.5v15l-12.99 7.5l-12.99 -7.5z"
				fill="#fff"
				stroke="#fff"
				strokeWidth="4"
				strokeLinejoin="round"
			/>
			<path
				d="M3.88 9L16 2l12.12 7v14L16 30 3.88 23z"
				fill="url(#p)"
				fillOpacity=".5"
				stroke="url(#p)"
				strokeWidth="4"
				strokeLinejoin="round"
				strokeOpacity=".5"
			/>
			<path
				d="M4.87 9.57L16 3.15l11.13 6.42v12.85L16 28.85 4.87 22.42z"
				fill="none"
				stroke="url(#p)"
				strokeWidth="2"
			/>
		</svg>
	</svg>
);

HeaderBackground.propTypes = {
	className: PropTypes.string
};

HeaderBackground.defaultProps = {
	className: ''
};
