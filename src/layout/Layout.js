import React, { useState, useEffect } from "react"
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

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
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
		setSelected(bicycle)
	}

	const handleCreate = () => {
		setSelected({})
	}

	useEffect(() => {
		bicycles.length > 0 && setSelected(bicycles[0])
	},[bicycles])

	// list of bicycles
	const renderBicycleListDrawer = (bicycles) => {
		return (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{Array.isArray(bicycles) &&
						bicycles.length > 0 &&
						bicycles.map((bicycle) => (
							<ListItem
								button
								key={bicycle.id.toString()}
								onClick={() => handleSelect(bicycle.id)}
								selected={selected.id === bicycle.id}
							>
								<ListItemIcon>
									<DirectionsBike />
								</ListItemIcon>
								<ListItemText primary={bicycle.frameName} />
							</ListItem>
						))}
				</List>
				<button onClick={handleCreate}>Create New</button>
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
			<MainContent handleCreate={props.handleCreate} bicycle={selected} />
		</div>
	)
}

export default Layout
