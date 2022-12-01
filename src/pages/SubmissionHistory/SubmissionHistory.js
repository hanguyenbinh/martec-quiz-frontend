import { getSumissionForms } from "../../store/actions"
import React from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"

const SubmissionHistory = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	const yearData = {
		'2022': '2022.04-2023.03',
		'2021': '2021.04-2022.03',
		'2020': '2020.04-2021.03',
		'2019': '2019.04-2020.03',
		'2018': '2018.04-2019.03',
		'2017': '2017.04-2018.03',
		'2016': '2016.04-2017.03',
		'2015': '2015.04-2016.03',
	}

	useEffect(() => {
		const email = localStorage.getItem("email");
		dispatch(getSumissionForms(email, props.history))
	}, [])
	const { submissionForms } = useSelector(state => ({
		submissionForms: state.SubmissionForm.submissionForms,
	}));
	const submissionGroups = [
		{
			title: T('Project Information'),
			fields: [
				{
					name: 'companySize',
					label: T('Company Size'),
				},
				{
					name: 'yearOfRecord',
					label: T('Recording period')
				},
				{
					name: 'projectType',
					label: T('Project type')
				},
				{
					name: 'grossValueOfConstructionWork',
					label: T('Gross value of construction work (HKD)')
				},
				{
					name: 'totalNoOfManDays',
					label: T('Total no. of man-days')
				},

			]
		},
		{
			title: T('Energy and Water Consumption'),
			fields: [{
				name: 'petrolUsage',
				label: T('Petrol usage (Litres)')
			},
			{
				name: 'dieselUsage',
				label: T('Diesel usage (Litres)')
			},
			{
				name: 'amountOfElectricityHKE',
				label: T('Amount of electricity - HKE (kWh)')
			},
			{
				name: 'amountOfElectricityCLP',
				label: T('Amount of electricity - CLP (kWh)')
			},
			{
				name: 'annualWaterConsumption',
				label: T('Annual water consumption (Metric tonnes or m3)')
			},
			]
		},
		{
			title: T('Waste Management'),
			fields: [{
				name: 'totalWeightof_InertWasteDisposedPerAnnum',
				label: T('Total weight of non-inert waste disposed (Tonne)')
			},
			{
				name: 'totalWeightOf_Non_InertWasteDisposedPerAnnum',
				label: T('Total weight of non-inert waste disposed (Tonne)')
			},

			]
		},
		{
			title: T('Health and Safety'),
			fields: [{
				name: 'noOfNonFatalReportableAccident',
				label: T('No. of non-fatal reportable accident')
			},
			{
				name: 'noOfOccupationalIncident',
				label: T('No of occupational Incident')
			},
			{
				name: 'noOfSafetyOrESGRelatedTechnologiesUsed',
				label: T('No. of Safety or ESG related technologies used')
			},
			]
		},
		{
			title: T('Development and Training'),
			fields: [{
				name: 'noOfHoursOfTrainingManagementOrAboveStaff',
				label: T('No. of hours of training - management or above staff')
			},

			{
				name: 'noOfHoursOfTrainingSupervisorOrAboveStaff',
				label: T('No. of hours of training - supervisor or above staff')
			},
			{
				name: 'noOfHoursOfTrainingOperatorOrSupportLevelStaff',
				label: T('No. of hours of training - operator or support level staff')
			},

			{
				name: 'noOfStaffJoiningYMS',
				label: T('No. of staff joining YMS')
			},
			{
				name: 'noOfYoungStaff',
				label: T('No. of young staff (age < 40)')
			},
			]
		},
		{
			title: T('Community Investment'),
			fields: [{
				name: 'noOfManhoursInCommunityService',
				label: T('No. of manhours in community service')
			},
			{
				name: 'communityServiceDonationAmount',
				label: T('Community service donation amount (HKD)')
			},
			]
		},
		{
			title: T('Employment'),
			fields: [
				{
					name: 'noOfManagementOrAboveStaff',
					label: T('No. of management or above staff')
				},
				{
					name: 'employeeSize',
					label: T('Employment size')
				},
				{
					name: 'noOfSupervisorOrAboveStaff',
					label: T('No. of supervisor or above staff')
				},
				{
					name: 'noOfOperatorOrSupportLevelStaff',
					label: T('No. of operator or support level staff')
				},
				{
					name: 'noOfResignationsManagementOrAboveStaff',
					label: T('No. of resignations - management or above staff')
				},
				{
					name: 'noOfResignationsSupervisorOrAboveStaff',
					label: T('No. of resignations - supervisor or above staff')
				},
				{
					name: 'noOfResignationsOperatorOrSupportLevelStaff',
					label: T('No. of resignations - operator or support level staff')
				},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing Supply Chain Management'),
			fields: [
				{
					name: 'adoptedTools',
					label: T('Adopted tools'),
					type: 'select',
					multiple: true,
					options: [
						{ value: 'Migrated to six sigma system', label: 'Migrated to six sigma system' },
						{ value: 'Developed framework for risk-based quality management system', label: 'Developed framework for risk-based quality management system' },
						{ value: 'adopted total quality management', label: 'adopted total quality management' },
						{ value: 'practicing strategic, alliancing or partnering based risk sharing approaches', label: 'practicing strategic, alliancing or partnering based risk sharing approaches' },

					]
				}
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing - Anticorruption'),
			fields: [
				{
					name: 'typeOfAnticorruptionCampaignsActivities',
					label: T('Type of anticorruption campaigns / activities'),
					type: 'textarea'
				},
				{
					name: 'noOfAnticorruptionCampaignsActivitiesProvided',
					label: T('No. of anticorruption campaigns / activities provided')
				},
				{
					name: 'trainingHoursNewStaff',
					label: T('Training hours – new staff')
				},
				{
					name: 'noOfNewStaff',
					label: T('No. of new staff')
				},
				{
					name: 'trainingHoursExistingStaff',
					label: T('Training hours – existing staff')
				},
				{
					name: 'noExistingStaff',
					label: T('No. of existing staff')
				},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing - Environment'),
			fields: [
				{
					name: 'noOfConvictionsRelatedToTheEnvironment',
					label: T('No. of convictions related to the environment')
				},
				{
					name: 'noOfEnvironmentalProfessionals',
					label: T('No. of environmental professionals')
				},
				{
					name: 'noOfEnvironmentalPersonnel',
					label: T('No. of environmental personnel')
				},
				{
					name: 'noOfEnvironmentalAwardReceived',
					label: T('No. of environmental award received')
				},
				{
					name: 'typeOfEnvironmentalAwardReceived',
					label: T('Type of environmental award received'),
					type: 'textarea'
				},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing-  Health and Safety'),
			fields: [
				{
					name: 'apdoptedToolsHealthAndSafety',
					label: T('Adopted tools'),
					type: 'select',
					multiple: true,
					options: [
						{ value: 'Migrated to ISO 45001', label: 'Migrated to ISO 45001' },
						{ value: 'Developed framework for design for safety', label: 'Developed framework for design for safety' },
					]
				},
				{
					name: 'noOfConvictionsRelatedToHealthyAndSafety',
					label: T('No. of convictions related to health and safety')
				},
				{
					name: 'suspensionNoticesDueToSafetyIssues',
					label: T('Suspension notices due to safety issues (including those caused by subcontractors involved in a project)')
				},
				{
					name: 'typeOfSafetyAndHealthAwardReceived',
					label: T('Type of safety and health award received'),
					type: 'textarea'
				},
				{
					name: 'noOfSafetyAndHealthAwardReceived',
					label: T('No. of safety and health award received')
				},
				{
					name: 'safetyTrainingHoursManagementOrAboveStaff',
					label: T('Safety training hours - management or above staff')
				},
				{
					name: 'safetyTrainingHoursSupervisorOrAboveStaff',
					label: T('Safety training hours - supervisor or above staff')
				},
				{
					name: 'safetyTrainingHoursOperatorOrSupportLevelStaff',
					label: T('Safety training hours - operator or support level staff')
				},
			]
		},
	]

	const handleViewSubmission = async (i) => {
		const data = submissionForms[i];
		const { isConfirmed } = await alertService.fireDialog({
			showConfirmButton: false,
			title: "Submission detail",
			size: "xl",
			content: (
				<div className="text-center">
					{submissionGroups && submissionGroups.map((submissionForm, index) => (
						<Card key={`submision_forms_detail_${index}`}>
							<CardHeader className="align-items-center d-flex">
								<h4 className="card-title mb-0 flex-grow-1">{submissionForm.title}</h4>
							</CardHeader>
							<CardBody>
								{
									submissionForm.fields.map((field, _index) => (
										<Row key={`submission_form_detail_${index}${_index}`} className={`mb-3 mt-3 line-${_index % 2}`}>
											<Col>
												<div className="view-submission-label">{field.label}</div>
											</Col>
											<Col className="view-submission-value">
												{data[field.name] === true ? 'Yes' : data[field.name] === false ? 'No' : (field.name === 'yearOfRecord' ? (yearData[data[field.name]]) : (data[field.name]))}
											</Col>
										</Row>
									))
								}
							</CardBody>
						</Card>
					))}
				</div>
			),

			cancelButtonProps: {
				show: true,
				text: "Close"
			},
			confirmButtonProps: {
				show: false
			}
		})
	}
	const handleExport = () => {

	}

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Submission(s) History")} />
				{/* <div className="d-flex justify-content-end mb-3"><Button onClick={() => {
					handleExport()
				}
				}>{T('Export...')}</Button></div> */}
				<Card>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">{T('Submission Date')}</th>
								<th scope="col">{T('Financial Year')}</th>
								<th scope="col">{T('Submitted By')}</th>
								<th scope="col">{T('Hash Value')}</th>
								<th scope="col">{T('View')}</th>
								<th scope="col">{T('Version')}</th>
							</tr>
						</thead>
						<tbody>
							{submissionForms && submissionForms.map((d, dIndex) => (
								<tr key={dIndex}>
									<th>{moment(d.createdAt).format('YYYY-MM-DD')}</th>
									<td>{d.yearOfRecord}</td>
									<td>{d.email}</td>
									<td>{d.hashValue}</td>
									<td>
										<Button onClick={() => handleViewSubmission(dIndex)}>
											Link
										</Button>
									</td>
									<td>
										{d.version}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</Container>
		</div>
	)
}

export default withTranslation()(SubmissionHistory)
