import { getSumissionForms } from "../../store/actions"
import React from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"
import classes from "./SubmissionHistory.module.scss"

const SubmissionHistory = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	useEffect(() => {
		const email = sessionStorage.getItem("email");
		dispatch(getSumissionForms(email, props.history))
	}, [])
	const { submissionForms } = useSelector(state => ({
		submissionForms: state.SubmissionForm.submissionForms,
	}));
	const submissionGroups = [
		{
			title: T('Company Info'),
			fields: [
				{
					name: 'companySize',
					label: T('Company Size'),
				},
				{
					name: 'yearOfRecord',
					label: T('Year of Record')
				},
				{
					name: 'projectType',
					label: T('Project Type')
				},
				{
					name: 'grossValueOfConstructionWork',
					label: T('Gross value of construction work (HKD)')
				},
				{
					name: 'noOfProject',
					label: T('No of project')
				},

			]
		},
		{
			title: T('Energy/Water Consumption'),
			fields: [{
				name: 'petrolUsage',
				label: T('Petrol Usage (Tonne)')
			},
			{
				name: 'dieselUsage',
				label: T('Diesel Usage (Tonne)')
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
				label: T('Annual water consumption (in m3)')
			},
			]
		},
		{
			title: T('Waste Production'),
			fields: [{
				name: 'totalWeightof_InertWasteDisposedPerAnnum',
				label: T('Total weight of non-inert waste disposed per annum (Tonne)')
			},
			{
				name: 'totalWeightOf_Non_InertWasteDisposedPerAnnum',
				label: T('Total weight of non-inert waste disposed per annum (Tonne)')
			},
			{
				name: 'totalWeightOf_Mixed_WasteDisposedPerAnnum',
				label: T('Total weight of mixed waste disposed per annum (Tonne)')
			},
			]
		},
		{
			title: T('Health and Safety'),
			fields: [{
				name: 'noOfIndustrialAccidents',
				label: T('No of industrical accidents')
			},
			{
				name: 'noOfOccupationalIncident',
				label: T('No of occupational Incident')
			},
			{
				name: 'numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed',
				label: T('Number, type and magnitude of advance health and safety technologies used')
			},
			]
		},
		{
			title: T('Development and Training'),
			fields: [{
				name: 'noOfHoursOfTranningPMStaff',
				label: T('No of hours of training - PM staff')
			},
			{
				name: 'noOfPMStaff',
				label: T('No of PM staff')
			},
			{
				name: 'noOfHoursOfTranningTechnicalStaff',
				label: T('No of hours of training - technical staff')
			},
			{
				name: 'noOfTechnicalStaff',
				label: T('No of technical staff')
			},
			{
				name: 'noOfHoursOfTranning',
				label: T('No of hours of training - direct labor')
			},
			{
				name: 'noOfDirectLabor',
				label: T('No of direct labor')
			},
			{
				name: 'noOfStaffJoiningYMSOrSimilar',
				label: T('No of staff joining YMS or similar')
			},
			{
				name: 'noOfYoungStaff',
				label: T('No of young staff (age < 40)')
			},
			]
		},
		{
			title: T('Community Investment'),
			fields: [{
				name: 'noOfManhoursInCommunityService',
				label: T('No of manhours in community service')
			},
			{
				name: 'moneyToSupportCommunityService',
				label: T('Money to support community service')
			},
			]
		},
		{
			title: T('Employment'),
			fields: [{
				name: 'employeeSize',
				label: T('Employment Size')
			},
			{
				name: 'noOfStaff',
				label: T('No of Staff')
			},
			{
				name: 'noOfSupportingStaff',
				label: T('No of supporting staff')
			},
			{
				name: 'noOfResignationsManagementStaff',
				label: T('No of resignations - management staff')
			},
			{
				name: 'noOfResignationsTechnicalStaff',
				label: T('No of resignations - technical staff')
			},
			{
				name: 'noOfResignationsDirectStaff',
				label: T('No of resignations - direct staff')
			},
			{
				name: 'noOfResignationsSupportingStaff',
				label: T('No of resignations - supporting staff')
			},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing Supply Chain Management'),
			fields: [
				{
					name: 'IsAdoptedSupplyChainManagement',
					label: (
						<>
							<p>{T('Click Yes when one of followings is adopted:')}</p>
							<p>{T('i.Migrated to six sigma system')}</p>
							<p>{T('ii.Developed framework for risk-based quality management system')}</p>
							<p>{T('iii.Adopted total quality management')}</p>
							<p>{T('iv.Practicing strategic, alliancing or partnering based risk sharing approaches')}</p>
						</>
					)
				}
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing - Anticorruption'),
			fields: [{
				name: 'numberAndTypeOfOrganisationAndParticipation',
				label: T('Number and type of organisation and participation in anticorruption campaigns / activities')
			},
			{
				name: 'noOfHourOfAnticorruptionTranningNewStaff',
				label: T('No of hour of  anticorruption training - new staff')
			},
			{
				name: 'noOfNewStaff',
				label: T('No of new staff')
			},
			{
				name: 'noOfHourAnticorruptionTranningExistingStaff',
				label: T('no of hour anticorruption training - existing staff')
			},
			{
				name: 'noExistingStaff',
				label: T('No of existing staff')
			},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing - Environment'),
			fields: [{
				name: 'numberOfConvictionsRelatedToTheEnvironment',
				label: T('Number of convictions related to the environment')
			},
			{
				name: 'noOfEnvironmentalProfessionals',
				label: T('No. of environmental professionals')
			},
			{
				name: 'noOfEnvironmentalPersonnel',
				label: T('No. of environmental personnel')
			},
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing-  Health and Safety'),
			fields: [{
				name: 'IsAdoptedHealthAndSafety',
				label: (
					<>
						<p>{T('Click Yes when one of followings is adopted:')}</p>
						<p>{T('i.Migrated to ISO 45001')}</p>
						<p>{T('ii.Developed framework for design for safety')}</p>

					</>
				),
			},
			{
				name: 'noOfConvictionsRelatedToHealthyAndSafety',
				label: T('No of convictions related to health and safety')
			},
			{
				name: 'suspensionNoticesDueToSafetyIssues',
				label: T('Suspension notices due to safety issues (including those caused by subcontractors involved in a project)')
			},
			{
				name: 'numberAndTypeOfAsWellAsAchivementResultedFromParticipation',
				label: T('Number and type of as well as achievement resulted from the participation')
			},
			{
				name: 'noOfSafetyTraningHoursManagementStaff',
				label: T('No. of safety training hours - management staff')
			},
			{
				name: 'noOfSafetyTraningHoursOperationalStaff',
				label: T('No. of safety training hours - operational staff')
			},
			{
				name: 'noOfSafetyTraningHoursDirectLabour',
				label: T('No. of safety training hours - direct labour')
			},
			]
		},
	]

	const md = [12, 6, 4, 3]


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
								<Row className="mb-3">
									{
										submissionForm.fields.map((field, _index) => (
											<Col key={`submission_form_detail_${index}${_index}`} sm={12} md={3}>
												<Label><div style={{ textDecoration: 'underline' }}>{field.label}</div></Label>
												<div>{data[field.name] === true ? 'Yes' : data[field.name] === false ? 'No' : data[field.name]}</div>
											</Col>
										))
									}
								</Row>
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

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Submission(s) History")} />
				<Card>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">{T('Submission Date')}</th>
								<th scope="col">{T('Year of Records')}</th>
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
