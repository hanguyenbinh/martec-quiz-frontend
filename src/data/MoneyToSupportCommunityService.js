class MoneyToSupportCommunityService {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfManhoursInCommunityService,
        moneyToSupportCommunityService,
        noOfStaff,
        noOfSupportingStaff,
        amountOfTimeDevotedToCommunityService,
        amountOfTimeDevotedToCommunityServiceNormalDistribution,
        amountOfTimeDevotedToCommunityServiceScore,
        amountOfMoneyDevotedToCommunityService,
        amountOfMoneyDevotedToCommunityServiceNormalDistribution,
        amountOfMoneyDevotedToCommunityServiceScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfManhoursInCommunityService = noOfManhoursInCommunityService;
        this.moneyToSupportCommunityService = moneyToSupportCommunityService;
        this.noOfStaff = noOfStaff;
        this.noOfSupportingStaff = noOfSupportingStaff;
        this.amountOfTimeDevotedToCommunityService = amountOfTimeDevotedToCommunityService;
        this.amountOfTimeDevotedToCommunityServiceNormalDistribution = amountOfTimeDevotedToCommunityServiceNormalDistribution;
        this.amountOfTimeDevotedToCommunityServiceScore = amountOfTimeDevotedToCommunityServiceScore;
        this.amountOfMoneyDevotedToCommunityService = amountOfMoneyDevotedToCommunityService;
        this.amountOfMoneyDevotedToCommunityServiceNormalDistribution = amountOfMoneyDevotedToCommunityServiceNormalDistribution;
        this.amountOfMoneyDevotedToCommunityServiceScore = amountOfMoneyDevotedToCommunityServiceScore;
    }

    calAmountOfTimeDevotedToCommunityService() {
        this.amountOfTimeDevotedToCommunityService = this.noOfManhoursInCommunityService / this.noOfStaff;
    }

    calAmountOfMoneyDevotedToCommunityService() {
        this.amountOfMoneyDevotedToCommunityService = this.moneyToSupportCommunityService / this.noOfStaff;
    }
}

let Gammon = new MoneyToSupportCommunityService({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfManhoursInCommunityService: 200,
    moneyToSupportCommunityService: 200000,
    noOfStaff: 1000,
    noOfSupportingStaff: 120,
    amountOfTimeDevotedToCommunityService: 0,
    amountOfTimeDevotedToCommunityServiceNormalDistribution: 0,
    amountOfTimeDevotedToCommunityServiceScore: 0,
    amountOfMoneyDevotedToCommunityService: 0,
    amountOfMoneyDevotedToCommunityServiceNormalDistribution: 0,
    amountOfMoneyDevotedToCommunityServiceScore: 0,
});

let HipHang = new MoneyToSupportCommunityService({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfManhoursInCommunityService: 100,
    moneyToSupportCommunityService: 150000,
    noOfStaff: 1200,
    noOfSupportingStaff: 0,
    amountOfTimeDevotedToCommunityService: 0,
    amountOfTimeDevotedToCommunityServiceNormalDistribution: 0,
    amountOfTimeDevotedToCommunityServiceScore: 0,
    amountOfMoneyDevotedToCommunityService: 0,
    amountOfMoneyDevotedToCommunityServiceNormalDistribution: 0,
    amountOfMoneyDevotedToCommunityServiceScore: 0,
});

let DDL = new MoneyToSupportCommunityService({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfManhoursInCommunityService: 176,
    moneyToSupportCommunityService: 300000,
    noOfStaff: 53,
    noOfSupportingStaff: 200,
    amountOfTimeDevotedToCommunityService: 0,
    amountOfTimeDevotedToCommunityServiceNormalDistribution: 0,
    amountOfTimeDevotedToCommunityServiceScore: 0,
    amountOfMoneyDevotedToCommunityService: 0,
    amountOfMoneyDevotedToCommunityServiceNormalDistribution: 0,
    amountOfMoneyDevotedToCommunityServiceScore: 0,
});

let TGSam = new MoneyToSupportCommunityService({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfManhoursInCommunityService: 78,
    moneyToSupportCommunityService: 280000,
    noOfStaff: 1126,
    noOfSupportingStaff: 450,
    amountOfTimeDevotedToCommunityService: 0,
    amountOfTimeDevotedToCommunityServiceNormalDistribution: 0,
    amountOfTimeDevotedToCommunityServiceScore: 0,
    amountOfMoneyDevotedToCommunityService: 0,
    amountOfMoneyDevotedToCommunityServiceNormalDistribution: 0,
    amountOfMoneyDevotedToCommunityServiceScore: 0,
})

let PaulX = new MoneyToSupportCommunityService({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfManhoursInCommunityService: 188,
    moneyToSupportCommunityService: 120000,
    noOfStaff: 1052,
    noOfSupportingStaff: 300,
    amountOfTimeDevotedToCommunityService: 0,
    amountOfTimeDevotedToCommunityServiceNormalDistribution: 0,
    amountOfTimeDevotedToCommunityServiceScore: 0,
    amountOfMoneyDevotedToCommunityService: 0,
    amountOfMoneyDevotedToCommunityServiceNormalDistribution: 0,
    amountOfMoneyDevotedToCommunityServiceScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}