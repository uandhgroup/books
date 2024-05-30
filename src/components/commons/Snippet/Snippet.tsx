/*
| Developed by Starton
| Filename : Snippet
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Typography, TypographyProps } from '@mui/material'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SnippetProps {}

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const lines = ['authelia', 
'bookstack', 
'calibre_readarr', 
'cloudbeaver', 
'clusterplex', 
'clusterplex_worker', 
'dizquetv', 
'ghost', 
'gluetun', 
'gotify', 
'grafana-prometheus', 
'grafana', 
'homepage', 
'immich', 
'kestra', 
'kimai', 
'nextcloud', 
'nginx', 
'node_exporter', 
'ntfy', 
'overseerr', 
'prometheus', 
'prowlarr', 
'pterodactyl', 
'qbittorrent', 
'radarr', 
'sonarr', 
'syncthing', 
'tautulli', 
'tdarr', 
'unpackerr', 
'uptime_kuma', 
'vaultwarden', 'watchtower'] as const

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const SnippetStyled = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: theme.palette.background.default,
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: theme.palette.divider,
	maxWidth: 400,
	width: '100%',
	minWidth: 'initial',
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.h5.fontSize,
		minWidth: 400,
	},
}))

const SnippetTypography = styled((props) => <Typography component={'span'} {...props} />)<TypographyProps>(
	({ theme }) => ({
		...theme.typography.caption,
		textTransform: 'uppercase',
		fontSize: 12,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.typography.h5.fontSize,
		},
	}),
)

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Snippet: React.FC<SnippetProps> = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevState) => (prevState + 1 >= lines.length ? 0 : prevState + 1))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	// Render
	//--------------------------------------------------------------------------
	return (
		<SnippetStyled>
			<SnippetTypography>
				<SnippetTypography color="primary.main">We love </SnippetTypography>
				<SnippetTypography color="text.primary">tech </SnippetTypography>
				<SnippetTypography color="warning.main">stacks ( "</SnippetTypography>
				<SnippetTypography color="text.primary">{lines[currentIndex]}</SnippetTypography>
				<SnippetTypography color="warning.main">" )</SnippetTypography>
			</SnippetTypography>
		</SnippetStyled>
	)
}
