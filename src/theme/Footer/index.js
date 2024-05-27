import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as infinumFooter } from '@hhftechtips/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<infinumFooter footer={footer} />
	);
}

export default React.memo(Footer);
