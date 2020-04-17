import React from 'react';
import { Line, defaults } from 'react-chartjs-2';

// defaults.global.animation = false;

import useFetchData from '../hooks/useFetchData';
import temp_data from '../data/cumulative';
import deathData from '../data/deaths';

export default function Chart() {
  const { data } = useFetchData(temp_data, deathData);

  function getDates(data) {
    return data.map((obj) => {
      return obj.date;
    });
  }

  function getCaseNumbers(data) {
    return data.map((obj) => {
      return obj.total;
    });
  }

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;
  const chartData = {
    labels: getDates(data),
    datasets: [
      {
        label: 'Confirmed Cases of covid-19',
        data: getCaseNumbers(data),
        backgroundColor: ['rgba(248, 181, 41, 0.3)'],
        pointBackgroundColor: ['rgba(248, 181, 41, 0.9)'],
        pointBorderColor: ['rgba(248, 181, 41, 0.9)'],
        borderColor: 'rgba(75, 192, 192, .4)',
        // [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
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
          ticks: {
            max: 3000,
          },

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

  return <Line data={chartData} options={chartOption} />;
}
