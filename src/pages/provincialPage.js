import React from 'react';
import LineChart from '../components/provincialLineChart';
import ProvStyle from '../styles/provicialStyle';
import BarChart from '../components/provincialBarCharts';
export default function Provicila() {
  return (
    <ProvStyle>
      <div className="chart">
        <LineChart />
      </div>
      <div className="chart">
        <BarChart />
      </div>
    </ProvStyle>
  );
}
