
import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import * as Yup from 'yup';

import { getEvent, getEventNatures, removeCurrentTemplate, updateEvent } from "src/store/actions"
import EditEventForm from "./EditEventForm"




function UpdateEvent(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()
	const params = useParams();
	useEffect(() => {
		dispatch(removeCurrentTemplate())
		dispatch(getEventNatures());
		dispatch(getEvent(params.id, props.history))
	}, [])
	const { event } = useSelector(state => ({
		event: state.Events.event,
	}));


	const initialValues = React.useMemo(() => {
		return {
			...event,
			banner_file: event.image_path || ''
		}
	}, [event])

	const validationSchema = React.useMemo(() => {
		return Yup.object().shape({
			event_name: Yup.string().required('Required'),
			event_name_chi: Yup.string().required('Required'),
			event_long_desc: Yup.string().required('Required'),
			event_long_desc_chi: Yup.string().required('Required'),
			event_desc: Yup.string().required('Required'),
			event_desc_chi: Yup.string().required('Required'),
			event_nature_id: Yup.string().required('Required'),
			start_date: Yup.string().required('Required'),
			end_date: Yup.string().required('Required'),
			// end_date: Yup
			// 	.date()
			// 	.when(
			// 		"start_date",
			// 		(start_date, schema) => start_date && schema.min(start_date)),
			top_most_ind: false,
			point_award: Yup.number().required('Required'),
			exp_earnded: Yup.number().required('Required'),
			max_daily_check_in: Yup.number().required('Required'),
			max_total_check_in: Yup.number().required('Required'),
			check_in_interval: Yup.number().required('Required'),
			banner_file: Yup.number().required('Required'),
			event_template_id: Yup.string().required('Required'),
		});
	}, [])
	const handleSubmit = (values) => {
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
		formData.append('image_path', values.image_path);
		formData.append('image_path_chi', values.image_path_chi);

		dispatch(updateEvent(values.event_id, formData, props.history))
	}

	useEffect(() => {
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EditEventForm isEdit={true} />
			</Formik>
		</div>

	)
}
export default UpdateEvent