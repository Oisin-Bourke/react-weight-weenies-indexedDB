import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}))

const HeaderAppBar = (props) => {
	const { handleDrawerToggle } = props
	const classes = useStyles()

	return (
		<AppBar position='fixed' className={classes.appBar}>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					edge='start'
					onClick={handleDrawerToggle}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' noWrap>
					Bicycle Weight Saving
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default HeaderAppBar
