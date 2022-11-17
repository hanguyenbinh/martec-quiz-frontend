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

import classes from "./UpdatePrize.module.scss"

function EditPrizeForm() {
	const history = useHistory();
	const dailyCheckinLimits = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, -1
	]
	const nextCheckinTimes = [
		0, 1, 2, 3, 6, 8, -1
	]
	const { prizeNatures } = useSelector(state => ({
		prizeNatures: state.Prizes.prizeNatures,
	}));
	const { values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()

	const bannerFileRef = React.useRef()

	const handleBannerChange = (prize) => {
		const file = prize.target.files[0]
		bannerFileRef.current.value = ""
		if (!file) return
		setFieldValue("banner_file", file)
		setFieldValue('image_path', URL.createObjectURL(file))
	}


	useEffect(() => {

	}, [prizeNatures])

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" />

				<Row className="mb-4">
					<Col sm={12} md={4}>
						<Card className="mb-0">
							<CardBody>
								<div className={`${classes.banner} mb-3`}>
									<img src={values.image_path} className={classes.bannerImg} alt="" />
								</div>
								<div className="d-flex justify-content-center">
									<Button
										className="mb-2"
										onClick={() => bannerFileRef.current.click()}
									>
										<input
											ref={bannerFileRef}
											type="file"
											style={{ display: "none" }}
											onChange={handleBannerChange}
											accept="image/*"
										/>
										Replace
									</Button>
								</div>


								<h6>Redemption Code</h6>
								<div className={`${classes.banner} mb-3`}>
									<img src={values.qr_code_path} className={classes.bannerImg} alt="" />
								</div>
								<div className="d-flex justify-content-center"><a className="btn btn-secondary" href={values.qr_code_path}>Download</a></div>
							</CardBody>
						</Card>
					</Col>
					<Col sm={12} md={8}>
						<Card className="mb-0">
							<CardBody>
								<FormGroup>
									<Label>Item name</Label>
									<Input
										name="prize_name"
										className="form-control"
										placeholder="Item name"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.prize_name || ""}
										invalid={
											touched.prize_name && errors.prize_name ? true : false
										}
									/>
								</FormGroup>

								<FormGroup>
									<Label>Item name (chinese)</Label>
									<Input
										name="prize_name_chi"
										className="form-control"
										placeholder="Item name (chinese)"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.prize_name_chi || ""}
										invalid={
											touched.prize_name_chi && errors.prize_name_chi ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Items Left</Label>
									<Input
										name="in_stock_qty"
										className="form-control"
										placeholder="Item name (chinese)"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.in_stock_qty || ""}
										invalid={
											touched.in_stock_qty && errors.in_stock_qty ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Description</Label>
									<Input
										name="prize_desc"
										className="form-control"
										placeholder="Description (chinese)"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.prize_desc || ""}
										invalid={
											touched.prize_desc && errors.prize_desc ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Description (chinese)</Label>
									<Input
										name="prize_desc_chi"
										className="form-control"
										placeholder="Description (chinese)"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.prize_desc_chi || ""}
										invalid={
											touched.prize_desc_chi && errors.prize_desc_chi ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Rule</Label>
									<Input
										name="redeem_rule"
										className="form-control"
										placeholder="Rule"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.redeem_rule || ""}
										invalid={
											touched.redeem_rule && errors.redeem_rule ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Rule (chinese)</Label>
									<Input
										name="redeem_rule_chi"
										className="form-control"
										placeholder="Rule (chinese)"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.redeem_rule_chi || ""}
										invalid={
											touched.redeem_rule_chi && errors.redeem_rule_chi ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Required Coins</Label>
									<div className="d-flex align-items-center">
										<Input
											name="redeem_points"
											className="me-2"
											placeholder="Required Coins"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.redeem_points || ""}
											invalid={
												touched.redeem_points && errors.redeem_points ? true : false
											}
										/>

										<p className="mb-0">coins</p>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Valid from</Label>
									<div className="d-flex align-items-center">
										<Input
											name="start_date"
											className="me-2"
											type="date"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.start_date || ""}
											invalid={
												touched.start_date && errors.start_date ? true : false
											}
										/>
										<p className="mb-0 me-2">to</p>
										<Input
											name="expired_date"
											className="me-2"
											type="date"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.expired_date || ""}
											invalid={
												touched.expired_date && errors.expired_date ? true : false
											}
										/>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Status</Label>
									<FormGroup check>
										<Input
											name="status"
											type="radio"
											onChange={handleChange}
											onBlur={handleBlur}
											value={1}
											checked={values.status == 1}
											invalid={
												touched.status && errors.status ? true : false
											}
										/>
										<Label check>Active</Label>
									</FormGroup>
									<FormGroup check>
										<Input
											name="status"
											type="radio"
											onChange={handleChange}
											onBlur={handleBlur}
											value={0}
											checked={values.status == 0}
											invalid={
												touched.status && errors.status ? true : false
											}
										/>
										<Label check>Inactive</Label>
									</FormGroup>
								</FormGroup>
							</CardBody>
						</Card>
						<div className="d-flex align-items-center justify-content-end mt-3">
							<Button onClick={submitForm} className="me-2">Save</Button>
							<Button onClick={
								() => history.push('/events')
							}>Close</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

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
	const handleSubmit = (values) => {
		console.log(values);
		// const formData = new FormData();
		// if (values.banner_file) {
		// 	formData.append('image', values.banner_file);
		// }
		// formData.append('prize_name', values.prize_name);
		// formData.append('prize_name_chi', values.prize_name_chi);
		// formData.append('prize_desc', values.prize_desc);
		// formData.append('prize_desc_chi', values.prize_desc_chi);
		// formData.append('redeem_rule', values.redeem_rule);
		// formData.append('redeem_rule_chi', values.redeem_rule_chi);
		// formData.append('in_stock_qty', values.in_stock_qty);
		// formData.append('start_date', values.start_date);
		// formData.append('expired_date', values.expired_date);
		// formData.append('status', values.status);
		// formData.append('redeem_points', values.redeem_points);

		dispatch(updatePrize(values.prize_id, values, props.history))
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