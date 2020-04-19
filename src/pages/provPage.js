import React from 'react';
import LineChart from '../components/charts/provLine';
import ProvStyle from '../styles/provPageStyle';
import BarChart from '../components/provincialBarCharts';

export default function Provicila() {
  return (
    <ProvStyle>
      <div className="line-chart">
        <LineChart />
      </div>

      <div className="chart">
        <BarChart />
      </div>
    </ProvStyle>
  );
}
