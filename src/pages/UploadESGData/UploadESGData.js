import AppFormInput from "../../Components/Common/AppFormInput"
import React from "react"
import { useHistory } from "react-router-dom"
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Container,
	Form,
	Input,
	Label,
	Row
} from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { alertService } from "../../services"
import { FastField, Formik, useFormikContext } from "formik"

const SimpleForm = () => {
	const history = useHistory()

	const { values, handleSubmit } = useFormikContext()

	return (
		<Form onSubmit={handleSubmit}>
			<div className="mb-3 d-flex justify-content-end">
				<Button type="submit">Upload</Button>
			</div>
			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">Company Info</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<FastField name="yearOfRecord">
								{({ field }) => (
									<AppFormInput label="Year of Record" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="projectType">
								{({ field }) => (
									<AppFormInput label="Project Type" {...field} type="select">
										<option value={""}>-- Select --</option>
										{[
											"Building",
											"Civil",
											"Piling",
											"Foundation",
											"Building RMAA",
											"Civil R&M"
										].map((txt) => (
											<option key={txt} value={txt}>
												{txt}
											</option>
										))}
									</AppFormInput>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="grossValueOfConstructionWork">
								{({ field }) => (
									<AppFormInput
										label="Gross value of construction work"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfProject">
								{({ field }) => (
									<AppFormInput label="No of project" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="employeeSize">
								{({ field }) => (
									<AppFormInput label="Employment Size" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="companySizeZ">
								{({ field }) => (
									<AppFormInput label="Company Size" {...field} />
								)}
							</FastField>
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
							<FastField name="petrolUsage">
								{({ field }) => (
									<AppFormInput label="Petrol Usage" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="dieselUsage">
								{({ field }) => (
									<AppFormInput label="Diesel Usage" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="amountOfElectricityHKE">
								{({ field }) => (
									<AppFormInput
										label="Amount of electricity (HKE)"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="amountOfElectricityCLP">
								{({ field }) => (
									<AppFormInput
										label="Amount of electricity (CLP)"
										{...field}
									/>
								)}
							</FastField>
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
							<FastField name="annualWaterConsumption">
								{({ field }) => (
									<AppFormInput label="Annual Water Consumption" {...field} />
								)}
							</FastField>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						Non-hazardous Waste Produced
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<FastField name="totalWeightof_InertWasteDisposedPerAnnum">
								{({ field }) => (
									<AppFormInput
										label="Total weight of inert waste disposed"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="totalWeightOf_Non_InertWasteDisposedPerAnnum">
								{({ field }) => (
									<AppFormInput
										label="Total weight of non-inert waste disposed per annum"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="totalWeightOf_Mixed_WasteDisposedPerAnnum">
								{({ field }) => (
									<AppFormInput
										label="Total weight of mixed waste disposed per annum"
										{...field}
									/>
								)}
							</FastField>
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
							<FastField name="noOfIndustrialAccidents">
								{({ field }) => (
									<AppFormInput label="No of Industrial Accidents" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfOccupationalIncident">
								{({ field }) => (
									<AppFormInput
										label="No of occupational Incident"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed">
								{({ field }) => (
									<AppFormInput
										label="Number, type and magnitude of advance health and safety
										technologies used"
										{...field}
									/>
								)}
							</FastField>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						Development and Training
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<FastField name="noOfHoursOfTranning">
								{({ field }) => (
									<AppFormInput label="No of hours of training" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfTechnicalStaff">
								{({ field }) => (
									<AppFormInput label="No of technical staff" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfDirectLabor">
								{({ field }) => (
									<AppFormInput label="No of direct labor" {...field} />
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfStaffJoiningYMSOrSimilar">
								{({ field }) => (
									<AppFormInput
										label="No of staff joining YMS or similar"
										{...field}
									/>
								)}
							</FastField>
						</Col>

						<Col sm={12} md={3}>
							<FastField name="noOfYoungStaff">
								{({ field }) => (
									<AppFormInput
										label="No of young staff (age < 40)"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfManhoursInCommunityService">
								{({ field }) => (
									<AppFormInput
										label="No of manhours in community service"
										{...field}
									/>
								)}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="noOfStaff">
								{({ field }) => <AppFormInput label="No of staff" {...field} />}
							</FastField>
						</Col>
						<Col sm={12} md={3}>
							<FastField name="moneyToSupportCommunityService">
								{({ field }) => (
									<AppFormInput
										label="Money to support community service"
										{...field}
									/>
								)}
							</FastField>
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
							<FastField name="moneyToSupportCommunityService">
								{({ field }) => (
									<AppFormInput label="No of resignations" {...field} />
								)}
							</FastField>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of resignations
								</Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of management staff
								</Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of supporting staff
								</Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						In-house Codes and Guidelines Governing Supply Chain Management
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Click Yes when one of followings is adopted: Migrated to six
									sigma system Developed framework for risk-based quality
									management system adopted total quality management practicing
									strategic, alliancing or partnering based risk sharing
									approaches
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
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No. of environmental professionals
								</Label>
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No. of environmental personnel
								</Label>
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Number of non-compliance in the most recent ISO 14001
									certification / surveillance report
								</Label>
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						In-house Codes and Guidelines Governing Anticorruption
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									no of hour of anticorruption training
								</Label>
								<Input
									className="form-control"
									defaultValue={"120.5"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No of new staff
								</Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={"100"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						In-house Codes and Guidelines Governing Environment
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={""}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No. of environmental professionals
								</Label>
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No. of environmental personnel
								</Label>
								<Input
									className="form-control"
									defaultValue={"2"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Number of non-compliance in the most recent ISO 14001
									certification / surveillance report
								</Label>
								<Input
									className="form-control"
									defaultValue={"3"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>

			<Card>
				<CardHeader className="align-items-center d-flex">
					<h4 className="card-title mb-0 flex-grow-1">
						In-house Codes and Guidelines Governing Health and Safety
					</h4>
				</CardHeader>
				<CardBody>
					<Row className="mb-3">
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Click yes when one of followings is adopted: Migrated to ISO
									45001 Developed framework for design for safety etc
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
								<Input
									className="form-control"
									defaultValue={"3"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Suspension notices due to safety issues (including those
									caused by subcontractors involved in a project)
								</Label>
								<Input
									className="form-control"
									defaultValue={"3"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									Number and type of as well as achievement resulted from the
									participation
								</Label>
								<Input
									className="form-control"
									defaultValue={""}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label">
									No. of safety training hours
								</Label>
								<Input
									className="form-control"
									defaultValue={"45.5"}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={""}
									htmlFor="form-name"
								/>
							</div>
						</Col>
						<Col sm={12} md={3}>
							<div>
								<Label htmlFor="form-name" className="form-label"></Label>
								<Input
									className="form-control"
									defaultValue={""}
									htmlFor="form-name"
								/>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</Form>
	)
}

const UploadESGData = () => {
	const handleSubmit = async (values) => {
		const { isConfirmed } = await alertService.fireDialog({
			title: "Confirmation Page",
			content: (
				<div className="text-center">
					<p className="mb-0">Version 1</p>
					<p className="mb-0">Year of Record: 2022</p>
					<p className="mb-0">Year of Record: 2022</p>
					<p className="mb-0">...</p>
					<p className="mb-0">
						<b>Energy Consumption</b>
					</p>
					<p className="mb-0">Petrol Usage: 1.2 tonne</p>
					<p>Diesel: 3 tonne</p>
					<p className="mb-0 ">
						<b>
							By clicking the 'confirm' button, you acknowledge that the
							submitted details are correct.
							<br /> Please check your details carefully before continuing.
							<br />
							<br />
							The contents will subsequently be hashed and stored on Blockchain
						</b>
					</p>
				</div>
			),
			confirmButtonProps: {
				text: "Confirm"
			},
			cancelButtonProps: {
				show: true,
				text: "Cancel"
			}
		})
		if (isConfirmed) {
			// history.push("/submissions-history")
		}
		console.log(values)
		// ... handle api on redux
	}

	const initialValues = React.useMemo(() => {
		return {
			companySizeZ: "",
			yearOfRecord: "",
			projectType: "",
			grossValueOfConstructionWork: "",
			noOfProject: "",
			petrolUsage: "",
			dieselUsage: "",
			amountOfElectricityHKE: "",
			amountOfElectricityCLP: "",
			annualWaterConsumption: "",
			totalWeightof_InertWasteDisposedPerAnnum: "",
			totalWeightOf_Non_InertWasteDisposedPerAnnum: "",
			totalWeightOf_Mixed_WasteDisposedPerAnnum: "",
			noOfIndustrialAccidents: "",
			noOfOccupationalIncident: "",
			numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: "",
			noOfHoursOfTranningPMStaff: "",
			noOfPMStaff: "",
			noOfHoursOfTranningTechnicalStaff: "",
			noOfTechnicalStaff: "",
			noOfHoursOfTranning: "",
			noOfDirectLabor: "",
			noOfStaffJoiningYMSOrSimilar: "",
			noOfYoungStaff: "",
			noOfManhoursInCommunityService: "",
			moneyToSupportCommunityService: "",
			employeeSize: "",
			noOfStaff: "",
			noOfSupportingStaff: "",
			noOfResignationsManagementStaff: "",
			noOfResignationsTechnicalStaff: "",
			noOfResignationsDirectStaff: "",
			noOfResignationsSupportingStaff: "",
			clickYesWhenOneOfFollowingIsAdopted: "",
			numberAndTypeOfOrganisationAndParticipation: "",
			noOfHourOfAnticorruptionTranningNewStaff: "",
			noOfNewStaff: "",
			noOfHourAnticorruptionTranningExistingStaff: "",
			noExistingStaff: "",
			numberOfConvictionsRelatedToTheEnvironment: "",
			noOfEnvironmentalProfessionals: "",
			noOfEnvironmentalPersonnel: "",
			clickYesWhenOnOfFollowingIsAdopted: "",
			noOfConvictionsRelatedToHealthyAndSafety: "",
			suspensionNoticesDueToSafetyIssues: "",
			numberAndTypeOfAsWellAsAchivementResultedFromParticipation: "",
			noOfSafetyTraningHoursManagementStaff: "",
			noOfSafetyTraningHoursOperationalStaff: "",
			noOfSafetyTraningHoursDirectLabour: ""
		}
	}, [])

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Upload ESG Data" />
					<SimpleForm />
				</Container>
			</div>
		</Formik>
	)
}

export default UploadESGData
