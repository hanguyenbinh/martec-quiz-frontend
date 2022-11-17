import { Formik, useFormikContext } from "formik"
import React from "react"
import { withTranslation } from "react-i18next"

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

import classes from "./UpdatePrize.module.scss"

function SimpleForm() {
	const { values, errors, setFieldValue, onChange } = useFormikContext()

	const bannerFileRef = React.useRef()

	const handleBannerChange = (event) => {
		const file = event.target.files[0]
		bannerFileRef.current.value = ""
		if (!file) return
		setFieldValue("banner_file", file)
	}

	const bannerUrl = React.useMemo(() => {
		try {
			return URL.createObjectURL(values.banner_file)
		} catch (error) {
			return ""
		}
	}, [values.banner_file])

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Dashboards" />

				<Row className="mb-4">
					<Col sm={12} md={4}>
						<Card className="mb-0">
							<CardBody>
								<div className={`${classes.banner} mb-3`}>
									{!!bannerUrl && (
										<img src={bannerUrl} className={classes.bannerImg} alt="" />
									)}
								</div>
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
									Upload
								</Button>

								<h6>Redemption Code</h6>
								<Button>Download</Button>
							</CardBody>
						</Card>
					</Col>
					<Col sm={12} md={8}>
						<Card className="mb-0">
							<CardBody>
								<FormGroup>
									<Label>Item name</Label>
									<Input />
								</FormGroup>
								<FormGroup>
									<Label>Items Left</Label>
									<Input />
								</FormGroup>
								<FormGroup>
									<Label>Description</Label>
									<Input type="textarea" />
								</FormGroup>
								<FormGroup>
									<Label>Rule</Label>
									<Input type="textarea" />
								</FormGroup>
								<FormGroup>
									<Label>Required Coins</Label>
									<div className="d-flex align-items-center">
										<Input className="me-2" type="select">
											<option>4</option>
										</Input>
										<p className="mb-0">coins</p>
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Valid from</Label>
									<div className="d-flex align-items-center">
										<Input className="me-2" type="date" />
										<p className="mb-0 me-2">to</p>
										<Input type="date" />
									</div>
								</FormGroup>

								<FormGroup>
									<Label>Status</Label>
									<FormGroup check>
										<Input name="radio2" type="radio" />{" "}
										<Label check>Active</Label>
									</FormGroup>
									<FormGroup check>
										<Input name="radio2" type="radio" />{" "}
										<Label check>Inactive</Label>
									</FormGroup>
								</FormGroup>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

function UpdatePrize() {
	const initialValues = React.useMemo(() => {
		return {
			banner_file: null
		}
	}, [])

	const validationSchema = React.useMemo(() => {
		return
	}, [])

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema}>
			<SimpleForm />
		</Formik>
	)
}

export default UpdatePrize;