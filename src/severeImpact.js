import data from './data';
import availableNoOfBeds from './availableBeds';

let value;
let period;

const severeCurrentlyInfected = data.reportedCases * 50;
const severeInfectionsByRequestedTime = severeCurrentlyInfected * 2 ** value;
const severeCasesByRequestedTime = Math.ceil(
  severeInfectionsByRequestedTime * 0.15
);
const dollarsInFlight = Math.floor((severeInfectionsByRequestedTime
  * data.region.avgDailyIncomePopulation
  * data.region.avgDailyIncomeInUSD) / period);
const casesForVentilatorsByRequestedTime = Math.floor(severeInfectionsByRequestedTime
                                              * 0.02);

const severeImpact = {
  severeCurrentlyInfected,
  severeInfectionsByRequestedTime,
  severeCasesByRequestedTime,
  severeImpactHospitalBedsByRequestedTime: availableNoOfBeds(
    data.totalHospitalBeds,
    severeCasesByRequestedTime
  ),
  casesForICUByRequestedTime: Math.floor(
    severeInfectionsByRequestedTime * 0.05
  ),
  casesForVentilatorsByRequestedTime,
  dollarsInFlight
};

export default severeImpact;
