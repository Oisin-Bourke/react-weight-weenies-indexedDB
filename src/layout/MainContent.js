import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import BicycleItem from "../components/Bicycle/BicycleItem"

const useStyles = makeStyles((theme) => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

const MainContent = (props) => {
	const { bicycle } = props
	const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography>
				<BicycleItem bicycle={bicycle} />
			</Typography>
		</main>
	)
}

export default MainContent
