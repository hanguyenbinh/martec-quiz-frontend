class NoOfResignationsTechnicalStaff {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfResignationsManagementStaff,
        noOfResignationsTechnicalStaff,
        noOfResignationsDirectStaff,
        noOfResignationsSupportingStaff,
        turnoverRateManagementStaff,
        turnoverRateManagementStaffNormalDistribution,
        turnoverRateManagementStaffScore,
        turnoverRateTechnicalStaff,
        turnoverRateTechnicalStaffNormalDistribution,
        turnoverRateTechnicalStaffScore,
        turnoverRateDirectLabor,
        turnoverRateDirectLaborNormalDistribution,
        turnoverRateDirectLaborScore,
        turnoverRateSupportingStaff,
        turnoverRateSupportingStaffNormalDistribution,
        turnoverRateSupportingStaffScore,
        noOfPMStaff,
        noOfTechnicalStaff,
        noOfDirectLabor,
        noOfSupportingStaff,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfResignationsManagementStaff = noOfResignationsManagementStaff;
        this.noOfPMStaff = noOfPMStaff;
        this.noOfTechnicalStaff = noOfTechnicalStaff;
        this.noOfDirectLabor = noOfDirectLabor;
        this.noOfSupportingStaff = noOfSupportingStaff;
        this.noOfResignationsTechnicalStaff = noOfResignationsTechnicalStaff;
        this.noOfResignationsDirectStaff = noOfResignationsDirectStaff;
        this.noOfResignationsSupportingStaff = noOfResignationsSupportingStaff;
        this.turnoverRateManagementStaff = turnoverRateManagementStaff;
        this.turnoverRateManagementStaffNormalDistribution = turnoverRateManagementStaffNormalDistribution;
        this.turnoverRateManagementStaffScore = turnoverRateManagementStaffScore;
        this.turnoverRateTechnicalStaff = turnoverRateTechnicalStaff;
        this.turnoverRateTechnicalStaffNormalDistribution = turnoverRateTechnicalStaffNormalDistribution;
        this.turnoverRateTechnicalStaffScore = turnoverRateTechnicalStaffScore;
        this.turnoverRateDirectLabor = turnoverRateDirectLabor;
        this.turnoverRateDirectLaborNormalDistribution = turnoverRateDirectLaborNormalDistribution;
        this.turnoverRateDirectLaborScore = turnoverRateDirectLaborScore;
        this.turnoverRateSupportingStaff = turnoverRateSupportingStaff;
        this.turnoverRateSupportingStaffNormalDistribution = turnoverRateSupportingStaffNormalDistribution;
        this.turnoverRateSupportingStaffScore = turnoverRateSupportingStaffScore;
    }

    calTurnoverRateManagementStaff() {
        this.turnoverRateManagementStaff = this.noOfResignationsManagementStaff / this.noOfPMStaff;
    }

    calTurnOverRateTechnicalStaff() {
        this.turnoverRateTechnicalStaff = this.noOfResignationsTechnicalStaff / this.noOfTechnicalStaff;
    }

    calTurnOverRateDirectLabor() {
        this.turnoverRateDirectLabor = this.noOfResignationsDirectStaff / this.noOfDirectLabor;
    }

    calTurnOverRateSupportingStaff() {
        this.turnoverRateSupportingStaff = this.noOfResignationsSupportingStaff / this.noOfSupportingStaff
    }
}

let Gammon = new NoOfResignationsTechnicalStaff({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfResignationsManagementStaff: 2,
    noOfResignationsTechnicalStaff: 8,
    noOfResignationsDirectStaff: 10,
    noOfResignationsSupportingStaff: 13,
    turnoverRateManagementStaff: 0,
    turnoverRateManagementStaffNormalDistribution: 0,
    turnoverRateManagementStaffScore: 0,
    turnoverRateTechnicalStaff: 0,
    turnoverRateTechnicalStaffNormalDistribution: 0,
    turnoverRateTechnicalStaffScore: 0,
    turnoverRateDirectLabor: 0,
    turnoverRateDirectLaborNormalDistribution: 0,
    turnoverRateDirectLaborScore: 0,
    turnoverRateSupportingStaff: 0,
    turnoverRateSupportingStaffNormalDistribution: 0,
    turnoverRateSupportingStaffScore: 0,
    noOfPMStaff: 40,
    noOfTechnicalStaff: 50,
    noOfDirectLabor: 50,
    noOfSupportingStaff: 120,

});

let HipHang = new NoOfResignationsTechnicalStaff({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfResignationsManagementStaff: 3,
    noOfResignationsTechnicalStaff: 5,
    noOfResignationsDirectStaff: 14,
    noOfResignationsSupportingStaff: 0,
    turnoverRateManagementStaff: 0,
    turnoverRateManagementStaffNormalDistribution: 0,
    turnoverRateManagementStaffScore: 0,
    turnoverRateTechnicalStaff: 0,
    turnoverRateTechnicalStaffNormalDistribution: 0,
    turnoverRateTechnicalStaffScore: 0,
    turnoverRateDirectLabor: 0,
    turnoverRateDirectLaborNormalDistribution: 0,
    turnoverRateDirectLaborScore: 0,
    turnoverRateSupportingStaff: 0,
    turnoverRateSupportingStaffNormalDistribution: 0,
    turnoverRateSupportingStaffScore: 0,
    noOfPMStaff: 43,
    noOfTechnicalStaff: 53,
    noOfDirectLabor: 102,
    noOfSupportingStaff: 0,
});

let DDL = new NoOfResignationsTechnicalStaff({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfResignationsManagementStaff: 1,
    noOfResignationsTechnicalStaff: 4,
    noOfResignationsDirectStaff: 13,
    noOfResignationsSupportingStaff: 4,
    turnoverRateManagementStaff: 0,
    turnoverRateManagementStaffNormalDistribution: 0,
    turnoverRateManagementStaffScore: 0,
    turnoverRateTechnicalStaff: 0,
    turnoverRateTechnicalStaffNormalDistribution: 0,
    turnoverRateTechnicalStaffScore: 0,
    turnoverRateDirectLabor: 0,
    turnoverRateDirectLaborNormalDistribution: 0,
    turnoverRateDirectLaborScore: 0,
    turnoverRateSupportingStaff: 0,
    turnoverRateSupportingStaffNormalDistribution: 0,
    turnoverRateSupportingStaffScore: 0,
    noOfPMStaff: 8,
    noOfTechnicalStaff: 32,
    noOfDirectLabor: 23,
    noOfSupportingStaff: 200,
});

let TGSam = new NoOfResignationsTechnicalStaff({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfResignationsManagementStaff: 3,
    noOfResignationsTechnicalStaff: 6,
    noOfResignationsDirectStaff: 19,
    noOfResignationsSupportingStaff: 3,
    turnoverRateManagementStaff: 0,
    turnoverRateManagementStaffNormalDistribution: 0,
    turnoverRateManagementStaffScore: 0,
    turnoverRateTechnicalStaff: 0,
    turnoverRateTechnicalStaffNormalDistribution: 0,
    turnoverRateTechnicalStaffScore: 0,
    turnoverRateDirectLabor: 0,
    turnoverRateDirectLaborNormalDistribution: 0,
    turnoverRateDirectLaborScore: 0,
    turnoverRateSupportingStaff: 0,
    turnoverRateSupportingStaffNormalDistribution: 0,
    turnoverRateSupportingStaffScore: 0,
    noOfPMStaff: 55,
    noOfTechnicalStaff: 21,
    noOfDirectLabor: 200,
    noOfSupportingStaff: 450,
})

let PaulX = new NoOfResignationsTechnicalStaff({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfResignationsManagementStaff: 4,
    noOfResignationsTechnicalStaff: 3,
    noOfResignationsDirectStaff: 10,
    noOfResignationsSupportingStaff: 20,
    turnoverRateManagementStaff: 0,
    turnoverRateManagementStaffNormalDistribution: 0,
    turnoverRateManagementStaffScore: 0,
    turnoverRateTechnicalStaff: 0,
    turnoverRateTechnicalStaffNormalDistribution: 0,
    turnoverRateTechnicalStaffScore: 0,
    turnoverRateDirectLabor: 0,
    turnoverRateDirectLaborNormalDistribution: 0,
    turnoverRateDirectLaborScore: 0,
    turnoverRateSupportingStaff: 0,
    turnoverRateSupportingStaffNormalDistribution: 0,
    turnoverRateSupportingStaffScore: 0,
    noOfPMStaff: 39,
    noOfTechnicalStaff: 30,
    noOfDirectLabor: 67,
    noOfSupportingStaff: 300,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a, b) => a + b) / arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}
