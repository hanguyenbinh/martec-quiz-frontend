import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { submitDefaultSubmissions } from "src/store/actions"
import DefaultSubmissionUploadForm from "./DefaultSubmissionUploadForm"


function DefaultSubmissionUpload(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()


	const initialValues = React.useMemo(() => {
		return {
			jsonFile: ''
		}
	}, [])

	const validationSchema = React.useMemo(() => {
		return
	}, [])
	const handleSubmit = (values, { setSubmitting }) => {
		const formData = new FormData();
		if (values.jsonFile) {
			formData.append('jsonFile', values.jsonFile);
		}
		dispatch(submitDefaultSubmissions(formData, props.history))
	}

	useEffect(() => {
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<DefaultSubmissionUploadForm />
			</Formik>
		</div>

	)
}

export default DefaultSubmissionUpload;