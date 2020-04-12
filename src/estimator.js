// import impactCalculator from './calculations';

import impactCalculator from './calculations';

// const covid19ImpactEstimator = (data) => ({
//   data,
//   impact: impactCalculator({ ...data }, 10),
//   severeImpact: impactCalculator({ ...data }, 50)
// });

// export default covid19ImpactEstimator;

const covid19ImpactEstimator = (data) => ({
  data,
  impact: impactCalculator({ ...data }, 10),
  severeImpact: impactCalculator({ ...data }, 50)
});

export default covid19ImpactEstimator;
