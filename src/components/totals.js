import React from 'react';
import TotalStyle from '../styles/totalStyle';

import useOverview from '../hooks/useOverview';
import IconSVG from './iconSVG';
import Loader from './loader';
import useDeathNum from '../hooks/useDeathNum';
import { animated } from 'react-spring';

const NumBoard = (title, bgColor, fillColor, value, percent, casesDiff) => {
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
          {percent ? (
            <span>
              Increased by <span className="percent">{percent}%</span>
            </span>
          ) : (
            'please stay home'
          )}
        </p>
      </div>
    </div>
  );
};

export default function Totals() {
  const { loading, data } = useOverview();
  const [deatNum] = useDeathNum();

  const casesDiff = data.latesCases - data.secondLast;
  const percent = ((Math.abs(casesDiff) / data.latesCases) * 100).toFixed(2);

  return (
    <TotalStyle>
      {loading ? (
        <Loader />
      ) : (
        NumBoard(
          'Confirmed Cases',
          'rgba(248, 181, 41, .1)',
          'rgba(248, 181, 41, .85)',
          data.latesCases,
          percent,
          casesDiff
        )
      )}
      <hr />
      {loading ? (
        <Loader />
      ) : (
        NumBoard(
          'Confirmed Cases',
          'rgba(255, 128, 139, 0.1)',
          'rgba(255, 128, 139, 0.85)',
          deatNum,
          0,
          10
        )
      )}
    </TotalStyle>
  );
}
