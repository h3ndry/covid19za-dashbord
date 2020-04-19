import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import useProvData from '../../hooks/useProvData';
import Loader from '../loader';
import ChartBox from './chartBox';

export default function ProvinceLineChart() {
  const { loading, data } = useProvData();

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Eastern Cape',
        data: data.EC,
        fill: false,
        borderColor: 'rgba(255, 255, 102, 0.4)',
      },
      {
        label: 'Free State',
        data: data.FC,
        fill: false,
        borderColor: 'rgba(255, 153, 102, 0.4)',
      },
      {
        label: 'Gauteng',
        data: data.GP,
        fill: false,
        borderColor: 'rgba(255, 0, 255, 0.4)',
      },
      {
        label: 'Kwazulu Natal',
        data: data.KZN,
        fill: false,
        borderColor: 'rgba(102, 255, 153, 0.4)',
      },
      {
        label: 'Limpopo',
        data: data.LP,
        fill: false,
        borderColor: 'rgba(100, 51, 255, 0.4)',
      },
      {
        label: 'Mpumlanga',
        data: data.MP,
        fill: false,
        borderColor: 'rgba(255, 51, 51, 0.4)',
      },
      {
        label: 'Northern Cape',
        data: data.NC,
        fill: false,
        borderColor: 'rgba(255, 102, 204, 0.4)',
      },
      {
        label: 'North_West',
        data: data.NW,
        fill: false,
        borderColor: 'rgba(255, 255, 102, .4)',
      },

      {
        label: 'Western Cape',
        data: data.WC,
        fill: false,
        borderColor: 'rgba(102, 255, 255, 0.4)',
      },
      {
        label: 'Unknown',
        data: data.UNKN,
        fill: false,
        borderColor: 'rgba(102, 255, 0, 0.4)',
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
            min: 0,
            stepSize: 50,
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

  return (
    <ChartBox>
      {loading ? <Loader /> : <Line data={chartData} options={chartOption} />}
    </ChartBox>
  );
}
