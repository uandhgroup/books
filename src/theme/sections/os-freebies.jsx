import React from 'react';
import { CtaImageButton } from '@uandhgroup/docusaurus-theme';

export const EsOsFreebies = (props) => {
	return (
		<CtaImageButton
			{...props}
			title='Find more libraries, tools, and design assets free for everyone to use.'
			buttonLabel='Open-source freebies'
			buttonUrl='https://uandhgroup.com/open-source'
			imageUrl='/img/homepage/uandhgroup-open-source.svg'
		/>
	);
};
