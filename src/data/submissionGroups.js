import AdoptedToolsType from "./adoptedToolsType"
import AdoptedToolsHealthAndSafetyType from "./apdoptedToolsHealthAndSafetyType"
import ProjectType from "./projectType"
import TypeOfSafetyOrEsgRelatedTechnologiesUsed from "./typeOfSafetyOrEsgRelatedTechnologiesUsed"
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
        name: 'projectTypeOther',
        label: T(`Project type (if you have selected 'Other')`),
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
    {
      name: 'noOfElectricityLeakOrRiskDetected',
      label: T('No. of electricity leak or risk detected'),
      disabled: true
    }
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
    {
      name: 'noOfTrainedWorkerEEsgBuildFunApp',
      label: T('No. of trained worker(E) - ESG Build Fun App'),
      disabled: true
    },
    {
      name: 'noOfTrainingsEEsgBuildFunApp',
      label: T('No. of Trainings(E) - ESG Build Fun App'),
      disabled: true
    }

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
        ),
        length: 4
      },
      {
        name: 'noOfFatality',
        label: T('No. of fatality'),
        length: 4
      },
      {
        name: 'lostDaysDueToInjuries',
        label: T('Lost days due to injuries'),
        length: 4
      },
      {
        name: 'noOfSafetyOrEsgRelatedTechnologiesUsed',
        label: T('No. of Safety or ESG related technologies used'),
        length: 4
      },
      {
        name: 'typeOfSafetyOrEsgRelatedTechnologiesUsed',
        label: T('Type of Safety or ESG related technologies used'),
        type: 'checkboxes',
        multiple: true,
        options: TypeOfSafetyOrEsgRelatedTechnologiesUsed,
        length: 4
      },
      {
        name: 'typeOfSafetyOrEsgRelatedTechnologiesUsedOther',
        label: T('Type of Safety or ESG related technologies used (other)'),
        type: 'textarea',
        length: 4
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
      {
        name: 'noOfHoursAttendingVrTrainings',
        label: T('No. of hours attending VR trainings'),
        disabled: true
      }
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
        label: T('No. of management or above staff'),
        length: 4
      },

      {
        name: 'noOfSupervisorOrAboveStaff',
        label: T('No. of supervisor or above staff'),
        length: 4
      },
      {
        name: 'noOfOperatorOrSupportLevelStaff',
        label: T('No. of operator or support level staff'),
        length: 4
      },
      {
        name: 'noOfResignationsManagementOrAboveStaff',
        label: T('No. of resignations - management or above staff'),
        length: 4
      },
      {
        name: 'noOfResignationsSupervisorOrAboveStaff',
        label: T('No. of resignations - supervisor or above staff'),
        length: 4
      },
      {
        name: 'noOfResignationsOperatorOrSupportLevelStaff',
        label: T('No. of resignations - operator or support level staff'),
        length: 4
      },
      {
        name: 'noOfTrainedWorkerSEsgBuildFunApp',
        label: T('No. of trained worker(S) - ESG Build Fun App'),
        disabled: true
      },
      {
        name: 'noOfTrainingsSEsgBuildFunApp',
        label: T('No. of Trainings(S) - ESG Build Fun App'),
        disabled: true
      }

    ]
  },
  {
    title: T('In-house Codes and Guidelines Governing Supply Chain Management'),
    fields: [
      {
        name: 'adoptedTools',
        label: T('Adopted tools'),
        type: 'checkboxes',
        multiple: true,
        options: AdoptedToolsType,
        length: 6
      },
    ]
  },
  {
    title: T('In-house Codes and Guidelines Governing - Anticorruption'),
    fields: [
      {
        name: 'noOfAnticorruptionCampaignsActivitiesProvided',
        label: T('No. of anticorruption campaigns / activities provided'),
        length: 4
      },
      {
        name: 'typeOfAnticorruptionCampaignsActivities',
        label: T('Type of anticorruption campaigns / activities'),
        type: 'textarea',
        length: 4
      },

      {
        name: 'trainingHoursNewStaff',
        label: T('Training hours – new staff'),
        length: 4
      },
      {
        name: 'noOfNewStaff',
        label: T('No. of new staff'),
        length: 4
      },
      {
        name: 'trainingHoursExistingStaff',
        label: T('Training hours – existing staff'),
        length: 4
      },
      {
        name: 'noExistingStaff',
        label: T('No. of existing staff'),
        length: 4
      },
    ]
  },
  {
    title: T('In-house Codes and Guidelines Governing - Environment'),
    fields: [
      {
        name: 'noOfConvictionsRelatedToTheEnvironment',
        label: T('No. of convictions related to the environment'),
        length: 4
      },
      {
        name: 'noOfEnvironmentalProfessionals',
        label: T('No. of environmental professionals'),
        length: 4
      },
      {
        name: 'noOfEnvironmentalPersonnel',
        label: T('No. of environmental personnel'),
        length: 4
      },
      {
        name: 'noOfEnvironmentalAwardReceived',
        label: T('No. of environmental award received'),
        length: 4
      },
      {
        name: 'typeOfEnvironmentalAwardReceived',
        label: T('Type of environmental award received'),
        type: 'textarea',
        length: 4
      },
    ]
  },
  {
    title: T('In-house Codes and Guidelines Governing-  Health and Safety'),
    fields: [
      {
        name: 'apdoptedToolsHealthAndSafety',
        label: T('Adopted tools'),
        type: 'checkboxes',
        multiple: true,
        options: AdoptedToolsHealthAndSafetyType,
      },
      {
        name: 'noOfConvictionsRelatedToHealthyAndSafety',
        label: T('No. of convictions related to health and safety'),

      },
      {
        name: 'suspensionNoticesDueToSafetyIssues',
        label: T('Suspension notices due to safety issues (including those caused by subcontractors involved in a project)'),
      },
      {
        name: 'noOfSafetyAndHealthAwardReceived',
        label: T('No. of safety and health award received'),
      },
      {
        name: 'typeOfSafetyAndHealthAwardReceived',
        label: T('Type of safety and health award received'),
        type: 'textarea'
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
      {
        name: 'noOfRiskAssessmentsCreatedFromRace',
        label: T('No. of risk assessments created from RACE'),
        disabled: true
      },
      {
        name: 'noOfTrainedWorkerGEsgBuildFunApp',
        label: T('No. of trained worker(G) - ESG Build Fun App'),
        disabled: true
      },
      {
        name: 'noOfTrainingsGEsgBuildFunApp',
        label: T('No. of Trainings(G) - ESG Build Fun App'),
        disabled: true
      }
    ]
  },
]

export default SubmissionGroups