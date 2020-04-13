import data from './data';
import availableNoOfBeds from './availableBeds';
import severeCaseCalMoneyLost from './severeCaseCalMoneyLost';
import calculateNoOfDays from './calculateDays';

let value;

const noOfDays = calculateNoOfDays(data.periodType, data.timeToElapse);
const severeCurrentlyInfected = data.reportedCases * 50;
const severeInfectionsByRequestedTime = severeCurrentlyInfected * 2 ** value;
const severeCasesByRequestedTime = Math.ceil(
  severeInfectionsByRequestedTime * 0.15
);
const dollarsInFlight = severeCaseCalMoneyLost(
  severeInfectionsByRequestedTime,
  data.region.avgDailyIncomePopulation,
  data.region.avgDailyIncomeInUSD,
  noOfDays
);
const casesForVentilatorsByRequestedTime = Math.floor(
  severeInfectionsByRequestedTime * 0.02
);

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
