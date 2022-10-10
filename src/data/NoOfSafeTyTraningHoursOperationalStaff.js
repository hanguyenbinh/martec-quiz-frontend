class NoOfSafetyTraningHoursOperationalStaff {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfSafetyTraningHoursManagementStaff,
        noOfSafetyTraningHoursOperationalStaff,
        noOfSafetyTraningHoursDirectLabour,

        commitmentToSafetyTraningManagementStaff,
        commitmentToSafetyTraningManagementStaffNormalDistribution,
        commitmentToSafetyTraningManagementStaffScore,
        commitmentToSafetyTraningOperationalStaff,
        commitmentToSafetyTraningOperationalStaffNormalDistribution,
        commitmentToSafetyTraningOperationalStaffScore,
        commitmentToSafetyTrainingDirectLabour,
        commitmentToSafetyTrainingDirectLabourNormalDistribution,
        commitmentToSafetyTrainingDirectLabourScore,

        noOfPMStaff,
        noOfTechnicalStaff,
        noOfDirectLabor,

    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfSafetyTraningHoursManagementStaff = noOfSafetyTraningHoursManagementStaff;
        this.noOfSafetyTraningHoursOperationalStaff = noOfSafetyTraningHoursOperationalStaff;
        this.noOfSafetyTraningHoursDirectLabour = noOfSafetyTraningHoursDirectLabour;
        this.noOfPMStaff = noOfPMStaff;
        this.noOfTechnicalStaff = noOfTechnicalStaff;
        this.noOfDirectLabor = noOfDirectLabor;

        this.commitmentToSafetyTraningManagementStaff = commitmentToSafetyTraningManagementStaff;
        this.commitmentToSafetyTraningManagementStaffNormalDistribution = commitmentToSafetyTraningManagementStaffNormalDistribution;
        this.commitmentToSafetyTraningManagementStaffScore = commitmentToSafetyTraningManagementStaffScore;
        this.commitmentToSafetyTraningOperationalStaff = commitmentToSafetyTraningOperationalStaff;
        this.commitmentToSafetyTraningOperationalStaffNormalDistribution = commitmentToSafetyTraningOperationalStaffNormalDistribution;
        this.commitmentToSafetyTraningOperationalStaffScore = commitmentToSafetyTraningOperationalStaffScore;
        this.commitmentToSafetyTrainingDirectLabour = commitmentToSafetyTrainingDirectLabour;
        this.commitmentToSafetyTrainingDirectLabourNormalDistribution = commitmentToSafetyTrainingDirectLabourNormalDistribution;
        this.commitmentToSafetyTrainingDirectLabourScore = commitmentToSafetyTrainingDirectLabourScore;
    }

    calCommitmentToSafetyTrainingManagementStaff() {
        this.commitmentToSafetyTraningManagementStaff = this.noOfSafetyTraningHoursManagementStaff / this.noOfPMStaff
    }

    calCommitmentToSafetyTrainingOperationalStaff() {
        this.commitmentToSafetyTraningOperationalStaff = this.noOfSafetyTraningHoursOperationalStaff / this.noOfTechnicalStaff
    }

    calCommitmentToSafetyTrainingDirectLabour() {
        this.commitmentToSafetyTrainingDirectLabour = this.noOfSafetyTraningHoursDirectLabour / this.noOfDirectLabor
    }
}

let Gammon = new NoOfSafetyTraningHoursOperationalStaff({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfSafetyTraningHoursManagementStaff: 30,
    noOfSafetyTraningHoursOperationalStaff: 50,
    noOfSafetyTraningHoursDirectLabour: 100,

    commitmentToSafetyTraningManagementStaff: 0,
    commitmentToSafetyTraningManagementStaffNormalDistribution: 0,
    commitmentToSafetyTraningManagementStaffScore: 0,
    commitmentToSafetyTraningOperationalStaff: 0,
    commitmentToSafetyTraningOperationalStaffNormalDistribution: 0,
    commitmentToSafetyTraningOperationalStaffScore: 0,
    commitmentToSafetyTrainingDirectLabour: 0,
    commitmentToSafetyTrainingDirectLabourNormalDistribution: 0,
    commitmentToSafetyTrainingDirectLabourScore: 0,
    noOfPMStaff: 40,
    noOfTechnicalStaff: 50,
    noOfDirectLabor: 50,
});

let HipHang = new NoOfSafetyTraningHoursOperationalStaff({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfSafetyTraningHoursManagementStaff: 20,
    noOfSafetyTraningHoursOperationalStaff: 40,
    noOfSafetyTraningHoursDirectLabour: 90,

    commitmentToSafetyTraningManagementStaff: 0,
    commitmentToSafetyTraningManagementStaffNormalDistribution: 0,
    commitmentToSafetyTraningManagementStaffScore: 0,
    commitmentToSafetyTraningOperationalStaff: 0,
    commitmentToSafetyTraningOperationalStaffNormalDistribution: 0,
    commitmentToSafetyTraningOperationalStaffScore: 0,
    commitmentToSafetyTrainingDirectLabour: 0,
    commitmentToSafetyTrainingDirectLabourNormalDistribution: 0,
    commitmentToSafetyTrainingDirectLabourScore: 0,
    noOfPMStaff: 43,
    noOfTechnicalStaff: 53,
    noOfDirectLabor: 102,
});

let DDL = new NoOfSafetyTraningHoursOperationalStaff({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfSafetyTraningHoursManagementStaff: 10,
    noOfSafetyTraningHoursOperationalStaff: 10,
    noOfSafetyTraningHoursDirectLabour: 20,

    commitmentToSafetyTraningManagementStaff: 0,
    commitmentToSafetyTraningManagementStaffNormalDistribution: 0,
    commitmentToSafetyTraningManagementStaffScore: 0,
    commitmentToSafetyTraningOperationalStaff: 0,
    commitmentToSafetyTraningOperationalStaffNormalDistribution: 0,
    commitmentToSafetyTraningOperationalStaffScore: 0,
    commitmentToSafetyTrainingDirectLabour: 0,
    commitmentToSafetyTrainingDirectLabourNormalDistribution: 0,
    commitmentToSafetyTrainingDirectLabourScore: 0,
    noOfPMStaff: 8,
    noOfTechnicalStaff: 32,
    noOfDirectLabor: 23,
});

let TGSam = new NoOfSafetyTraningHoursOperationalStaff({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfSafetyTraningHoursManagementStaff: 30,
    noOfSafetyTraningHoursOperationalStaff: 48,
    noOfSafetyTraningHoursDirectLabour: 87,

    commitmentToSafetyTraningManagementStaff: 0,
    commitmentToSafetyTraningManagementStaffNormalDistribution: 0,
    commitmentToSafetyTraningManagementStaffScore: 0,
    commitmentToSafetyTraningOperationalStaff: 0,
    commitmentToSafetyTraningOperationalStaffNormalDistribution: 0,
    commitmentToSafetyTraningOperationalStaffScore: 0,
    commitmentToSafetyTrainingDirectLabour: 0,
    commitmentToSafetyTrainingDirectLabourNormalDistribution: 0,
    commitmentToSafetyTrainingDirectLabourScore: 0,
    noOfPMStaff: 55,
    noOfTechnicalStaff: 21,
    noOfDirectLabor: 200,
})

let PaulX = new NoOfSafetyTraningHoursOperationalStaff({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfSafetyTraningHoursManagementStaff: 49,
    noOfSafetyTraningHoursOperationalStaff: 60,
    noOfSafetyTraningHoursDirectLabour: 105,

    commitmentToSafetyTraningManagementStaff: 0,
    commitmentToSafetyTraningManagementStaffNormalDistribution: 0,
    commitmentToSafetyTraningManagementStaffScore: 0,
    commitmentToSafetyTraningOperationalStaff: 0,
    commitmentToSafetyTraningOperationalStaffNormalDistribution: 0,
    commitmentToSafetyTraningOperationalStaffScore: 0,
    commitmentToSafetyTrainingDirectLabour: 0,
    commitmentToSafetyTrainingDirectLabourNormalDistribution: 0,
    commitmentToSafetyTrainingDirectLabourScore: 0,
    noOfPMStaff: 39,
    noOfTechnicalStaff: 30,
    noOfDirectLabor: 67,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a, b) => a + b) / arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}

HipHang.calCommitmentToSafetyTrainingDirectLabour()
console.log(HipHang.commitmentToSafetyTrainingDirectLabour)