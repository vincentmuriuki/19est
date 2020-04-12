import calculateNoOfDays from './calculateDays';
import availableNoOfBeds from './availableBeds';
import calMoneyLost from './calMoneyLost';
import calInfectionProjections from './infectionProjections';

const impactCalculator = ({
  noOfReportedCases,
  totalHospitalBeds,
  periodType,
  timeToElapse,
  region
}) => {
  const noOfDays = calculateNoOfDays(periodType, timeToElapse);
  const currentlyInfected = noOfReportedCases * 10;
  const infectionsByRequestedTime = calInfectionProjections(
    currentlyInfected,
    noOfDays
  );
  const severeCasesByRequestedTime = 0.15 * infectionsByRequestedTime;

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime: availableNoOfBeds(
      totalHospitalBeds,
      severeCasesByRequestedTime
    ),
    casesForICUByRequestedTime: 0.05 * infectionsByRequestedTime,
    casesForVentilatorsByRequestedTime: 0.02 * infectionsByRequestedTime,
    dollarsInFlight: calMoneyLost(
      infectionsByRequestedTime,
      region.avgDailyIncomePopulation,
      region.avgDailyIncomeInUSD,
      noOfDays
    )
  };
};

export default impactCalculator;
