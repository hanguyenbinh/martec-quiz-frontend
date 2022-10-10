class AmountOfElectricity {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        dieselUsage,
        amountOfElectricityHKE,
        amountOfElectricityCLP,
        usageOfCombustibleFuelDiesel,
        usageOfCombustibleFuelDieselNormalDistribution,
        usageOfCombustibleFuelDieselScore,
        usageOfElectricityHKE,
        usageOfElectricityHKENormalDistribution,
        usageOfElectricityHKEScore,
        usageOfElectricityCLP,
        usageOfElectricityCLPNormalDistribution,
        usageOfElectricityCLPScore,
        co2EmissionsOfElectricityHKE,
        co2EmissionsOfElectricityHKENormalDistribution,
        co2EmissionsOfElectricityHKEScore,
        co2EmissionsOfElectricityCLP,
        co2EmissionsOfElectricityCLPNormalDistribution,
        co2EmissionsOfElectricityCLPScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.dieselUsage = dieselUsage,
        this.amountOfElectricityHKE = amountOfElectricityHKE,
        this.amountOfElectricityCLP = amountOfElectricityCLP,
        this.usageOfCombustibleFuelDiesel = usageOfCombustibleFuelDiesel,
        this.usageOfCombustibleFuelDieselNormalDistribution = usageOfCombustibleFuelDieselNormalDistribution,
        this.usageOfCombustibleFuelDieselScore = usageOfCombustibleFuelDieselScore,
        this.usageOfElectricityHKE = usageOfElectricityHKE,
        this.usageOfElectricityHKENormalDistribution = usageOfElectricityHKENormalDistribution,
        this.usageOfElectricityHKEScore = usageOfElectricityHKEScore,
        this.usageOfElectricityCLP = usageOfElectricityCLP,
        this.usageOfElectricityCLPNormalDistribution = usageOfElectricityCLPNormalDistribution,
        this.usageOfElectricityCLPScore = usageOfElectricityCLPScore,
        this.co2EmissionsOfElectricityHKE = co2EmissionsOfElectricityHKE,
        this.co2EmissionsOfElectricityHKENormalDistribution = co2EmissionsOfElectricityHKENormalDistribution,
        this.co2EmissionsOfElectricityHKEScore = co2EmissionsOfElectricityHKEScore,
        this.co2EmissionsOfElectricityCLP = co2EmissionsOfElectricityCLP,
        this.co2EmissionsOfElectricityCLPNormalDistribution = co2EmissionsOfElectricityCLPNormalDistribution,
        this.co2EmissionsOfElectricityCLPScore = co2EmissionsOfElectricityCLPScore

    }

    calUsageOfCombustibleFuelDiesel(){
        this.usageOfCombustibleFuelDiesel = this.dieselUsage * 45.66 * 277.78 * 100000000 / this.grossValueOfConstructionWork;
    }

    calUsageOfElectricityHKE() {
        this.usageOfElectricityHKE = this.amountOfElectricityHKE * 100000000 / this.grossValueOfConstructionWork;
    }

    calUsageOfElectricityCLP() {
        this.usageOfElectricityCLP = this.amountOfElectricityCLP * 100000000 / this.grossValueOfConstructionWork;
    }

    calCo2EmissionsOfElectricityHKE() {
        this.co2EmissionsOfElectricityHKE = this.amountOfElectricityHKE * 0.71 * 1350 * 100000000 / this.grossValueOfConstructionWork / 1000;
    }

    calCo2EmissionsOfElectricityCLP() {
        this.co2EmissionsOfElectricityCLP = this.amountOfElectricityCLP * 0.37 * 1350 * 100000000 / this.grossValueOfConstructionWork / 1000;
    }

}

let Gammon = new AmountOfElectricity({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    dieselUsage: 20,
    amountOfElectricityHKE: 386006,
    amountOfElectricityCLP: 192011,
    usageOfCombustibleFuelDiesel : 0,
    usageOfCombustibleFuelDieselNormalDistribution: 0,
    usageOfCombustibleFuelDieselScore: 0,
    usageOfElectricityHKE: 0,
    usageOfElectricityHKENormalDistribution: 0,
    usageOfElectricityHKEScore: 0,
    usageOfElectricityCLP: 0,
    usageOfElectricityCLPNormalDistribution: 0,
    usageOfElectricityCLPScore: 0,
    co2EmissionsOfElectricityHKE: 0,
    co2EmissionsOfElectricityHKENormalDistribution: 0,
    co2EmissionsOfElectricityHKEScore: 0,
    co2EmissionsOfElectricityCLP: 0,
    co2EmissionsOfElectricityCLPNormalDistribution: 0,
    co2EmissionsOfElectricityCLPScore: 0,

});

let HipHang = new AmountOfElectricity({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    dieselUsage: 30,
    amountOfElectricityHKE: 432100,
    amountOfElectricityCLP: 641450,
    usageOfCombustibleFuelDiesel : 0,
    usageOfCombustibleFuelDieselNormalDistribution: 0,
    usageOfCombustibleFuelDieselScore: 0,
    usageOfElectricityHKE: 0,
    usageOfElectricityHKENormalDistribution: 0,
    usageOfElectricityHKEScore: 0,
    usageOfElectricityCLP: 0,
    usageOfElectricityCLPNormalDistribution: 0,
    usageOfElectricityCLPScore: 0,
    co2EmissionsOfElectricityHKE: 0,
    co2EmissionsOfElectricityHKENormalDistribution: 0,
    co2EmissionsOfElectricityHKEScore: 0,
    co2EmissionsOfElectricityCLP: 0,
    co2EmissionsOfElectricityCLPNormalDistribution: 0,
    co2EmissionsOfElectricityCLPScore: 0,

});

let DDL = new AmountOfElectricity({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    dieselUsage: 1.34,
    amountOfElectricityHKE: 532023,
    amountOfElectricityCLP: 78231,
    usageOfCombustibleFuelDiesel : 0,
    usageOfCombustibleFuelDieselNormalDistribution: 0,
    usageOfCombustibleFuelDieselScore: 0,
    usageOfElectricityHKE: 0,
    usageOfElectricityHKENormalDistribution: 0,
    usageOfElectricityHKEScore: 0,
    usageOfElectricityCLP: 0,
    usageOfElectricityCLPNormalDistribution: 0,
    usageOfElectricityCLPScore: 0,
    co2EmissionsOfElectricityHKE: 0,
    co2EmissionsOfElectricityHKENormalDistribution: 0,
    co2EmissionsOfElectricityHKEScore: 0,
    co2EmissionsOfElectricityCLP: 0,
    co2EmissionsOfElectricityCLPNormalDistribution: 0,
    co2EmissionsOfElectricityCLPScore: 0,
});

let TGSam = new AmountOfElectricity({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    dieselUsage: 10,
    amountOfElectricityHKE: 211209,
    amountOfElectricityCLP: 543121,
    usageOfCombustibleFuelDiesel : 0,
    usageOfCombustibleFuelDieselNormalDistribution: 0,
    usageOfCombustibleFuelDieselScore: 0,
    usageOfElectricityHKE: 0,
    usageOfElectricityHKENormalDistribution: 0,
    usageOfElectricityHKEScore: 0,
    usageOfElectricityCLP: 0,
    usageOfElectricityCLPNormalDistribution: 0,
    usageOfElectricityCLPScore: 0,
    co2EmissionsOfElectricityHKE: 0,
    co2EmissionsOfElectricityHKENormalDistribution: 0,
    co2EmissionsOfElectricityHKEScore: 0,
    co2EmissionsOfElectricityCLP: 0,
    co2EmissionsOfElectricityCLPNormalDistribution: 0,
    co2EmissionsOfElectricityCLPScore: 0,
})

let PaulX = new AmountOfElectricity({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    dieselUsage: 36.6,
    amountOfElectricityHKE: 123001,
    amountOfElectricityCLP: 334987,
    usageOfCombustibleFuelDiesel : 0,
    usageOfCombustibleFuelDieselNormalDistribution: 0,
    usageOfCombustibleFuelDieselScore: 0,
    usageOfElectricityHKE: 0,
    usageOfElectricityHKENormalDistribution: 0,
    usageOfElectricityHKEScore: 0,
    usageOfElectricityCLP: 0,
    usageOfElectricityCLPNormalDistribution: 0,
    usageOfElectricityCLPScore: 0,
    co2EmissionsOfElectricityHKE: 0,
    co2EmissionsOfElectricityHKENormalDistribution: 0,
    co2EmissionsOfElectricityHKEScore: 0,
    co2EmissionsOfElectricityCLP: 0,
    co2EmissionsOfElectricityCLPNormalDistribution: 0,
    co2EmissionsOfElectricityCLPScore: 0,
});

let arrobject = [Gammon, HipHang, DDL, TGSam, PaulX]
function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}
