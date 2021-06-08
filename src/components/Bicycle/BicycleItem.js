import React from "react"
import { PropTypes } from "prop-types"
import { useFormik } from "formik"

const BicycleItem = (props) => {
	console.log('new props')
	const { frameName, frameWeight } = props.bicycle
	
	const formik = useFormik({
		initialValues: {
			frameName: frameName || "",
			frameWeight: frameWeight || "",
		},
		onSubmit(values, actions) {
			props.handleAddBicycle(values)
			actions.resetForm()
		},
		enableReinitialize: true,
	})

	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor='frameName'>Frame:</label>
			<input
				type='text'
				name='frameName'
				value={formik.values.frameName}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<label htmlFor='frameWeight'>Weight:</label>
			<input
				type='number'
				name='frameWeight'
				value={formik.values.frameWeight}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<button type='submit'>Save</button>
		</form>
	)
}

BicycleItem.propTypes = {
	frameName: PropTypes.string,
	frameWeight: PropTypes.number,
	handleAddBicycle: PropTypes.func,
}

export default BicycleItem
