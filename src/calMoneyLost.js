const calMoneyLost = (
  infectionsByRequestedTime,
  percentageIncome,
  avgIncome,
  days
) => {
  const estimatedLoss = infectionsByRequestedTime * percentageIncome * avgIncome * days;
  return Number.parseFloat(estimatedLoss).toFixed(2);
};

export default calMoneyLost;
