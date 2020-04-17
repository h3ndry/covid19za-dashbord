import React from 'react';
import TotalStyle from '../styles/totalStyle';

import useFetchData from '../hooks/useFetchData';
import temp_data from '../data/cumulative';
import IconSVG from './iconSVG';

export default function Totals() {
  const { deadNum, latestCaseNum, secLastCaseNum, getPecent } = useFetchData(
    temp_data
  );

  const diff = getPecent(latestCaseNum, secLastCaseNum);

  return (
    <TotalStyle>
      <div className="container">
        <h2>Confirmed Cases</h2>
        <div className="text">
          <IconSVG
            bgColor="rgba(248, 181, 41, .1)"
            fillColor="rgba(248, 181, 41, .85)"
          />
          <p>
            <span className="number"> {latestCaseNum}</span>
            <br />
            Increased by <span className="percent">{diff}%</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="container">
        <h2>Confirmed Death</h2>
        <div className="text">
          <IconSVG
            bgColor="rgba(255, 128, 139, 0.1)"
            fillColor="rgba(255, 128, 139, 0.85)"
          />
          <p>
            <span className="number"> {deadNum}</span>
            <br />
            Increased by <span className="percent">{diff}%</span>
          </p>
        </div>
      </div>
    </TotalStyle>
  );
}
