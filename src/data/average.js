import * as math from 'mathjs';
export class Average {
  constructor(
    indicators
  ) {
    this.indicators = indicators;
  }

  UsageOfCombustibleFuelPetrolKWhPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.UsageOfCombustibleFuelPetrolKWhPer100MHKD);
      }
    })
    return this.average(values);
  }

  UsageOfCombustibleFuelDieselKWhPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.UsageOfCombustibleFuelDieselKWhPer100MHKD);
      }
    })
    console.log('UsageOfCombustibleFuelDieselKWhPer100MHKD', values);
    return this.average(values);
  }
  UsageOfElectricityHKEKWhPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.UsageOfElectricityHKEKWhPer100MHKD);
      }
    })
    return this.average(values);
  }
  UsageOfElectricityCLPKWhPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.UsageOfElectricityCLPKWhPer100MHKD);
      }
    })
    return this.average(values);
  }


  CO2EmissionsOfCombustibleFuelPetrolM3Per100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.CO2EmissionsOfCombustibleFuelPetrolM3Per100MHKD);
      }
    })
    return this.average(values);
  }

  CO2EmissionsOfCombustibleFuelDieselM3Per100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.CO2EmissionsOfCombustibleFuelDieselM3Per100MHKD);
      }
    })
    return this.average(values);
  }
  CO2EmissionsOfElectricityHKEM3Per100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.CO2EmissionsOfElectricityHKEM3Per100MHKD);
      }
    })
    return this.average(values);
  }
  CO2EmissionsOfElectricityCLPM3Per100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.CO2EmissionsOfElectricityCLPM3Per100MHKD);
      }
    })
    return this.average(values);
  }




  UsageOfFreshWaterM3Per100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.UsageOfFreshWaterM3Per100MHKD);
      }
    })
    return this.average(values);
  }
  AmountOfInertWasteDisposedTonnePer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.AmountOfInertWasteDisposedTonnePer100MHKD);
      }
    })
    return this.average(values);
  }
  AmountOfNoninertWastePlacedDisposedTonnePer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.AmountOfNoninertWastePlacedDisposedTonnePer100MHKD);
      }
    })
    return this.average(values);
  }
  AmountOfMixedWastePlacedDisposedTonnePer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.AmountOfMixedWastePlacedDisposedTonnePer100MHKD);
      }
    })
    return this.average(values);
  }


  AccidentRateNoPer1000Workers(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType && item.projectType === companySize) {
        values.push(item.AccidentRateNoPer1000Workers);
      }
    })
    return this.average(values);
  }

  IncidentRateNoPer1000Workers(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType && item.projectType === companySize) {
        values.push(item.IncidentRateNoPer1000Workers);
      }
    })
    return this.average(values);
  }

  UseOfAdvanceHealthAndSafetyTechnologies(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType && item.projectType === companySize) {
        values.push(item.UseOfAdvanceHealthAndSafetyTechnologies);
      }
    })
    return this.average(values);
  }



  AverageHoursOfTrainingPerAnnumPerManagementAndProjectMgtStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.AverageHoursOfTrainingPerAnnumPerManagementAndProjectMgtStaff);
      }
    })
    return this.average(values);
  }

  AverageHoursOfTrainingPerAnnumPerTechnicalStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.AverageHoursOfTrainingPerAnnumPerTechnicalStaff);
      }
    })
    return this.average(values);
  }

  AverageHoursOfTrainingPerAnnumPerDirectLabour(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.AverageHoursOfTrainingPerAnnumPerDirectLabour);
      }
    })
    return this.average(values);
  }

  ProportionOfYoungStaffBeingNurtured(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.ProportionOfYoungStaffBeingNurtured);
      }
    })
    return this.average(values);
  }

  AmountOfTimeDevotedToCommunityServiceHoursPerStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.AmountOfTimeDevotedToCommunityServiceHoursPerStaff);
      }
    })
    return this.average(values);
  }

  AmountOfMoneyDevotedToCommunityServiceHKDPerStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.AmountOfMoneyDevotedToCommunityServiceHKDPerStaff);
      }
    })
    return this.average(values);
  }



  TurnoverRateManagementStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.TurnoverRateManagementStaff);
      }
    })
    return this.average(values);
  }
  TurnoverRateTechnicalStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.TurnoverRateTechnicalStaff);
      }
    })
    return this.average(values);
  }
  TurnoverRateDirectLabor(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.TurnoverRateDirectLabor);
      }
    })
    return this.average(values);
  }
  TurnoverRateSupportingStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.TurnoverRateSupportingStaff);
      }
    })
    return this.average(values);
  }




  CommitmentToAnticorruptionAwarenessEducationHoursPerNewStaff() {
    const values = []
    this.indicators.forEach(item => {
      values.push(item.CommitmentToAnticorruptionAwarenessEducationHoursPerNewStaff);
    })
    return this.average(values);
  }
  CommitmentToAnticorruptionAwarenessEducationHoursPerExistingStaff() {
    const values = []
    this.indicators.forEach(item => {
      values.push(item.CommitmentToAnticorruptionAwarenessEducationHoursPerExistingStaff);
    })
    return this.average(values);
  }




  NumberOfEnvironmentalConvictions(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.NumberOfEnvironmentalConvictions);
      }
    })
    return this.average(values);
  }
  CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsStaffPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsStaffPer100MHKD);
      }
    })
    return this.average(values);
  }

  CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelStaffPer100MHKD(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.CommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelStaffPer100MHKD);
      }
    })
    return this.average(values);
  }


  NumberOfSafetyConvictions(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.NumberOfSafetyConvictions);
      }
    })
    return this.average(values);
  }

  NumberOfSuspensionNotices(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.projectType === projectType) {
        values.push(item.NumberOfSuspensionNotices);
      }
    })
    return this.average(values);
  }


  CommitmentToSafetyTrainingHoursPerManagementStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.CommitmentToSafetyTrainingHoursPerManagementStaff);
      }
    })
    return this.average(values);
  }
  CommitmentToSafetyTrainingHoursPerOperationalStaff(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.CommitmentToSafetyTrainingHoursPerOperationalStaff);
      }
    })
    return this.average(values);
  }
  CommitmentToSafetyTrainingHoursPerDirectLabour(projectType, companySize) {
    const values = []
    this.indicators.forEach(item => {
      if (item.companySize === companySize) {
        values.push(item.CommitmentToSafetyTrainingHoursPerDirectLabour);
      }
    })
    return this.average(values);
  }

  average(arrValue) {
    return arrValue.reduce((a, b) => a + b) / arrValue.length;
  }

  averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
  }
}