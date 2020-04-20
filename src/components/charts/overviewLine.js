import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

import useOverview from '../../hooks/useOverview';
import ChartBox from './chartBox';
import Loader from '../loader';

export default function Chart() {
  const { loading, data } = useOverview();

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Confirmed Cases of covid-19',
        data: data.cases,
        fill: false,
        pointBorderColor: ['rgba(248, 181, 41, 0.9)'],
        borderColor: 'rgba(255, 51, 51, 0.4)',
      },
    ],
  };

  const chartOption = {
    title: {
      display: true,
      text: 'South Africa',
    },

    scales: {
      yAxes: [
        {
          ticks: {},

          gridLines: {
            color: 'rgba(255, 255, 255, .02)',
          },
        },
      ],

      xAxes: [
        {
          gridLines: {
            color: 'rgba(255, 255, 255, .02)',
          },
        },
      ],
    },
  };

  return (
    <ChartBox>
      {loading ? <Loader /> : <Line data={chartData} options={chartOption} />}
    </ChartBox>
  );
}
