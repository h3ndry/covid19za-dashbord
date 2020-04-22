import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import useProvData from '../../hooks/useProvData';
import ChartBox from './chartBox';
import Loader from '../loader';

export default function PovincialBarCharts() {
  const { loading, latesProv } = useProvData();

  console.log(latesProv);

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;

  const chartData = {
    display: true,
    labels: ['EC', 'FS', 'GP', 'KZN', 'LP', 'MP', 'NC', 'NW', 'WC', 'UNKN'],

    datasets: [
      {
        data: latesProv, //[56, 69, 45, 89, 56, 78, 32, 67, 23, 34],
        borderColor: 'rgba(42, 45, 50, 1)',
        backgroundColor: [
          'rgba(255, 255, 102, 0.4)',
          'rgba(255, 153, 102, 0.4)',
          'rgba(255, 0, 255, 0.4)',
          'rgba(102, 255, 153, 0.4)',
          'rgba(100, 51, 255, 0.4)',
          'rgba(255, 51, 51, 0.4)',
          'rgba(255, 0, 102, 0.4)',
          'rgba(255, 102, 204, 0.4)',
          'rgba(102, 255, 255, 0.4)',
          'rgba(102, 255, 0, 0.4)',
        ],
      },
    ],
  };

  const chartOption = {
    title: {
      display: true,
      text: 'Cases Per Province',
    },
  };

  return (
    <ChartBox>
      {loading ? (
        <Loader />
      ) : (
        <Doughnut data={chartData} options={chartOption} />
      )}
    </ChartBox>
  );
}
