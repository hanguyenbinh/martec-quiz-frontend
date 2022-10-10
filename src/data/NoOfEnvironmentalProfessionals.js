class NoOfEnvironmentalProfessionals {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        numberOfConvictionsRelatedToTheEnvironment,
        noOfEnvironmentalProfessionals,
        noOfEnvironmentalPersonnel,
        clickYesWhenOneOfFollowingIsAdopted,
        numbeerOfEnvironmentalConvictions,
        numbeerOfEnvironmentalConvictionsNormalDistribution,
        numbeerOfEnvironmentalConvictionsScore,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution,
        commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore,
        commitmentToAdoptingNovelHealthAndSafetyManagementMeasures,
        commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution,
        commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.numberOfConvictionsRelatedToTheEnvironment = numberOfConvictionsRelatedToTheEnvironment;
        this.noOfEnvironmentalProfessionals = noOfEnvironmentalProfessionals;
        this.noOfEnvironmentalPersonnel = noOfEnvironmentalPersonnel;
        this.clickYesWhenOneOfFollowingIsAdopted = clickYesWhenOneOfFollowingIsAdopted;
        this.numbeerOfEnvironmentalConvictions = numbeerOfEnvironmentalConvictions;
        this.numbeerOfEnvironmentalConvictionsNormalDistribution = numbeerOfEnvironmentalConvictionsNormalDistribution;
        this.numbeerOfEnvironmentalConvictionsScore = numbeerOfEnvironmentalConvictionsScore;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution;
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore = commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore;
        this.commitmentToAdoptingNovelHealthAndSafetyManagementMeasures = commitmentToAdoptingNovelHealthAndSafetyManagementMeasures;
        this.commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution = commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution;
        this.commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore = commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore;
    }

    calNumberOfEnvironmentalConvictions() {
        this.numbeerOfEnvironmentalConvictions = this.numberOfConvictionsRelatedToTheEnvironment;
    }

    calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals()
    {
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals = this.noOfEnvironmentalProfessionals * 100000000 / this.grossValueOfConstructionWork
    }

    calCommitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel() {
        this.commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel = this.noOfEnvironmentalPersonnel * 100000000 / this.grossValueOfConstructionWork
    }

    calCommitmentToAdoptingNovelHealthAndSafetyManagementMeasures() {
        this.commitmentToAdoptingNovelHealthAndSafetyManagementMeasures = this.clickYesWhenOneOfFollowingIsAdopted;
    }
}

let Gammon = new NoOfEnvironmentalProfessionals({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    numberOfConvictionsRelatedToTheEnvironment: 1,
    noOfEnvironmentalProfessionals: 3,
    noOfEnvironmentalPersonnel: 5,
    clickYesWhenOneOfFollowingIsAdopted: 'NO',
    numbeerOfEnvironmentalConvictions: 0,
    numbeerOfEnvironmentalConvictionsNormalDistribution: 0,
    numbeerOfEnvironmentalConvictionsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasures: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore: 0,
});

let HipHang = new NoOfEnvironmentalProfessionals({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    numberOfConvictionsRelatedToTheEnvironment: 2,
    noOfEnvironmentalProfessionals: 5,
    noOfEnvironmentalPersonnel: 9,
    clickYesWhenOneOfFollowingIsAdopted: 'NO',
    numbeerOfEnvironmentalConvictions: 0,
    numbeerOfEnvironmentalConvictionsNormalDistribution: 0,
    numbeerOfEnvironmentalConvictionsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasures: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore: 0,
});

let DDL = new NoOfEnvironmentalProfessionals({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    numberOfConvictionsRelatedToTheEnvironment: 0,
    noOfEnvironmentalProfessionals: 0.5,
    noOfEnvironmentalPersonnel: 0.5,
    clickYesWhenOneOfFollowingIsAdopted: 'NO',
    numbeerOfEnvironmentalConvictions: 0,
    numbeerOfEnvironmentalConvictionsNormalDistribution: 0,
    numbeerOfEnvironmentalConvictionsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasures: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore: 0,
});

let TGSam = new NoOfEnvironmentalProfessionals({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    numberOfConvictionsRelatedToTheEnvironment: 2,
    noOfEnvironmentalProfessionals: 2,
    noOfEnvironmentalPersonnel: 2,
    clickYesWhenOneOfFollowingIsAdopted: 'YES',
    numbeerOfEnvironmentalConvictions: 0,
    numbeerOfEnvironmentalConvictionsNormalDistribution: 0,
    numbeerOfEnvironmentalConvictionsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasures: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore: 0,
})

let PaulX = new NoOfEnvironmentalProfessionals({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    numberOfConvictionsRelatedToTheEnvironment: 1,
    noOfEnvironmentalProfessionals: 5,
    noOfEnvironmentalPersonnel: 7,
    clickYesWhenOneOfFollowingIsAdopted: 'YES',
    numbeerOfEnvironmentalConvictions: 0,
    numbeerOfEnvironmentalConvictionsNormalDistribution: 0,
    numbeerOfEnvironmentalConvictionsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionals: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalProfessionalsScore: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnel: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelNormalDistribution: 0,
    commitmentToInvestingInEnvironmentalExpertiseEnvironmentalPersonnelScore: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasures: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresNormalDistribution: 0,
    commitmentToAdoptingNovelHealthAndSafetyManagementMeasuresScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]
function average(arrValue) {
    return arrValue.reduce((a,b) => a+b)/arrValue.length;
}

function averageSTDEV(arrValue) {
    return math.std(arrValue, 'uncorrected');
}
