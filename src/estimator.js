const covid19ImpactEstimator = (data) =>{    
    const input = data;
    return {
        data: input,
        impact:{
            currentlyInfected: reportedCases * 10,
            infectionsByRequestedTime: impact.currentlyInfected * 1024
        },
        severeImpact:{
            currentlyInfected: reportedCases * 50,
            infectionsByRequestedTime: severeImpact.currentlyInfected * 1024
        }
    };
}
export default covid19ImpactEstimator;
