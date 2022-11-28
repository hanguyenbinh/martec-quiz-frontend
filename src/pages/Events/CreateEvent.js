
import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { geteventNatures, createEvent } from "src/store/actions"
import EditEventForm from "./EditEventForm"

function CreateEvent(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()
	useEffect(() => {
		dispatch(geteventNatures());
	}, [])



	const initialValues = React.useMemo(() => {
		return {
			event_name: '',
			event_name_chi: '',
			event_long_desc: '',
			event_long_desc_chi: '',
			event_desc: '',
			event_desc_chi: '',
			event_type: '',
			event_type_chi: '',
			event_nature_id: '',
			start_date: '',
			end_date: '',
			top_most_ind: false,
			point_award: 0,
			exp_earnded: 0,
			max_daily_check_in: 0,
			max_total_check_in: 1,
			check_in_interval: 0,
			banner_file: ''
		}
	}, [])

	const validationSchema = React.useMemo(() => {
		return
	}, [])
	const handleSubmit = (values, { setSubmitting }) => {
		console.log('create event', values);
		setSubmitting(true);
		const formData = new FormData();
		if (values.banner_file) {
			formData.append('image', values.banner_file);
		}
		formData.append('event_name', values.event_name);
		formData.append('event_name_chi', values.event_name_chi);
		formData.append('event_long_desc', values.event_long_desc);
		formData.append('event_long_desc_chi', values.event_long_desc_chi);
		formData.append('event_desc', values.event_desc);
		formData.append('event_desc_chi', values.event_desc_chi);
		formData.append('event_type', values.event_type);
		formData.append('event_type_chi', values.event_type_chi);
		formData.append('event_nature_id', values.event_nature_id);
		formData.append('start_date', values.start_date);
		formData.append('end_date', values.end_date);
		formData.append('top_most_ind', values.top_most_ind);
		formData.append('point_award', values.point_award);
		formData.append('exp_earnded', values.exp_earnded);
		formData.append('max_daily_check_in', values.max_daily_check_in);
		formData.append('max_total_check_in', values.max_total_check_in);
		formData.append('check_in_interval', values.check_in_interval);

		dispatch(createEvent(formData, props.history))
	}

	useEffect(() => {
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EditEventForm />

			</Formik>
		</div>

	)
}
export default CreateEvent