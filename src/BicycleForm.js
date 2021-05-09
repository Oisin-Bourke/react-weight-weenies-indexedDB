import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { useFormik } from 'formik'

const BicycleForm = ({ db }) => {

    const [bicycle, setBicycle] = useState({ frameName: '', frameWeight: 0, forkName: '', forkWeight: 0 })

    const formik = useFormik({
        initialValues: {
          frameName: '',
          frameWeight: 0,
          forkName: '',
          forkWeight: 0,
        },
        onSubmit: (values, actions) => {
          saveBicycle(values);
          actions.resetForm();
        },
    })

    useEffect(
        () => {
            console.log('Create the store/table...')
            db.version(1).stores({ bicycleData: '++id, values' })
        },
        // run effect when store changes (??) 
        [db]
    )


    const saveBicycle = values => {
        console.log('Saving biycle...')
        console.log('values', values)
        db.bicycleData.put({ values })
        setBicycle({values})
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="frameName">Frame:</label>
            <input 
                type="text" 
                name="frameName" 
                value={bicycle.frameName} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="frameWeight">Weight:</label>
            <input 
                type="number" 
                name="frameWeight" 
                value={formik.values.frameWeight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="forkName">Fork:</label>
            <input 
                type="text" 
                name="forkName" 
                value={formik.values.forkName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="forkWeight">Weight:</label>
            <input 
                type="number" 
                name="forkWeight" 
                value={formik.values.forkWeight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <button type="submit">Save</button>
        </form>
    )
} 

BicycleForm.propTypes = {
    //id: PropTypes.number,
    //frameName: PropTypes.string,
    //frameWeight: PropTypes.number,
    //forkName: PropTypes.string,
    //forkWeight: PropTypes.number,
    db: PropTypes.object,   
}

export default BicycleForm