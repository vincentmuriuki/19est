import data from './data';
import calInfectionProjections from './infectionProjections';
import calculateNoOfDays from './calculateDays';

let factor;
let period;
const noOfDays = calculateNoOfDays(data.periodType, data.timeToElapse);
const currentlyInfected = data.reportedCases * 10;
const infectionsByRequestedTime = calInfectionProjections(
  currentlyInfected,
  noOfDays
);
const casesByRequestedTime = Math.ceil(infectionsByRequestedTime * 0.15);
const impactInfectionsByRequestedTime = currentlyInfected * 2 ** factor;
const hospitalBedsByRequestedTime = Math.ceil(
  data.totalHospitalBeds - casesByRequestedTime
);
const dollarsInFlight = Math.floor((impactInfectionsByRequestedTime
  * data.region.avgDailyIncomePopulation
  * data.region.avgDailyIncomeInUSD) / period);

const impact = {
  currentlyInfected,
  infectionsByRequestedTime,
  casesByRequestedTime,
  hospitalBedsByRequestedTime,
  casesForICUByRequestedTime: 0.05 * infectionsByRequestedTime,
  casesForVentilatorsByRequestedTime: 0.02 * infectionsByRequestedTime,
  dollarsInFlight
};

export default impact;
