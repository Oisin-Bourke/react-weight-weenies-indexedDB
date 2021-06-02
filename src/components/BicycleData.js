import React, { useState, useEffect } from "react"
import BicycleList from "./BicyleList"
import BicycleItem from "./BicycleItem"
import {
	fetchAllData,
	deleteAllData,
	addTestData,
	addBicyle,
} from "./dbMethods"

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
			<BicycleList bicycles={bicycles} />
			<BicycleItem handleAddBicycle={handleAddBicycle} bicycle={{}}/>
		</div>
	)
}

export default BicycleData
