class NoOfStaff {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfHoursOfTranningPMStaff,
        noOfPMStaff,
        noOfHoursOfTranningTechnicalStaff,
        noOfTechnicalStaff,
        averageHoursOfTranningPerAnnumManagementStaff,
        averageHoursOfTranningPerAnnumManagementStaffNormalDistribution,
        averageHoursOfTranningPerAnnumManagementStaffScore,
        averageHoursOfTranningPerAnnumTechnical,
        averageHoursOfTranningPerAnnumTechnicalNormalDistribution,
        averageHoursOfTranningPerAnnumTechnicalScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfHoursOfTranningPMStaff = noOfHoursOfTranningPMStaff;
        this.noOfPMStaff = noOfPMStaff;
        this.noOfHoursOfTranningTechnicalStaff = noOfHoursOfTranningTechnicalStaff;
        this.noOfTechnicalStaff = noOfTechnicalStaff;
        this.averageHoursOfTranningPerAnnumManagementStaff = averageHoursOfTranningPerAnnumManagementStaff;
        this.averageHoursOfTranningPerAnnumManagementStaffNormalDistribution = averageHoursOfTranningPerAnnumManagementStaffNormalDistribution;
        this.averageHoursOfTranningPerAnnumManagementStaffScore = averageHoursOfTranningPerAnnumManagementStaffScore;
        this.averageHoursOfTranningPerAnnumTechnical = averageHoursOfTranningPerAnnumTechnical;
        this.averageHoursOfTranningPerAnnumTechnicalNormalDistribution = averageHoursOfTranningPerAnnumTechnicalNormalDistribution;
        this.averageHoursOfTranningPerAnnumTechnicalScore = averageHoursOfTranningPerAnnumTechnicalScore;
    }

    calAverageHoursOfTraningPerAnnumManagementStaff() {
        this.averageHoursOfTranningPerAnnumManagementStaff = this.noOfHoursOfTranningPMStaff / this.noOfPMStaff;
    }

    calAverageHoursOfTraningPerAnnumTechnicalStaff() {
        this.averageHoursOfTranningPerAnnumTechnical = this.noOfHoursOfTranningTechnicalStaff / this.noOfTechnicalStaff
    }

}

let Gammon = new NoOfStaff({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfHoursOfTranningPMStaff: 50,
    noOfPMStaff: 40,
    noOfHoursOfTranningTechnicalStaff: 150,
    noOfTechnicalStaff: 50,
    averageHoursOfTranningPerAnnumManagementStaff: 0,
    averageHoursOfTranningPerAnnumManagementStaffNormalDistribution: 0,
    averageHoursOfTranningPerAnnumManagementStaffScore: 0,
    averageHoursOfTranningPerAnnumTechnical: 0,
    averageHoursOfTranningPerAnnumTechnicalNormalDistribution: 0,
    averageHoursOfTranningPerAnnumTechnicalScore: 0,
});

let HipHang = new NoOfStaff({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfHoursOfTranningPMStaff: 60,
    noOfPMStaff: 43,
    noOfHoursOfTranningTechnicalStaff: 120,
    noOfTechnicalStaff: 53,
    averageHoursOfTranningPerAnnumManagementStaff: 0,
    averageHoursOfTranningPerAnnumManagementStaffNormalDistribution: 0,
    averageHoursOfTranningPerAnnumManagementStaffScore: 0,
    averageHoursOfTranningPerAnnumTechnical: 0,
    averageHoursOfTranningPerAnnumTechnicalNormalDistribution: 0,
    averageHoursOfTranningPerAnnumTechnicalScore: 0,
});

let DDL = new NoOfStaff({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfHoursOfTranningPMStaff: 30,
    noOfPMStaff: 8,
    noOfHoursOfTranningTechnicalStaff: 199,
    noOfTechnicalStaff: 32,
    averageHoursOfTranningPerAnnumManagementStaff: 0,
    averageHoursOfTranningPerAnnumManagementStaffNormalDistribution: 0,
    averageHoursOfTranningPerAnnumManagementStaffScore: 0,
    averageHoursOfTranningPerAnnumTechnical: 0,
    averageHoursOfTranningPerAnnumTechnicalNormalDistribution: 0,
    averageHoursOfTranningPerAnnumTechnicalScore: 0,
});

let TGSam = new NoOfStaff({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHoursOfTranningPMStaff: 58,
    noOfPMStaff: 55,
    noOfHoursOfTranningTechnicalStaff: 102,
    noOfTechnicalStaff: 21,
    averageHoursOfTranningPerAnnumManagementStaff: 0,
    averageHoursOfTranningPerAnnumManagementStaffNormalDistribution: 0,
    averageHoursOfTranningPerAnnumManagementStaffScore: 0,
    averageHoursOfTranningPerAnnumTechnical: 0,
    averageHoursOfTranningPerAnnumTechnicalNormalDistribution: 0,
    averageHoursOfTranningPerAnnumTechnicalScore: 0,
})

let PaulX = new NoOfStaff({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHoursOfTranningPMStaff: 59,
    noOfPMStaff: 39,
    noOfHoursOfTranningTechnicalStaff: 90,
    noOfTechnicalStaff: 30,
    averageHoursOfTranningPerAnnumManagementStaff: 0,
    averageHoursOfTranningPerAnnumManagementStaffNormalDistribution: 0,
    averageHoursOfTranningPerAnnumManagementStaffScore: 0,
    averageHoursOfTranningPerAnnumTechnical: 0,
    averageHoursOfTranningPerAnnumTechnicalNormalDistribution: 0,
    averageHoursOfTranningPerAnnumTechnicalScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}