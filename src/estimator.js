import impact from './impact';
import severeImpact from './severeImpact';

const covid19ImpactEstimator = (data) => ({
  data,
  impact,
  severeImpact
});

export default covid19ImpactEstimator;
