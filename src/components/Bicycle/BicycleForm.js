import React from "react"
import { PropTypes } from "prop-types"
import { useFormik } from "formik"

const BicycleForm = (props) => {
	const { frameName, frameWeight } = props.bicycle
	
	const formik = useFormik({
		initialValues: {
			frameName: frameName || "",
			frameWeight: frameWeight || "",
		},
		onSubmit(values, actions) {
			props.handleCreate(values)
			//actions.resetForm()
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

BicycleForm.propTypes = {
	frameName: PropTypes.string,
	frameWeight: PropTypes.number,
	handleCreate: PropTypes.func,
}

export default BicycleForm
