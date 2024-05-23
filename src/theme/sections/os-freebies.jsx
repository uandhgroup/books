import React from 'react';
import { CtaImageButton } from '@hhftechtips/docusaurus-theme';

export const EsOsFreebies = (props) => {
	return (
		<CtaImageButton
			{...props}
			title='Find more libraries, tools, and design assets free for everyone to use.'
			buttonLabel='Open-source freebies'
			buttonUrl='https://hhftechtips.com/open-source'
			imageUrl='/img/homepage/hhftechtips-open-source.svg'
		/>
	);
};
