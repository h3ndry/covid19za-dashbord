import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import useProvinceData from '../hooks/useProvincialData';

export default function ProvinceLineChart() {
  const { dates, UNKN, MP, WC, NW, NC, KZN, LP, GP, FS } = useProvinceData();

  defaults.global.defaultFontColor = 'rgba(255, 255, 255, .7)';
  defaults.line.spanGaps = true;
  const chartData = {
    labels: dates,

    datasets: [
      {
        label: 'Unknown',
        data: UNKN,
        fill: false,
        borderColor: 'rgba(255, 255, 102, .4)',
      },
      {
        label: 'Mpumalanga',
        data: MP,
        fill: false,
        borderColor: 'rgba(255, 153, 102, .4)',
      },
      {
        label: 'Westen Cape',
        data: WC,
        fill: false,
        borderColor: 'rgba(255, 0, 255, .4)',
      },
      {
        label: 'North West',
        data: NW,
        fill: false,
        borderColor: 'rgba(102, 255, 153, .4)',
      },
      {
        label: 'Northen Cape',
        data: NC,
        fill: false,
        borderColor: 'rgba(100, 51, 255, .4)',
      },
      {
        label: 'Kwazulu-Natal',
        data: KZN,
        fill: false,
        borderColor: 'rgba(255, 51, 51, .4)',
      },
      {
        label: 'Limpompo',
        data: LP,
        fill: false,
        borderColor: 'rgba(255, 0, 102, .4)',
      },
      {
        label: 'Guateng',
        data: GP,
        fill: false,
        borderColor: 'rgba(255, 102, 204, .4)',
      },
      {
        label: 'FreeState',
        data: FS,
        fill: false,
        borderColor: 'rgba(102, 255, 255, .4)',
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
