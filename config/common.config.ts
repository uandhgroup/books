/*
| Developed by HHF TechTips
| Filename : common.config.js
*/

import type { Config } from '@docusaurus/types'

export const commonConfig: Omit<Config, 'plugins' | 'i18n' | 'presets' | 'themeConfig'> = {
	title: 'HHF TECH TIPS BOOKS',
	tagline: 'The world of Open-source smplified with right path',
	baseUrl: '/',
	url: `https://books.hhf.co.in`,
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: '/img/logo.svg',
	staticDirectories: ['static'],

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'starton-io', // Usually your GitHub org/user name.
	projectName: 'starton-docs', // Usually your repo name.
}
