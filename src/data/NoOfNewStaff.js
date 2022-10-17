class NoOfNewStaff {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfHourOfAnticorruptionTranningNewStaff,
        noOfNewStaff,
        noOfHourAnticorruptionTranningExistingStaff,
        noExistingStaff,
        commitmentToAnticorruptionAwarenessEducationNewStaff,
        commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution,
        commitmentToAnticorruptionAwarenessEducationNewStaffScore,
        CommitmentToAnticorruptionAwarenessEducationExistingStaff,
        CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution,
        CommitmentToAnticorruptionAwarenessEducationExistingStaffScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfHourOfAnticorruptionTranningNewStaff = noOfHourOfAnticorruptionTranningNewStaff;
        this.noOfNewStaff = noOfNewStaff;
        this.noOfHourAnticorruptionTranningExistingStaff = noOfHourAnticorruptionTranningExistingStaff;
        this.noExistingStaff = noExistingStaff;
        this.commitmentToAnticorruptionAwarenessEducationNewStaff = commitmentToAnticorruptionAwarenessEducationNewStaff;
        this.commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution = commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution;
        this.commitmentToAnticorruptionAwarenessEducationNewStaffScore = commitmentToAnticorruptionAwarenessEducationNewStaffScore;
        this.CommitmentToAnticorruptionAwarenessEducationExistingStaff = CommitmentToAnticorruptionAwarenessEducationExistingStaff;
        this.CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution = CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution;
        this.CommitmentToAnticorruptionAwarenessEducationExistingStaffScore = CommitmentToAnticorruptionAwarenessEducationExistingStaffScore;
    }

    calCommitmentToAnticorruptionAwarenessEducationNewStaff() {
        this.commitmentToAnticorruptionAwarenessEducationNewStaff = this.noOfHourOfAnticorruptionTranningNewStaff / this.noOfNewStaff;
    }

    calCommitmentToAntiCorruptionAwarenessEducationExistingStaff() {
        this.CommitmentToAnticorruptionAwarenessEducationExistingStaff = this.noOfHourAnticorruptionTranningExistingStaff / this.noExistingStaff
    }

}

let Gammon = new NoOfNewStaff({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfHourOfAnticorruptionTranningNewStaff: 20,
    noOfNewStaff: 40,
    noOfHourAnticorruptionTranningExistingStaff: 50,
    noExistingStaff: 100,
    commitmentToAnticorruptionAwarenessEducationNewStaff: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffScore: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaff: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffScore: 0,
});

let HipHang = new NoOfNewStaff({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfHourOfAnticorruptionTranningNewStaff: 20,
    noOfNewStaff: 20,
    noOfHourAnticorruptionTranningExistingStaff: 60,
    noExistingStaff: 130,
    commitmentToAnticorruptionAwarenessEducationNewStaff: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffScore: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaff: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffScore: 0,
});

let DDL = new NoOfNewStaff({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfHourOfAnticorruptionTranningNewStaff: 18,
    noOfNewStaff: 37,
    noOfHourAnticorruptionTranningExistingStaff: 70,
    noExistingStaff: 120,
    commitmentToAnticorruptionAwarenessEducationNewStaff: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffScore: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaff: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffScore: 0,
});

let TGSam = new NoOfNewStaff({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHourOfAnticorruptionTranningNewStaff: 20,
    noOfNewStaff: 50,
    noOfHourAnticorruptionTranningExistingStaff: 65,
    noExistingStaff: 70,
    commitmentToAnticorruptionAwarenessEducationNewStaff: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffScore: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaff: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffScore: 0,
})

let PaulX = new NoOfNewStaff({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHourOfAnticorruptionTranningNewStaff: 30,
    noOfNewStaff: 70,
    noOfHourAnticorruptionTranningExistingStaff: 140,
    noExistingStaff: 450,
    commitmentToAnticorruptionAwarenessEducationNewStaff: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffNormalDistribution: 0,
    commitmentToAnticorruptionAwarenessEducationNewStaffScore: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaff: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffNormalDistribution: 0,
    CommitmentToAnticorruptionAwarenessEducationExistingStaffScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}
