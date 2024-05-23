const {themes} = require('prism-react-renderer');

const darkTheme = themes.dracula;

module.exports = {
	title: 'HHF Digital Support Services Books',
	tagline: 'Maximize Your Homelab Potential with On-Premises-Hosting and Open-Source Security Solutions.',
	url: 'https://books.hhf.co.in',
	baseUrl: '/',
	favicon: '/img/favicon.png',
	organizationName: 'hhfbooks',
	projectName: 'hhfbooks-docs',
	staticDirectories: ['static'],
	scripts: [
		{
			src: 'https://buttons.github.io/buttons.js',
			async: true,
			defer: true,
		}
	],
	themeConfig: {
		navbar: {
			logo: {
				alt: 'HHF Digital Support Services Books',
				src: '/img/logo.svg',
			},
			items: [
				{
					to: 'docs/welcome',
					activeBasePath: 'docs',
					label: 'Manuals/Howtos/Tutorials',
					position: 'right',
				},
				{
					to: 'forms/welcome',
					activeBasePath: 'forms',
					label: 'DevOps',
					position: 'right',
				},
				{
					to: '/devkit-components/',
					activeBasePath: 'devkit-components',
					label: 'Tools',
					position: 'right',
				},
				{
					to: '/playground/',
					activeBasePath: 'playground',
					label: 'Playground',
					position: 'right',
				},
				{
					to: '/blog',
					activeBasePath: 'blog',
					label: 'Blog',
					position: 'right',
				},
				{
					to: '/showcase',
					activeBasePath: 'showcase',
					label: 'Cheat Sheets',
					position: 'right',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'Facebook',
							href: 'https://facebook.com/uandhgroupcom',
							icon: 'facebook',
						},
						{
							label: 'Instagram',
							href: 'https://instagram.com/uandhgroupcom/',
							icon: 'instagram',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/uandhgroup',
							icon: 'twitter',
						},
						{
							label: 'Clutch',
							href: 'https://clutch.co/profile/uandhgroup',
							icon: 'clutch',
						},
						{
							label: 'Dribbble',
							href: 'https://dribbble.com/uandhgroup',
							icon: 'dribbble',
						},
						{
							label: 'LinkedIn',
							href: 'https://linkedin.com/company/uandhgroup/',
							icon: 'linkedin',
						},
					],
				},
			],
			copyright: 'Complied with ❤️ by HHF Tech Tips.',
		},
		algolia: {
			appId: 'CWB1S6U3C4',
			apiKey: 'cbae3fc769aee256328548eff1e91c1c',
			indexName: 'uandhgroup_eightshift',
			startUrls: ['https://books.hhf.co.in', 'https://books.hhf.co.in/docs', 'https://books.hhf.co.in/forms'],
			contextualSearch: false,
		},
		prism: {
			theme: darkTheme,
			additionalLanguages: ['php', 'scss', 'css'],
		},
		colorMode: {
			defaultMode: 'light',
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			}
		},
		trailingSlash: false
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
				},
				gtag: {
					trackingID: 'GTM-P5GG5DH',
					anonymizeIP: true,
				},
				theme: {
					customCss: [
						require.resolve('./src/theme/styles.css'),
						require.resolve('@uandhgroup/docusaurus-theme/dist/style.css'),
					],
				},
				blog: {
					blogTitle: 'Tutorials and articles about Open-Source Development and Usage',
					blogDescription: 'Tutorials and articles about Open-Source Development and Usage',
					blogSidebarTitle: 'Latest posts',
					showReadingTime: true,
					postsPerPage: 9,
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
				},
			},
		],
	],
	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'forms',
				path: 'forms',
				routeBasePath: 'forms',
				sidebarPath: require.resolve('./sidebars-forms.js'),
			},
		],
		'es-text-loader',
	],
	customFields: {
		keywords: [
			'wordpress tools',
			'development tools',
			'wordpress project',
			'Gutenberg blocks',
			'development kit',
			'wordpress kit',
			'devkit'
		],
		image: 'img-why-boilerplate@2x.png',
	},
};
