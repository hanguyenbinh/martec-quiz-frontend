import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"


import { createPrize } from "src/store/actions"
import EditPrizeForm from "./EditPrizeForm"


function CreatePrize(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()


	const initialValues = React.useMemo(() => {
		return {
			banner_file: ''
		}
	}, [])

	const validationSchema = React.useMemo(() => {
		return
	}, [])
	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(true)

		dispatch(createPrize(values, props.history))
	}

	useEffect(() => {
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EditPrizeForm />
			</Formik>
			<ToastContainer></ToastContainer>
		</div>

	)
}

export default CreatePrize;