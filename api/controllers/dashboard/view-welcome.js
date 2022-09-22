const Promise = require('bluebird');

module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    const company = this.req.me.company;

    const indicators = await ESGIndicator.find({
      company: company
    });

    const years = _.map(indicators, (indicator) => {
      return indicator.yearOfRecord
    });

    const usageOfCombustibleFuelValues = [];
    const usageOfCombustibleFuelPetrolValues = [];
    const usageOfCombustibleFuelDieselValues = [];

    await Promise.each(indicators, async (indicator) => {

      const [
        usageOfCombustibleFuelData,
        usageOfCombustibleFuelPetrolData,
        usageOfCombustibleFuelDieselData
      ] = await Promise.all([
        ESGIndicatorValue.findOne({
          indicator: indicator.id,
          key: 'usageOfCombustibleFuel'
        }),
        ESGIndicatorValue.findOne({
          indicator: indicator.id,
          key: 'usageOfCombustibleFuelPetrol'
        }),
        ESGIndicatorValue.findOne({
          indicator: indicator.id,
          key: 'usageOfCombustibleFuelDiesel'
        }),
      ]);

      usageOfCombustibleFuelValues.push(_.round(usageOfCombustibleFuelData.value, 2))
      usageOfCombustibleFuelPetrolValues.push(_.round(usageOfCombustibleFuelPetrolData.value, 2))
      usageOfCombustibleFuelDieselValues.push(_.round(usageOfCombustibleFuelDieselData.value, 2))
    });

    return {
      labels: years,
      usageOfCombustibleFuelValues,
      usageOfCombustibleFuelPetrolValues,
      usageOfCombustibleFuelDieselValues
    };

  }
};
