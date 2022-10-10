class NoOfDirectLabor {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfHoursOfTranning,
        noOfDirectLabor,
        noOfStaffJoiningYMSOrSimilar,
        noOfYoungStaff,
        averageHoursOfTranningPerAnnum,
        averageHoursOfTranningPerAnnumNormalDistribution,
        averageHoursOfTranningPerAnnumScore,
        proportionOfYoungStaffBeingNurtured,
        proportionOfYoungStaffBeingNurturedNormalDistribution,
        proportionOfYoungStaffBeingNurturedScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfHoursOfTranning = noOfHoursOfTranning;
        this.noOfDirectLabor = noOfDirectLabor;
        this.noOfStaffJoiningYMSOrSimilar = noOfStaffJoiningYMSOrSimilar;
        this.noOfYoungStaff = noOfYoungStaff;
        this.averageHoursOfTranningPerAnnum = averageHoursOfTranningPerAnnum;
        this.averageHoursOfTranningPerAnnumNormalDistribution = averageHoursOfTranningPerAnnumNormalDistribution;
        this.averageHoursOfTranningPerAnnumScore = averageHoursOfTranningPerAnnumScore;
        this.proportionOfYoungStaffBeingNurtured = proportionOfYoungStaffBeingNurtured;
        this.proportionOfYoungStaffBeingNurturedNormalDistribution = proportionOfYoungStaffBeingNurturedNormalDistribution;
        this.proportionOfYoungStaffBeingNurturedScore = proportionOfYoungStaffBeingNurturedScore;
    }

    calAverageHoursOfTraningPerAnnum() {
        this.averageHoursOfTranningPerAnnum = this.noOfHoursOfTranning / this.noOfDirectLabor;
    }

    calProportionOfYoungStaffBeingNurtured() {
        this.proportionOfYoungStaffBeingNurtured = this.noOfHoursOfTranning / this.noOfYoungStaff;
    }
}

let Gammon = new NoOfDirectLabor({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfHoursOfTranning: 200,
    noOfDirectLabor: 50,
    noOfStaffJoiningYMSOrSimilar: 10,
    noOfYoungStaff: 40,
    averageHoursOfTranningPerAnnum: 0,
    averageHoursOfTranningPerAnnumNormalDistribution: 0,
    averageHoursOfTranningPerAnnumScore: 0,
    proportionOfYoungStaffBeingNurtured: 0,
    proportionOfYoungStaffBeingNurturedNormalDistribution: 0,
    proportionOfYoungStaffBeingNurturedScore: 0,
});

let HipHang = new NoOfDirectLabor({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfHoursOfTranning: 200,
    noOfDirectLabor: 102,
    noOfStaffJoiningYMSOrSimilar: 32,
    noOfYoungStaff: 65,
    averageHoursOfTranningPerAnnum: 0,
    averageHoursOfTranningPerAnnumNormalDistribution: 0,
    averageHoursOfTranningPerAnnumScore: 0,
    proportionOfYoungStaffBeingNurtured: 0,
    proportionOfYoungStaffBeingNurturedNormalDistribution: 0,
    proportionOfYoungStaffBeingNurturedScore: 0,
});

let DDL = new NoOfDirectLabor({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfHoursOfTranning: 176,
    noOfDirectLabor: 23,
    noOfStaffJoiningYMSOrSimilar: 3,
    noOfYoungStaff: 12,
    averageHoursOfTranningPerAnnum: 0,
    averageHoursOfTranningPerAnnumNormalDistribution: 0,
    averageHoursOfTranningPerAnnumScore: 0,
    proportionOfYoungStaffBeingNurtured: 0,
    proportionOfYoungStaffBeingNurturedNormalDistribution: 0,
    proportionOfYoungStaffBeingNurturedScore: 0,
});

let TGSam = new NoOfDirectLabor({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHoursOfTranning: 300,
    noOfDirectLabor: 200,
    noOfStaffJoiningYMSOrSimilar: 20,
    noOfYoungStaff: 13,
    averageHoursOfTranningPerAnnum: 0,
    averageHoursOfTranningPerAnnumNormalDistribution: 0,
    averageHoursOfTranningPerAnnumScore: 0,
    proportionOfYoungStaffBeingNurtured: 0,
    proportionOfYoungStaffBeingNurturedNormalDistribution: 0,
    proportionOfYoungStaffBeingNurturedScore: 0,
})

let PaulX = new NoOfDirectLabor({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfHoursOfTranning: 150,
    noOfDirectLabor: 67,
    noOfStaffJoiningYMSOrSimilar: 13,
    noOfYoungStaff: 32,
    averageHoursOfTranningPerAnnum: 0,
    averageHoursOfTranningPerAnnumNormalDistribution: 0,
    averageHoursOfTranningPerAnnumScore: 0,
    proportionOfYoungStaffBeingNurtured: 0,
    proportionOfYoungStaffBeingNurturedNormalDistribution: 0,
    proportionOfYoungStaffBeingNurturedScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}