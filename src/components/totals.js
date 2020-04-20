import React from 'react';
import TotalStyle from '../styles/totalStyle';

import useOverview from '../hooks/useOverview';
import IconSVG from './iconSVG';
import Loader from './loader';

const numBoard = (title, bgColor, fillColor, value, percent, casesDiff) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="text">
        <IconSVG
          bgColor={bgColor}
          fillColor={fillColor}
          casesDiff={casesDiff}
        />
        <p>
          <span className="number">{value}</span>
          <br />
          Increased by <span className="percent">{percent}%</span>
        </p>
      </div>
    </div>
  );
};

export default function Totals() {
  const { loading, data } = useOverview();

  const casesDiff = data.latesCases - data.secondLast;
  const percent = ((Math.abs(casesDiff) / data.latesCases) * 100).toFixed(2);

  return (
    <TotalStyle>
      {loading ? (
        <Loader />
      ) : (
        numBoard(
          'Confirmed Cases',
          'rgba(248, 181, 41, .1)',
          'rgba(248, 181, 41, .85)',
          data.latesCases,
          percent,
          casesDiff
        )
      )}
      <hr />
      {numBoard(
        'Confirmed Cases',
        'rgba(255, 128, 139, 0.1)',
        'rgba(255, 128, 139, 0.85)',
        56,
        33,
        -10
      )}
    </TotalStyle>
  );
}
