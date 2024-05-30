/*
| Developed by Starton
| Filename : index2.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import { HomeFeaturesTour, HomeMainResources, HomeServices, HomeTutorials } from '@site/src/components/pages/home'
import { RecentTutorial } from '@site/plugins/starton-tutorial-plugin/types'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeProps {
	recentTutorials: Array<RecentTutorial>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Home(props: HomeProps) {
	return (
		<Layout title="A collection of inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools, and more.">
			{/* HERO BANNER */}
			<PageHeader
				subTitle={'All notes for Digital Support Services'}
				title={
					<React.Fragment>
						HHF TechTips<span>Books</span>
					</React.Fragment>
				}
			/>
			<Box paddingBottom={11}>
				<HomeServices />
				<HomeMainResources />
				<HomeTutorials recentTutorials={props.recentTutorials} />
				<HomeFeaturesTour />
			</Box>
		</Layout>
	)
}

export default Home
