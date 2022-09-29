import React from "react"
import { useHistory } from "react-router-dom"
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Input,
	Label,
	Row
} from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader"
import { alertService } from "../../services"

const SimpleForm = () => {
	const history = useHistory()

	const handleSubmit = async () => {
		const { isConfirmed } = await alertService.fireDialog({
			title: "Confirmation Page",
			content: <div className="text-center">
				<p className="mb-0">Version 1</p>
				<p className="mb-0">Year of Record: 2022</p>
				<p className="mb-0">Year of Record: 2022</p>
				<p className="mb-0">...</p>
				<p className="mb-0"><b>Energy Consumption</b></p>
				<p className="mb-0">Petrol Usage: 1.2 tonne</p>
				<p>Diesel: 3 tonne</p>
				<p className="mb-0 "><b>By clicking the 'confirm' button, you acknowledge that the submitted details are correct.<br/> Please check your details carefully before continuing.<br/><br/>The contents will subsequently be hashed and stored on Blockchain</b></p>
			</div>,
			confirmButtonProps: {
				text: "Confirm"
			},
			cancelButtonProps: {
				show: true,
				text: "Cancel"
			}
		})
		if (isConfirmed) {
			history.push("/upload-history-list")
		}
	}

	return (
		<form>
			<div className="mb-3 d-flex justify-content-end">
				<Button onClick={handleSubmit} type="button">
					Upload
				</Button>
			</div>
			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Company Info</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Year of Record
								</Label>
								<Input className="form-control" defaultValue="2022" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Project Type
								</Label>
								<select htmlFor="form-name" className="form-select">
									<option selected>building</option>
									<option>civil</option>
									<option>piling</option>
									<option>foundation</option>
									<option>building RMAA</option>
									<option>civil R&M</option>
								</select>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Gross value of construction work
								</Label>
								<Input className="form-control" defaultValue="100,000,000.00" htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of projects
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Employment Size
								</Label>
								<Input className="form-control" defaultValue={"1200"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Company Size
								</Label>
								<select htmlFor="form-name" className="form-select">
									<option selected>A</option>
									<option>B</option>
									<option>C</option>
								</select>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Energy Consumption</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Petrol Usage
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Diesel Usage
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Amount of electricity (HKE)
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Amount of electricity (CLP)
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Carbon Footprint</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"1350.01 tonne"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"Usage of electricity - HKE"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"Usage of electricity - CLP"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Water Consumption</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Annual Water Consumption
								</Label>
								<Input className="form-control" defaultValue={"1231211.9"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Non-hazardous Waste Produced</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Total weight of inert waste disposed
								</Label>
								<Input className="form-control" defaultValue={"1234.12"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Total weight of non-inert waste disposed per annum
								</Label>
								<Input className="form-control" defaultValue={"1234.12"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Total weight of mixed waste disposed per annum
								</Label>
								<Input className="form-control" defaultValue={"1234.12"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Health and Safety</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of Industrial Accidents
								</Label>
								<Input className="form-control" defaultValue={"4"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of occupational Incident
								</Label>
								<Input className="form-control" defaultValue={"5"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number, type and magnitude of advance health and safety technologies used
								</Label>
								<Input className="form-control" defaultValue={""} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Development and Training</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of hours of training
								</Label>
								<Input className="form-control" defaultValue={"35.5"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of project management staff
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of technical staff
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of direct labor
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of staff joining YMS or similar
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						

						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of young staff (age {"<"} 40)
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of manhours in community service
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of staff
								</Label>
								<Input className="form-control" defaultValue={"10"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Money to support community service
								</Label>
								<Input className="form-control" defaultValue={"120,000.2"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Employment</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of resignations
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of management staff
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of supporting staff
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">In-house Codes and Guidelines Governing Supply Chain Management</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Click Yes when one of followings is adopted:

Migrated to six sigma system

Developed framework for risk-based quality management system

adopted total quality management

practicing strategic, alliancing or partnering based risk sharing approaches
								</Label>
								<select htmlFor="form-name" className="form-select">
									<option selected>Yes</option>
									<option>No</option>
								</select>
							</div>
						</Col>
						
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number of convictions related to the environment
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No. of environmental professionals
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No. of environmental personnel
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number of non-compliance in the most recent ISO 14001 certification / surveillance report
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">In-house Codes and Guidelines Governing Anticorruption</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
					<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								no of hour of anticorruption training
								</Label>
								<Input className="form-control" defaultValue={"120.5"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No of new staff
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={"100"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">In-house Codes and Guidelines Governing Environment</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={""} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No. of environmental professionals
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No. of environmental personnel
								</Label>
								<Input className="form-control" defaultValue={"2"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number of non-compliance in the most recent ISO 14001 certification / surveillance report
								</Label>
								<Input className="form-control" defaultValue={"3"} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">In-house Codes and Guidelines Governing Health and Safety</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Click yes when one of followings is adopted:

Migrated to ISO 45001

Developed framework for design for safety

etc
								</Label>
								<select htmlFor="form-name" className="form-select">
									<option selected>Yes</option>
									<option>No</option>
								</select>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number of convictions related to health and safety
								</Label>
								<Input className="form-control" defaultValue={"3"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Suspension notices due to safety issues (including those caused by subcontractors involved in a project)
								</Label>
								<Input className="form-control" defaultValue={"3"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								Number and type of as well as achievement resulted from the participation
								</Label>
								<Input className="form-control" defaultValue={""} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								No. of safety training hours
								</Label>
								<Input className="form-control" defaultValue={"45.5"} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								
								</Label>
								<Input className="form-control" defaultValue={""} htmlFor="form-name" />
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
								</Label>
								<Input className="form-control" defaultValue={""} htmlFor="form-name" />
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</form>
	)
}

const UploadESGData = () => {
	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Upload ESG Data" />
				<SimpleForm />
			</Container>
		</div>
	)
}

export default UploadESGData
