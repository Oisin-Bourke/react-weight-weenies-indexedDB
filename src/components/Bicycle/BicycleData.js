import React, { useState, useEffect } from "react"
import {
	fetchAll,
	fetchById,
	deleteAll,
	addTestData,
	create,
} from "../../helpers/dbMethods"
import Layout from "../../layout/Layout"

const BicycleData = () => {
	const [bicycles, setBicycles] = useState([])

	useEffect(() => {
		const init = async () => {
			console.log("init data...")
			const promise1 = await deleteAll()
			const promise2 = await addTestData()
			await Promise.all([promise1, promise2])
			console.log("promise resolved")

			fetchAll().then((data) => {
				console.log("setting data", data)
				setBicycles(data)
			})
		}
		init()
	}, [])

	const handleCreate = (bicycle) => {
		create(bicycle).then(() => {
			const newBicycles = [...bicycles, bicycle]
			setBicycles(newBicycles)
		})
	}

	return (
		<div>
			<Layout
				bicycles={bicycles}
				handleCreate={handleCreate}
			></Layout>
		</div>
	)
}

export default BicycleData
