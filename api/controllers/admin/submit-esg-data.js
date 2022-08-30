
async function conputeUsageCombustibleFuel (indicatorId, petrolUsage, dieselUsage, biodieselUsage) {
  const
    kWhPetrol = petrolUsage * 47.10 * 277.778,
    kWhDiesel = dieselUsage * 45.66 * 277.778,
    kWhBiodiesel = biodieselUsage * 36.01;
  const usageOfCombustibleFuel = kWhPetrol + kWhDiesel + kWhBiodiesel;
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageOfCombustibleFuel', value: usageOfCombustibleFuel });
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageOfCombustibleFuelPetrol', value: kWhPetrol });
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageOfCombustibleFuelDiesel', value: kWhDiesel });
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageOfCombustibleFuelBiodiesel', value: kWhBiodiesel });
}

async function computeUsageElectricity(indicatorId, amountOfElectricityHKE, amountOfElectricityCLP) {
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'amountOfElectricityHKE', value: amountOfElectricityHKE * 277.778 });
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'amountOfElectricityCLP', value: amountOfElectricityCLP * 277.778 });
}

async function computeUsageOfRenewableEnergy(indicatorId, noOfProjectsUsingRenewEnergy, noOfProjects) {
  const usageOfRenewableEnergy = Math.round(noOfProjectsUsingRenewEnergy / noOfProjects * 100);
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageOfRenewableEnergy', value: usageOfRenewableEnergy });
}

async function computeUsageElectricVehicle(indicatorId, noOfProjectsUsingElectricVehicle, noOfProjects) {
  const usageElectricVehicle = Math.round(noOfProjectsUsingElectricVehicle / noOfProjects * 100);
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageElectricVehicle', value: usageElectricVehicle });
}

async function computeUsageFreshWater(indicatorId, waterConsumption) {
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageFreshWater', value: waterConsumption });
}

async function computeUsageRecoveredWater(indicatorId, noOfProjectsUsingRecoveredWater, noOfProjects) {
  const usageRecoveredWater = Math.round(noOfProjectsUsingRecoveredWater / noOfProjects * 100);
  await ESGIndicatorValue.create({ indicator: indicatorId, key: 'usageRecoveredWater', value: usageRecoveredWater });
}

module.exports = {

  friendlyName: 'Submit ecg data',

  description: '',

  inputs: {
    data: {
      required: true,
      type: 'ref'
    }
  },

  fn: async function ({ data }) {
    const company = this.req.me.company;
    const submission = await ESGDataSubmission.create({ company }).fetch();
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i], value = data[key];
      await ESGDataSubmissionValue.create({ submission: submission.id, key, value });
    }

    const indicator = await ESGIndicator.create({ company, recordingType: 'year', projectType: data.projectType, yearOfRecord: data.yearOfRecord }).fetch();
    const indicatorId = indicator.id;
    const { noOfProjects } = data;

    const { petrolUsage, dieselUsage, biodieselUsage } = data;
    await conputeUsageCombustibleFuel(indicatorId, petrolUsage, dieselUsage, biodieselUsage);
    const { amountOfElectricityHKE, amountOfElectricityCLP } = data;
    await computeUsageElectricity(indicatorId, amountOfElectricityHKE, amountOfElectricityCLP);
    const { noOfProjectsUsingRenewEnergy,  } = data;
    await computeUsageOfRenewableEnergy(indicatorId, noOfProjectsUsingRenewEnergy, noOfProjects);
    const { noOfProjectsUsingElectricVehicle,  } = data;
    await computeUsageElectricVehicle(indicatorId, noOfProjectsUsingElectricVehicle, noOfProjects);
    // TODO Carbon Footprint
    const { waterConsumption, noOfProjectsUsingRecoveredWater } = data;
    await computeUsageFreshWater(indicatorId, waterConsumption);
    await computeUsageRecoveredWater(indicatorId, noOfProjectsUsingRecoveredWater, noOfProjects);

    return {};
  }

};
