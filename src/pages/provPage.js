import React from 'react';
import LineChart from '../components/charts/provLine';
import ProvStyle from '../styles/provPageStyle';
import PieChart from '../components/charts/provPie';

export default function Provicila() {
  return (
    <ProvStyle>
      <div className="line-chart">
        <LineChart />
      </div>

      <div className="pie-chart">
        <PieChart />
      </div>
    </ProvStyle>
  );
}
