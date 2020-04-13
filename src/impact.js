import data from './data';
// import calInfectionProjections from './infectionProjections';
import calculateNoOfDays from './calculateDays';
// import calMoneyLost from './calMoneyLost';

const noOfDays = calculateNoOfDays(data.periodType, data.timeToElapse);
const currentlyInfected = data.reportedCases * 10;
const infectionsByRequestedTime = currentlyInfected * 2 ** Math.trunc(noOfDays / 3);

// const casesByRequestedTime = Math.ceil(infectionsByRequestedTime * 0.15);
// const hospitalBedsByRequestedTime = Math.ceil(
//   data.totalHospitalBeds - casesByRequestedTime
// );
// const dollarsInFlight = calMoneyLost(
//   infectionsByRequestedTime,
//   data.region.avgDailyIncomePopulation,
//   data.region.avgDailyIncomeInUSD,
//   noOfDays
// );

const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

// const impact = {
//   currentlyInfected,
//   infectionsByRequestedTime,
//   casesByRequestedTime,
//   hospitalBedsByRequestedTime,
//   casesForICUByRequestedTime: 0.05 * infectionsByRequestedTime,
//   casesForVentilatorsByRequestedTime: 0.02 * infectionsByRequestedTime,
//   dollarsInFlight
// };

export default impact;
