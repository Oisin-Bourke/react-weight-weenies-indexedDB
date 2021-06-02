import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import BicycleData from "./components/BicycleData"

const SimpleContainer = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Typography
					component='div'
					style={{ backgroundColor: "#fafafa", height: "100vh" }}
				>
					<div>Header</div>
					<div>
						<div>Sidebar</div>
						<div>Main</div>
					</div>
					<BicycleData />
				</Typography>
			</Container>
		</React.Fragment>
	)
}

export default SimpleContainer
