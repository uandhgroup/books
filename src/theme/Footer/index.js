import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

import { Footer as uandhgroupFooter } from '@uandhgroup/docusaurus-theme';

function Footer() {
	const { footer } = useThemeConfig();

	return (
		<uandhgroupFooter footer={footer} />
	);
}

export default React.memo(Footer);
