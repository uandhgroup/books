/*
| Developed by Starton
| Filename : home-main-resources.config.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { HomeMainResourceItem } from 'src/components/pages/home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import ApiIcon from '@mui/icons-material/Api'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { LibraryOutlined } from '@site/src/components/icons'

export const HOME_MAIN_RESOURCES: Array<HomeMainResourceItem> = [
	{
		icon: <MenuBookIcon sx={{ fontSize: 24 }} />,
		title: 'Containers/Orchestration',
		description: 'Discover Starton features',
		href: '/docs/overview',
	},
	{
		icon: <ApiIcon sx={{ fontSize: 24 }} />,
		title: 'Networks',
		description: 'Test all of our endpoints',
		href: '/api-reference',
	},
	{
		icon: <BookmarkBorderIcon sx={{ fontSize: 24 }} />,
		title: 'Tutorials',
		description: 'Follow step-by-step guides',
		href: '/tutorials',
	},
	{
		icon: <LibraryOutlined sx={{ fontSize: 24 }} />,
		title: 'Guide',
		description: 'Dive into blockchain topics',
		href: '/guides/web3auth',
	},
	{
		icon: <LibraryOutlined sx={{ fontSize: 24 }} />,
		title: 'Manuals',
		description: 'Dive into blockchain topics',
		href: '/guides/web3auth',
	},
	{
		icon: <LibraryOutlined sx={{ fontSize: 24 }} />,
		title: 'Inspiring Lists',
		description: 'Dive into blockchain topics',
		href: '/guides/web3auth',
	},
	{
		icon: <LibraryOutlined sx={{ fontSize: 24 }} />,
		title: 'Cheat Sheets',
		description: 'Dive into blockchain topics',
		href: '/guides/web3auth',
	},
	{
		icon: <LibraryOutlined sx={{ fontSize: 24 }} />,
		title: 'Systems/Services',
		description: 'Dive into blockchain topics',
		href: '/guides/web3auth',
	},
]
