import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {
	Alert,
	Button,
	Container,
	Form,

} from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import { alertService } from "../../services"
import { Formik, useFormikContext } from "formik"
import { withTranslation } from "react-i18next"
import SubmissionGroup from "../DashBoard/components/SubmissionGroup"
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux"
import { postSubmissionForm } from "../../store/submissionForm/actions"

const submissionFormSchema = Yup.object().shape({
	companySize: Yup.string().required('Required'),
	yearOfRecord: Yup.string().required('Required'),
	projectType: Yup.string().required('Required'),
	grossValueOfConstructionWork: Yup.string().required('Required'),
	noOfProject: Yup.string().required('Required'),
	petrolUsage: Yup.string().required('Required'),
	dieselUsage: Yup.string().required('Required'),
	amountOfElectricityHKE: Yup.string().required('Required'),
	amountOfElectricityCLP: Yup.string().required('Required'),
	annualWaterConsumption: Yup.string().required('Required'),
	totalWeightof_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	totalWeightOf_Non_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	totalWeightOf_Mixed_WasteDisposedPerAnnum: Yup.string().required('Required'),
	noOfIndustrialAccidents: Yup.string().required('Required'),
	noOfOccupationalIncident: Yup.string().required('Required'),
	numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: Yup.string().required('Required'),
	noOfHoursOfTranningPMStaff: Yup.string().required('Required'),
	noOfPMStaff: Yup.string().required('Required'),
	noOfHoursOfTranningTechnicalStaff: Yup.string().required('Required'),
	noOfTechnicalStaff: Yup.string().required('Required'),
	noOfHoursOfTranning: Yup.string().required('Required'),
	noOfDirectLabor: Yup.string().required('Required'),
	noOfStaffJoiningYMSOrSimilar: Yup.string().required('Required'),
	noOfYoungStaff: Yup.string().required('Required'),
	noOfManhoursInCommunityService: Yup.string().required('Required'),
	moneyToSupportCommunityService: Yup.string().required('Required'),
	employeeSize: Yup.string().required('Required'),
	noOfStaff: Yup.string().required('Required'),
	noOfSupportingStaff: Yup.string().required('Required'),
	noOfResignationsManagementStaff: Yup.string().required('Required'),
	noOfResignationsTechnicalStaff: Yup.string().required('Required'),
	noOfResignationsDirectStaff: Yup.string().required('Required'),
	noOfResignationsSupportingStaff: Yup.string().required('Required'),
	IsAdoptedSupplyChainManagement: Yup.bool().required('Required'),
	numberAndTypeOfOrganisationAndParticipation: Yup.string().required('Required'),
	noOfHourOfAnticorruptionTranningNewStaff: Yup.string().required('Required'),
	noOfNewStaff: Yup.string().required('Required'),
	noOfHourAnticorruptionTranningExistingStaff: Yup.string().required('Required'),
	noExistingStaff: Yup.string().required('Required'),
	numberOfConvictionsRelatedToTheEnvironment: Yup.string().required('Required'),
	noOfEnvironmentalProfessionals: Yup.string().required('Required'),
	noOfEnvironmentalPersonnel: Yup.string().required('Required'),
	IsAdoptedHealthAndSafety: Yup.bool().required('Required'),
	noOfConvictionsRelatedToHealthyAndSafety: Yup.string().required('Required'),
	suspensionNoticesDueToSafetyIssues: Yup.string().required('Required'),
	numberAndTypeOfAsWellAsAchivementResultedFromParticipation: Yup.string().required('Required'),
	noOfSafetyTraningHoursManagementStaff: Yup.string().required('Required'),
	noOfSafetyTraningHoursOperationalStaff: Yup.string().required('Required'),
	noOfSafetyTraningHoursDirectLabour: Yup.string().required('Required'),
});

const SubmissionForm = (props) => {
	const T = props.t ? props.t : (value) => value;
	const submissionGroups = [
		{
			title: T('Company Info'),
			fields: [
				{
					name: 'companySize',
					label: T('Company Size'),
					type: 'select',
					options: [
						{ label: 'Group A', value: 'Group A' },
						{ label: 'Group B', value: 'Group B' },
						{ label: 'Group C', value: 'Group C' }
					]
				},
				{
					name: 'yearOfRecord',
					label: T('Year of Record'),
					type: 'select',
					options: [
						{ label: '2022.04-2023.03', value: '2022' },
						{ label: '2021.04-2022.03', value: '2021' },
						{ label: '2020.04-2021.03', value: '2020' },
						{ label: '2019.04-2020.03', value: '2019' },
						{ label: '2018.04-2019.03', value: '2018' },
						{ label: '2017.04-2018.03', value: '2017' },
						{ label: '2016.04-2017.03', value: '2016' },
						{ label: '2015.04-2016.03', value: '2015' },


					]
				},
				{
					name: 'projectType',
					label: T('Project Type'),
					type: 'select',
					options: [
						{ label: 'Corporate', value: 'Corporate' },
						{ label: 'Building', value: 'Building' },
						{ label: 'Civil', value: 'Civil' },
						{ label: 'Piling & foundation', value: 'Piling & foundation' },
						{ label: 'Building RMAA', value: 'Building RMAA' },
						{ label: 'Civil R&M', value: 'Civil R&M' },
						{ label: 'Supplier', value: 'Supplier' },
					]
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
				label: T('Petrol Usage (Litres)')
			},
			{
				name: 'dieselUsage',
				label: T('Diesel Usage (Litres)')
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
				label: T('Total weight of inert waste disposed per annum (Tonne)')
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
				label: T('No of occupational Incidents')
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
				label: T('Money to support community service (HKD)')
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
					),
					type: 'select',
					options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }]
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
				label: T('No of hours of anticorruption training - new staff')
			},
			{
				name: 'noOfNewStaff',
				label: T('No of new staff')
			},
			{
				name: 'noOfHourAnticorruptionTranningExistingStaff',
				label: T('no of hours anticorruption training - existing staff')
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
				type: 'select',
				options: [{ value: true, label: 'Yes' }, { value: false, label: 'No' }]
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
	const history = useHistory()

	const { values, handleSubmit, resetForm } = useFormikContext()
	const handleReset = () => {
		////console.logdisabled(resetForm);
		if (window.confirm('Do you want to reset?')) {
			resetForm();
		}
	};

	return (
		<Form
			onSubmit={handleSubmit}
		>

			{submissionGroups.map((group, index) => (
				<SubmissionGroup key={`SubmissionForm_${index}`} title={group.title} fields={group.fields}></SubmissionGroup>
			))}
			<div className="mb-3 d-flex justify-content-end">
				<Button type='reset' onClick={handleReset}>Reset</Button>&nbsp;&nbsp;&nbsp;
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	)
}

const UploadESGData = (props) => {
	const dispatch = useDispatch();
	const email = sessionStorage.getItem("email");
	const { error } = useSelector(state => ({
		error: state.SubmissionForm.error,
	}));
	const [errorMessage, setErrorMessage] = useState('')
	////console.logdisabled('uploadESGdata', error)
	useEffect(() => {
		let message = '';
		if (error.message) {
			message += error.message;
			if (error.data && error.data.sqlMessage) {
				message += ': ' + error.data.sqlMessage
			}
		}
		else {
			message = error.toString();
		}
		setErrorMessage(message);
	}, [error])
	const handleSubmit = async (values) => {
		const { isConfirmed } = await alertService.fireDialog({

			title: "Confirmation Page",
			content: (
				<div className="text-center">
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
			dispatch(postSubmissionForm({ ...values, email }, props.history))
		}
		// ... handle api on redux
	}

	const initialValues = React.useMemo(() => {
		return {
			companySize: 'Group A',
			yearOfRecord: '2022',
			projectType: 'Corporate',
			grossValueOfConstructionWork: '',
			noOfProject: '',
			petrolUsage: '',
			dieselUsage: '',
			amountOfElectricityHKE: 38606,
			amountOfElectricityCLP: '',
			annualWaterConsumption: '',
			totalWeightof_InertWasteDisposedPerAnnum: '',
			totalWeightOf_Non_InertWasteDisposedPerAnnum: '',
			totalWeightOf_Mixed_WasteDisposedPerAnnum: '',
			noOfIndustrialAccidents: '',
			noOfOccupationalIncident: '',
			numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: '',
			noOfHoursOfTranningPMStaff: '',
			noOfPMStaff: '',
			noOfHoursOfTranningTechnicalStaff: '',
			noOfTechnicalStaff: '',
			noOfHoursOfTranning: '',
			noOfDirectLabor: '',
			noOfStaffJoiningYMSOrSimilar: '',
			noOfYoungStaff: '',
			noOfManhoursInCommunityService: '',
			moneyToSupportCommunityService: '',
			employeeSize: '',
			noOfStaff: '',
			noOfSupportingStaff: '',
			noOfResignationsManagementStaff: '',
			noOfResignationsTechnicalStaff: '',
			noOfResignationsDirectStaff: '',
			noOfResignationsSupportingStaff: '',
			IsAdoptedSupplyChainManagement: true,
			numberAndTypeOfOrganisationAndParticipation: '',
			noOfHourOfAnticorruptionTranningNewStaff: '',
			noOfNewStaff: '',
			noOfHourAnticorruptionTranningExistingStaff: '',
			noExistingStaff: '',
			numberOfConvictionsRelatedToTheEnvironment: '',
			noOfEnvironmentalProfessionals: '',
			noOfEnvironmentalPersonnel: '',
			IsAdoptedHealthAndSafety: false,
			noOfConvictionsRelatedToHealthyAndSafety: '',
			suspensionNoticesDueToSafetyIssues: '',
			numberAndTypeOfAsWellAsAchivementResultedFromParticipation: '',
			noOfSafetyTraningHoursManagementStaff: '',
			noOfSafetyTraningHoursOperationalStaff: '',
			noOfSafetyTraningHoursDirectLabour: ''
		}
	}, [])
	// const initialValues = React.useMemo(() => {
	// 	return {
	// 		companySize: 'Group A',
	// 		yearOfRecord: '2022',
	// 		projectType: 'Building',
	// 		grossValueOfConstructionWork: '500000000',
	// 		noOfProject: '10',
	// 		petrolUsage: '20',
	// 		dieselUsage: '20',
	// 		amountOfElectricityHKE: '386006',
	// 		amountOfElectricityCLP: '192011',
	// 		annualWaterConsumption: '2685800',
	// 		totalWeightof_InertWasteDisposedPerAnnum: '43400',
	// 		totalWeightOf_Non_InertWasteDisposedPerAnnum: '10000',
	// 		totalWeightOf_Mixed_WasteDisposedPerAnnum: '20000',
	// 		noOfIndustrialAccidents: '5',
	// 		noOfOccupationalIncident: '10',
	// 		numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: '2',
	// 		noOfHoursOfTranningPMStaff: '50',
	// 		noOfPMStaff: '40',
	// 		noOfHoursOfTranningTechnicalStaff: '150',
	// 		noOfTechnicalStaff: '50',
	// 		noOfHoursOfTranning: '200',
	// 		noOfDirectLabor: 50,
	// 		noOfStaffJoiningYMSOrSimilar: '10',
	// 		noOfYoungStaff: '40',
	// 		noOfManhoursInCommunityService: '200',
	// 		moneyToSupportCommunityService: '200000',
	// 		employeeSize: '1000',
	// 		noOfStaff: '1000',
	// 		noOfSupportingStaff: '120',
	// 		noOfResignationsManagementStaff: '2',
	// 		noOfResignationsTechnicalStaff: '8',
	// 		noOfResignationsDirectStaff: '10',
	// 		noOfResignationsSupportingStaff: '13',
	// 		IsAdoptedSupplyChainManagement: true,
	// 		numberAndTypeOfOrganisationAndParticipation: '3',
	// 		noOfHourOfAnticorruptionTranningNewStaff: '20',
	// 		noOfNewStaff: '40',
	// 		noOfHourAnticorruptionTranningExistingStaff: '50',
	// 		noExistingStaff: '100',
	// 		numberOfConvictionsRelatedToTheEnvironment: '1',
	// 		noOfEnvironmentalProfessionals: '3',
	// 		noOfEnvironmentalPersonnel: '5',
	// 		IsAdoptedHealthAndSafety: false,
	// 		noOfConvictionsRelatedToHealthyAndSafety: '1',
	// 		suspensionNoticesDueToSafetyIssues: '0',
	// 		numberAndTypeOfAsWellAsAchivementResultedFromParticipation: '3',
	// 		noOfSafetyTraningHoursManagementStaff: '30',
	// 		noOfSafetyTraningHoursOperationalStaff: '50',
	// 		noOfSafetyTraningHoursDirectLabour: '100'
	// 	}
	// }, [])

	//console.log('submission form error', error);

	return (
		<Formik initialValues={initialValues} validationSchema={submissionFormSchema} onSubmit={handleSubmit}>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Submit data" />
					{error && error ? (<Alert color="danger"> {errorMessage} </Alert>) : null}
					<SubmissionForm />
				</Container>
			</div>
		</Formik>
	)
}

export default withTranslation()(UploadESGData)
