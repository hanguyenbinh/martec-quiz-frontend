import { Formik, useFormikContext } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
	Table
} from "reactstrap"

import BreadCrumb from "src/Components/Common/BreadCrumb"
import { getPrize, updatePrize } from "src/store/actions"
import EditPrizeForm from "./EditPrizeForm"

import classes from "./prize.module.scss"

function UpdatePrize(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()
	const params = useParams();
	useEffect(() => {
		dispatch(getPrize(params.id, props.history))
	}, [])
	const { prize } = useSelector(state => ({
		prize: state.Prizes.prize,
	}));

	console.log('UpdatePrize', prize)


	const initialValues = React.useMemo(() => {
		return {
			...prize,
			banner_file: prize?.image_path || ''
		}
	}, [prize])

	const validationSchema = React.useMemo(() => {
		return
	}, [])
	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(true)
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
		dispatch(updatePrize(values.prize_id, formData, props.history))
	}

	useEffect(() => {
		console.log('prize changed', initialValues)
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])
	console.log('get prize', prize);

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EditPrizeForm />
			</Formik>
			<ToastContainer></ToastContainer>
		</div>

	)
}

export default UpdatePrize;