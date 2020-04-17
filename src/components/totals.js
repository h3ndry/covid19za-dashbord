import React from 'react';
import TotalStyle from '../styles/totalStyle';

import useFetchData from '../hooks/useFetchData';
import temp_data from '../data/cumulative';

export default function Totals() {
  const { deadNum, latestCaseNum, secLastCaseNum, getPecent } = useFetchData(
    temp_data
  );

  const diff = getPecent(latestCaseNum, secLastCaseNum);

  return (
    <TotalStyle>
      <div className="confirmed-cases">
        <h2>{latestCaseNum}</h2>
        <p className="tota-number"></p>
        <p>
          Increased by: <span>{diff}</span>{' '}
        </p>
      </div>
      <span className="line"></span>
      <div className="confirmed-death">
        <h2>{deadNum}</h2>
        <p className="tota-number"></p>
        <p>
          Increased by: <span>..</span>{' '}
        </p>
      </div>
    </TotalStyle>
  );
}
