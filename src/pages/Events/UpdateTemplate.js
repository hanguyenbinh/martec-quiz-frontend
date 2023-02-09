
import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { getEventNatures, getTemplate, updateTemplate } from "src/store/actions"
import EditTemplateForm from "./EditTemplateForm"




function UpdateTemplate(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()
	const params = useParams();
	useEffect(() => {
		dispatch(getEventNatures());
		dispatch(getTemplate(params.id, props.history))
	}, [])
	const { template } = useSelector(state => ({
		template: state.Events.template,
	}));


	const initialValues = React.useMemo(() => {
		return {
			...template,
			banner_file: template.image_path || ''
		}
	}, [template])

	const validationSchema = React.useMemo(() => {
		return
	}, [])
	const handleSubmit = (values) => {
		const formData = new FormData();
		if (values.banner_file) {
			formData.append('image', values.banner_file);
		}
		if (values.isDraft) formData.append("isDraft", values.isDraft);

		formData.append('template_name', values.template_name);

		formData.append('event_name', values.event_name);
		formData.append('event_name_chi', values.event_name_chi);
		formData.append('event_long_desc', values.event_long_desc);
		formData.append('event_long_desc_chi', values.event_long_desc_chi);
		formData.append('event_desc', values.event_desc);
		formData.append('event_desc_chi', values.event_desc_chi);
		formData.append('event_type', values.event_type);
		formData.append('event_type_chi', values.event_type_chi);
		formData.append('point_award', values.point_award);


		if (values.event_nature_id) formData.append("event_nature_id", values.event_nature_id);
		if (values.start_date) formData.append("start_date", values.start_date);
		if (values.end_date) formData.append("end_date", values.end_date);
		if (values.top_most_ind || values.top_most_ind == 0) formData.append("top_most_ind", values.top_most_ind);
		if (values.max_daily_check_in || values.max_daily_check_in == 0) formData.append("max_daily_check_in", values.max_daily_check_in);
		if (values.max_total_check_in || values.max_total_check_in == 0) formData.append("max_total_check_in", values.max_total_check_in);
		if (values.check_in_interval || values.check_in_interval == 0) formData.append("check_in_interval", values.check_in_interval);





		dispatch(updateTemplate(values.event_template_id, formData, props.history))
	}

	useEffect(() => {
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EditTemplateForm isEdit={true} />
			</Formik>
		</div>

	)
}
export default UpdateTemplate