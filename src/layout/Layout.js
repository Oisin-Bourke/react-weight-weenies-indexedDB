import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DirectionsBike from "@material-ui/icons/DirectionsBike"
import { makeStyles } from "@material-ui/core/styles"

import HeaderAppBar from "./HeaderAppBar"
import NavigationDrawer from "./NavigationDrawer"
import MainContent from "./MainContent"

import { fetchById } from "../helpers/dbMethods"

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
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
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

function Layout(props) {
	const { window, bicycles } = props
	const classes = useStyles()
	const [mobileOpen, setMobileOpen] = useState(false)
	const [selected, setSelected] = useState({}) 

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const handleSelect = async (id) => {
		const bicycle = await fetchById(id)
		console.log('bicycle', bicycle)
		setSelected(bicycle)
	}

	// list of bicycle projects
	const renderBicycleListDrawer = (bicycles) => {
		return (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{Array.isArray(bicycles) &&
						bicycles.length > 0 &&
						bicycles.map((bicycle) => (
							<ListItem key={bicycle.id.toString()} button onClick={() => handleSelect(bicycle.id)}>
								<ListItemIcon>
									<DirectionsBike />
								</ListItemIcon>
								<ListItemText primary={bicycle.frameName} />
							</ListItem>
						))}
				</List>
			</div>
		)
	}

	const container =
		window !== undefined ? () => window().document.body : undefined


	// layout
	return (
		<div className={classes.root}>
			<CssBaseline />
			<HeaderAppBar handleDrawerToggle={handleDrawerToggle} />
			<NavigationDrawer
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
				container={container}
				children={renderBicycleListDrawer(bicycles)}
			/>
			<MainContent bicycle={selected} />
		</div>
	)
}

export default Layout
