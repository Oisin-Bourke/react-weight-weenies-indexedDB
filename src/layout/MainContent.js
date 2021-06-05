import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

const MainContent = () => {
    const classes = useStyles()

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography paragraph>Form here...</Typography>
		</main>
	)
}

export default MainContent
