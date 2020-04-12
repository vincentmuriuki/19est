const calInfectionProjections = (currentlyInfected, days) => {
  const projection = currentlyInfected * 2 ** Math.trunc(days / 3);
  return projection;
};

export default calInfectionProjections;
