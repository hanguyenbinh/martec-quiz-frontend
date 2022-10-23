export class Indicators {
  constructor(
    data
  ) {
    Object.assign(this, data);
    this.calUsageOfCombustibleFuelPetrol()
    this.calUsageOfCombustibleFuelDiesel()
    this.calUsageOfElectricityHKE()
    this.calUsageOfElectricityCLP()
    this.calCo2EmissionsOfCombustibleFuelPetrol()
    this.calCo2EmissionsOfCombustibleFuelDiesel()
    this.calCo2EmissionsOfElectricityHKE()
    this.calCo2EmissionsOfElectricityCLP()
    this.calUsageOfFreshWater()
    this.calAmountOfInertWasteDisposed()
    this.calAmountOfNoninertWastePlacedDisposed()
    this.calAmountOfMixedWastePlacedDisposed()
    this.calAccidentRate()
    this.calIncidentRate()
    this.calUseOfAdvanceHealthAndSafetyTechnologies()
    this.calAverageHoursOfTrainingPerannumPerManagementAndProjectMgtStaff()
    this.calAverageHoursOfTrainingPerannumPerTechnicalStaff()
    this.calAverageHoursOfTrainingPerannumPerDirectLabour()
    this.calProportionOfYoungStaffBeingNurtured()
    this.calAmountOfTimeDevotedToCommunityService()
    this.calAmountOfMoneyDevotedToCommunityService()
    this.calTurnoverRateManagementStaff()
    this.calTurnOverRateTechnicalStaff()
    this.calTurnOverRateDirectLabor()
    this.calTurnOverRateSupportingStaff()
    this.calCommitmentToAdoptNovelQualityAndRiskManagementMeasuresSystems()
    this.calActivenessInPromotingAnticorruption()
    this.calCommitmentToAnticorruptionAwarenessEducationNewStaff()
    this.calCommitmentToAntiCorruptionAwarenessEducationExistingStaff()
    this.calNumberOfEnvironmentalConvictions()
    this.calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsStaffPer100MHKD()
    this.calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelStaffPer100MHKD()
    this.calCommitmentToAdoptingNovelHealthAndSafetyManagementMeasures()
    this.calNumberOfSafetyConvictions()
    this.calNumberOfSuspensionNotices()
    this.calActivenessInParticipatingInSiteSafetyPromotionCampaignsAndAwards()
    this.calCommitmentToSafetyTrainingHoursPerManagementStaff()
    this.calCommitmentToSafetyTrainingHoursPerOperationalStaff()
    this.calCommitmentToSafetyTrainingHoursPerDirectLabour()
  }

  calUsageOfCombustibleFuelPetrol() {
    this.UsageOfCombustibleFuelPetrolKWhPer100MHKD = (this.petrolUsage * 9.691 * 100000000) / this.grossValueOfConstructionWork;
  }

  calUsageOfCombustibleFuelDiesel() {
    this.UsageOfCombustibleFuelDieselKWhPer100MHKD = this.dieselUsage * 10.703 * 100000000 / this.grossValueOfConstructionWork;
  }

  calUsageOfElectricityHKE() {
    this.UsageOfElectricityHKEKWhPer100MHKD = this.amountOfElectricityHKE * 100000000 / this.grossValueOfConstructionWork;
  }

  calUsageOfElectricityCLP() {
    this.UsageOfElectricityCLPKWhPer100MHKD = this.amountOfElectricityCLP * 100000000 / this.grossValueOfConstructionWork;
  }

  calCo2EmissionsOfCombustibleFuelPetrol() {
    this.CO2EmissionsOfCombustibleFuelPetrolM3Per100MHKD = (this.petrolUsage * 2.36 * 556.2 * 100000000) / this.grossValueOfConstructionWork / 1000;
  }
  calCo2EmissionsOfCombustibleFuelDiesel() {
    this.CO2EmissionsOfCombustibleFuelDieselM3Per100MHKD = (this.petrolUsage * 2.614 * 556.2 * 100000000) / this.grossValueOfConstructionWork / 1000;
  }

  calCo2EmissionsOfElectricityHKE() {
    this.CO2EmissionsOfElectricityHKEM3Per100MHKD = this.amountOfElectricityHKE * 0.71 * 1350 * 100000000 / this.grossValueOfConstructionWork / 1000;
  }

  calCo2EmissionsOfElectricityCLP() {
    this.CO2EmissionsOfElectricityCLPM3Per100MHKD = this.amountOfElectricityCLP * 0.37 * 1350 * 100000000 / this.grossValueOfConstructionWork / 1000;
  }

  calUsageOfFreshWater() {
    this.UsageOfFreshWaterM3Per100MHKD = this.annualWaterConsumption * 100000000 / this.grossValueOfConstructionWork;
  }

  calAmountOfInertWasteDisposed() {
    this.AmountOfInertWasteDisposedTonnePer100MHKD = this.totalWeightof_InertWasteDisposedPerAnnum * 100000000 / this.grossValueOfConstructionWork;
  }

  calAmountOfNoninertWastePlacedDisposed() {
    this.AmountOfNoninertWastePlacedDisposedTonnePer100MHKD = this.totalWeightOf_Non_InertWasteDisposedPerAnnum * 100000000 / this.grossValueOfConstructionWork;
  }

  calAmountOfMixedWastePlacedDisposed() {
    this.AmountOfMixedWastePlacedDisposedTonnePer100MHKD = this.totalWeightof_InertWasteDisposedPerAnnum * 100000000 / this.grossValueOfConstructionWork
  }

  calAccidentRate() {
    this.AccidentRateNoPer1000Workers = this.noOfIndustrialAccidents * 1000 / this.employeeSize;
  }

  calIncidentRate() {
    this.IncidentRateNoPer1000Workers = this.noOfOccupationalIncident * 1000 / this.employeeSize;
  }

  calUseOfAdvanceHealthAndSafetyTechnologies() {
    this.UseOfAdvanceHealthAndSafetyTechnologies = this.numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed;
  }

  calAverageHoursOfTrainingPerannumPerManagementAndProjectMgtStaff() {
    this.AverageHoursOfTrainingPerAnnumPerManagementAndProjectMgtStaff = this.noOfHoursOfTranningPMStaff / this.noOfPMStaff;
  }

  calAverageHoursOfTrainingPerannumPerTechnicalStaff() {
    this.AverageHoursOfTrainingPerAnnumPerTechnicalStaff = this.noOfHoursOfTranningTechnicalStaff / this.noOfTechnicalStaff
  }

  calAverageHoursOfTrainingPerannumPerDirectLabour() {
    this.AverageHoursOfTrainingPerAnnumPerDirectLabour = this.noOfHoursOfTranning / this.noOfDirectLabor
  }

  calProportionOfYoungStaffBeingNurtured() {
    this.ProportionOfYoungStaffBeingNurtured = this.noOfStaffJoiningYMSOrSimilar / this.noOfYoungStaff;
  }

  calAmountOfTimeDevotedToCommunityService() {
    this.AmountOfTimeDevotedToCommunityServiceHoursPerStaff = this.noOfManhoursInCommunityService / this.noOfStaff;
  }

  calAmountOfMoneyDevotedToCommunityService() {
    this.AmountOfMoneyDevotedToCommunityServiceHKDPerStaff = this.moneyToSupportCommunityService / this.noOfStaff;
  }

  calTurnoverRateManagementStaff() {
    this.TurnoverRateManagementStaff = this.noOfResignationsManagementStaff / this.noOfPMStaff;
  }

  calTurnOverRateTechnicalStaff() {
    this.TurnoverRateTechnicalStaff = this.noOfResignationsTechnicalStaff / this.noOfTechnicalStaff;
  }

  calTurnOverRateDirectLabor() {
    this.TurnoverRateDirectLabor = this.noOfResignationsDirectStaff / this.noOfDirectLabor;
  }

  calTurnOverRateSupportingStaff() {
    this.TurnoverRateSupportingStaff = this.noOfResignationsSupportingStaff / this.noOfSupportingStaff
  }

  calCommitmentToAdoptNovelQualityAndRiskManagementMeasuresSystems() {
    this.CommitmentToAdoptNovelQualityAndRiskManagementMeasuresSystems = this.IsAdoptedSupplyChainManagement;
  }

  calActivenessInPromotingAnticorruption() {
    this.ActivenessInPromotingAnticorruption = 0;
  }

  calCommitmentToAnticorruptionAwarenessEducationNewStaff() {
    this.CommitmentToAnticorruptionAwarenessEducationHoursPerNewStaff = this.noOfHourOfAnticorruptionTranningNewStaff / this.noOfNewStaff;
  }

  calCommitmentToAntiCorruptionAwarenessEducationExistingStaff() {
    this.CommitmentToAnticorruptionAwarenessEducationHoursPerExistingStaff = this.noOfHourAnticorruptionTranningExistingStaff / this.noExistingStaff
  }

  calNumberOfEnvironmentalConvictions() {
    this.NumberOfEnvironmentalConvictions = this.numberOfConvictionsRelatedToTheEnvironment;
  }

  calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsStaffPer100MHKD() {
    this.CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsStaffPer100MHKD = (this.noOfEnvironmentalProfessionals * 100000000) / this.grossValueOfConstructionWork;
  }

  calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelStaffPer100MHKD() {
    this.CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelStaffPer100MHKD = (this.noOfEnvironmentalPersonnel * 100000000) / this.grossValueOfConstructionWork;
  }

  calCommitmentToAdoptingNovelHealthAndSafetyManagementMeasures() {
    this.CommitmentToAdoptingNovelHealthAndSafetyManagementMeasures = this.IsAdoptedHealthAndSafety;
  }

  calNumberOfSafetyConvictions() {
    this.NumberOfSafetyConvictions = this.noOfConvictionsRelatedToHealthyAndSafety;
  }

  calNumberOfSuspensionNotices() {
    this.NumberOfSuspensionNotices = this.suspensionNoticesDueToSafetyIssues;
  }

  calActivenessInParticipatingInSiteSafetyPromotionCampaignsAndAwards() {
    this.ActivenessInParticipatingInSiteSafetyPromotionCampaignsAndAwards = this.numberAndTypeOfAsWellAsAchivementResultedFromParticipation;
  }

  calCommitmentToSafetyTrainingHoursPerManagementStaff() {
    this.CommitmentToSafetyTrainingHoursPerManagementStaff = this.noOfSafetyTraningHoursManagementStaff / this.noOfSafetyTraningHoursOperationalStaff;
  }

  calCommitmentToSafetyTrainingHoursPerOperationalStaff() {
    this.CommitmentToSafetyTrainingHoursPerOperationalStaff = this.noOfSafetyTraningHoursOperationalStaff / this.noOfTechnicalStaff;
  }

  calCommitmentToSafetyTrainingHoursPerDirectLabour() {
    this.CommitmentToSafetyTrainingHoursPerDirectLabour = this.noOfSafetyTraningHoursDirectLabour / this.noOfDirectLabor;
  }

}