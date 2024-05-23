import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as hhftechtipsFooter } from '@hhftechtips/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<hhftechtipsFooter footer={footer} />
	);
}

export default React.memo(Footer);
