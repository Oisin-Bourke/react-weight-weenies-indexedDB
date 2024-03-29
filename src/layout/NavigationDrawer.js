import React from "react"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
}))

const NavigationDrawer = (props) => {
	const { mobileOpen, handleDrawerToggle, children, container } =
		props
	const classes = useStyles()
	const theme = useTheme()

	return (
		<nav className={classes.drawer} aria-label='mailbox folders'>
			<Hidden smUp implementation='css'>
				<Drawer
					container={container}
					variant='temporary'
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={mobileOpen}
					onClose={handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{children}
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation='css'>
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant='permanent'
					open
				>
					{children}
				</Drawer>
			</Hidden>
		</nav>
	)
}

export default NavigationDrawer
