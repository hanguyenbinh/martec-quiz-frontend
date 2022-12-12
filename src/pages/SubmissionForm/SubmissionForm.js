import React, { useEffect, useRef, useState } from "react"
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
import { getDefaultSubmissions, postSubmissionForm, submitDraftSubmissions } from "../../store/submissionForm/actions"
import TypeOfSafetyOrESGRelatedTechnologiesUsed from "src/data/typeOfSafetyOrESGRelatedTechnologiesUsed"
import AdoptedToolsType from "src/data/adoptedToolsType"
import AdoptedToolsHealthAndSafetyType from "src/data/apdoptedToolsHealthAndSafetyType"
import ProjectType from "src/data/projectType"
import YearType from "src/data/yearType"
import SubmissionGroups from "src/data/submissionGroups"

const submissionFormSchema = Yup.object().shape({
	adoptedTools: Yup.array().of(Yup.string()).notRequired(),
	amountOfElectricityCLP: Yup.string().required('Required'),
	amountOfElectricityHKE: Yup.string().required('Required'),
	annualWaterConsumption: Yup.string().required('Required'),
	apdoptedToolsHealthAndSafety: Yup.array().of(Yup.string()).notRequired(),
	communityServiceDonationAmount: Yup.string().required('Required'),
	dieselUsage: Yup.string().required('Required'),
	employeeSize: Yup.string().required('Required'),
	grossValueOfConstructionWork: Yup.string().required('Required'),
	lostDaysDueToInjuries: Yup.string().required('Required'),
	noExistingStaff: Yup.string().required('Required'),
	noOfAnticorruptionCampaignsActivitiesProvided: Yup.string().required('Required'),
	noOfConvictionsRelatedToHealthyAndSafety: Yup.string().required('Required'),
	noOfConvictionsRelatedToTheEnvironment: Yup.string().required('Required'),
	noOfEnvironmentalAwardReceived: Yup.string().required('Required'),
	noOfEnvironmentalPersonnel: Yup.string().required('Required'),
	noOfEnvironmentalProfessionals: Yup.string().required('Required'),
	noOfFatality: Yup.string().required('Required'),
	noOfHoursOfTrainingManagementOrAboveStaff: Yup.string().required('Required'),
	noOfHoursOfTrainingOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	noOfHoursOfTrainingSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfManagementOrAboveStaff: Yup.string().required('Required'),
	noOfManhoursInCommunityService: Yup.string().required('Required'),
	noOfNewStaff: Yup.string().required('Required'),
	noOfNonFatalReportableAccident: Yup.string().required('Required'),
	noOfOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	noOfResignationsManagementOrAboveStaff: Yup.string().required('Required'),
	noOfResignationsOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	noOfResignationsSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfSafetyAndHealthAwardReceived: Yup.string().required('Required'),
	noOfSafetyOrESGRelatedTechnologiesUsed: Yup.string().required('Required'),
	noOfStaffJoiningYMS: Yup.string().required('Required'),
	noOfSupervisorOrAboveStaff: Yup.string().required('Required'),
	noOfYoungStaff: Yup.string().required('Required'),
	petrolUsage: Yup.string().required('Required'),
	projectType: Yup.string().required('Required'),
	safetyTrainingHoursManagementOrAboveStaff: Yup.string().required('Required'),
	safetyTrainingHoursOperatorOrSupportLevelStaff: Yup.string().required('Required'),
	safetyTrainingHoursSupervisorOrAboveStaff: Yup.string().required('Required'),
	suspensionNoticesDueToSafetyIssues: Yup.string().required('Required'),
	totalManHoursWorked: Yup.string().required('Required'),
	totalNoOfManDays: Yup.string().required('Required'),
	totalWeightof_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	totalWeightOf_Non_InertWasteDisposedPerAnnum: Yup.string().required('Required'),
	trainingHoursExistingStaff: Yup.string().required('Required'),
	trainingHoursNewStaff: Yup.string().required('Required'),
	typeOfAnticorruptionCampaignsActivities: Yup.string().required('Required'),
	typeOfEnvironmentalAwardReceived: Yup.string().required('Required'),
	typeOfSafetyAndHealthAwardReceived: Yup.string().required('Required'),
	typeOfSafetyOrESGRelatedTechnologiesUsed: Yup.array().of(Yup.string()).notRequired(),
	typeOfSafetyOrESGRelatedTechnologiesUsedOther: Yup.string().nullable(),
	yearOfRecord: Yup.string().required('Required'),

});

const SubmissionForm = (props) => {
	const T = props.t ? props.t : (value) => value;
	const dispatch = useDispatch();



	const { values, handleSubmit, resetForm } = useFormikContext()
	const handleReset = () => {
		if (window.confirm('Do you want to reset?')) {
			resetForm();
		}
	};

	const handleSaveDraft = () => {
		dispatch(submitDraftSubmissions(values, props.history))
	}

	useEffect(() => { }, [])

	return (
		<Form
			onSubmit={handleSubmit}
		>

			{SubmissionGroups(T).map((group, index) => (
				<SubmissionGroup key={`SubmissionForm_${index}`} title={group.title} fields={group.fields}></SubmissionGroup>
			))}
			<div className="mb-3 d-flex justify-content-end">
				{/* <Button color="info" onClick={handleSaveDraft}>Save as draft</Button> */}
				<Button className="ms-3" type='reset' onClick={handleReset}>Reset</Button>
				<Button className="ms-3" type="submit">Submit</Button>
			</div>
		</Form>
	)
}

const UploadESGData = (props) => {
	const dispatch = useDispatch();
	const formikRef = useRef()
	const email = localStorage.getItem("email");
	const [initValue, setInitValue] = useState({})
	const { error, defaultSubmissions, sectionRemarks } = useSelector(state => ({
		error: state.SubmissionForm.error,
		defaultSubmissions: state.SubmissionForm.defaultSubmissions,
		sectionRemarks: state.SubmissionForm.sectionRemarks
	}));
	const [errorMessage, setErrorMessage] = useState('')
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
	useEffect(() => {
		const initValue = {};
		defaultSubmissions.forEach(item => {
			initValue[item.fieldName] = item.value;
		})
		setInitValue(old => initValue)
	}, [defaultSubmissions])
	useEffect((
	) => {
		dispatch(getDefaultSubmissions())
	}, [])
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
		const result = {
			adoptedTools: [AdoptedToolsType[0].value],
			amountOfElectricityCLP: '',
			amountOfElectricityHKE: '',
			annualWaterConsumption: '',
			apdoptedToolsHealthAndSafety: [AdoptedToolsHealthAndSafetyType[0].value],
			communityServiceDonationAmount: '',
			dieselUsage: '',
			employeeSize: '',
			grossValueOfConstructionWork: '',
			lostDaysDueToInjuries: '',
			noExistingStaff: '',
			noOfAnticorruptionCampaignsActivitiesProvided: '',
			noOfConvictionsRelatedToHealthyAndSafety: '',
			noOfConvictionsRelatedToTheEnvironment: '',
			noOfEnvironmentalAwardReceived: '',
			noOfEnvironmentalPersonnel: '',
			noOfEnvironmentalProfessionals: '',
			noOfFatality: '',
			noOfHoursOfTrainingManagementOrAboveStaff: '',
			noOfHoursOfTrainingOperatorOrSupportLevelStaff: '',
			noOfHoursOfTrainingSupervisorOrAboveStaff: '',
			noOfManagementOrAboveStaff: '',
			noOfManhoursInCommunityService: '',
			noOfNewStaff: '',
			noOfNonFatalReportableAccident: '',
			noOfOperatorOrSupportLevelStaff: '',
			noOfResignationsManagementOrAboveStaff: '',
			noOfResignationsOperatorOrSupportLevelStaff: '',
			noOfResignationsSupervisorOrAboveStaff: '',
			noOfSafetyAndHealthAwardReceived: '',
			noOfSafetyOrESGRelatedTechnologiesUsed: '',
			noOfStaffJoiningYMS: '',
			noOfSupervisorOrAboveStaff: '',
			noOfYoungStaff: '',
			petrolUsage: '',
			projectType: ProjectType[0].value,
			safetyTrainingHoursManagementOrAboveStaff: '',
			safetyTrainingHoursOperatorOrSupportLevelStaff: '',
			safetyTrainingHoursSupervisorOrAboveStaff: '',
			suspensionNoticesDueToSafetyIssues: '',
			totalManHoursWorked: '',
			totalNoOfManDays: '',
			totalWeightof_InertWasteDisposedPerAnnum: '',
			totalWeightOf_Non_InertWasteDisposedPerAnnum: '',
			trainingHoursExistingStaff: '',
			trainingHoursNewStaff: '',
			typeOfAnticorruptionCampaignsActivities: '',
			typeOfEnvironmentalAwardReceived: '',
			typeOfSafetyAndHealthAwardReceived: '',
			typeOfSafetyOrESGRelatedTechnologiesUsed: [TypeOfSafetyOrESGRelatedTechnologiesUsed[0].value],
			typeOfSafetyOrESGRelatedTechnologiesUsedOther: '',
			yearOfRecord: YearType[0].value,
			...initValue
		}
		return result;

	}, [initValue])


	useEffect(() => {
		console.log('init value tracking', initialValues, initValue)
		formikRef.current.resetForm({ values: initialValues })

	}, [initValue])

	return (
		<Formik initialValues={initialValues} validationSchema={submissionFormSchema} onSubmit={handleSubmit} innerRef={formikRef}>
			<div className="page-content">
				<Container fluid>
					<BreadCrumb title="Submit data" />
					{error && error ? (<Alert color="danger"> {errorMessage} </Alert>) : null}
					<SubmissionForm history={props.history} />
				</Container>
			</div>
		</Formik>
	)
}

export default withTranslation()(UploadESGData)