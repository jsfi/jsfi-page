import React from 'react';

/**
 * @returns {React.ReactElement<React.ReactNode>}
 */
export const Footer = () => (
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'http://schema.org',
			'@type': 'Person',
			'name': 'Martin Sachse',
			'givenName': 'Martin',
			'familyName': 'Sachse',
			'image': 'todo.png',
			'email': 'mailto:martin.sachse@gmail.com',
			'jobTitle': 'Front-end Developer',
			'url': 'http://jsfi.io',
			'sameAs': [
				'https://github.com/jsfi',
				'https://www.npmjs.com/~jsfi',
				'https://plus.google.com/+MartinSachse'
			],
			'birthdate': '1987-09-17',
			'nationality': 'DE'
		})}
	</script>
);
