import React, { useEffect, useState } from "react"
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
import TypeOfSafetyOrESGRelatedTechnologiesUsed from "src/data/typeOfSafetyOrESGRelatedTechnologiesUsed"
import AdoptedToolsType from "src/data/adoptedToolsType"
import AdoptedToolsHealthAndSafetyType from "src/data/apdoptedToolsHealthAndSafetyType"
import ProjectType from "src/data/projectType"
import YearType from "src/data/yearType"

const submissionFormSchema = Yup.object().shape({
	yearOfRecord: Yup.string().required('Required'),
	projectType: Yup.string().required('Required'),
	grossValueOfConstructionWork: Yup.string().required('Required'),
	totalNoOfManDays: Yup.string().required('Required'),
	totalManHoursWorked: Yup.string().required('Required'),
	petrolUsage: Yup.string().required('Required'),
	dieselUsage: Yup.string().required('Required'),
	amountOfElectricityHKE: Yup.string().required('Required'),
	amountOfElectricityCLP: Yup.string().required('Required'),
	annualWaterConsumption: Yup.string().required('Required'),
	totalWeightof_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	totalWeightOf_Non_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	noOfNonFatalReportableAccident: Yup.string().required('Required'),
	noOfFatality: Yup.string().required('Required'),
	lostDaysDueToInjuries: Yup.string().required('Required'),
	noOfSafetyOrESGRelatedTechnologiesUsed: Yup.string().required('Required'),
	typeOfSafetyOrESGRelatedTechnologiesUsed: Yup.string().nullable(),
	typeOfSafetyOrESGRelatedTechnologiesUsedOther: Yup.string().nullable(),
	noOfHoursOfTrainingManagementOrAboveStaff: Yup.string().required('Required'),
	noOfManagementOrAboveStaff: Yup.string().required('Required'),
	noOfHoursOfTrainingSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfHoursOfTrainingOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	noOfStaffJoiningYMS: Yup.string().required('Required'),
	noOfYoungStaff: Yup.string().required('Required'),
	noOfManhoursInCommunityService: Yup.string().required('Required'),
	communityServiceDonationAmount: Yup.string().required('Required'),
	employeeSize: Yup.string().required('Required'),
	noOfSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	noOfResignationsManagementOrAboveStaff: Yup.string().required('Required'),
	noOfResignationsSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfResignationsOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	adoptedTools: Yup.string().required('Required'),
	typeOfAnticorruptionCampaignsActivities: Yup.string().required('Required'),
	noOfAnticorruptionCampaignsActivitiesProvided: Yup.string().required('Required'),
	trainingHoursNewStaff: Yup.string().required('Required'),
	noOfNewStaff: Yup.string().required('Required'),
	trainingHoursExistingStaff: Yup.string().required('Required'),
	noExistingStaff: Yup.string().required('Required'),
	noOfConvictionsRelatedToTheEnvironment: Yup.string().required('Required'),
	noOfEnvironmentalProfessionals: Yup.string().required('Required'),
	noOfEnvironmentalPersonnel: Yup.string().required('Required'),
	noOfEnvironmentalAwardReceived: Yup.string().required('Required'),
	typeOfEnvironmentalAwardReceived: Yup.string().required('Required'),
	apdoptedToolsHealthAndSafety: Yup.string().required('Required'),
	noOfConvictionsRelatedToHealthyAndSafety: Yup.string().required('Required'),
	suspensionNoticesDueToSafetyIssues: Yup.string().required('Required'),
	typeOfSafetyAndHealthAwardReceived: Yup.string().required('Required'),
	noOfSafetyAndHealthAwardReceived: Yup.string().required('Required'),
	safetyTrainingHoursManagementOrAboveStaff: Yup.string().required('Required'),
	safetyTrainingHoursSupervisorOrAboveStaff: Yup.string().required('Required'),
	safetyTrainingHoursOperatorOrSupportLevelStaff: Yup.string().required('Required'),
});

const SubmissionForm = (props) => {
	const T = props.t ? props.t : (value) => value;
	const submissionGroups = [
		{
			title: T('Company Info'),
			fields: [
				{
					name: 'employeeSize',
					label: T('Employment Size')
				},
				{
					name: 'yearOfRecord',
					label: T('Year of Record'),
					type: 'select',
					options: YearType
				},
				{
					name: 'projectType',
					label: T('Project Type'),
					type: 'select',
					options: ProjectType
				},
				{
					name: 'grossValueOfConstructionWork',
					label: T('Gross value of construction work (HKD)')
				},
				{
					name: 'totalNoOfManDays',
					label: T('Total no. of man-days')
				},
				{
					name: 'totalManHoursWorked',
					label: T('Total man-hours worked'),
					tooltip: 'Average no. of workers x working hours x no. of man-days'
				},

			]
		},
		{
			title: T('Energy/Water Consumption'),
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
			title: T('Waste Production'),
			fields: [{
				name: 'totalWeightof_InertWasteDisposedPerAnnum',
				label: T('Total weight of inert waste disposed (Tonne)')
			},
			{
				name: 'totalWeightOf_Non_InertWasteDisposedPerAnnum',
				label: T('Total weight of non-inert waste disposed (Tonne)')
			},

			]
		},
		{
			title: T('Health and Safety'),
			fields: [
				{
					name: 'noOfNonFatalReportableAccident',
					label: T('No. of non-fatal reportable accident'),
					tooltip: T(`"Reportable Accident" is defined as an accident resulting in an injury leave with man-day lost more than 3 days
					"No. of Non-fatal Reportable Accident" should include all work accident cases of your direct workers and sub-contractor workers reported to the Labour Department under the EC Ordinance.`)
				},
				{
					name: 'noOfFatality',
					label: T('No. of fatality')
				},
				{
					name: 'lostDaysDueToInjuries',
					label: T('Lost days due to injuries')
				},
				{
					name: 'noOfSafetyOrESGRelatedTechnologiesUsed',
					label: T('No. of Safety or ESG related technologies used')
				},
				{
					name: 'typeOfSafetyOrESGRelatedTechnologiesUsed',
					label: T('Type of Safety or ESG related technologies used'),
					type: 'select',
					options: TypeOfSafetyOrESGRelatedTechnologiesUsed
				},
				{
					name: 'typeOfSafetyOrESGRelatedTechnologiesUsedOther',
					label: T('No. of Safety or ESG related technologies used (other)')
				},
			]
		},
		{
			title: T('Development and Training'),
			fields: [
				{
					name: 'noOfHoursOfTrainingManagementOrAboveStaff',
					label: T('No. of hours of training - management or above staff')
				},
				{
					name: 'noOfManagementOrAboveStaff',
					label: T('No. of management or above staff')
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
					label: T('No. of staff joining YMS'),
					tooltip: T('HKCA Young Members Society (YMS) or HKCA Young Members Society Professionals Connection - Graduated Member (YMS Pro)')
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
					options: AdoptedToolsType
				}
			]
		},
		{
			title: T('In-house Codes and Guidelines Governing - Anticorruption'),
			fields: [{
				name: 'typeOfAnticorruptionCampaignsActivities',
				label: T('Type of anticorruption campaigns / activities')
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
					label: T('Type of environmental award received')
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
					options: AdoptedToolsHealthAndSafetyType
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
					label: T('Type of safety and health award received')
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


	const { values, handleSubmit, resetForm } = useFormikContext()
	const handleReset = () => {
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
	const email = localStorage.getItem("email");
	const { error } = useSelector(state => ({
		error: state.SubmissionForm.error,
	}));
	const [errorMessage, setErrorMessage] = useState('')
	console.log('uploadESGdata', error)
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
		console.log('submissionForm')
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
			yearOfRecord: YearType[0].value,
			projectType: ProjectType[0].value,
			grossValueOfConstructionWork: '',
			totalNoOfManDays: '',
			totalManHoursWorked: '',
			petrolUsage: '',
			dieselUsage: '',
			amountOfElectricityHKE: '',
			amountOfElectricityCLP: '',
			annualWaterConsumption: '',
			totalWeightof_InertWasteDisposedPerAnnum: '',
			totalWeightOf_Non_InertWasteDisposedPerAnnum: '',
			noOfNonFatalReportableAccident: '',
			noOfFatality: '',
			lostDaysDueToInjuries: '',
			noOfSafetyOrESGRelatedTechnologiesUsed: '',
			typeOfSafetyOrESGRelatedTechnologiesUsed: TypeOfSafetyOrESGRelatedTechnologiesUsed[0].value,
			noOfHoursOfTrainingManagementOrAboveStaff: '',
			typeOfSafetyOrESGRelatedTechnologiesUsedOther: '',
			noOfManagementOrAboveStaff: '',
			noOfHoursOfTrainingSupervisorOrAboveStaff: '',
			noOfHoursOfTrainingOperatorOrSupportLevelStaff: '',
			noOfStaffJoiningYMS: '',
			noOfYoungStaff: '',
			noOfManhoursInCommunityService: '',
			communityServiceDonationAmount: '',
			employeeSize: '',
			noOfSupervisorOrAboveStaff: '',
			noOfOperatorOrSupportLevelStaff: '',
			noOfResignationsManagementOrAboveStaff: '',
			noOfResignationsSupervisorOrAboveStaff: '',
			noOfResignationsOperatorOrSupportLevelStaff: '',
			adoptedTools: AdoptedToolsType[0].value,
			typeOfAnticorruptionCampaignsActivities: '',
			noOfAnticorruptionCampaignsActivitiesProvided: '',
			trainingHoursNewStaff: '',
			noOfNewStaff: '',
			trainingHoursExistingStaff: '',
			noExistingStaff: '',
			noOfConvictionsRelatedToTheEnvironment: '',
			noOfEnvironmentalProfessionals: '',
			noOfEnvironmentalPersonnel: '',
			noOfEnvironmentalAwardReceived: '',
			typeOfEnvironmentalAwardReceived: '',
			apdoptedToolsHealthAndSafety: AdoptedToolsHealthAndSafetyType[0].value,
			noOfConvictionsRelatedToHealthyAndSafety: '',
			suspensionNoticesDueToSafetyIssues: '',
			typeOfSafetyAndHealthAwardReceived: '',
			noOfSafetyAndHealthAwardReceived: '',
			safetyTrainingHoursManagementOrAboveStaff: '',
			safetyTrainingHoursSupervisorOrAboveStaff: '',
			safetyTrainingHoursOperatorOrSupportLevelStaff: '',
		}

	}, [])

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
