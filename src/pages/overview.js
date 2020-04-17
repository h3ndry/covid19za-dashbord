import React from 'react';

import useFetchData from '../hooks/useFetchData';
import temp_data from '../data/cumulative';
import ConfirmedCaseChart from '../components/overviewLineChart';

import OverviewStyle from '../styles/overview';

export default function Overview() {
  const { latestCaseNum, secLastCaseNum, getPecent } = useFetchData(temp_data);

  const diff = getPecent(latestCaseNum, secLastCaseNum);

  return (
    <OverviewStyle>
      <h1>Over view page</h1>

      <div className="">
        <p>{latestCaseNum}</p>
        <p>increased by {diff}</p>
      </div>
      <div className="confirmed-chart">
        <ConfirmedCaseChart />
      </div>
    </OverviewStyle>
  );
}
