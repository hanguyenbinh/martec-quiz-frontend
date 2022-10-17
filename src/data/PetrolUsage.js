var math = require('mathjs');
export class PetrolUsage {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfProject,
        petrolUsage,
        noOfIndustrialAccidents,
        employeeSize
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfProject = noOfProject;
        this.petrolUsage = petrolUsage;
        this.noOfIndustrialAccidents = noOfIndustrialAccidents;
        this.employeeSize = employeeSize;
        // this.usageOfCombustiblefuelPetrol = usageOfCombustiblefuelPetrol;
        // this.usageOfCombustiblefuelPetrol_NormalDistribution = usageOfCombustiblefuelPetrol_NormalDistribution;
        // this.usageOfCombustiblefuelPetrol_Score = usageOfCombustiblefuelPetrol_Score;
        // this.co2EmissionsOfCombustiblefuelPetrol = co2EmissionsOfCombustiblefuelPetrol;
        // this.co2EmissionsOfCombustiblefuelPetrol_NormalDistribution = co2EmissionsOfCombustiblefuelPetrol_NormalDistribution;
        // this.co2EmissionsOfCombustiblefuelPetrol_Score = co2EmissionsOfCombustiblefuelPetrol_Score;
        // this.co2EmissionsOfCombustiblefuelDiesel_NormalDistribution = co2EmissionsOfCombustiblefuelDiesel_NormalDistribution;
        // this.co2EmissionsOfCombustiblefuelDiesel = co2EmissionsOfCombustiblefuelDiesel;
        // this.co2EmissionsOfCombustiblefuelDiesel_Score = co2EmissionsOfCombustiblefuelDiesel_Score;
        this.calUsageOfCombustibleFuelPetrol()
        this.calCo2EmissionsOfCombustibleFuelPetrol();
        this.calCo2EmissionsOfCombustibleFuelDiesel();
    }

    calUsageOfCombustibleFuelPetrol() {
        this.usageOfCombustiblefuelPetrol = (this.petrolUsage * 47.1 * 277.78 * 100000000) / this.grossValueOfConstructionWork;
    }
    calCo2EmissionsOfCombustibleFuelPetrol() {
        this.co2EmissionsOfCombustiblefuelPetrol = (this.petrolUsage * 2.36 * 1350 * 100000000) / this.grossValueOfConstructionWork / 1000;
    }
    calCo2EmissionsOfCombustibleFuelDiesel() {
        this.co2EmissionsOfCombustiblefuelDiesel = (this.petrolUsage * 2.614 * 1185 * 100000000) / this.grossValueOfConstructionWork / 1000;
    }


}

let Gammon = new PetrolUsage({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfProject: 10,
    petrolUsage: 20,
    noOfIndustrialAccidents: 2,
    employeeSize: 1000,
    usageOfCombustiblefuelPetrol: 0,
    usageOfCombustiblefuelPetrol_NormalDistribution: 0,
    usageOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelPetrol: 0,
    co2EmissionsOfCombustiblefuelPetrol_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelDiesel: 0,
    co2EmissionsOfCombustiblefuelDiesel_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelDiesel_Score: 0
});

let HipHang = new PetrolUsage({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfProject: 20,
    petrolUsage: 30,
    noOfIndustrialAccidents: 1,
    employeeSize: 1200,
    usageOfCombustiblefuelPetrol: 0,
    usageOfCombustiblefuelPetrol_NormalDistribution: 0,
    usageOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelPetrol: 0,
    co2EmissionsOfCombustiblefuelPetrol_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelDiesel: 0,
    co2EmissionsOfCombustiblefuelDiesel_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelDiesel_Score: 0
});

let DDL = new PetrolUsage({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfProject: 10,
    petrolUsage: 1.34,
    noOfIndustrialAccidents: 1,
    employeeSize: 53,
    usageOfCombustiblefuelPetrol: 0,
    usageOfCombustiblefuelPetrol_NormalDistribution: 0,
    usageOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelPetrol: 0,
    co2EmissionsOfCombustiblefuelPetrol_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelDiesel: 0,
    co2EmissionsOfCombustiblefuelDiesel_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelDiesel_Score: 0
});

let TGSam = new PetrolUsage({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfProject: 3,
    petrolUsage: 10,
    noOfIndustrialAccidents: 0,
    employeeSize: 1126,
    usageOfCombustiblefuelPetrol: 0,
    usageOfCombustiblefuelPetrol_NormalDistribution: 0,
    usageOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelPetrol: 0,
    co2EmissionsOfCombustiblefuelPetrol_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelDiesel: 0,
    co2EmissionsOfCombustiblefuelDiesel_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelDiesel_Score: 0
})

let PaulX = new PetrolUsage({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfProject: 3,
    petrolUsage: 36.6,
    noOfIndustrialAccidents: 0,
    employeeSize: 1052,
    usageOfCombustiblefuelPetrol: 0,
    usageOfCombustiblefuelPetrol_NormalDistribution: 0,
    usageOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelPetrol: 0,
    co2EmissionsOfCombustiblefuelPetrol_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelPetrol_Score: 0,
    co2EmissionsOfCombustiblefuelDiesel: 0,
    co2EmissionsOfCombustiblefuelDiesel_NormalDistribution: 0,
    co2EmissionsOfCombustiblefuelDiesel_Score: 0
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX];

function average(arrValue) {
    return arrValue.reduce((a, b) => a + b) / arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}


