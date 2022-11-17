
import { Formik, useFormikContext } from "formik"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"
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
import { getEvent, geteventNatures, updateEvent } from "src/store/actions"

import classes from "./UpdateEvent.module.scss"

function EventEditForm() {
	const history = useHistory();
	const dailyCheckinLimits = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, -1
	]
	const nextCheckinTimes = [
		0, 1, 2, 3, 6, 8, -1
	]
	const { eventNatures } = useSelector(state => ({
		eventNatures: state.Events.eventNatures,
	}));
	const { values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()

	const bannerFileRef = React.useRef()

	const handleBannerChange = (event) => {
		const file = event.target.files[0]
		bannerFileRef.current.value = ""
		if (!file) return
		setFieldValue("banner_file", file)
		setFieldValue('image_path', URL.createObjectURL(file))
	}


	useEffect(() => {

	}, [eventNatures])
	console.log('check', eventNatures, values)
	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" />

				<Row className="mb-4">
					<Col sm={12} md={8}>
						<Card className="mb-0">
							<CardBody>
								<FormGroup>
									<Label>Event name</Label>
									<Input
										name="event_name"
										className="form-control"
										placeholder="Event name"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_name || ""}
										invalid={
											touched.event_name && errors.event_name ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Event name (chinese)</Label>
									<Input
										name="event_name_chi"
										className="form-control"
										placeholder="Event name (chiness)"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_name_chi || ""}
										invalid={
											touched.event_name_chi && errors.event_name_chi ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Description</Label>
									<Input
										name="event_desc"
										className="form-control"
										placeholder="Description"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_desc || ""}
										invalid={
											touched.event_desc && errors.event_desc ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Description (chinese)</Label>
									<Input
										name="event_desc_chi"
										className="form-control"
										placeholder="Description (chinese)"
										type="text"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_desc_chi || ""}
										invalid={
											touched.event_desc_chi && errors.event_desc_chi ? true : false
										}
									/>
								</FormGroup>
								<FormGroup>
									<Label>Event Nature</Label>
									<Input
										name="event_nature_id"
										className="form-control"
										placeholder="Event Nature"
										type="select"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_nature_id ? values.event_nature_id : ''}
										invalid={
											touched.event_nature_id && errors.event_nature_id ? true : false
										}
									>
										<option>---------</option>
										{
											eventNatures.map((item, key) => <option key={key} value={item.event_nature_id}>{item.nature_name}</option>)
										}
									</Input>
								</FormGroup>
								<FormGroup>
									<Label>Long Description</Label>
									<Input
										name="event_long_desc"
										className="form-control"
										placeholder="Description"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_long_desc || ""}
										invalid={
											touched.event_long_desc && errors.event_long_desc ? true : false
										}
									/>
								</FormGroup>

								<FormGroup>
									<Label>Long Description (chinese)</Label>
									<Input
										name="event_long_desc_chi"
										className="form-control"
										placeholder="Description"
										type="textarea"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.event_long_desc_chi || ""}
										invalid={
											touched.event_long_desc_chi && errors.event_long_desc_chi ? true : false
										}
									/>
								</FormGroup>
							</CardBody>
						</Card>
					</Col>
					<Col sm={12} md={4}>
						<Card className="mb-0">
							<CardBody>
								<h6>Banner Image</h6>

								<div className={`${classes.banner} mb-3`}>
									<img src={values.image_path} className={classes.bannerImg} alt="" />
								</div>
								<div className="d-flex justify-content-center">
									<Button onClick={() => bannerFileRef.current.click()}>
										<input
											ref={bannerFileRef}
											type="file"
											style={{ display: "none" }}
											onChange={handleBannerChange}
											accept="image/*"
										/>
										Upload
									</Button>
								</div>

							</CardBody>
						</Card>
					</Col>
				</Row>

				<div className="d-flex align-items-center justify-content-between mb-4">
					<div className="d-flex align-items-center">
						<h6 className="mb-0 me-2">Start/End Date:</h6>
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
							style={{ width: 160 }}
						/>
						<h6 className="mb-0 me-2">/</h6>
						<Input
							name="end_date"
							className="me-2"
							type="date"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.end_date || ""}
							invalid={
								touched.end_date && errors.end_date ? true : false
							}
							style={{ width: 160 }}
						/>
					</div>
					<FormGroup check>
						<Input type="checkbox" />
						<Input
							name="top_most_ind"
							type="checkbox"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.top_most_ind || false}
						/>
						{" "}
						<Label check>Appear as the top most event</Label>
					</FormGroup>
				</div>

				<Card>
					<CardBody>
						<h5>Game Setting</h5>
						<Row>
							<Col sm={12} md={8}>
								<h6>Template Name</h6>
								<p>Scan and Go</p>

								<FormGroup>
									<Label>Coins Earned per Check-In</Label>

									<div className="d-flex align-items-center">
										<Input
											name="point_award"
											className="me-2"
											placeholder="Coins Earned per Check-In"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.point_award || ""}
											invalid={
												touched.point_award && errors.point_award ? true : false
											}
										/>
										<p className="mb-0">coins</p>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Total Check-In Limit</Label>

									<div className="d-flex align-items-center">
										<Input
											name="max_total_check_in"
											className="me-2"
											placeholder="Total Check-In Limit"
											type="text"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.max_total_check_in || ""}
											invalid={
												touched.max_total_check_in && errors.max_total_check_in ? true : false
											}
										/>
										<p className="mb-0">times</p>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Daily User Check-In Limit</Label>

									<div className="d-flex align-items-center">
										<Input
											name="max_daily_check_in"
											className="me-2"
											type="select"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.max_daily_check_in || ""}

										>
											{
												dailyCheckinLimits.map((item, key) => {
													if (item === '-1' || item === -1) {
														return <option key={key} value={item}>unlimitted</option>
													}
													return <option key={key} value={item}>{item}</option>
												})
											}
										</Input>
										<p className="mb-0">times</p>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>User's Next Check-In At</Label>

									<div className="d-flex align-items-center">
										<Input
											name="check_in_interval"
											className="me-2"
											type="select"
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.check_in_interval || ""}

										>
											{
												nextCheckinTimes.map((item, key) => {
													if (item === '-1' || item === -1) {
														return <option key={key} value={item}>infinite</option>
													}
													return <option key={key} value={item}>{item}</option>
												})
											}
										</Input>
										<p className="mb-0">times</p>
									</div>
								</FormGroup>
							</Col>
							<Col sm={12} md={4}>
								<h6>QR Code</h6>
								<div className={`${classes.banner} mb-3`}>
									<img src={values.qr_code_path} className={classes.bannerImg} alt="" />
								</div>
								<div className="d-flex justify-content-center"><a className="btn btn-secondary" href={values.qr_code_path}>Download</a></div>

							</Col>
						</Row>
					</CardBody>
				</Card>
				<div className="d-flex align-items-center justify-content-end">
					<Button onClick={submitForm} className="me-2">Save</Button>
					<Button onClick={
						() => history.push('/events')
					}>Close</Button>
				</div>
			</Container>
		</div>
	)
}

function UpdateEvent(props) {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const formikRef = useRef()
	const params = useParams();
	useEffect(() => {
		dispatch(geteventNatures());
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
		return
	}, [])
	const handleSubmit = (values) => {
		console.log(values);
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

		dispatch(updateEvent(values.event_id, formData, props.history))
	}

	useEffect(() => {
		console.log('event changed', initialValues)
		formikRef.current.resetForm({
			values: initialValues
		});
	}, [initialValues])
	console.log('get event', event);

	return (
		<div>
			<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<EventEditForm />

			</Formik>
			<ToastContainer></ToastContainer>
		</div>

	)
}
export default UpdateEvent