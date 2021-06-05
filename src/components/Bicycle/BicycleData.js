import React, { useState, useEffect } from "react"
import {
	fetchAllData,
	deleteAllData,
	addTestData,
	addBicyle,
} from "../../helpers/dbMethods"
import Layout from "../../layout/Layout"

const BicycleData = () => {
	const [bicycles, setBicycles] = useState([])

	useEffect(() => {
		console.log("init data...")
		const init = async () => {
			const promise1 = deleteAllData()
			const promise2 = addTestData()
			await Promise.all([promise1, promise2])

			fetchAllData().then((data) => {
				setBicycles(data)
			})
		}
		init()
	}, [])

	const handleAddBicycle = (bicycle) => {
		addBicyle(bicycle).then(() => {
			const newBicycles = [...bicycles, bicycle]
			setBicycles(newBicycles)
		})
	}

	return (
		<div>
			<Layout bicycles={bicycles}></Layout>
		</div>
	)
}

export default BicycleData
