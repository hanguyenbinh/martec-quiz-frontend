import { Formik } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { createPrize } from "src/store/actions"
import EditPrizeForm from "./EditPrizeForm"

import * as Yup from 'yup';


function CreatePrize(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()


	const initialValues = React.useMemo(() => {
		return {
			banner_file: ''
		}
	}, [])

	const validationSchema = Yup.object().shape({
		prize_name: Yup.string().required('Required'),
		prize_name_chi: Yup.string().required('Required'),
		prize_desc: Yup.string().required('Required'),
		prize_desc_chi: Yup.string().required('Required'),
		redeem_rule: Yup.string().required('Required'),
		redeem_rule_chi: Yup.string().required('Required'),
		in_stock_qty: Yup.number().required('Required'),
		start_date: Yup.string().required('Required'),
		expired_date: Yup.string().required('Required'),
		// status: Yup.number().required('Required'),
		// redeem_points: Yup.number().required('Required'),
		// redeem_once_ind: Yup.bool().nullable().required('Required'),
	});
	const handleSubmit = (values, { setSubmitting }) => {
		// setSubmitting(true)
		const formData = new FormData();
		if (values.banner_file) {
			formData.append('image', values.banner_file);
		}
		formData.append('prize_name', values.prize_name);
		formData.append('prize_name_chi', values.prize_name_chi);
		formData.append('prize_desc', values.prize_desc);
		formData.append('prize_desc_chi', values.prize_desc_chi);
		formData.append('redeem_rule', values.redeem_rule);
		formData.append('redeem_rule_chi', values.redeem_rule_chi);
		formData.append('in_stock_qty', values.in_stock_qty);
		formData.append('start_date', values.start_date);
		formData.append('expired_date', values.expired_date);
		formData.append('status', values.status);
		formData.append('redeem_points', values.redeem_points);
		formData.append('redeem_once_ind', values.redeem_once_ind);
		dispatch(createPrize(formData, props.history))
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
		</div>

	)
}

export default CreatePrize;