import React from "react"
import { withTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"
import { Button, Card, CardBody, CardFooter, Col, Container, FormGroup, Input, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { DashboardProvider } from "./DashBoard.context"
import { postFacebookImageAction } from "src/store/actions"
import { Formik, useFormikContext } from "formik"
import { useRef } from "react"
import * as Yup from 'yup';

const DashBoard = (props) => {
	const T = props.t ? props.t : (v) => v; const dispatch = useDispatch();
	const formikRef = useRef()
	const initialValues = React.useMemo(() => {
		return {
			imageUrl: '',
		}
	}, [])

	const validationSchema = Yup.object().shape({
		imageUrl: Yup.string().required('Required')
	});

	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(true);
		console.log(values)
		dispatch(postFacebookImageAction(values, props.history))
		setSubmitting(false);
	}


	return (
		<DashboardProvider>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Dashboards" carousel={[]} />
					<Formik innerRef={formikRef} initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

						<PublishImageForm></PublishImageForm>


					</Formik>
				</Container>
			</div>
		</DashboardProvider>
	)
}

const PublishImageForm = () => {
	const { isSubmitting, values, errors, setFieldValue, setFieldTouched, handleChange, handleBlur, touched, submitForm } = useFormikContext()
	return (
		<>
			<BreadCrumb title="Publish an Image" />
			<Row className="mb-4">
				<Col sm={12} md={8}>
					<Card className="mb-0">
						<CardBody>
							<FormGroup>
								<Label>Image url</Label>
								<Input
									name="imageUrl"
									className="form-control"
									placeholder="Image url"
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.imageUrl}
									valid={touched.imageUrl && errors.imageUrl ? false : true}
									invalid={
										touched.imageUrl && errors.imageUrl ? true : false
									}
								/>
							</FormGroup>
						</CardBody>
						<CardFooter>
							<div className="d-flex align-items-center justify-content-end">
								<Button disabled={isSubmitting} onClick={submitForm} className="me-2">Go</Button>
							</div>
						</CardFooter>
					</Card>
				</Col>
			</Row>

		</>
	)
}

export default withRouter((withTranslation()(DashBoard)))