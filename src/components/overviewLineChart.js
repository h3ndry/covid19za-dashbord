import React from 'react';
import { Line } from 'react-chartjs-2';

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

  const chartData = {
    labels: getDates(data),
    datasets: [
      {
        label: 'Confirmed Cases of covid-19',
        data: getCaseNumbers(data),
        backgroundColor: ['rgba(248, 181, 41, .9)'],
        pointBackgroundColor: ['rgba(248, 181, 41, 0.9)'],
        pointBorderColor: ['rgba(248, 181, 41, 0.9)'],
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
        },
      ],
    },
  };

  return <Line data={chartData} options={chartOption} />;
}
