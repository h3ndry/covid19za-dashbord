import React from 'react';

import useFetchData from '../hooks/useFetchData';
import temp_data from '../data/cumulative';
import ConfirmedCaseChart from '../components/overviewLineChart';

import OverviewStyle from '../styles/overview';
import Totals from '../components/totals';

export default function Overview() {
  return (
    <OverviewStyle>
      <Totals />
      <div className="confirmed-chart">
        <ConfirmedCaseChart />
      </div>
    </OverviewStyle>
  );
}
