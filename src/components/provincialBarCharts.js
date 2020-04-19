import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import useProvData from '../hooks/useProvData';

export default function PovincialBarCharts() {
  const { data } = useProvData();

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;

  const chartData = {
    labels: ['EC', 'FS', 'GP', 'KZN', 'LP', 'NC', 'NW', 'MP', 'WC', 'UNKNOW'],

    datasets: [
      {
        data: data.MP,
        borderColor: ['rgba(255, 255, 102, .4)'],
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
        // pointBackgroundColor: ['rgba(248, 181, 41, 0.9)'],
        // pointBorderColor: ['rgba(248, 181, 41, 0.9)'],
        // borderColor: 'rgba(75, 192, 192, .4)',
      },
    ],
  };

  const chartOption = {
    title: {
      display: true,
      text: 'Line Chart',
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
    <div>
      <Bar data={chartData} options={chartOption} />
    </div>
  );
}
