const severeCaseCalMoneyLost = (
  severeInfectionsByRequestedTime,
  percentageIncome,
  avgIncome,
  days
) => {
  const estimatedLoss = severeInfectionsByRequestedTime * percentageIncome * avgIncome * days;
  return Number.parseFloat(estimatedLoss).toFixed(2);
};

export default severeCaseCalMoneyLost;
