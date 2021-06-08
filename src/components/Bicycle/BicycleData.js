import React, { useState, useEffect } from "react"
import {
	fetchAllData,
	fetchById,
	deleteAllData,
	addTestData,
	addBicyle,
} from "../../helpers/dbMethods"
import Layout from "../../layout/Layout"

const BicycleData = () => {
	const [bicycles, setBicycles] = useState([])

	useEffect(() => {
		const init = async () => {
			console.log("init data...")
			const promise1 = await deleteAllData()
			const promise2 = await addTestData()
			await Promise.all([promise1, promise2])
			console.log('promise resolved')

			fetchAllData().then((data) => {
				console.log('setting data',data)
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
			{<Layout bicycles={bicycles}></Layout>}
		</div>
	)
}

export default BicycleData
