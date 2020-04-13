const availableNoOfBeds = (totalHospitalBeds, severeCasesByRequestedTime) => {
  const occupied = 0.65 * totalHospitalBeds;
  const available = totalHospitalBeds - occupied;
  return available - severeCasesByRequestedTime;
};

export default availableNoOfBeds;
