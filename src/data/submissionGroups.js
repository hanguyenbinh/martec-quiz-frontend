import AdoptedToolsType from "./adoptedToolsType"
import AdoptedToolsHealthAndSafetyType from "./apdoptedToolsHealthAndSafetyType"
import ProjectType from "./projectType"
import TypeOfSafetyOrESGRelatedTechnologiesUsed from "./typeOfSafetyOrESGRelatedTechnologiesUsed"
import YearType from "./yearType"


const SubmissionGroups = (T) => [
  {
    title: T('Project Information'),
    fields: [
      {
        name: 'employeeSize',
        label: T('Employment size')
      },
      {
        name: 'yearOfRecord',
        label: T('Recording period'),
        type: 'select',
        options: YearType
      },
      {
        name: 'projectType',
        label: T('Project type'),
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
      label: T('Annual water consumption (Metric tonnes or ㎥)')
    },
    ]
  },
  {
    title: T('Waste Management'),
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
        tooltip: (<><p>{T(`"Reportable Accident" is defined as an accident resulting in an injury leave with man-day lost more than 3 days`)}</p>
          <p>{T('"No. of Non-fatal Reportable Accident" should include all work accident cases of your direct workers and sub-contractor workers reported to the Labour Department under the EC Ordinance.')}</p>
          <p>{T('For member working in joint venture project, the "Fatal Accident", "Non-fatal Reportable Accident" and "Average no. of Workers" are equally split between JV partners.')}</p></>
        )
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
        multiple: true,
        options: TypeOfSafetyOrESGRelatedTechnologiesUsed
      },
      {
        name: 'typeOfSafetyOrESGRelatedTechnologiesUsedOther',
        label: T('Type of Safety or ESG related technologies used (other)'),
        type: 'textarea'
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
        tooltip: (<p>{T('HKCA Young Members Society (YMS) or HKCA Young Members Society Professionals Connection - Graduated Member (YMS Pro)')}</p>)
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
        options: AdoptedToolsType
      }
    ]
  },
  {
    title: T('In-house Codes and Guidelines Governing - Anticorruption'),
    fields: [{
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

export default SubmissionGroups