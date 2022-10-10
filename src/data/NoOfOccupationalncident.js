class NoOfOccupationalIncident {
    constructor({
        companyName,
        companySize,
        yearOfRecord,
        projectType,
        grossValueOfConstructionWork,
        noOfIndustrialAccidents,
        noOfOccupationalIncident,
        numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed,
        employeeSize,
        accidentRate,
        accidentRateNormalDistribution,
        accidentRateScore,
        incidentRate,
        incidentRateNormalDistribution,
        incidentRateScore,
        useOfAdvanceHealthAndSafetyTechnologies,
        useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution,
        useOfAdvanceHealthAndSafetyTechnologiesScore,
    }) {
        this.companyName = companyName;
        this.companySize = companySize;
        this.yearOfRecord = yearOfRecord;
        this.projectType = projectType;
        this.grossValueOfConstructionWork = grossValueOfConstructionWork;
        this.noOfIndustrialAccidents = noOfIndustrialAccidents,
            this.noOfOccupationalIncident = noOfOccupationalIncident,
            this.numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed = numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed,
            this.employeeSize = employeeSize;
        this.accidentRate = accidentRate;
        this.accidentRateNormalDistribution = accidentRateNormalDistribution;
        this.accidentRateScore = accidentRateScore;
        this.incidentRate = incidentRate;
        this.incidentRateNormalDistribution = incidentRateNormalDistribution;
        this.incidentRateScore = incidentRateScore;
        this.useOfAdvanceHealthAndSafetyTechnologies = useOfAdvanceHealthAndSafetyTechnologies;
        this.useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution = useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution;
        this.useOfAdvanceHealthAndSafetyTechnologiesScore = useOfAdvanceHealthAndSafetyTechnologiesScore;
    }

    calAccidentRate() {
        this.accidentRate = this.noOfIndustrialAccidents * 1000 / this.employeeSize;
    }

    calIncidentRate() {
        this.incidentRate = this.noOfOccupationalIncident * 1000 / this.employeeSize;
    }

    calUseOfAdvanceHealthAndSafetyTechnologies() {
        this.useOfAdvanceHealthAndSafetyTechnologies = this.numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed;
    }

}

let Gammon = new NoOfOccupationalIncident({
    companyName: 'Gammon',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 500000000,
    noOfIndustrialAccidents: 5,
    noOfOccupationalIncident: 10,
    numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: 2,
    employeeSize: 100,
    accidentRate: 0,
    accidentRateNormalDistribution: 0,
    accidentRateScore: 0,
    incidentRate: 0,
    incidentRateNormalDistribution: 0,
    incidentRateScore: 0,
    useOfAdvanceHealthAndSafetyTechnologies: 0,
    useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution: 0,
    useOfAdvanceHealthAndSafetyTechnologiesScore: 0,

});

let HipHang = new NoOfOccupationalIncident({
    companyName: 'Hip Hang',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 300000000,
    noOfIndustrialAccidents: 3,
    noOfOccupationalIncident: 9,
    numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: 1,
    employeeSize: 1200,
    accidentRate: 0,
    accidentRateNormalDistribution: 0,
    accidentRateScore: 0,
    incidentRate: 0,
    incidentRateNormalDistribution: 0,
    incidentRateScore: 0,
    useOfAdvanceHealthAndSafetyTechnologies: 0,
    useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution: 0,
    useOfAdvanceHealthAndSafetyTechnologiesScore: 0,
});

let DDL = new NoOfOccupationalIncident({
    companyName: 'DDL',
    companySize: 'GroupC',
    yearOfRecord: 2022,
    projectType: 'Building',
    grossValueOfConstructionWork: 20000000,
    noOfIndustrialAccidents: 4,
    noOfOccupationalIncident: 9,
    numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: 5,
    employeeSize: 153,
    accidentRate: 0,
    accidentRateNormalDistribution: 0,
    accidentRateScore: 0,
    incidentRate: 0,
    incidentRateNormalDistribution: 0,
    incidentRateScore: 0,
    useOfAdvanceHealthAndSafetyTechnologies: 0,
    useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution: 0,
    useOfAdvanceHealthAndSafetyTechnologiesScore: 0,
});

let TGSam = new NoOfOccupationalIncident({
    companyName: 'TG Sam',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfIndustrialAccidents: 6,
    noOfOccupationalIncident: 7,
    numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: 3,
    employeeSize: 1126,
    accidentRate: 0,
    accidentRateNormalDistribution: 0,
    accidentRateScore: 0,
    incidentRate: 0,
    incidentRateNormalDistribution: 0,
    incidentRateScore: 0,
    useOfAdvanceHealthAndSafetyTechnologies: 0,
    useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution: 0,
    useOfAdvanceHealthAndSafetyTechnologiesScore: 0,
})

let PaulX = new NoOfOccupationalIncident({
    companyName: 'Paul X',
    companySize: 'GroupA',
    yearOfRecord: 2022,
    projectType: 'Civil',
    grossValueOfConstructionWork: 560000000,
    noOfIndustrialAccidents: 2,
    noOfOccupationalIncident: 14,
    numberTypeAndMagitudeOfAdvanceHealthAndSafetyTechnologiesUsed: 4,
    employeeSize: 1052,
    accidentRate: 0,
    accidentRateNormalDistribution: 0,
    accidentRateScore: 0,
    incidentRate: 0,
    incidentRateNormalDistribution: 0,
    incidentRateScore: 0,
    useOfAdvanceHealthAndSafetyTechnologies: 0,
    useOfAdvanceHealthAndSafetyTechnologiesNormalDistribution: 0,
    useOfAdvanceHealthAndSafetyTechnologiesScore: 0,
});

let arrobject = [Gammon, HipHang, DDL, TGSam, PaulX]

