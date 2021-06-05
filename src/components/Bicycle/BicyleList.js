import React from "react"
import BicycleItem from "./BicycleItem"
import { PropTypes } from "prop-types"

const BicycleList = ({ bicycles }) => {
	const bicycleList =
		Array.isArray(bicycles) && bicycles.length > 0 ? (
			bicycles.map((bicycle) => (
				<BicycleItem key={bicycle.id.toString()} bicycle={bicycle} />
			))
		) : (
			<span>No Weight Weeny Projects Yet!</span>
		)

	return <ul>{bicycleList}</ul>
}

BicycleList.propTypes = {
	bicycles: PropTypes.array,
}

export default BicycleList
