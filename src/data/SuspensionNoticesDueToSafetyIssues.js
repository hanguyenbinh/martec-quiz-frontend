class SuspensionNoticesDueToSafetyIssues {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfConvictionsRelatedToHealthyAndSafety,
        suspensionNoticesDueToSafetyIssues,
        numberAndTypeOfAsWellAsAchivementResultedFromParticipation,
    
        numberOfSafetyConvictions,
        numberOfSafetyConvictionsNormalDistribution,
        numberOfSafetyConvictionsScore,
        numberOfSuspensionNotices,
        numberOfSuspensionNoticesNormalDistribution,
        numberOfSuspensionNoticesScore,
        activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards,
        activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution,
        activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfConvictionsRelatedToHealthyAndSafety = noOfConvictionsRelatedToHealthyAndSafety;
        this.suspensionNoticesDueToSafetyIssues = suspensionNoticesDueToSafetyIssues;
        this.numberAndTypeOfAsWellAsAchivementResultedFromParticipation = numberAndTypeOfAsWellAsAchivementResultedFromParticipation;
    
        this.numberOfSafetyConvictions = numberOfSafetyConvictions;
        this.numberOfSafetyConvictionsNormalDistribution = numberOfSafetyConvictionsNormalDistribution;
        this.numberOfSafetyConvictionsScore = numberOfSafetyConvictionsScore;
        this.numberOfSuspensionNotices = numberOfSuspensionNotices;
        this.numberOfSuspensionNoticesNormalDistribution = numberOfSuspensionNoticesNormalDistribution;
        this.numberOfSuspensionNoticesScore = numberOfSuspensionNoticesScore;
        this.activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards = activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards;
        this.activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution = activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution;
        this.activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore = activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore;
    }

    calNumberOfSafetyConvictions() {
        this.numberOfSafetyConvictions = this.noOfConvictionsRelatedToHealthyAndSafety;
    }

    calNumberOfSuspensionNotices() {
        this.numberOfSuspensionNotices = this.suspensionNoticesDueToSafetyIssues
    }

    calActivenessInParticipatingInSiteSafetyPromotionCampaignsAndAwards() {
        this.activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards = this.numberAndTypeOfAsWellAsAchivementResultedFromParticipation
    }

}

let Gammon = new SuspensionNoticesDueToSafetyIssues({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfConvictionsRelatedToHealthyAndSafety: 1,
    suspensionNoticesDueToSafetyIssues: 0,
    numberAndTypeOfAsWellAsAchivementResultedFromParticipation: '3 achievements from XXX participation',
 
    numberOfSafetyConvictions: 0,
    numberOfSafetyConvictionsNormalDistribution: 0,
    numberOfSafetyConvictionsScore: 0,
    numberOfSuspensionNotices: 0,
    numberOfSuspensionNoticesNormalDistribution: 0,
    numberOfSuspensionNoticesScore: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore: 0,
});

let HipHang = new SuspensionNoticesDueToSafetyIssues({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfConvictionsRelatedToHealthyAndSafety: 2,
    suspensionNoticesDueToSafetyIssues: 0,
    numberAndTypeOfAsWellAsAchivementResultedFromParticipation: '2 achivements',

    numberOfSafetyConvictions: 0,
    numberOfSafetyConvictionsNormalDistribution: 0,
    numberOfSafetyConvictionsScore: 0,
    numberOfSuspensionNotices: 0,
    numberOfSuspensionNoticesNormalDistribution: 0,
    numberOfSuspensionNoticesScore: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore: 0,
});

let DDL = new SuspensionNoticesDueToSafetyIssues({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfConvictionsRelatedToHealthyAndSafety: 0,
    suspensionNoticesDueToSafetyIssues: 1,
    numberAndTypeOfAsWellAsAchivementResultedFromParticipation: 'no',

    numberOfSafetyConvictions: 0,
    numberOfSafetyConvictionsNormalDistribution: 0,
    numberOfSafetyConvictionsScore: 0,
    numberOfSuspensionNotices: 0,
    numberOfSuspensionNoticesNormalDistribution: 0,
    numberOfSuspensionNoticesScore: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore: 0,
});

let TGSam = new SuspensionNoticesDueToSafetyIssues({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfConvictionsRelatedToHealthyAndSafety: 1,
    suspensionNoticesDueToSafetyIssues: 0,
    numberAndTypeOfAsWellAsAchivementResultedFromParticipation: 'no',

    numberOfSafetyConvictions: 0,
    numberOfSafetyConvictionsNormalDistribution: 0,
    numberOfSafetyConvictionsScore: 0,
    numberOfSuspensionNotices: 0,
    numberOfSuspensionNoticesNormalDistribution: 0,
    numberOfSuspensionNoticesScore: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore: 0,
})

let PaulX = new SuspensionNoticesDueToSafetyIssues({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfConvictionsRelatedToHealthyAndSafety: 1,
    suspensionNoticesDueToSafetyIssues: 0,
    numberAndTypeOfAsWellAsAchivementResultedFromParticipation: 'no',

    numberOfSafetyConvictions: 0,
    numberOfSafetyConvictionsNormalDistribution: 0,
    numberOfSafetyConvictionsScore: 0,
    numberOfSuspensionNotices: 0,
    numberOfSuspensionNoticesNormalDistribution: 0,
    numberOfSuspensionNoticesScore: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwards: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsNormalDistribution: 0,
    activenessInParticipatingInSiteSafetyPromotionCampaignAndAwardsScore: 0,
});

let arr_object = [Gammon, HipHang, DDL, TGSam, PaulX]

