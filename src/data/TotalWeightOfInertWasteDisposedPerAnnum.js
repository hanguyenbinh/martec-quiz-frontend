class TotalWeightOfInertWasteDisposedPerAnnum {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        annualWaterConsumption,
        totalWeightof_InertWasteDisposedPerAnnum,
        totalWeightOf_Non_InertWasteDisposedPerAnnum,
        totalWeightOf_Mixed_WasteDisposedPerAnnum,
        usageOfFreshWater,
        usageOfFreshWater_NormalDistribution,
        usageOfFreshWater_Score,
        amountOfInertWasteDisposed,
        amountOfInertWasteDisposed_NormalDistribution,
        amountOfInertWasteDisposed_Score,
        amountOfNoninertWastePlacedDisposed,
        amountOfNoninertWastePlacedDisposed_NormalDistribution,
        amountOfNoninertWastePlacedDisposed_Score,
        amountOfMixedWastePlacedDisposed,
        amountOfMixedWastePlacedDisposed_NormalDistribution,
        amountOfMixedWastePlacedDisposed_Score,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.annualWaterConsumption = annualWaterConsumption;
        this.totalWeightOf_Mixed_WasteDisposedPerAnnum = totalWeightOf_Mixed_WasteDisposedPerAnnum;
        this.totalWeightof_InertWasteDisposedPerAnnum = totalWeightof_InertWasteDisposedPerAnnum;
        this.totalWeightOf_Non_InertWasteDisposedPerAnnum = totalWeightOf_Non_InertWasteDisposedPerAnnum;
        this.usageOfFreshWater = usageOfFreshWater;
        this.usageOfFreshWater_NormalDistribution = usageOfFreshWater_NormalDistribution;
        this.usageOfFreshWater_Score = usageOfFreshWater_Score;
        this.amountOfInertWasteDisposed = amountOfInertWasteDisposed;
        this.amountOfInertWasteDisposed_NormalDistribution = amountOfInertWasteDisposed_NormalDistribution;
        this.amountOfInertWasteDisposed_Score = amountOfInertWasteDisposed_Score;
        this.amountOfNoninertWastePlacedDisposed_NormalDistribution = amountOfNoninertWastePlacedDisposed_NormalDistribution;
        this.amountOfNoninertWastePlacedDisposed = amountOfNoninertWastePlacedDisposed;
        this.amountOfNoninertWastePlacedDisposed_Score = amountOfNoninertWastePlacedDisposed_Score;
        this.amountOfMixedWastePlacedDisposed_NormalDistribution = amountOfMixedWastePlacedDisposed_NormalDistribution;
        this.amountOfMixedWastePlacedDisposed = amountOfMixedWastePlacedDisposed;
        this.amountOfMixedWastePlacedDisposed_Score = amountOfMixedWastePlacedDisposed_Score;
    }

    calUsageOfFreshWater() {
        this.usageOfFreshWater = this.annualWaterConsumption * 100000000 / this.grossValueOfConstructionWork;
    }

    calAmountOfInertWasteDisposed() {
        this.amountOfInertWasteDisposed = this.totalWeightof_InertWasteDisposedPerAnnum * 100000000 / this.grossValueOfConstructionWork;
    }

    calAmountOfNoninertWastePlacedDisposed() {
        this.amountOfNoninertWastePlacedDisposed = this.totalWeightOf_Non_InertWasteDisposedPerAnnum * 100000000 / this.grossValueOfConstructionWork;
    }

    calAmountOfMixedWastePlacedDisposed() {
        this.amountOfMixedWastePlacedDisposed = this.amountOfMixedWastePlacedDisposed * 100000000 / this.grossValueOfConstructionWork
    }

}

let Gammon = new TotalWeightOfInertWasteDisposedPerAnnum({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    annualWaterConsumption: 2685800,
    totalWeightof_InertWasteDisposedPerAnnum: 43400,
    totalWeightOf_Non_InertWasteDisposedPerAnnum: 10000,
    totalWeightOf_Mixed_WasteDisposedPerAnnum: 20000,
    usageOfFreshWater: 0,
    usageOfFreshWater_NormalDistribution: 0,
    usageOfFreshWater_Score: 0,
    amountOfInertWasteDisposed: 0,
    amountOfInertWasteDisposed_NormalDistribution: 0,
    amountOfInertWasteDisposed_Score: 0,
    amountOfNoninertWastePlacedDisposed: 0,
    amountOfNoninertWastePlacedDisposed_NormalDistribution: 0,
    amountOfNoninertWastePlacedDisposed_Score: 0,
    amountOfMixedWastePlacedDisposed: 0,
    amountOfMixedWastePlacedDisposed_NormalDistribution: 0,
    amountOfMixedWastePlacedDisposed_Score: 0,

});

let HipHang = new TotalWeightOfInertWasteDisposedPerAnnum({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    annualWaterConsumption: 3452010,
    totalWeightof_InertWasteDisposedPerAnnum: 76400,
    totalWeightOf_Non_InertWasteDisposedPerAnnum: 9012,
    totalWeightOf_Mixed_WasteDisposedPerAnnum: 18000,
    usageOfFreshWater: 0,
    usageOfFreshWater_NormalDistribution: 0,
    usageOfFreshWater_Score: 0,
    amountOfInertWasteDisposed: 0,
    amountOfInertWasteDisposed_NormalDistribution: 0,
    amountOfInertWasteDisposed_Score: 0,
    amountOfNoninertWastePlacedDisposed: 0,
    amountOfNoninertWastePlacedDisposed_NormalDistribution: 0,
    amountOfNoninertWastePlacedDisposed_Score: 0,
    amountOfMixedWastePlacedDisposed: 0,
    amountOfMixedWastePlacedDisposed_NormalDistribution: 0,
    amountOfMixedWastePlacedDisposed_Score: 0,
});

let DDL = new TotalWeightOfInertWasteDisposedPerAnnum({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    annualWaterConsumption: 453210,
    totalWeightof_InertWasteDisposedPerAnnum: 8190,
    totalWeightOf_Non_InertWasteDisposedPerAnnum: 12012,
    totalWeightOf_Mixed_WasteDisposedPerAnnum: 21000,
    usageOfFreshWater: 0,
    usageOfFreshWater_NormalDistribution: 0,
    usageOfFreshWater_Score: 0,
    amountOfInertWasteDisposed: 0,
    amountOfInertWasteDisposed_NormalDistribution: 0,
    amountOfInertWasteDisposed_Score: 0,
    amountOfNoninertWastePlacedDisposed: 0,
    amountOfNoninertWastePlacedDisposed_NormalDistribution: 0,
    amountOfNoninertWastePlacedDisposed_Score: 0,
    amountOfMixedWastePlacedDisposed: 0,
    amountOfMixedWastePlacedDisposed_NormalDistribution: 0,
    amountOfMixedWastePlacedDisposed_Score: 0,
});

let TGSam = new TotalWeightOfInertWasteDisposedPerAnnum({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    annualWaterConsumption: 3410900,
    totalWeightof_InertWasteDisposedPerAnnum: 22199,
    totalWeightOf_Non_InertWasteDisposedPerAnnum: 3002,
    totalWeightOf_Mixed_WasteDisposedPerAnnum: 19567,
    usageOfFreshWater: 0,
    usageOfFreshWater_NormalDistribution: 0,
    usageOfFreshWater_Score: 0,
    amountOfInertWasteDisposed: 0,
    amountOfInertWasteDisposed_NormalDistribution: 0,
    amountOfInertWasteDisposed_Score: 0,
    amountOfNoninertWastePlacedDisposed: 0,
    amountOfNoninertWastePlacedDisposed_NormalDistribution: 0,
    amountOfNoninertWastePlacedDisposed_Score: 0,
    amountOfMixedWastePlacedDisposed: 0,
    amountOfMixedWastePlacedDisposed_NormalDistribution: 0,
    amountOfMixedWastePlacedDisposed_Score: 0,
})

let PaulX = new TotalWeightOfInertWasteDisposedPerAnnum({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    annualWaterConsumption: 780032,
    totalWeightof_InertWasteDisposedPerAnnum: 13208,
    totalWeightOf_Non_InertWasteDisposedPerAnnum: 8900,
    totalWeightOf_Mixed_WasteDisposedPerAnnum: 12000,
    usageOfFreshWater: 0,
    usageOfFreshWater_NormalDistribution: 0,
    usageOfFreshWater_Score: 0,
    amountOfInertWasteDisposed: 0,
    amountOfInertWasteDisposed_NormalDistribution: 0,
    amountOfInertWasteDisposed_Score: 0,
    amountOfNoninertWastePlacedDisposed: 0,
    amountOfNoninertWastePlacedDisposed_NormalDistribution: 0,
    amountOfNoninertWastePlacedDisposed_Score: 0,
    amountOfMixedWastePlacedDisposed: 0,
    amountOfMixedWastePlacedDisposed_NormalDistribution: 0,
    amountOfMixedWastePlacedDisposed_Score: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX];

function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}

