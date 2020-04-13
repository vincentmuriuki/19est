import { PERIOD } from 'on-covid-19';

const calculateNoOfDays = (periodType, value) => {
  switch (periodType) {
    case PERIOD.DAYS:
      return value * 30;

    case PERIOD.WEEKS:
      return value * 7;

    default:
      return value;
  }
};

export default calculateNoOfDays;
