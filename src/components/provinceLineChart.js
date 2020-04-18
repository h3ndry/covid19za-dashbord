import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import useProvinceData from '../hooks/useProvincialData';

export default function ProvinceLineChart() {
  const { dates, UNKN, MP, WC, NW, NC, KZN, LP, GP, FS } = useProvinceData();

  // [
  //   'rgba(255, 99, 132, 1)',
  //   'rgba(54, 162, 235, 1)',
  //   'rgba(255, 206, 86, 1)',
  //   'rgba(75, 192, 192, 1)',
  //   'rgba(153, 102, 255, 1)',
  //   'rgba(255, 159, 64, 1)',
  // ],

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;
  const chartData = {
    labels: dates,

    datasets: [
      {
        label: 'Unknown',
        data: UNKN,
      },
      {
        label: 'Mpumalanga',
        data: MP,
      },
      {
        label: 'Westen Cape',
        data: WC,
      },
      {
        label: 'North West',
        data: NW,
      },
      {
        label: 'Northen Cape',
        data: NC,
      },
      {
        label: 'Kwazulu-Natal',
        data: KZN,
      },
      {
        label: 'Limpompo',
        data: LP,
      },
      {
        label: 'Guateng',
        data: GP,
      },
      {
        label: 'FreeState',
        data: FS,
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
    <div className="prov-linechart">
      <Line data={chartData} options={chartOption} />
    </div>
  );
}
